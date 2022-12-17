'use strict'

let gElCanvas
let gCtx


function onInit() {
  gElCanvas = document.querySelector('.canvas')
  // console.log('gElCanvas :>> ', gElCanvas);
  gCtx = gElCanvas.getContext('2d')
  resizeCanvas()
  renderGalleryImgs()
}

function renderMeme() {

  const elImg = new Image() // Create a new html img element
  var meme = getMeme()
  var lineIdx = meme.selectedLineIdx
  console.log('lineIdx :', lineIdx)
  elImg.src = meme.selectedImgUrl
  // console.log(meme.selectedImgUrl)
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    var lines = meme.lines
    console.log('meme.lines : ', lines)
    drawText(lines[0].txt, lines[0].x, lines[0].y, 0)
    drawText(lines[1].txt, lines[1].x, lines[1].y, 1)
  }
}

function onChangeFontSize(diff) {
  // console.log(+diff)
  setFontSize(diff)
  renderMeme()
}
//open pick color bar from hidden input color
function onClickChangeFillColor() {
  var elColor = document.querySelector('.fill-color1');
  elColor.click();
}

function onChangeFillColor(colorVal) {
  // console.log(colorVal)
  setTextColor(colorVal)
  renderMeme()
}
function onImgSelect(elImg) {
  setImg(elImg)
  resetLinesDetails()
  resetEditorController()
  renderMeme()
}

function onChangeTxt(val) {
  // console.log('value : ', val)
  setLineTxt(val)
  renderMeme()
}

function onChangeLine() {
  resetEditorController()
  // console.log('change line')
  setLineIdx()
  renderMeme()
}

function onDeleteBtn() {
  resetEditorController()
  // const elInput = document.querySelector('.text-line')
  // console.log('catch input :', elInput.value)
  // elInput.value = ''
  setLineTxt('')
  renderMeme()
}

function drawText(text, x, y, idx) {
  var meme = getMeme()
  var lineIdx = meme.selectedLineIdx
  var fontSize = `${gMeme.lines[idx].size}px`
  console.log('size from drawTxt : ', fontSize)
  console.log(meme.lines[idx].color)
  gCtx.lineWidth = 3
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = meme.lines[idx].color
  gCtx.font = `700 ${fontSize} arial`
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'button'

  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}


function resetEditorController() {
  const meme = getMeme()
  const elTxtInput = document.querySelector('.text-line')
  console.log('catch input :', elTxtInput.value)
  elTxtInput.value = ''
  const elColorInput = document.querySelector('.fill-color')
  elColorInput.value = '#FFFFFF'
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  // Note: changing the canvas dimension this way clears the canvas
  gElCanvas.width = elContainer.offsetWidth - 20
  // Unless needed, better keep height fixed.
  gElCanvas.height = elContainer.offsetHeight - 50
}