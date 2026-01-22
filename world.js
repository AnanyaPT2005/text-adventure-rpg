const hospitalRoomIdle = {
  id: "hospital_idle",
  background: "images/hospitalroom_idle.png",
  objects: [
    new EnvironmentObject({
      id: "computer",
      name: "computer",
      image: "images/computer.png",
      x: 750,
      y: 250,
      width: 256,
      height: 192,
      polygon: [
        { x: 750,  y: 240 },  // top-left
        { x: 1006, y: 240 },  // top-right
        { x: 1006, y: 432 },  // bottom-right
        { x: 750,  y: 432 }   // bottom-left
      ],
      onClick(game) {
        console.log("COMPUTER CLICKED");
        game.loadScene(hospitalComputerClose);
      }
    }),

    new EnvironmentObject({
      id: "desk",
      name: "desk",
      image: "images/cabinet.png",
      x: 50,
      y: 200,
      width: 192,
      height: 256,
      polygon: [
        { x: 50,  y: 200 },  // top-left
  { x: 242, y: 200 },  // top-right
  { x: 242, y: 456 },  // bottom-right
  { x: 50,  y: 456 }
      ],
      onClick(game) {
        console.log("DESK CLICKED");
        game.loadScene(hospitalDeskClose);
      }
    }),

    

    new EnvironmentObject({
      id: "door",
      name: "metal door",
      image: "images/metal_door.jpg",
      x: 400,
      y: 170,
      width: 192,
      height: 265,
      polygon: [
        { x: 400, y: 150 },
    { x: 592, y: 150 },
    { x: 592, y: 450 },
    { x: 400, y: 450 }
      ],
      onClick(game) {
        console.log("DOOR CLICKED");
        game.showText("The door is locked by a security system.");
      }
    })
  ]
};

const hospitalDeskClose = {
  id: "hospital_desk",
  background: "images/cabinet_close.png",
  objects: [
    new EnvironmentObject({
      id: "drawer",
      name: "drawer",
      image: "images/drawer.png",
      x: 180,
      y: 280,
      width: 300,
      height: 80,
      polygon: [
        { x: 180, y: 280 },
        { x: 360, y: 280 },
        { x: 360, y: 360 },
        { x: 180, y: 360 }
      ],
      onClick(game) {
        game.takeItem("admin_card");
        game.takeItem("hard_drive");
        game.showText(
          "Inside the drawer, you find an admin card and a hard drive."
        );
      }
    }),
   
  ]
};


const hospitalComputerClose = {
  id: "hospital_computer",
  background: "images/computer_close.png",
  objects: []
};

