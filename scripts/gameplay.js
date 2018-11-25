
const gameplay = {

  loadGameplay() {
    webpage.innerHTML = null;
    const activeUser = sessionStorage.getItem("activeUserId");
    // const xButton = elBuilder("button", { "class": "delete" });
    // xButton.addEventListener("click", closeBox, event); // button will display: none on parent container
    // const headerInfo = elBuilder("div", { "class": "notification is-info" }, "Create and save shots - then save the game record.", xButton);
    // webpage.appendChild(headerInfo);
    this.buildContainers();
  },

  buildContainers() {
    // important classes: level, level-left, level-item

    // new shot and save shot buttons
    const shotButtons = elBuilder("div", { "id": "shotControls", "class": "level-item buttons" });
    const alignShotButtons = elBuilder("div", { "class": "level-left" }, null, shotButtons);
    const shotButtonContainer = elBuilder("div", { "class": "level" }, null, alignShotButtons);

    // ball speed input and aerial checkbox
    const ballSpeedInputTitle = elBuilder("div", {"class":"level-item"}, "Ball speed (kph):")
    const ballSpeedInput = elBuilder("input", {"id":"ballSpeedInput", "class":"level-item input", "placeholder":"enter ball speed"})
    const aerialCbx = elBuilder("input", {"id":"aerialInput", "class":"checkbox", "type":"checkbox"});
    const aerialCbxLabel = elBuilder("label", {"class":"checkbox level-item"}, "Aerial", aerialCbx)
    const shotDetails = elBuilder("div", {"class":"level-left"}, null, ballSpeedInputTitle, ballSpeedInput, aerialCbxLabel)
    const shotDetailsContainer = elBuilder("div", { "class": "level" }, null, shotDetails);

    // field and goal images

    // parent container holding all shot information
    const parentShotContainer = elBuilder("div", {"class": "container box"}, null, shotButtonContainer, shotDetailsContainer)

    webpage.appendChild(parentShotContainer);

    // const levelLeft2 = elBuilder("div", {"id":"", "class":"level-left"});
    // const levelRight2 = elBuilder("div", {"id":"", "class":"level-right"});
    // const levelContainer2 = elBuilder("div", {"class":"level container box"}, null, levelLeft2, levelRight2);
    // webpage.appendChild(levelContainer2);

    // const levelLeft3 = elBuilder("div", {"id":"", "class":"level-left"});
    // const levelRight3 = elBuilder("div", {"id":"", "class":"level-right"});
    // const levelContainer3 = elBuilder("div", {"class":"level container box"}, null, levelLeft3, levelRight3);
    // webpage.appendChild(levelContainer3);

    // // see commented HTML at bottom of this file to understand format
    // const p3child1 = elBuilder("div", { "id": "gameDetails", "class": "tile is-child box" }, "#4")
    // const group1_sub2 = elBuilder("div", { "class": "tile is-parent" }, null, p3child1);

    // const p2child1 = elBuilder("div", { "id": "shotDetails", "class": "tile is-child box" })
    // const p2child2 = elBuilder("div", { "id": "field", "class": "tile is-child box has-text-centered" })
    // const p2child3 = elBuilder("div", { "id": "goal", "class": "tile is-child box" }, "#3.2")
    // const parent2 = elBuilder("div", { "class": "tile is-parent is-vertical" }, null, p2child1, p2child2, p2child3);

    // const p1child1 = elBuilder("div", { "id": "shotNewSave", "class": "tile is-child box has-text-centered" })
    // const p1child2 = elBuilder("div", { "id": "shotButtons", "class": "tile is-child box has-text-centered" })
    // const parent1 = elBuilder("div", { "class": "tile is-parent is-vertical is-2" }, null, p1child1, p1child2);

    // const group1_sub = elBuilder("div", { "class": "tile" }, null, parent1, parent2);
    // const group1 = elBuilder("div", { "class": "tile is-vertical" }, null, group1_sub, group1_sub2);

    // const ancestor = elBuilder("div", { "class": "tile is-ancestor" }, null, group1);

    // webpage.appendChild(ancestor);
    this.addContent();
  },

  addContent() {
    const shotBtns1 = document.getElementById("shotControls");
    const shotBtns2 = document.getElementById("shotButtons");
    const shotDetails = document.getElementById("shotDetails");
    const field = document.getElementById("field");
    const goal = document.getElementById("goal");
    const gameDetails = document.getElementById("gameDetails");
    const testColumn = document.getElementById("test-column")

    // new shot and save shot buttons
    const newShot = elBuilder("button", { "id": "newShot", "class": "button is-success" }, "New Shot");
    const saveShot = elBuilder("button", { "id": "saveShot", "class": "button is-success" }, "Save Shot");
    const shot1 = elBuilder("button", { "id": "editGame", "class": "button is-link", "title": "Click to edit" }, "Shot 1");
    const shot2 = elBuilder("button", { "id": "editGame", "class": "button is-link" }, "Shot 2");
    // const editGame = elBuilder("button", { "id": "editGame", "class": "button is-danger" }, "Edit Previous Game");

    shotBtns1.appendChild(newShot);
    shotBtns1.appendChild(saveShot);
    shotBtns1.appendChild(shot1);
    shotBtns1.appendChild(shot2);


    /*
        // shot number button header
        const shotTitle = elBuilder("p", { "class": "title is-5" }, "Manage Shots")
        shotBtns2.appendChild(shotTitle);

        // ball speed and aerial checkbox
        const ballSpeedInput = elBuilder("input", { "id": "ballSpeedInput", "class": "input", "type": "text", "placeholder": "enter ball speed (kph)" })
        const aerialCbx = elBuilder("input", { "id": "aerialInput", "class": "checkbox", "type": "checkbox" });
        const aerialCbxLabel = elBuilder("label", { "class": "checkbox" }, "Aerial ", aerialCbx)
        shotDetails.appendChild(aerialCbxLabel);
        shotDetails.appendChild(ballSpeedInput);

        // field images for car position
        const fieldImageContainer = elBuilder("div", { "id": "field-img-container", "class": "container" });
        const fieldImageBackground = elBuilder("img", { "id": "field-img-background", "src": "../images/DFH_stadium_BW90deg.png", "alt": "DFH Stadium", "style": "height: 100%; width: 100%; object-fit: contain" });
        const fieldImageClipped = elBuilder("img", { "id": "field-img-clipped", "src": "../images/DFH_stadium_BW90deg.png", "alt": "DFH Stadium", "style": "height: 100%; width: 100%; object-fit: contain" });
        fieldImageContainer.appendChild(fieldImageBackground);
        fieldImageContainer.appendChild(fieldImageClipped);
        field.appendChild(fieldImageContainer);
    */
  }

}

/* ---------- Tile format ---------- */
// <div class="tile is-ancestor">
//  <div class="tile is-vertical">
  //   <div class="tile">
  //     <div class="tile is-parent is-vertical is-2">
  //       <article class="tile is-child box">
  //         #1
  //       </article>
  //       <article class="tile is-child box">
  //         #2
  //       </article>
  //     </div>
  //     <div class="tile is-parent is-vertical">
  //       <article class="tile is-child box">
  //         #3
  //       </article>
  //       <article class="tile is-child box">
  //         #3
  //       </article>
  //       <article class="tile is-child box">
  //         #3
  //       </article>
  //     </div>
  //   </div>
  //   <div class="tile is-parent">
  //     <article class="tile is-child box">
  //       #4
  //     </article>
  //   </div>
//  </div>
// </div>