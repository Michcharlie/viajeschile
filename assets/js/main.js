
$(document).scroll(function(){
     const y = $("html").scrollTop();

     y > 300 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black")


})


$(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();
});


$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  
    $("#enviar").click(function () {
      alert("Gracias por contactarnos");
    });
  
    $(".enviar").dblclick(function () {
      $(this).css({
        color: "red !important",
      });
    });
  });

