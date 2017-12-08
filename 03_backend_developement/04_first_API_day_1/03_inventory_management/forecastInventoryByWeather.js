const request = require("request");

const API_KEY = process.env.GOOGLE_MAPS_API;

const stores = [
  "Decat Bordeaux Ste Catherine (Decathlon), 130 Rue Sainte-Catherine, 33000 Bordeaux",
  "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille",
  "Decathlon Strasbourg Geispolsheim, 5 Rue du Fort, 67118 Geispolsheim",
  "Decathlon Wagram Paris, 26 Avenue de Wagram, 75008 Paris",
  "Decathlon Lorient, Rue Colonel le Barillec, 56100 Lorient",
  "Decathlon, 4 Boulevard de Mons, 59650 Villeneuve-d'Ascq"
];

stores.map(adresstocoordinates);

function adresstocoordinates(item) {
  console.log(item);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${item},FR&key=${API_KEY}`,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    console.log(json.results.map(buildmyjson));
  }
  );
}

function buildmyjson(item) {
  return {
    adress: item.formatted_address,
    lat: item.geometry.location.lat,
    long: item.geometry.location.lng
  };
}



adresstocoordinates(stores);
