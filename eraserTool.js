function eraserTool() {
    this.icon = "assets/eraser.png";
    this.name = "EraserTool";
    
    var prevMouseX = -1;
    var prevMouseY = -1;
    var drawing = false;
    
    var sizeSlider = createSlider(10, 100, 30);
    sizeSlider.position(500, 4);
    
    this.draw = function() {
      // Get the value of the size slider
      var size = sizeSlider.value();
      
      //if the mouse is pressed
      if(mouseIsPressed) {
        push();
        fill(255);
        noStroke();
        ellipse(mouseX, mouseY, size);
        loadPixels();
        updatePixels();
        pop();
      }
    }
  }
  