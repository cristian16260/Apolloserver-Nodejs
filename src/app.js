const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDef } = require("./Apollo-server/typeDef");
const { resolver } = require("./Apollo-server/resolvers");
const { mongodb } = require("./db");
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("welcome a my Api of graphql");
});

mongodb();
module.exports = app;

const start = async () => {
  const apolloserver = new ApolloServer({
    typeDefs: typeDef,
    resolvers: resolver,
  });

  await apolloserver.start();
  apolloserver.applyMiddleware({ app: app });

  app.use("*", (req, res) => {
    res.status(404).send("not found");
  });

  app.listen(port, () => {
    console.log(`listen on port: ${port}`);
  });
};

start();
