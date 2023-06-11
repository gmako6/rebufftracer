const express = require("express");
const app = express();

// Import the tracing initialization
require("./tracing");

// Other server code...

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
