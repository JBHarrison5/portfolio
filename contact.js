emailjs.init({
    publicKey: "Fae-Nc0i85iimBkiM",
});

function sendMail() {
    let params = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value
    }
    const serviceID = "service_i7ctr0k";
    const templateID = "template_ycki47a";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.querySelector('#firstName').value = "";
                document.querySelector('#firstName').value = "";
                document.querySelector('#firstName').value = "";
                document.querySelector('#firstName').value = "";
                console.log(res);
                alert("Thank you for your message");
            })
        .catch((err) => console.log(err));
}

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', () => {
    sendMail();
})