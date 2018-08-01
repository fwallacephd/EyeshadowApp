function getColorData(){
  const baseUrl = "https://eyeshadowapp.firebaseio.com";
  const url = baseUrl + "/eyeshadow.json"; //Firebase url
  const verb = "GET"; //Get entry

  const params = {
    url: url,
    method: verb,
    // update the DOM
    success: function(data){
      console.log (data);
    }
  };
  $.ajax(params);
};

$(".palette").on("click", function (){
  console.log ("click");
  getColorData();
});
