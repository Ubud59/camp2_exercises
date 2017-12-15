const request = require("request");
//const PG = require("pg");
const { Pool } = require("pg");
//const client = new PG.Client();
//client.connect();
const pool = new Pool();

// appel de l'API qui récupère les produits
function getBrands() {
  return request({
    url: "https://decath-product-api.herokuapp.com/brands",
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result).map(insertBrands);
    //console.log(json);
    return json;
  });
}

// insert les données produits à partir d'un JSON
function insertBrands(brand) {
  pool.query(
    "INSERT INTO brands (id, title) VALUES ($1::uuid,$2::text)",
    [brand.id,
      brand.title],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log("import succesfull");
      }
      //client.end();
    }
  );
}

getBrands();
// getProducts().map(insertProducts);
