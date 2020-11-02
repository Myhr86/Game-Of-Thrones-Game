/* Connecting to API using jquery */
$.ajax({
  url: "https://noroffcors.herokuapp.com/https://github.com/joakimskoog/AnApiOfIceAndFire/blob/master/data/characters.json",
  success: function(result) {
    console.log(result)
  }
});
