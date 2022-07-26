const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:num1/plus/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  try {
    let result = parseFloat(num1) + parseFloat(num2);
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    if (isNaN(result)) {
      throw new Error(`Invalid operand.`);
    }
    res
      .header("x-calculator-say", "ok-human")
      .send("result is " + result + "!");
  } catch (e) {
    res.header("x-calculator-say", "stupid-human").send(e.message, 400);
  } finally {
    console.log("Good Bye~!!!");
  }
});

app.get("/:num1/minus/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  try {
    let result = parseFloat(num1) - parseFloat(num2);
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    if (isNaN(result)) {
      throw new Error(`Invalid operand.`);
    }
    res
      .header("x-calculator-say", "ok-human")
      .send("result is " + result + "!");
  } catch (e) {
    res.header("x-calculator-say", "stupid-human").send(e.message, 400);
  } finally {
    console.log("Good Bye~!!!");
  }
});

app.get("/:num1/mul/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  try {
    let result = parseFloat(num1) * parseFloat(num2);
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    if (isNaN(result)) {
      throw new Error(`Invalid operand.`);
    }
    res
      .header("x-calculator-say", "ok-human")
      .send("result is " + result + "!");
  } catch (e) {
    res.header("x-calculator-say", "stupid-human").send(e.message, 400);
  } finally {
    console.log("Good Bye~!!!");
  }
});

app.get("/:num1/div/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  try {
    let result = parseFloat(num1) / parseFloat(num2);
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    if (isNaN(result)) {
      throw new Error(`Invalid operand.`);
    }
    res
      .header("x-calculator-say", "ok-human")
      .send("result is " + result + "!");
  } catch (e) {
    res.header("x-calculator-say", "stupid-human").send(e.message, 400);
  } finally {
    console.log("Good Bye~!!!");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
