const instaBtn = document.querySelector('#instagram')
const faceBtn = document.querySelector('#facebook')
const twitBtn = document.querySelector('#twitter')
const webBtn = document.querySelector('#website')
const imgEl = document.querySelector('#image')


window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            let img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });

  instaBtn.addEventListener('click', () => {
    imgEl.style.width = '1080px'
    imgEl.style.height = '1080px'
  })

  faceBtn.addEventListener('click', () => {
    imgEl.style.width = '1200px'
    imgEl.style.height = '630px'
  })

  twitBtn.addEventListener('click', () => {
    imgEl.style.width = '1200px'
    imgEl.style.height = '675px'
  })

  webBtn.addEventListener('click', () => {
    imgEl.style.width = '600px'
    imgEl.style.height = '300px'
  })