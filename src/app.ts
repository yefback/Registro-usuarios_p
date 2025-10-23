import express from "express";
import cors from "cors";
import path from "path";

import userRoutes from "./routes/user.routes";
import notFoundHandler from "./middlewares/not-found";
import errorHandler from "./middlewares/error-handler";

const app = express();

app.use(cors());
app.use(express.json());

const staticDir = path.resolve(__dirname, "..", "public");
app.use(express.static(staticDir));

app.use("/api/usuarios", userRoutes);

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
