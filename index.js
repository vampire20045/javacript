import express from 'express';
import bodyparser from 'body-parser';

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  const n = req.body['first'];
  const a = req.body['second'];
  const b = parseInt(n) + parseInt(a);
  
  res.render("index.ejs", { answer: b });
});

app.listen(2000, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log("Server is ready on port 2000");
  }
});
