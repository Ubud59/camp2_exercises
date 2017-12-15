const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const PG = require("pg");
const client = new PG.Client();
client.connect();

app.get("/", function (request, result) {
  result.send("Hello World!");
});
app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

function searchProducts(callback) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products",
    function(error, resultQuery) {
      callback(resultQuery.rows);
      client.end();
    }
  );
}

app.get(
  "/products",
  function(request, result) {
    searchProducts(
      function(products) {
        result.json(products);
      }
    );
  }
);


function searchCategories(callback) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories",
    function(error, resultQuery) {
      callback(resultQuery.rows);
      client.end();
    }
  );
}

app.get(
  "/categories",
  function(request, result) {
    searchCategories(
      function(categories) {
        result.json(categories);
      }
    );
  }
);

function searchBrands(callback) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands",
    function(error, resultQuery) {
      callback(resultQuery.rows);
      client.end();
    }
  );
}

app.get(
  "/brands",
  function(request, result) {
    searchBrands(
      function(brands) {
        result.json(brands);
      }
    );
  }
);

function searchBrandsById(id, callback) {
  const client = new PG.Client();
  client.connect();
  //console.log("id:",id);
  client.query(
    "SELECT * FROM brands where id = $1::uuid",
    [id],
    function(error, resultQuery) {
      //console.log("error:",error);
      callback(resultQuery.rows);
      client.end();
    }
  );
}

app.get(
  "/brands/:id",
  function(request, result) {
    const id = request.params.id;
    searchBrandsById(
      id, function(brands) {
        result.json(brands);
      }
    );
  }
);

function searchCategoriesById(id, callback) {
  const client = new PG.Client();
  client.connect();
  //console.log("id:",id);
  client.query(
    "SELECT * FROM categories where id = $1::uuid",
    [id],
    function(error, resultQuery) {
      //console.log("error:",error);
      callback(resultQuery.rows);
      client.end();
    }
  );
}

app.get(
  "/categories/:id",
  function(request, result) {
    const id = request.params.id;
    searchCategoriesById(
      id, function(categories) {
        result.json(categories);
      }
    );
  }
);

function searchProductsById(id, callback) {
  const client = new PG.Client();
  client.connect();
  //console.log("id:",id);
  client.query(
    "SELECT * FROM products where id = $1::uuid",
    [id],
    function(error, resultQuery) {
      //console.log("error:",error);
      callback(resultQuery.rows);
      client.end();
    }
  );
}

app.get(
  "/products/:id",
  function(request, result) {
    const id = request.params.id;
    searchProductsById(
      id, function(categories) {
        result.json(categories);
      }
    );
  }
);

function searchProductsByCategory(id, callback) {
  const client = new PG.Client();
  client.connect();
  //console.log("id:",id);
  client.query(
    "select * from products inner join productsbycategories on (id_product = id and id_category = $1::uuid);",
    [id],
    function(error, resultQuery) {
      //console.log("error:",error);
      callback(resultQuery.rows);
      client.end();
    }
  );
}

app.get(
  "/categories/:id/products",
  function(request, result) {
    const id = request.params.id;
    searchProductsByCategory(
      id, function(categories) {
        result.json(categories);
      }
    );
  }
);
