var scale = 1,
  panning = false,
  zoom = document.querySelector(".img-space"),
  pointX = (zoom.getBoundingClientRect().width - window.innerWidth) / 2,
  pointY = (zoom.getBoundingClientRect().height - window.innerHeight) / 2,
  maxX = 0,
  maxY = 0,
  start = { x: 0, y: 0 },
  unitPoint1 = document.getElementById('point-1')

var zoomScale = {max: 4, min: 0.5, scale: 1.2}

function setTransform() {
  zoom.style.transform =
    "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}
zoom.onmousedown = function (e) {
  e.preventDefault();
  start = { x: e.clientX - pointX, y: e.clientY - pointY };
  pointX = (zoom.getBoundingClientRect().width - window.innerWidth) / 2,
  pointY = (zoom.getBoundingClientRect().height - window.innerHeight) / 2,
  panning = true;
};

zoom.onmouseup = function (e) {
  panning = false;
};

zoom.onmousemove = function (e) {
  e.preventDefault();
  if (!panning) {
    return;
  }
  pointX = Math.min(e.clientX - start.x, maxX);
  pointY = Math.min(e.clientY - start.y, (window.innerHeight - zoom.getBoundingClientRect().height) / 2)
//   if(e.clientY - start.y > (window.innerHeight - zoom.getBoundingClientRect().height) / 2 && e.clientY - start.y < zoom.getBoundingClientRect().height - window.innerHeight){
//   }
  setTransform();
};

// zoom.onwheel = function (e) {
//   e.preventDefault();
//   var xs = (e.clientX - pointX) / scale,
//     ys = (e.clientY - pointY) / scale,
//     delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
// //   delta > 0 ? (scale *= 1.2) : (scale /= 1.2);
//   if(delta > 0){
//     if(scale < zoomScale.max) scale *= zoomScale.scale
//   }else{
//     if(scale > zoomScale.min) scale /= zoomScale.scale
//   }
//   maxX = (zoom.getBoundingClientRect().width - window.innerWidth) / 2
//   maxY = (zoom.getBoundingClientRect().height - window.innerHeight) / 2
//   pointX = Math.min(e.clientX - xs * scale, maxX);
//   pointY = Math.min(e.clientY - ys * scale, maxY);

//   setTransform();
// };

unitPoint1.addEventListener('click', ()=>{
  window.location.href = 'unit-vr.html'
})