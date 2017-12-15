const request = require("request");
//const PG = require("pg");
const { Pool } = require("pg");
//const client = new PG.Client();
//client.connect();
const pool = new Pool();
pool.connect();

// appel de l'API qui récupère les produits
function getProducts() {
  return request({
    url: "https://decath-product-api.herokuapp.com/products",
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result).map(insertProducts);
    return json;
  });
}

// insert les données produits à partir d'un JSON
function insertProducts(product) {
  //console.log("product: ", product);
  pool.query(
    "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1::uuid,$2::int,$3::text,$4::text,$5::uuid,$6::numeric,$7::numeric,$8::numeric,$9::numeric,$10::text,$11::numeric)",
    [product.id,
      product.decathlon_id,
      product.title,
      product.description,
      product.brand_id,
      product.min_price,
      product.max_price,
      product.crossed_price,
      product.percent_reduction,
      product.image_path,
      product.rating],
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

getProducts();
// getProducts().map(insertProducts);
