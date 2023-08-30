"use client";

import { useEffect } from "react";
import io from "socket.io-client";

let socket;
export default function Home() {
  useEffect(() => {
    initSocket();
  }, []);

  const initSocket = async () => {
    await fetch("/api/socket");
    socket = io(undefined, {
      path: "/api/socket_io",
    });
    socket.on("connect", () => {
      console.log("client - connected", socket.id);
    });
  };

  return (
    <main>
      Next.js 13.4.19 + Turbo + Socket.io
      <p>
        Have a look at the Chrome's Console and/or Network tab, when i try
        running the app with turbo command &nbsp;
        <b>npx next dev --turbo</b> <i>socket.io is not working</i>
      </p>
      <p>
        Everything works fine with <b>npx next dev</b>
      </p>
    </main>
  );
}
