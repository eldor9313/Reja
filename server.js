const http = require("http");
const mongodb = require("mongodb");

// MongoDB connect

// MongoDb ulanishi kerak bo'lgan (URL) => Atlas URL tenglab olyapmiz.
let db;
const connectionString =
  "mongodb+srv://imeldor:fa7075898@cluster0.qsot5.mongodb.net/reja";

// bu metod orqali MongoDB-ga ulanmoqdamiz.
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  // Bu callback parametrimiz shartlari (err & data)
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");

      //   console.log(client);
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
