function getColorData(thisCombination){
  const baseUrl = "https://eyeshadowapp.firebaseio.com";
  const url = baseUrl + "/.json"; //Firebase url
  const verb = "GET"; //Get entry

  let params = {
    url: url,
    method: verb,
    // update the DOM
    success: function(data){
      console.log (data[thisCombination].Highlighter);
      $(".highlighter").text("Highlighter: " + data[thisCombination].Highlighter.Brand + " " + data[thisCombination].Highlighter.Palette + " " + data[thisCombination].Highlighter.Color);
      $(".medium").text("Medium: " + data[thisCombination].Medium.Brand + " " + data[thisCombination].Medium.Palette + " " + data[thisCombination].Medium.Color);
      $(".smokey").text("Smokey: " + data[thisCombination].Smokey.Brand + " " + data[thisCombination].Smokey.Palette + " " + data[thisCombination].Smokey.Color);
      $(".blender").text("Blender: " + data[thisCombination].Blender.Brand + " " + data[thisCombination].Blender.Palette + " " + data[thisCombination].Blender.Color);
    }
  };
  $.ajax(params);
};

$(".palette").on("click", function (){
  //get the value
  let thisCombination = $(this).attr("data-combination");
  //call the get color function
  getColorData(thisCombination);
});
