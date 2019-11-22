// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const showError = false
document.addEventListener('DOMContentLoaded',() => {
  console.log('done')
  
  hideError(showError)
  clickHeart()
})

let hideError = (show) => {
  let errorModal = document.querySelector('#modal')
  if(show){
    errorModal.className = ''
  }
  else{
    errorModal.className = 'hidden'
   
  }
 


}

let clickHeart = () => {
  let heartStatus = 0
  let hearts = document.querySelectorAll('.like-glyph')
  hearts.forEach((indivHeart) => {
    indivHeart.addEventListener('click', () => {
      mimicServerCall()
      .then((serverMessage) => {
        if(heartStatus == 0){
          indivHeart.innerText = '❤️'
          heartStatus = 1
        }
        else{
          indivHeart.innerText = '♡'
          heartStatus = 0
        }
       
      })
      .catch((error) => {
        console.log(error)
        hideError(false)
      })


    })
  })


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
