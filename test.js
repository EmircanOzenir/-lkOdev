function spoilerFunction() {
    var x = document.getElementById("spoiler");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }