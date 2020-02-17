// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal")
let hearts = document.querySelectorAll(".like-glyph")

function toggleModal() {
  if (modal.hidden === false){
    modal.className = "hidden";
  }
}

toggleModal()

for (let glyph of hearts) {
  glyph.addEventListener("click", handleClick);
}

function handleClick(e) {
    let heart = e.target;
    if (heart.classList.value === "like-glyph"){
      heart.classList.add("activated-heart")
    } else {
      heart.classList.remove("activated-heart");
    }
    
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
