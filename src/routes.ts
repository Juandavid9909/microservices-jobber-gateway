import { Application } from "express";
import { authRoutes } from "@gateway/routes/auth";
import { healthRoutes } from "@gateway/routes/health";

const BASE_PATH = "/api/gateway/v1";

export const appRoutes = (app: Application) => {
  app.use("", healthRoutes.routes());
  app.use(BASE_PATH, authRoutes.routes());
};
