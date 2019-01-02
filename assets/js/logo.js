
window.onscroll = function() {
  growShrinkLogo()
};

function growShrinkLogo() {
  var Logo = document.getElementById("Logo")
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    Logo.style.width = '100px';


  } else {
    Logo.style.width = '182px';
  }
}
