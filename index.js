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

let current_meme = "";

let new_meme = () => {
  let meme_url = current_meme;
  while (meme_url == current_meme) {
    meme_url = ALL_MEMES[Math.floor(Math.random()*ALL_MEMES.length)];
  }
  current_meme = meme_url;
  $("#meme").empty();
  $("#meme").append($(`<img src="memes/${meme_url}">`));
}

let credits_card = () => {
  $("#credits").toggle();
}

$(document).ready(() => {
  new_meme();
});
