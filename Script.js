var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function darkMode() {
  konfirmasi = confirm('Apakah anda yakin memakai fitur Dark Mode?')
  if (konfirmasi) {
    document.body.style.backgroundColor= 'black'
    document.body.style.color = 'white'
  } else {
    document.body.style.backgroundColor= '#f8d2d7'
    document.body.style.color = 'black'
    
  }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  
  // menagmbil data 
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // program
  if (firstName && lastName && email && message) { 
    alert('Data Anda telah dikirim'); 
    document.getElementById('contactForm').reset();//unruk me-reset data

  } else {
    alert('Harap diisi semua'); 
  }
});