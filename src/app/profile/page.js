"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Meme Lover",
    bio: "I love memes!",
    avatar: "/default-avatar.png",
  });

  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) setProfile(savedProfile);
    const uploadedMemes = JSON.parse(localStorage.getItem("uploadedMemes")) || [];
    setMemes(uploadedMemes);
  }, []);

  const handleUpdateProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold">👤 Profile</h1>
      <div className="mt-4 flex gap-4">
        <Image src={profile.avatar} alt="Avatar" width={100} height={100} className="rounded-full" />
        <div>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="border p-2"
          />
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="border p-2 mt-2 w-full"
          />
          <button onClick={handleUpdateProfile} className="bg-blue-600 text-white px-4 py-2 mt-2">
            Save
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">My Uploaded Memes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {memes.map((meme, index) => (
          <Image key={index} src={meme.url} alt="Meme" width={200} height={200} />
        ))}
      </div>
    </div>
  );
}
