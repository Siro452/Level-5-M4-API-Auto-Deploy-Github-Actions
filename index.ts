"use strict";
import sumChars from "./sumChars";
const serverless = require("serverless-http");
const express = require("express");
const server = express();
import dotenv from "dotenv";
const request = require("supertest");
server.use(express.json());
dotenv.config();

function carValue(
  req: { body: { carModel: string; year: number } },
  res: { json: (param: string | number) => void }
) {
  let carModel: string;
  let year: number;
  let carValue: number | string;
  ({ carModel, year } = req.body);

  carValue = sumChars(carModel, year);
  res.json(carValue);
  console.log(res.json(carValue));
}

server.post("/car-value", carValue);

const PORT = process.env.PORT || 4001;

server.listen(PORT, () => {
  console.log("listening to port", PORT);
});

module.exports.handler = serverless(server);
