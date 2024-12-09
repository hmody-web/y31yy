

var setCookie = function (n, val) {
  var exdays = 30;
  var d = new Date();
  d.setTime(1932403882999);
  var expires = "expires=" + d.toGMTString();
  document.cookie = n + "=" + val + "; " + expires;

};

document.onclick = function (e) {
  if (e.target.className == 'click') {
      var bg =   document.getElementById('bdy').style.filter='invert(1)';
      setCookie('color', bg);
  
}
};

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

function getcolor() {

  console.log(getCookie("color"));
  if(getCookie("color") != ""){
      setCookie('color', getCookie("color"));
      document.body.style.filter = getCookie("color");
  }
  
};

