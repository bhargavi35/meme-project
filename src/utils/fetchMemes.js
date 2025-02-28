import axios from "axios";

export const fetchMemes = async (query = "") => {
  const res = await axios.get("https://api.imgflip.com/get_memes");
  const memes = res.data.data.memes;
  return query ? memes.filter((m) => m.name.toLowerCase().includes(query.toLowerCase())) : memes;
};
