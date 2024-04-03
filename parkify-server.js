import dotenv from "dotenv";
dotenv.config();
import express, { response } from "express";
import africastalking from "africastalking";
import axios from "axios";

const app = express();
const PORT = 8081;

const AT_CREDENTIALS = {
  apiKey: process.env.AT_API_KEY,
  username: process.env.AT_USERNAME,
};

const AT_SMS_SERVICE = africastalking(AT_CREDENTIALS).SMS;

app.get("/", async (req, res) => {
  await axios
    .post(
      "http://vesapi.liquid.tech:8010/vehicle-enquiry/v1/vehicles",
      {
        registrationNumber: "KCP938J",
      },
      {
        headers: {
          "x-api-key": "Hr*ugf(N*&YH",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error.response.data);
    });
});
app.get("/sendsms", async (req, res) => {
  try {
    const response = await AT_SMS_SERVICE.send({
      to: "+254795565344",
      message: "Parkify test message",
    });

    res.send(response);
  } catch (error) {
    console.error(error.response.data);
    res.send(error.response.data);
  }
});
app.listen(PORT, () => {
  console.log(`Parkify Server live on Port ${PORT}`);
});
