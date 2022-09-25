

var checkExist = setInterval(function() {
    if (document.querySelector('[data-testid="menu-bar-status"]') !== null) {
        document.querySelector('[data-testid="menu-bar-status"]').style.display = 'none';
       clearInterval(checkExist);
    }
 }, 100)

