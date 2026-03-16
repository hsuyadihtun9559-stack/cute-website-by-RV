const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "../resources/cat-cute.gif",
  "./resources/rusure.gif",
  "./resources/cat-stare-stare.gif",
  "./resources/sad-sad-cat.gif",
  "./resources/sad-kitty-sad-cat.gif",
  "./resources/cat-kiss.gif",
];

// to load the gifs faster
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when NO button is clicked
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "./resources/rusure.gif";// gif credit: https://knowyourmeme.com/memes/mr-fresh-side-eye-cat
    text.innerHTML = "How dare youuuu!! You meant to press YES right?";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "./resources/cat-stare-stare.gif";// gif credit: https://tenor.com/en-GB/view/cat-stare-stare-funny-funny-cat-funny-cat-staring-gif-5991461082324993255
    text.innerHTML = "Your hand must have slipped right?";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "./resources/sad-sad-cat.gif";// gif credit: https://tenor.com/en-GB/view/sad-sad-cat-cat-depressed-depression-gif-13240550249247957481
    text.innerHTML = "Mon amour, are you sure?? click yes plz T~T";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "./resources/sad-kitty-sad-cat.gif";// gif credit: https://tenor.com/en-GB/view/sad-kitty-sad-cat-cat-cat-meme-gif-10031878163830317345
    text.innerHTML = "Pretty please naaa kha :(";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "./resources/cat-kiss.gif";// gif credit: https://tenor.com/en-GB/view/cat-kiss-catkiss-cat-kiss-cat-kissing-gif-16899029469483761674
  text.innerHTML = "Aheheh I know you love me ^^";
  yes.innerHTML = '<a href="https://i.im.ge/2026/03/13/eZdRkf.Beige-and-Brown-Vintage-Scrapbook-Thank-You-Letter-A4-Document.jpeg">Continue plz</a>';// inside the " " put your image link
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
