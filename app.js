"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sumChars_1 = __importDefault(require("./sumChars")); // import car value function
const express = require("express"); // importing express
const server = express(); // assigning express to a variable
const env = require("dotenv");
const request = require("supertest");
server.use(express.json());
env.config();
function carValue(req, res) {
    let carModel;
    let year;
    let carValue;
    ({ carModel, year } = req.body);
    carValue = (0, sumChars_1.default)(carModel, year); // getting the car value from name and year
    res.json(carValue); // Sending the car value
    console.log(res.json(carValue));
}
server.post("/car-value", carValue);
const PORT = process.env.PORT || 4002;
server.listen(PORT, () => {
    console.log("listening to port", PORT);
});
