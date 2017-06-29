$(document).ready(function(){
      //page
      $('.row').load('services.html');

      $('.nav_link').click(function(){
        var page = $(this).attr('href');
        $('.row').load(page);
        return false;
      });
    });