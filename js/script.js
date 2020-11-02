fetch("https://noroffcors.herokuapp.com/https://github.com/joakimskoog/AnApiOfIceAndFire/blob/master/data/characters.json")
  .then(result => result.json())
  .then((res) => {
    thronesInfo(res);
    })
  .catch(err => console.log(err))

function thronesInfo(result) {
  console.log(result);
}
