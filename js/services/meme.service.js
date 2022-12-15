'use strict'


let gImgId = 0
let gImgs = []

let gMeme = {
  selectedImgId: 1,
  selectedImgUrl: '',
  // selectedFillColor: 'white',
  selectedLineIdx: 0,
  lines: [
    {
      txt: '',
      size: 40,
      align: 'left',
      color: 'white',
      x: 225,
      y: 400
    }, {
      txt: '',
      size: 40,
      align: 'left',
      color: 'white',
      x: 225,
      y: 50

    }

  ]
}
createImgs()
console.log('gImgs :>> ', gImgs);
console.log(gMeme)

function resetLinesDetails() {
  gMeme.lines = [
    {
      txt: '',
      size: 40,
      align: 'left',
      color: 'white',
      x: 225,
      y: 400
    }, {
      txt: '',
      size: 40,
      align: 'left',
      color: 'white',
      x: 225,
      y: 50

    }
  ]
}

function setImg(elImg) {
  // console.log(elImg.src)
  // console.log(elImg.getAttribute('data-id'))
  gMeme.selectedImgId = elImg.getAttribute('data-id')
  gMeme.selectedImgUrl = elImg.src
}
function setLineIdx() {
  gMeme.selectedLineIdx = (gMeme.selectedLineIdx === 0) ? 1 : 0
  console.log('from setLineIdx- server : ', gMeme.selectedLineIdx)
}
function setFontSize(diff) {
  const lineIdx = gMeme.selectedLineIdx
  gMeme.lines[lineIdx].size += (+diff)
  console.log(gMeme.lines[lineIdx].size)
}

function setLineTxt(val) {
  const lineIdx = gMeme.selectedLineIdx
  gMeme.lines[lineIdx].txt = val
  // var txt = gMeme.lines[0].txt
  // console.log('val from set text in service :', txt)
}
function setTextColor(colorVal) {
  const lineIdx = gMeme.selectedLineIdx
  gMeme.lines[lineIdx].color = colorVal
  console.log('gMeme from set color : ', gMeme)
  console.log(gMeme.lines[0].color)
}


function createImgs() {
  gImgs = [];
  gImgs.push(_createImg(['Trump', 'Funny']));
  gImgs.push(_createImg(['Animal']));
  gImgs.push(_createImg(['Animal', 'Baby']));
  gImgs.push(_createImg(['Animal']));
  gImgs.push(_createImg(['Baby', 'Funny']));
  gImgs.push(_createImg(['Bad hair day']));
  gImgs.push(_createImg(['Baby']));
  gImgs.push(_createImg(['Nice']));
  gImgs.push(_createImg(['Baby', 'Funny']));
  gImgs.push(_createImg(['Funny']));
  gImgs.push(_createImg(['don\'t know what to say']));
  gImgs.push(_createImg(['don\'t know what to say']));
  gImgs.push(_createImg(['Cheers']));
  gImgs.push(_createImg(['Movie']));
  gImgs.push(_createImg(['Movie']));
  gImgs.push(_createImg(['Funny']));
  gImgs.push(_createImg(['Putin']));
  gImgs.push(_createImg(['Movie']));
}

function _createImg(keywords) {
  return { id: ++gImgId, src: `meme-imgs/${gImgId}.jpg`, keywords };
}

function getMeme() {
  return gMeme
}
function getgImgs() {
  return gImgs;
}




// function renderMeme() {
//   console.log('hi from render meme')
//   const elImg = new Image() // Create a new html img element
//   var meme = getMeme()
//   var lineIdx = meme.selectedLineIdx
//   var linePosX = meme.lines[0].x
//   var linePosY = meme.lines[0].y
//   console.log('gMeme :', linePosX)
//   var txt = meme.lines[0].txt
//   // console.log('txt from render', meme.lines[0].txt)
//   elImg.src = meme.selectedImgUrl
//   // console.log(meme.selectedImgUrl)
//   elImg.onload = () => {
//     gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
//     drawText(txt, linePosX, linePosY)
//   }
// }