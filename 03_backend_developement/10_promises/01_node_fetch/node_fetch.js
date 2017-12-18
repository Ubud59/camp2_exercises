const fetch = require("node-fetch");

fetch(
  "https://decath-product-api.herokuapp.com/products/efe288cb-fb63-4b23-b8df-529f04b8b02b"
)
  .then((response) => response.json())
  .then((product) => {
    fetch(
      `https://decath-product-api.herokuapp.com/brands/${product.brand_id}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.title);
      })
      .catch((error) => {
        console.warn(error);
      });
  })
  .catch((error) => {
    console.warn(error);
  });
