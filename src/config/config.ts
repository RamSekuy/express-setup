import { CorsOptions } from "cors";

export const PORT = process.env.PORT || 8000;
export const corsOption: CorsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
