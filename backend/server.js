const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

// MIDDLEWARE
app.use(express.static(`${__dirname}/client/build`));

// ROUTES
app.get("/restaurants", (req, res) => {
  res.send("root route hit");
});

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, () => console.log("server is running at PORT", PORT));
