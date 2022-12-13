"use strict";
import sumChars from "./sumChars"; // import car value function
const express = require("express"); // importing express
const server = express(); // assigning express to a variable
const env = require("dotenv");
const request = require("supertest");
server.use(express.json());
env.config();

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

const PORT = process.env.PORT || 4002;

server.listen(PORT, () => {
  console.log("listening to port", PORT);
});
