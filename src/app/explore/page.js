"use client";
import { useEffect, useState } from "react";
import MemeCard from "@/components/MemeCard";
import { fetchMemes } from "@/utils/fetchMemes";
import { debounce } from "@/utils/debounce";

export default function Explore() {
  const [memes, setMemes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchMemes(query).then(setMemes);
  }, [query]);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold">Explore Memes</h1>
      <input
        type="text"
        placeholder="Search memes..."
        className="border p-2 rounded w-full mt-2"
        onChange={debounce((e) => setQuery(e.target.value), 500)}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
}
