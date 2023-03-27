function PictureTool() {
    this.name = "PictureTool";
    this.icon = "assets/pictureTool.png";
    var img = null;
    var x1, y1, x2, y2;
    var slider;
  
    this.uploadButton = createFileInput(function(file) {
      if (file.type === 'image') {
        loadImage(file.data, function(loadedImg) {
          img = loadedImg;
        });
      }
      this.uploadButton.elt.style.right = "10px";
      this.uploadButton.elt.style.top = "10px";
    }.bind(this)); // bind the callback function to the current instance of PictureTool


  
    slider = createSlider(0.1, 2, 1, 0.1); // create a slider for image size
    slider.position(760, 4);
  
    this.draw = function() {
      if (img) {
        if (mouseIsPressed) {
          x1 = mouseX;
          y1 = mouseY;
          x2 = img.width * slider.value(); // change size based on slider value
          y2 = img.height * slider.value();
        }
        image(img, x1, y1, x2, y2);
      }
    }
  }
  