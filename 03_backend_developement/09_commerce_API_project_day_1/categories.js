const request = require("request");
//const PG = require("pg");
const { Pool } = require("pg");
//const client = new PG.Client();
//client.connect();
const pool = new Pool();

// appel de l'API qui récupère les produits
function getCategories() {
  return request({
    url: "https://decath-product-api.herokuapp.com/categories",
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result).map(insertCategories);
    //console.log(json);
    return json;
  });
}

// insert les données produits à partir d'un JSON
function insertCategories(category) {
  pool.query(
    "INSERT INTO categories (id, decathlon_id, label) VALUES ($1::uuid,$2::int, $3::text)",
    [category.id,
      category.decathlon_id,
      category.label],
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

getCategories();
