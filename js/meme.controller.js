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
  // console.log('txt from render', meme.lines[0].txt)
  elImg.src = meme.selectedImgUrl
  // console.log(meme.selectedImgUrl)
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(txt, 225, 400)
  }
}


function onChangeFontSize(diff) {
  console.log(+diff)
  setFontSize(diff)
  renderMeme()
}



function onChangeFillColor(colorVal) {
  // console.log(colorVal)

  setTextColor(colorVal)
  renderMeme()
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
  const elInput = document.querySelector('.text-line')
  console.log('catch input :', elInput.value)
  elInput.value = ''
  setLineTxt('')
  renderMeme()
}

function drawText(text, x, y) {
  var meme = getMeme()
  var fontSizee = `${gMeme.lines[0].size}px`
  console.log('size from drawTxt : ', fontSizee)
  console.log(meme.lines[0].color)
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = meme.lines[0].color
  gCtx.font = `700 ${fontSizee} arial`
  // gCtx.font = `"${fontSizee}px"`
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'button'

  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

