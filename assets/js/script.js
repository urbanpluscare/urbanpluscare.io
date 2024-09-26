
emailjs.init({
    publicKey: 'service_ffn3avr',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'urbanpluscare@gmail.com',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });
  function sendMail(){

    const name = document.getElementById("name").value;
    if(!name){     
        console.log ("please fill the form first");
    }else{
        emailjs.send("service_ffn3avr","template_1egrq4k",{
            from_name: document.getElementById('name').value,
            email: document.getElementById('emails').value,
            phone_number: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            subject: document.getElementById('subject').value,
            }).then(
                (response) => {
                  console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                  console.log('FAILED...', error);
                },
              ); 
    }
};




