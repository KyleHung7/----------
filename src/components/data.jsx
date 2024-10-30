import { v4 as uuidv4 } from "uuid";


function chillHop() {
  return [
    {
      name: "Sunrise Serenade",
      cover:
`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3")}&bgcolor=FFFFFF`,
      artist: " Harmony Harp",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Urban Groove",
      cover:
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3")}&bgcolor=FFFFFF`,
      artist: "Beatmaster B",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mystic Echo",
      cover:
`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3")}&bgcolor=FFFFFF`,
      artist: " Harmony Harp",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Electro Vibes",
      cover:
`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3")}&bgcolor=FFFFFF`,
      artist: "Synthwave Sensation",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jazzy Whispers",
      cover:
`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3")}&bgcolor=FFFFFF`,
      artist: "Smooth Sax Serenade",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tropical Breez",
      cover:
`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3")}&bgcolor=FFFFFF`,
      artist: "Island Rhythms",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;