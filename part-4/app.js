const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Try2 : Express Router 사용 (피드백 반영)
app.get("/:num1/plus/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) + parseFloat(num2);
  res.send(
    "result is " + Math.round((result + Number.EPSILON) * 100) / 100 + "!"
  );
});

app.get("/:num1/minus/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) - parseFloat(num2);
  res.send(
    "result is " + Math.round((result + Number.EPSILON) * 100) / 100 + "!"
  );
});

app.get("/:num1/mul/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) * parseFloat(num2);
  res.send(
    "result is " + Math.round((result + Number.EPSILON) * 100) / 100 + "!"
  );
});

app.get("/:num1/div/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) / parseFloat(num2);
  res.send(
    "result is " + Math.round((result + Number.EPSILON) * 100) / 100 + "!"
  );
});

// Try 1 : Regex를 사용해서 풀기
/*
const plusRegex = /\/([0-9]+(?:.[0-9]+)?)\/plus\/([0-9]+(?:.[0-9]+)?)$/i;
app.get(plusRegex, (req, res) => {
  const params = req.params;
  const result = parseFloat(params[0]) + parseFloat(params[1]);
  res.send("result is " + result + "!");
});

const minusRegex = /\/([0-9]+(?:.[0-9]+)?)\/minus\/([0-9]+(?:.[0-9]+)?)$/i;
app.get(minusRegex, (req, res) => {
  const params = req.params;
  const result = parseFloat(params[0]) - parseFloat(params[1]);
  res.send("result is " + result + "!");
});

const mulRegex = /\/([0-9]+(?:.[0-9]+)?)\/mul\/([0-9]+(?:.[0-9]+)?)$/i;
app.get(mulRegex, (req, res) => {
  const params = req.params;
  const result = parseFloat(params[0]) * parseFloat(params[1]);
  res.send("result is " + result + "!");
});

const divRegex = /\/([0-9]+(?:.[0-9]+)?)\/div\/([0-9]+(?:.[0-9]+)?)$/i;
app.get(divRegex, (req, res) => {
  const params = req.params;
  const result = parseFloat(params[0]) / parseFloat(params[1]);
  res.send(
    "result is " + Math.round((result + Number.EPSILON) * 100) / 100 + "!"
  );
});
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
