import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  return authMiddleware();
}

export const config = {
  matcher: [
    // Run on everything but Next internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
