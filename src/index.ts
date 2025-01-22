import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import "./configs/database";

const port: number = Number(process.env.PORT) || 8000;
const app: Express = express();
const host: string = process.env.HOST || "localhost";

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`[server] Server is running on http://${host}:${port}`);
});

export default app;