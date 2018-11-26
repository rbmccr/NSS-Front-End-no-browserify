
const gameplay = {

  loadGameplay() {
    webpage.innerHTML = null;
    const activeUser = sessionStorage.getItem("activeUserId");
    // const xButton = elBuilder("button", { "class": "delete" });
    // xButton.addEventListener("click", closeBox, event); // button will display: none on parent container
    // const headerInfo = elBuilder("div", { "class": "notification is-info" }, "Create and save shots - then save the game record.", xButton);
    // webpage.appendChild(headerInfo);
    this.buildShotContainers();
    this.buildGameContainers();
    this.addContainerContent();

  },

  buildShotContainers() {
    // this function builds containers and adds background images
    // important classes: level, level-left, level-item

    // container title
    const shotTitle = elBuilder("div", { "class": "level-item title is-4" }, "Enter Shot Data");
    const shotTitleContainer = elBuilder("div", { "class": "level" }, null, shotTitle);

    // new shot and save shot buttons
    const shotButtons = elBuilder("div", { "id": "shotControls", "class": "level-item buttons" });
    const alignShotButtons = elBuilder("div", { "class": "level-left" }, null, shotButtons);
    const shotButtonContainer = elBuilder("div", { "class": "level" }, null, alignShotButtons);

    // ball speed input and aerial checkbox
    const ballSpeedInputTitle = elBuilder("div", { "class": "level-item" }, "Ball speed (kph):")
    const ballSpeedInput = elBuilder("input", { "id": "ballSpeedInput", "class": "level-item input", "placeholder": "enter ball speed" });
    const aerialCbx = elBuilder("input", { "id": "aerialInput", "class": "checkbox", "type": "checkbox" });
    const aerialCbxLabel = elBuilder("label", { "class": "checkbox level-item" }, "Aerial", aerialCbx)
    const shotDetails = elBuilder("div", { "class": "level-left" }, null, ballSpeedInputTitle, ballSpeedInput, aerialCbxLabel);
    const shotDetailsContainer = elBuilder("div", { "class": "level" }, null, shotDetails);

    // field and goal images (note field-img is clipped to restrict click area coordinates in later function.
    // goal-img uses an x/y formula for click area coordinates restriction, since it's a rectangle)
    // additionally, field and goal are not aligned with level-left or level-right - it's a direct level --> level-item for centering
    const fieldImage = elBuilder("img", { "id": "field-img", "src": "../images/DFH_stadium_790x540_no_bg_90deg.png", "alt": "DFH Stadium", "style": "height: 100%; width: 100%; object-fit: contain" });
    const fieldImageBackground = elBuilder("img", { "id": "field-img-bg", "src": "../images/DFH_stadium_790x540_no_bg_90deg.png", "alt": "DFH Stadium", "style": "height: 100%; width: 100%; object-fit: contain" });
    const fieldImageParent = elBuilder("div", { "id": "field-img-parent", "class": "" }, null, fieldImageBackground, fieldImage);
    const alignField = elBuilder("div", { "class": "level-item" }, null, fieldImageParent);
    const goalImage = elBuilder("img", { "id": "goal-img", "src": "../images/RL_goal_cropped_no_bg_BW.png", "alt": "DFH Stadium", "style": "height: 100%; width: 100%; object-fit: contain" });
    const goalImageParent = elBuilder("div", { "id": "goal-img-parent", "class": "level" }, null, goalImage);
    const alignGoal = elBuilder("div", { "class": "level-item" }, null, goalImageParent);
    const shotCoordinatesContainer = elBuilder("div", { "class": "level" }, null, alignField, alignGoal);

    // parent container holding all shot information
    const parentShotContainer = elBuilder("div", { "class": "container box" }, null, shotTitleContainer, shotButtonContainer, shotDetailsContainer, shotCoordinatesContainer)

    // append shots container to page
    webpage.appendChild(parentShotContainer);
  },

  buildGameContent() {
    // this function creates the containers that hold game content (team, )

    // container title
    const gameTitle = elBuilder("div", { "class": "level-item title is-4" }, "Enter Game Data");
    const titleContainer = elBuilder("div", { "class": "level" }, null, gameTitle);

    // ---------- top container

    // 1v1/2v2/3v3 buttons (note: control class is used with field to adhere buttons together)
    const gameType3v3 = elBuilder("div", { "id": "_3v3", "class": "button" }, "3v3");
    const gameType3v3Control = elBuilder("div", { "id": "_3v3", "class": "control" }, null, gameType3v3);
    const gameType2v2 = elBuilder("div", { "id": "_2v2", "class": "button" }, "2v2");
    const gameType2v2Control = elBuilder("div", { "id": "_2v2", "class": "control" }, null, gameType2v2);
    const gameType1v1 = elBuilder("div", { "id": "_1v1", "class": "button" }, "1v1");
    const gameType1v1Control = elBuilder("div", { "id": "_1v1", "class": "control" }, null, gameType1v1);
    const gameTypeButtonContainer = elBuilder("div", { "class": "level-item field has-addons" }, null, gameType3v3Control, gameType2v2Control, gameType1v1Control);

    // team checkboxes
    const orangeCbx = elBuilder("input", { "id": "aerialInput", "class": "checkbox", "type": "checkbox" });
    const orangeTeamLabel = elBuilder("label", { "class": "checkbox level-item" }, "Orange Team", orangeCbx)
    const blueCbx = elBuilder("input", { "id": "aerialInput", "class": "checkbox", "type": "checkbox" });
    const blueTeamLabel = elBuilder("label", { "class": "checkbox level-item" }, "Blue Team", blueCbx)
    const teamCbxContainer = elBuilder("div", { "class": "level-item" }, null, orangeTeamLabel, blueTeamLabel);

    const gameContainerTop = elBuilder("div", { "class": "level" }, null, gameTypeButtonContainer, teamCbxContainer);

    // ---------- middle container


    const gameContainerBottom = elBuilder("div", { "class": "level" });


    const parentGameContainer = elBuilder("div", { "class": "container box" }, null, titleContainer, gameContainerTop)

    webpage.appendChild(parentGameContainer);
  },

  addContainerContent() {
    // this function creates and appends the user interactivity features to the containers (buttons, inputs, etc.)

    // new shot and save shot buttons
    const newShot = elBuilder("button", { "id": "newShot", "class": "button is-success" }, "New Shot");
    const saveShot = elBuilder("button", { "id": "saveShot", "class": "button is-success" }, "Save Shot");
    const cancelShot = elBuilder("button", { "id": "cancelShot", "class": "button is-danger" }, "Cancel Shot");
    const shot1 = elBuilder("button", { "id": "editGame", "class": "button is-link", "title": "Click to edit" }, "Shot 1");
    const shot2 = elBuilder("button", { "id": "editGame", "class": "button is-link" }, "Shot 2");

    // DOM container references
    const shotBtns = document.getElementById("shotControls");

    shotBtns.appendChild(newShot);
    shotBtns.appendChild(saveShot);
    shotBtns.appendChild(cancelShot);
    shotBtns.appendChild(shot1);
    shotBtns.appendChild(shot2);

    // const editGame = elBuilder("button", { "id": "editGame", "class": "button is-danger" }, "Edit Previous Game");

  }

}