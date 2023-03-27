function textTool() {
  this.icon = "assets/text.png";
  this.name = "Text";

  this.draw = function(val) {
    if (mouseIsPressed) {
      this.selectItem = select("#textbox");
      this.selectItem = this.selectItem.value();
      var s = this.selectItem;
      textSize(val);
      text(s, mouseX, mouseY);
    }
  };

  this.unselectTool = function() {
    select(".options").html("");
    strokeWeight(1);
  };

    this.populateOptions = function() {
  select(".options").html(
    "<label>Write Text</label><input type='text' id='textbox' name='text'>" +
    "<br><label>Text Size:</label><input type='range' id='text-size-slider' min='12' max='72' value='24'>"
  );

  var textTool = this;
  var textSizeSlider = select("#text-size-slider");
  textSizeSlider.input(function() {
    var val = textSizeSlider.value();
    textTool.draw(val);
  });
};

}
