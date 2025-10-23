import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes";
import notFoundHandler from "./middlewares/not-found";
import errorHandler from "./middlewares/error-handler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
