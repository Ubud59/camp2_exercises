const request = require("request");
//const PG = require("pg");
const { Pool } = require("pg");
//const client = new PG.Client();
//client.connect();
const pool = new Pool();
let cpt = 0;

// appel de l'API qui récupère les produits
function getProductsByCategories(id_category) {
  //console.log("id_category", id_category);
  return request({
    url: `https://decath-product-api.herokuapp.com/categories/${id_category.id}/products`,
    method: "GET"
  }, function(error, response, result) {
    //console.log("error:", error);
    const json = JSON.parse(result).map( function (productbycategory)
    { cpt ++;
      console.log("CPT : ", cpt);
      //console.log("ID PRODUCT : ", productbycategory.id);
      //console.log("ID CATEGORY : ", id_category.id);
      if (cpt === 2000 || cpt === 4000 || cpt === 6000 || cpt === 8000 || cpt === 10000 ||
          cpt === 12000 || cpt === 14000 || cpt === 16000 || cpt === 18000 || cpt === 20000 ||
          cpt === 22000 || cpt === 24000 || cpt === 26000 || cpt === 28000 || cpt === 30000 ||
          cpt === 32000 || cpt === 34000 || cpt === 36000 || cpt === 38000 || cpt === 40000 ||
          cpt === 42000 || cpt === 44000 || cpt === 46000) { return sleep(1); }
      else {
        insertProductsByCategories(productbycategory, id_category);
        return true;
      }
    });
    //console.log("json:",json);
    return json;
  });
}

// insert les données produits à partir d'un JSON
function insertProductsByCategories(productbycategory, id_category) {
  pool.query(
    "INSERT INTO productsbycategories (id_product, id_category) VALUES ($1::uuid,$2::uuid)",
    [productbycategory.id,
      id_category.id],
    function(error, result) {
      if (error) {
        console.warn("error:", error);
      } else {
        console.log("import succesfull");
      }
      //client.end();
    }
  );
}

function sleep(seconds){
  const waitUntil = new Date().getTime() + seconds*1000;
  console.log("wait:", waitUntil);
  while(new Date().getTime() < waitUntil) true;
}

function getCategories() {
  return request({
    url: "http://localhost:3000/categories",
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result).map(getProductsByCategories);
    return json;
  });
}

getCategories();
