'use strict'

let gElCanvas
let gCtx


function onInit() {
  gElCanvas = document.querySelector('.canvas')
  // console.log('gElCanvas :>> ', gElCanvas);
  gCtx = gElCanvas.getContext('2d')
  renderGalleryImgs()


  // renderMeme()
  // drawText('And not one minute later', 200, 50)
}

function renderMeme() {
  console.log('hi from render meme')
  const elImg = new Image() // Create a new html img element
  var meme = getMeme()
  // console.log('gMeme :', meme)
  var txt = meme.lines[0].txt
  // console.log('txt from render', txt)
  elImg.src = meme.selectedImgUrl
  // console.log(meme.selectedImgUrl)
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(txt, 225, 400)
  }
}

function onImgSelect(elImg) {
  setImg(elImg)
  renderMeme()
}

function onChangeTxt(val) {
  console.log('value : ', val)
  setLineTxt(val)
  renderMeme()
}

function onDeleteBtn() {

  console.log('hi from delete btn')
  var meme = getMeme()
  var txt = meme.lines[0].txt
  txt = ''
  console.log('txt line value :', txt)
  drawText(txt, 225, 400)
}

function drawText(text, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = 'white'
  gCtx.font = "700 35px arial"
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'button'

  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function renderGalleryImgs() {
  let imgs = getgImgs()
  var strHTML = '';
  imgs.forEach((img, idx) => {
    strHTML += `<div class="img-item"><img class="img${idx} img" data-id="${idx + 1}" src="${img.src}" alt="" onclick="onImgSelect(this)"></div>`
  });
  var elImgsGallery = document.querySelector('.imgs-gallery');
  elImgsGallery.innerHTML = strHTML;

}
