function getColorData(thisCombination){
  const baseUrl = "https://eyeshadowapp.firebaseio.com";
  const url = baseUrl + "/.json"; //Firebase url
  const verb = "GET"; //Get entry

  let params = {
    url: url,
    method: verb,
    // update the DOM
    success: function(data){
      $(".highlighter").text("Highlighter: " + data[thisCombination].Highlighter.Brand + " " + data[thisCombination].Highlighter.Palette + " " + data[thisCombination].Highlighter.Color);
      $(".medium").text("Medium: " + data[thisCombination].Medium.Brand + " " + data[thisCombination].Medium.Palette + " " + data[thisCombination].Medium.Color);
      $(".smokey").text("Smokey: " + data[thisCombination].Smokey.Brand + " " + data[thisCombination].Smokey.Palette + " " + data[thisCombination].Smokey.Color);
      $(".blender").text("Blender: " + data[thisCombination].Blender.Brand + " " + data[thisCombination].Blender.Palette + " " + data[thisCombination].Blender.Color);
    }
  };
  $.ajax(params);
};

function displayHeader(thisCombination){
  if (thisCombination === "RavenclawCombination") {
    $(".colorHeader").text("Ravenclaw Blue")
  } else if (thisCombination === "SlytherinCombination") {
    $(".colorHeader").text("Slytherin Green")
  } else if (thisCombination === "GryffindorCombination") {
    $(".colorHeader").text("Gryffindor Scarlet")
  } else if (thisCombination === "HufflepuffCombination") {
    $(".colorHeader").text("Hufflepuff Scarlet")
  }
};

$(".palette").on("click", function (){
  //get the value of the combination for the function in Firebase
  let thisCombination = $(this).attr("data-combination");
  //assign header
  displayHeader(thisCombination);
  //call the get color function
  getColorData(thisCombination);
});
