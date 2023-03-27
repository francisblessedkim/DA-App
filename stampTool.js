function stampTool() {
    this.name = "Stamp";
    this.icon = "assets/stamp.png";
    
    var stampSizeSlider = 20;
    
    var stampSizeRange = document.getElementById("stampSizeRange");

    stampSizeRange.addEventListener("input", function() {
    stampSizeSlider = stampSizeRange.value;
    });
    
    //options for the drop down
    var stampSelect = document.getElementById("stampSelect");

    stampSelect.addEventListener("change", (event) => {
    var selectedValue = event.target.value;
    this.selectedImage = loadImage(selectedValue);
    });


    
    this.stampImage = ["assets/star.png", "assets/heart.png", "assets/sparkles.png"];
    
    this.selectedImage = loadImage("assets/star.png");
    

    this.draw = function() {
        if(mouseIsPressed) {
            var stampSize = stampSizeSlider * 3;
            var stampX = mouseX - stampSize/2;
            var stampY = mouseY - stampSize/2;
            image(this.selectedImage, stampX, stampY, stampSize, stampSize);
        }
    }

}