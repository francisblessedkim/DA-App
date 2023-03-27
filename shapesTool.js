function ShapeTool() {
    this.name = "Shape Tool";
    this.icon = "assets/shapes.png";
  
    // Set default values for shape properties
    this.shapeType = 'rectangle';
    this.shapeSize = 50;
    this.fillColor = color(255);
    this.strokeColor = color(0);
    this.strokeWeight = 1;
  
    // Keep track of the previous mouse position
    var previousMouseX = -1;
    var previousMouseY = -1;
  
    // Boolean to track whether a shape is currently being drawn
    var isDrawingShape = false;
  
    // Create a drop-down menu for selecting the shape type
    var shapeSelect = createSelect();
    shapeSelect.option('rectangle');
    shapeSelect.option('ellipse');
    shapeSelect.option('triangle');
    shapeSelect.position(500, 25);
  
    // Create a slider for adjusting the shape size
    var sizeSlider = createSlider(10, 100, this.shapeSize);
    sizeSlider.position(500, 40);
    sizeSlider.style('width', '80px');
  
    this.draw = function() {
  
      // Update the shape type based on the selected value in the drop-down menu
      this.shapeType = shapeSelect.value();
  
      // Update the shape size based on the slider value
      this.shapeSize = sizeSlider.value();
  
      // If the mouse is pressed, start drawing a shape
      if (mouseIsPressed && !isDrawingShape) {
        // Set the previous mouse position to the current position
        previousMouseX = mouseX;
        previousMouseY = mouseY;
        // Set the isDrawingShape variable to true
        isDrawingShape = true;
      }
  
      // If a shape is being drawn, draw it
      if (isDrawingShape) {
        // Set the fill and stroke colors and weight
        fill(this.fillColor);
        stroke(this.strokeColor);
        strokeWeight(this.strokeWeight);
        //background(255);
  
        // Draw a shape based on the current shape type
        switch (this.shapeType) {
          case 'rectangle':
            rect(previousMouseX, previousMouseY, mouseX - previousMouseX, mouseY - previousMouseY);
            break;
          case 'ellipse':
            ellipse(previousMouseX + (mouseX - previousMouseX) / 2, previousMouseY + (mouseY - previousMouseY) / 2, mouseX - previousMouseX, mouseY - previousMouseY);
            break;
          case 'triangle':
            triangle(previousMouseX, previousMouseY, previousMouseX + (mouseX - previousMouseX) / 2, mouseY, mouseX, mouseY);
            break;
          default:
            console.log("Invalid shape type.");
        }
      }
  
      // If the mouse is released, indicate that the shape is complete
      if (!mouseIsPressed && isDrawingShape) {
        // Set the isDrawingShape variable to false
        isDrawingShape = false;
      }
    }
  
  
    // Define the mouseReleased function to indicate that a shape is complete
    this.mouseReleased = function() {
      // Set the isDrawingShape variable to false
      isDrawingShape = false;
    }
  }
  