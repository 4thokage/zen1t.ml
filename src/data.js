import { v4 as uuidv4 } from "uuid";
function trash2021() {
  return [
    {
      name: "Intro",
      cover:
        "/covers/me.jpg",
      artist: "Afredo Fraggins",
      audio: "https://zen1t-ml.herokuapp.com/songs/flute.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Psy",
      cover:
      "/covers/default.jpg",
      artist: "Afonso Manso",
      audio: "https://zen1t-ml.herokuapp.com/songs/psytrance.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bathuska - Litourgiya microCOVER",
      cover:
      "/covers/bathuska.jpg",
      artist: "Rodanov Vitseti",
      audio: "https://zen1t-ml.herokuapp.com/songs/bathuska.mp3",
      color: ["#4A067C", "#954bcc"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Gorillaz - Kids with guns microCOVER",
      cover:
      "/covers/gorillaz.jpg",
      artist: "Macaco Donald",
      audio: "https://zen1t-ml.herokuapp.com/songs/kids.mp3",
      color: ["#c47903", "#eabf7a"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hades - Tartarus microCOVER",
      cover:
      "/covers/hades.jpg",
      artist: "Hades ca vir hades",
      audio: "https://zen1t-ml.herokuapp.com/songs/tartarus.mp3",
      color: ["#b30000", "#341818"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Haken - Cockroach King microCOVER",
      cover:
      "/covers/carlos.jpg",
      artist: "Reinaldo Barata",
      audio: "https://zen1t-ml.herokuapp.com/songs/cockroach.mp3",
      color: ["#FFFF00", "#979732"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Adiafa - Meninas da ribeira do sado microCOVER",
      cover:
      "/covers/frog.jpg",
      artist: "Arlete Silva, Miss ribeira do sado 2021",
      audio: "https://zen1t-ml.herokuapp.com/songs/finas.mp3",
      color: ["#C12877", "#3a99d9"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default trash2021;
