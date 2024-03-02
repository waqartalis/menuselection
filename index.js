function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  


//   Card Plus minus in shop//
var clicks = 0; $("#plus").click(function(){ clicks++; $('.figure').val(clicks);});

$("#minus").click(function(){ if (clicks > '0'){clicks--;} $('.figure').val(clicks);});

