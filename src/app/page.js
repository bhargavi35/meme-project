"use client";
import { useEffect, useState } from "react";
import MemeCard from "@/components/MemeCard";
import { fetchMemes } from "@/utils/fetchMemes";
import Loader from "@/components/Loader";

export default function Home() {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMemes().then((data) => {
            setMemes(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-5 text-black">🔥 Trending Memes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {memes.map((meme) => (
                    <MemeCard key={meme.id} meme={meme} />
                ))}
            </div>
        </div>
    );
}
