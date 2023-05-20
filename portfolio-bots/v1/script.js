let inviteme = document.getElementById('inviteme');

inviteme.addEventListener('click', function() {
  window.location.href = 'https://discord.com';
});


(function() {

  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(2000)
      .fadeOut(2000, showNextQuote);
  }

  showNextQuote();

})();
