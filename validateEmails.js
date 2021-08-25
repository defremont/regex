
function validateEmails() {
    console.log('Validating Emails START');
    let data = ["a@a.br", "andre@yahoo.br", "divulga@ufpa.br", "libero@egestasduisac.br"]
    let invalidData = ["@", "a@.br", "T@teste.br", "risus.Duis.a@mollisPhaselluslibero.edu", "nibh.dolor@dapibusid.com", "quam@Pellentesquehabitantmorbi.br", "cursus.a@br.br.elit.net", "teststring"]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /^[a-z]+@[a-z]+.br$/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating Emails END');

}
validateEmails();