import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello there!");
});

app.get("/hello/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});
