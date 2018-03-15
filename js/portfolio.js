
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

//IMage pagination


    //var imageAlt = $('.img-thumbnail').attr("alt");

    $('.paginationImg').click(function(){


      var buttonHref = $(this).attr("href");
        //$('.as').hide();



        if (buttonHref === "#t1") {

            $('.img-thumbnail0').attr("src","icon/71appicon.png");



        }
       if (buttonHref === "#t2") {
          $('.img-thumbnail0').attr("src","icon/anothericonfoeapp.png");



        }
        if (buttonHref === "#t3") {

          $('.img-thumbnail0').attr("src","icon/latesign.png");

        }
        if (buttonHref === "#t4") {


          $('.img-thumbnail0').attr("src","icon/logo_by_shr.png");

        }
        if (buttonHref === "#t5") {
          $('.img-thumbnail0').attr("src","icon/trying.png");





        }
        if (buttonHref === "#t6") {
            $('.img-thumbnail0').attr("src","icon/Sicon.jpg");




        }
        if (buttonHref === "#t7") {

            $('.img-thumbnail0').attr("src","icon/calculator_page_header.png");



        }
        if (buttonHref === "#t8") {


            $('.img-thumbnail0').attr("src","icon/production.jpg");
              $('.img-thumbnail0').css({
                "width":"800px",
                "height":"500px"
              });

        }



    });

    //ENd pagination

    //Showing twxt on image hoverBox

    $('.img-thumbnail0').hover(function(){
      $('.textShow').show();
    },function(){
      $('.textShow').hide();
    });





});
