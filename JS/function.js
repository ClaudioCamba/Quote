
var color = ["#FFD90F", "#E65120", "#70D1FF", "#FF850C", "#83C33F", "#E65120"];
var i = 0;

$(document).ready(function() {
  $("#getMessage").on("click", function() { 
    $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(json) {
      json.forEach(function(val) {
        if (val.characterDirection == "Right" && val.character != "Rainier Wolfcastle") {
          $('.img-fluid').addClass('turn');
        } else {
          $('.img-fluid').removeClass('turn');
        }
        $('.img-fluid').hide().fadeIn(1000).attr("src", val.image).attr("alt", val.character);
        $('.quote').hide().fadeIn(1000).text(val.quote);
        $('.name').hide().fadeIn(1000).text("- " + val.character);
        $('blockquote img').hide().fadeIn(1000);
        $('a').attr("href", "https://twitter.com/intent/tweet?text=%22" + encodeURIComponent(val.quote + '." - ' + val.character + ' #Funny'));
        $('body,.link,#getMessage').css('backgroundColor', color[i]);
        $('#getMessage').blur();
      });
      if (i == 4) {
        i = 0;
      } else {
        i += 1;
      }
    });
  });
});
