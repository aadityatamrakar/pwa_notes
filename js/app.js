$(document).ready(() => {
  $('#note').keyup(debounce(() => {
    localStorage.setItem("note", $(this).val());
    $("#flash").removeClass('hidden');
  }, 500));

  if (localStorage.getItem("note") && localStorage.getItem("note") != '') {
    var noteItem = localStorage.getItem("note")
    $('#note').val(noteItem);
  }
});

setInterval(() => {
  $("#flash").addClass('hidden');
}, 5000);

function debounce(func, wait, immediate) {
  var timeout;
  return () => {
    var context = this,
      args = arguments;
    var later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Registering ServiceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}