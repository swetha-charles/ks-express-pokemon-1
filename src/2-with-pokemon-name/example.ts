import express, { Express, Request, Response, Application } from "express";

const app: Application = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hi there!");
});

app.get("/hello/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

app.get("/pokemon/:pokename/", async (req: Request, res: Response) => {
  const pokename = req.params.pokename;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
  const data = await response.json();

  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});
