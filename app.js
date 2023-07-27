window.addEventListener("load", function (event) {
  const accordion = document.getElementsByClassName("has-sub");
  let lastClicked = null;

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      // Remove "active" class from all elements
      for (j = 0; j < accordion.length; j++) {
        accordion[j].classList.remove("active");
      }
      // Add or remove "active" class from the current element
      if (this === lastClicked) {
        lastClicked = null;
      } else {
        this.classList.add("active");
        lastClicked = this;
        if (
          document
            .getElementById("navigation-drawer")
            .classList.contains("collapse")
        ) {
          document
            .getElementById("navigation-drawer")
            .classList.toggle("collapse");
            document
      .getElementById("navigation-drawer-toggle")
      .classList.toggle("show");
        }
      }
    });
  }

  let button = document.getElementById("button-collapse");
  let sideBar = document.getElementById("navigation-drawer");

  button.onclick = () => {
    sideBar.classList.toggle("collapse");
    document
      .getElementById("navigation-drawer-toggle")
      .classList.toggle("show");
  };

  let toggleMenu = document.getElementById("navigation-drawer-toggle");

  toggleMenu.onclick = () => {
    sideBar.classList.toggle("hide");
  };

  let toggleMenuMain = document.getElementById("navigation-drawer-button");
  toggleMenuMain.onclick = () => {
    sideBar.classList.toggle("hide");
  };

});
