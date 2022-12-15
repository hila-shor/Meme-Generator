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
      color: 'white'
    }
  ]
}
createImgs()
console.log('gImgs :>> ', gImgs);
console.log(gMeme)

function setImg(elImg) {
  // console.log(elImg.src)
  // console.log(elImg.getAttribute('data-id'))
  gMeme.selectedImgId = elImg.getAttribute('data-id')
  gMeme.selectedImgUrl = elImg.src
}
function setFontSize(diff) {
  gMeme.lines[0].size += (+diff)
  console.log(gMeme.lines[0].size)
}

function setLineTxt(val) {
  gMeme.lines[0].txt = val
  // var txt = gMeme.lines[0].txt
  // console.log('val from set text in service :', txt)
}
function setTextColor(colorVal) {
  gMeme.lines[0].color = colorVal
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