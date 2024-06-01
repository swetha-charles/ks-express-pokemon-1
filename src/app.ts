import express, { Express, Request, Response, Application } from "express";

const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hi Judy!");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
