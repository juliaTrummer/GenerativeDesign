import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

var app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


app.get("/", (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const _retfile = path.join(__dirname, 'main.html');

  res.sendFile(_retfile);
});

app.get("/JS/sketch.js", (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const _retfile = path.join(__dirname, 'JS', 'sketch.js');
  res.sendFile(_retfile);
});