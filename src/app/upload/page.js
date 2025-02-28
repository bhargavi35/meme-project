"use client";
import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post("https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY", formData);
    console.log(res.data);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Upload Meme</h1>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <input
        type="text"
        placeholder="Enter Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="border p-2 w-full mt-2"
      />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 mt-3">
        Upload
      </button>
    </div>
  );
}
