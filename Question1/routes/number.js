const express = require('express');
const router = express.Router();
const axios = require("axios");

const token = process.env.token
console.log(token)
const headers = {
    Authorization: `Bearer ${token}`
};

const WINDOW_SIZE = 10;
let window = [];

router.get("/p", async(req, res) => {
    const prevState = [...window];
    let response;
    try {
    response = await axios.get("http://20.244.56.144/evaluation-service/primes", {
    timeout: 500,
    headers,
    });
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch from third-party API" });
    }
    const incomingNumbers = response.data.numbers || [];

    for (const num of incomingNumbers) {
        if (!window.includes(num)) {
        if (window.length === WINDOW_SIZE) {
            window.shift();
        }
        window.push(num);
        }
    }

    const avg = window.reduce((a, b) => a + b, 0) / (window.length || 1);

    res.json({
        windowPrevState: prevState,
        windowCurrState: window,
        numbers: incomingNumbers,
        avg: +avg.toFixed(2)
    });
})

router.get("/f", async(req, res) => {
    const prevState = [...window];
    let response;
    try {
    response = await axios.get("http://20.244.56.144/evaluation-service/fibo", {
    timeout: 500,
    headers,
    });
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch from third-party API" });
    }
    const incomingNumbers = response.data.numbers || [];

    for (const num of incomingNumbers) {
        if (!window.includes(num)) {
        if (window.length === WINDOW_SIZE) {
            window.shift(); // remove oldest
        }
        window.push(num);
        }
    }

    const avg = window.reduce((a, b) => a + b, 0) / (window.length || 1);

    res.json({
        windowPrevState: prevState,
        windowCurrState: window,
        numbers: incomingNumbers,
        avg: +avg.toFixed(2)
    });
})

router.get("/e", async(req, res) => {
    const prevState = [...window];
    let response;
    try {
    response = await axios.get("http://20.244.56.144/evaluation-service/even", {
    timeout: 500,
    headers,
    });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Failed to fetch from third-party API" });
    }
    const incomingNumbers = response.data.numbers || [];

    for (const num of incomingNumbers) {
        if (!window.includes(num)) {
        if (window.length === WINDOW_SIZE) {
            window.shift();
        }
        window.push(num);
        }
    }

    const avg = window.reduce((a, b) => a + b, 0) / (window.length || 1);

    res.json({
        windowPrevState: prevState,
        windowCurrState: window,
        numbers: incomingNumbers,
        avg: +avg.toFixed(2)
    });
})

router.get("/r", async(req, res) => {
    const prevState = [...window];
    let response;
    try {
    response = await axios.get("http://20.244.56.144/evaluation-service/rand", {
    timeout: 500,
    headers,
    });
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch from third-party API" });
    }
    const incomingNumbers = response.data.numbers || [];

    for (const num of incomingNumbers) {
        if (!window.includes(num)) {
        if (window.length === WINDOW_SIZE) {
            window.shift();
        }
        window.push(num);
        }
    }

    const avg = window.reduce((a, b) => a + b, 0) / (window.length || 1);

    res.json({
        windowPrevState: prevState,
        windowCurrState: window,
        numbers: incomingNumbers,
        avg: +avg.toFixed(2)
    });
})

module.exports = router;