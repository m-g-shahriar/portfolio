
$(function(){


  var imageBackground = ["icon/0.jpeg","icon/1.jpeg","icon/2.jpeg"];

  var count = 0;

  setInterval(function(){

      if (count == imageBackground.length) {
        count = 0;
      }

      $('.upperSectionIntro').css({
        "background":"linear-gradient(rgba(128,124,116,0.45),rgb(0,0,0)),url("+imageBackground[count++]+")no-repeat center center fixed",
        "background-size":"cover"
      });




  },6000);

  //Start Box showin


    $('.imgWebWidth').hover(function(){
        $(this).addClass('webImageBlur');
        $('.imgWebSample').children('.showingBoxWeb').show('fast');
      //$('.showingBoxWeb').show();

      var imageSrc = $(this).attr('src');

      $('.showingBoxWe').attr('src',imageSrc);


    },function(){
      $(this).removeClass('webImageBlur');
      $('.imgWebSample').children('.showingBoxWeb').hide('fast');
      //$('.showingBoxWeb').hide();
    });

    console.log("print this");

    //boxshowing on web dept hover ENd






});
