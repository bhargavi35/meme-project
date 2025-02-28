"use client";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [topMemes, setTopMemes] = useState([]);

  useEffect(() => {
    const storedMemes = JSON.parse(localStorage.getItem("memes")) || [];
    const sortedMemes = storedMemes
      .map((meme) => ({ ...meme, likes: localStorage.getItem(`likes-${meme.id}`) || 0 }))
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 10);
    setTopMemes(sortedMemes);
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold">🏆 Meme Leaderboard</h1>
      <ul className="mt-4">
        {topMemes.map((meme, index) => (
          <li key={meme.id} className="border p-2 flex justify-between">
            <span>{index + 1}. {meme.name}</span>
            <span>🔥 {meme.likes} Likes</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
