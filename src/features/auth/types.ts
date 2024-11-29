import { z } from "zod";
import { authSchema } from "./schema/auth";

export type AuthPayloadType = z.infer<typeof authSchema>;

export interface AuthType {
  message: string;
  token: string;
}
