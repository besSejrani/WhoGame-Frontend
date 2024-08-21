import { cookies } from "next/headers";
import { Game } from "@Components/client/Game"; // Import the client component

export default function GameWrapper() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const hasToken = !!token;

  return <Game hasToken={hasToken} />;
}
