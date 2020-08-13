window.onscroll = function() {myFunction()};

function myFunction() {
  	if (document.documentElement.scrollTop > 10) {
  		document.getElementById("navegation").classList.add("scroll-nav");
  		document.getElementById("imgLogo").classList.add("scroll-logo");

  	} else {
  		document.getElementById("navegation").classList.remove("scroll-nav");
  		document.getElementById("imgLogo").classList.remove("scroll-logo");
  	}
}

