import { v4 as uuidv4 } from "uuid";
function trash2021() {
  return [
    {
      name: "Intro",
      cover:
        "/covers/default.jpg",
      artist: "Afredo Fraggins",
      audio: "https://zen1t-ml.herokuapp.com/songs/Intro.mp3",
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
      name: "Bathuska - Litourgiya COVER",
      cover:
      "/covers/default.jpg",
      artist: "Rodanov Vitseti",
      audio: "https://zen1t-ml.herokuapp.com/songs/bathuska.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default trash2021;
