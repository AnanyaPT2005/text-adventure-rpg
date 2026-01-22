// const debugCanvas = document.getElementById("debug-canvas");
// const ctx = debugCanvas.getContext("2d");
const hitmap = document.getElementById("hitmap");


// function drawPolygons(scene) {
//   debugCanvas.width = sceneBg.clientWidth;
//   debugCanvas.height = sceneBg.clientHeight;

//   ctx.clearRect(0, 0, debugCanvas.width, debugCanvas.height);
//   ctx.strokeStyle = "white";
//   ctx.lineWidth = 2;

//   scene.objects.forEach(obj => {
//     if (!obj.polygon) return;

//     ctx.beginPath();
//     ctx.moveTo(obj.polygon[0].x, obj.polygon[0].y);

//     obj.polygon.forEach(p => ctx.lineTo(p.x, p.y));
//     ctx.closePath();
//     ctx.stroke();
//   });
// }


const game = {
  currentScene: null,

  loadScene(scene) {
    this.currentScene = scene;
    sceneBg.src = scene.background;
    renderObjects(scene);
    renderHitmap(scene);
  },

  showText(text) {
    console.log(text); // TEMP: just log for now
  }
};


const sceneBg = document.getElementById("scene-bg");
const mainScreen = document.getElementById("main-screen");


console.log("sceneBg:", sceneBg);

function renderHitmap(scene) {
  hitmap.innerHTML = "";

  scene.objects.forEach(obj => {
    if (!obj.polygon || !obj.visible) return;

    const poly = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );

    const points = obj.polygon
      .map(p => `${p.x},${p.y}`)
      .join(" ");

    poly.setAttribute("points", points);
    poly.setAttribute("data-id", obj.id);

    poly.addEventListener("click", e => {
      e.stopPropagation();
      obj.onClick(game);
    });

    hitmap.appendChild(poly);
  });
}

const objectLayer = document.getElementById("object-layer");

function renderObjects(scene) {
  objectLayer.innerHTML = "";

  scene.objects.forEach(obj => {
    if (!obj.visible || !obj.image) return;

    const img = document.createElement("img");
    img.src = obj.image;
    img.className = "env-object";

    img.style.left = obj.position.x + "px";
    img.style.top = obj.position.y + "px";
    img.style.width = obj.position.width + "px";
    img.style.height = obj.position.height + "px";

    objectLayer.appendChild(img);
  });
}



game.loadScene(hospitalRoomIdle);
