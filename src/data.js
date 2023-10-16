import { v4 as uuidv4 } from "uuid";
function trash2021() {
  return [
    {
      name: "Intro",
      cover:
        "/covers/me.webp",
      artist: "Afredo Fraggins",
      audio: "/songs/flute.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Psy",
      cover:
      "/covers/default.webp",
      artist: "Afonso Manso",
      audio: "/songs/psytrance.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bathuska - Litourgiya microCOVER",
      cover:
      "/covers/bathuska.webp",
      artist: "Rodanov Vitseti",
      audio: "/songs/bathuska.mp3",
      color: ["#4A067C", "#954bcc"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Gorillaz - Kids with guns microCOVER",
      cover:
      "/covers/gorillaz.webp",
      artist: "Macaco Donald",
      audio: "/songs/kids.mp3",
      color: ["#c47903", "#eabf7a"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hades - Tartarus microCOVER",
      cover:
      "/covers/hades.webp",
      artist: "Hades ca vir hades",
      audio: "/songs/tartarus.mp3",
      color: ["#b30000", "#341818"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Haken - Cockroach King microCOVER",
      cover:
      "/covers/carlos.webp",
      artist: "Reinaldo Barata",
      audio: "/songs/cockroach.mp3",
      color: ["#FFFF00", "#979732"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Adiafa - Meninas da ribeira do sado microCOVER",
      cover:
      "/covers/frog.webp",
      artist: "Arlete Silva, Miss ribeira do sado 2021",
      audio: "/songs/finas.mp3",
      color: ["#C12877", "#3a99d9"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default trash2021;
