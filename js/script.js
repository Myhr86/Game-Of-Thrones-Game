fetch("characters.json")
  .then(result => result.json())
  .then((res) => {
    thronesInfo(res);
    })
  .catch(err => console.log(err))

function thronesInfo(result) {
  console.log(result[1302]);
  var characterArray = [result[1051], result[1302], result[582], result[1426], result[1934], result[1876], result[147], result[216], result[1345], result[956]];
  console.log(characterArray);
}
