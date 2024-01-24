function sendEmail(){
   
    Email.send({
        
        Host : "smtp.elasticemail.com",
        Username : "vignesh020299@gmail.com",
        Password : "394ABBC0B95DC51DDC91088B7BB1490DE53D",
        To : 'theroyalassociates2022@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry ",
        Body : "Name:"+ document.getElementById("name").value
              +"<br> Email:"+ document.getElementById("email").value
              +"<br> Phone No:"+ document.getElementById("phone").value
              +"<br> Massage:"+ document.getElementById("text").value
    }).then(
      message  => alert("Massage send successfully")
    );
    
}

function btn(){
  alert("enter valid user id and password")
}