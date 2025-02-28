import Image from "next/image";

export default function MemeCard({ meme }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={meme.url} alt={meme.name} width={300} height={300} className="w-full" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-600">{meme.name}</h2>
      </div>
    </div>
  );
}
