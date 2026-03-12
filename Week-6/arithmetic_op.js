const express = require("express");
const app = express();

const PORT = 3000;

// Addition
app.get("/add/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    res.send("Result: " + (num1 + num2));
});

// Subtraction
app.get("/sub/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    res.send("Result: " + (num1 - num2));
});

// Multiplication
app.get("/mul/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    res.send("Result: " + (num1 * num2));
});

// Division
app.get("/div/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    if (num2 === 0) {
        return res.send("Error: Cannot divide by zero");
    }

    res.send("Result: " + (num1 / num2));
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});