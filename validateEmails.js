
function validateEmails() {
    console.log('Validating Emails START');
    let data = ["a@a.br", "divulga@ufpa.br"]
    let invalidData = ["@", "a@.br", "T@teste.br"]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /[a-z]+@[a-z]+.br$/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating Emails END');

}
validateEmails();