// index.js

let ALL_MEMES = [
  "bed_dino.png",
  "dance.gif",
  "days_poster.png",
  "dino_wreck.png",
  "duck_dino.png",
  "eating_dino.png",
  "final_countdown.png",
  "happy_dino.png",
  "singing_dino.png",
  "t_rex_hat.png",
  "vel_dino.png",
  "wishes_dino.png",
];

$(document).ready(() => {
  // let meme_url = "meme.jpeg";
  let meme_url = ALL_MEMES[Math.floor(Math.random()*ALL_MEMES.length)];
  $("#meme").append($(`<img src="${meme_url}">`));
});
