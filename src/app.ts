import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello there!");
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});
