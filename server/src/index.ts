import express, { Request, Response } from "express";

// instantize an app from express() function
const app = express();

// setup a simple get route 
// and return a test message

app.get("/", (req: Request, res: Response) => {
  res.json({ test: "Ok" });
});

// and finally start the server at port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log("server has started on port");
  console.log("http://localhost:" + PORT);
});