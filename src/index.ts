import app from "./app";
import env from "./config/env";

const { port } = env;

app.listen(port, () => {
  console.log(`Servidor Node escuchando en el puerto ${port}`);
});
