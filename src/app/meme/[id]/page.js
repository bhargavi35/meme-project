"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function MemeDetails() {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const storedMemes = JSON.parse(localStorage.getItem("memes")) || [];
    const memeData = storedMemes.find((m) => m.id === id);
    setMeme(memeData);
    setLikes(parseInt(localStorage.getItem(`likes-${id}`)) || 0);
    setComments(JSON.parse(localStorage.getItem(`comments-${id}`)) || []);
  }, [id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${id}`, newLikes);
  };

  const handleComment = () => {
    const newComments = [...comments, comment];
    setComments(newComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
    setComment("");
  };

  if (!meme) return <p>Loading...</p>;

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold">{meme.name}</h1>
      <Image src={meme.url} alt={meme.name} width={500} height={500} className="mt-4" />
      
      <div className="flex items-center gap-4 mt-4">
        <button onClick={handleLike} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          👍 {likes} Likes
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Comments</h2>
        {comments.map((c, index) => (
          <p key={index} className="border p-2 mt-2">{c}</p>
        ))}
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 w-full mt-2"
        />
        <button onClick={handleComment} className="bg-green-600 text-white px-4 py-2 mt-2 rounded-lg">
          Add Comment
        </button>
      </div>
    </div>
  );
}
