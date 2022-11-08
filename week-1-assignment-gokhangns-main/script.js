// Cookie
// Bir storage yöntemidir.
// En sık kullanılan storage yöntemlerinden biridir. 
// Bilgiler client tarafında saklanır bu yüzden yük clientlardadır. Client kendi cookie bilgisini tutmakta. 
//Chrome da tutulan cookie başka tarayıcıya geçildiğinde tekrardan cookie tanımlanması gerekmektedir. 


//get
//example
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


//set
//example
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


// Session Storage
// Local storage ile aynı mantıkla çalışmakla birlikte tarayıcıyı kapattığımızda bize ait cookie silinmesi.
// Kalıcı olarak cookie tutabilir. Client tarafından tarayıcıda tutulur.

// get
// set
//example

let userMessage = prompt('please write your message');
sessionStorage.setItem('company', userMessage);
console.log(sessionStorage.getItem('company'));

localStorage.setItem('company', userMessage);
console.log(localStorage.getItem('company'));
