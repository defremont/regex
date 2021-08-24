
function validateNames() {
    console.log('Validating Names START');
    let data = ["Alan Turing", "Noam Chomsky", "Ada Lovelace"]
    let invalidData = ["1Alan", "Alan", "A1an", "A1an Turing"]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /[A-Z][a-z]+\s[A-Z][a-z]/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating Names END');

}
validateNames();