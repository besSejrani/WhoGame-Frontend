/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthError } from "next-auth";

export class NextAuthError extends AuthError {
  static type: string;

  constructor(message?: any) {
    super();

    this.type = message;
  }
}
