

var checkExist = setInterval(function() {
    if (document.getElementsByClassName('_2cNrC').length) {
       document.querySelector('._2cNrC').style.display = 'none';
       clearInterval(checkExist);
    }
 }, 100)
