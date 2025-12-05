import {
  handleAuth,
  type AuthEndpoints,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { kindeAuth: AuthEndpoints | string } }
) {
  const endpoint = (await params.kindeAuth) as AuthEndpoints;
  return await handleAuth(request, endpoint);
}
