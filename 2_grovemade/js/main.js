window.onload = function () {
  document.getElementById('subscribe').style.visibility = 'hidden';
};
function showButton() {
  document.getElementById('subscribe').style.visibility = 'visible';
}

let btnUp = document.getElementById('up');
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
