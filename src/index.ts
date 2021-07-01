import { createServer } from "http";
import signale from "signale";
import Server from "./server";

const PORT: number = 8080;
const app = new Server(8080).bootstrap();
const server = createServer(app);
server.listen(PORT);
server.on("listening", onSuccess);
server.on("error", onError);

function onSuccess() {
    signale.success("🚀  server listening on port:", PORT);
  }

function onError(error: any) {
    signale.error("There was an error:", error);
  }
