import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angle Duran",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Paco Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];

export function App() {
  const format = (userName) => `@${userName}`;

  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => 
        <TwitterFollowCard
        key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          formatUserName={format}
          name={name}
        >
          {name}
        </TwitterFollowCard>
      )}

      {/* <TwitterFollowCard
        formatUserName={format}
        userName="midudev"
        name="Miguelito"
        initialIsFollowing={true}
      />
      <TwitterFollowCard
        formatUserName={format}
        userName="pelphs"
        name="Phelps"
        initialIsFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={format}
        userName="willy"
        name="Williams"
        initialIsFollowing={true}
      /> */}
    </section>
  );
}
