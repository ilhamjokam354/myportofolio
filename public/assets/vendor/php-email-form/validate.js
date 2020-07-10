/**
* PHP Email Form Validation - v2.0
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
!(function($) {
  "use strict";

  $('#send').click(function(e) {
    
    
    if(document.getElementById("name").value === "" || document.getElementById("email").value === "" || document.getElementById("message").value === ""){
      Swal.fire({
        icon : "error",
        title : "Maaf !",
        text : "Data Tidak Boleh Kosong"
      })
    }else{
        let template = {
            "name" : document.getElementById("name").value,
            "email" : document.getElementById("email").value,
            "message" : document.getElementById("message").value
        }
        emailjs.send('gmail', "template_Ie1LJUtP", {"reply_to" : JSON.stringify(template)}, 'user_Pm5ROUYGvDywjafxKZU5U')
            .then(function(response) {
              Swal.fire({
                icon : "success",
                title : "Berhasil !",
                text : "Pesan Berhasil Dikirim"
              })
            }, function(error) {
              Swal.fire({
                icon : "error",
                title : "Maaf !",
                text : "Pesan Gagal Dikirim"
              })
        });
          
  }
    
  });


})(jQuery);
