// index.js

let ALL_MEMES = [
  "bed_dino.png",
  "dance.gif",
  "dino_wreck.png",
  "eating_dino.png",
  "happy_dino.png",
  "singing_dino.png",
];

$(document).ready(() => {
  // let meme_url = "meme.jpeg";
  let meme_url = ALL_MEMES[Math.floor(Math.random()*ALL_MEMES.length)];
  $("#meme").append($(`<img src="${meme_url}">`));
});
