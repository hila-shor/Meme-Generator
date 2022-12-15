'use strict'

function renderGalleryImgs() {
  let imgs = getgImgs()
  var strHTML = '';
  imgs.forEach((img, idx) => {
    strHTML += `<div class="img-item"><img class="img${idx} img" data-id="${idx + 1}" src="${img.src}" alt="" onclick="onImgSelect(this)"></div>`
  });
  var elImgsGallery = document.querySelector('.imgs-gallery');
  elImgsGallery.innerHTML = strHTML;

}
