function showModal(img) {
    console.log(" # # # FUNCTION showModal "+img);
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var modalImg = document.getElementById("modalImg");
    modalImg.src = img.src;
    var modalCaption = document.getElementById("modalCaption");
    modalCaption.innerHTML = img.alt;
}
// Get the image and enable modal functionality: on click insert it inside modal and use alt text as caption
var imgs = ["myImg01","myImg02","myImg03","myImg04", "myImg05","myImg06","myImg07","myImg08"];
imgs.forEach(function(imgId) {
console.log(" # # # ANONYMOUS FUNCTION imgs.foreach(function("+imgId+"){})");
    var img = document.getElementById(imgId);
    img.onclick = function(event) {
  		document.getElementById("navegation").style.visibility = "hidden";
        showModal(event.target);
    }
});

// Get the <span> element that closes the modal, no matter which image is being viewed
var span = document.getElementById("closeModal");

// When the user clicks on <span> (x), close the modal, no matter which image is being viewed
span.onclick = function() { 
	document.getElementById("navegation").style.visibility = "visible";
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

window.onscroll = function() {scrollFunction()};

window.onresize = function() {windowResize()};


function windowResize(){
	if (window.innerWidth < 992) {
		document.getElementById("eventosRealizados").classList.remove("submenu");
		document.getElementById("eventosRealizados").classList.remove("submenu-left");
		document.getElementById("eventosRealizados").classList.add("dropdown-menu");
		document.getElementById("eventosProximos").classList.remove("submenu");
		document.getElementById("eventosProximos").classList.remove("submenu-left");
		document.getElementById("eventosProximos").classList.add("dropdown-menu");
		document.getElementById("navegation").classList.add("overflow-auto");
	}else {
		document.getElementById("eventosRealizados").classList.add("submenu");
		document.getElementById("eventosRealizados").classList.add("submenu-left");
		document.getElementById("eventosRealizados").classList.remove("dropdown-menu");
		document.getElementById("eventosProximos").classList.add("submenu");
		document.getElementById("eventosProximos").classList.add("submenu-left");
		document.getElementById("eventosProximos").classList.remove("dropdown-menu");
		document.getElementById("navegation").classList.remove("overflow-auto");
	}
}

window.onload=function(){
	if (document.documentElement.scrollTop > 10) {
		document.getElementById("IEEESubmenu").classList.add("scroll-nav");
		document.getElementById("IEEEUnillanosSubmenu").classList.add("scroll-nav");
		document.getElementById("objetivosSubmenu").classList.add("scroll-nav");
		document.getElementById("misionVisionSubmenu").classList.add("scroll-nav");
		document.getElementById("historiaSubmenu").classList.add("scroll-nav");
		document.getElementById("navegation").classList.add("scroll-nav");
		document.getElementById("nacimientoSubmenu").classList.add("scroll-nav");
		document.getElementById("primerJSubmenu").classList.add("scroll-nav");
		document.getElementById("primerRSubmenu").classList.add("scroll-nav");
		document.getElementById("segundaRSubmenu").classList.add("scroll-nav");
		document.getElementById("juntaASubmenu").classList.add("scroll-nav");
		document.getElementById("pesSubmenu").classList.add("scroll-nav");
		document.getElementById("iasSubmenu").classList.add("scroll-nav");
		document.getElementById("rasSubmenu").classList.add("scroll-nav");
		document.getElementById("aessSubmenu").classList.add("scroll-nav");
		document.getElementById("wieSubmenu").classList.add("scroll-nav");
		document.getElementById("realizadosSubmenu").classList.add("scroll-nav");
		document.getElementById("2017Submenu").classList.add("scroll-nav");
		document.getElementById("2018ISubmenu").classList.add("scroll-nav");
		document.getElementById("2018IISubmenu").classList.add("scroll-nav");
		document.getElementById("2019ISubmenu").classList.add("scroll-nav");
		document.getElementById("2019IISubmenu").classList.add("scroll-nav");
		document.getElementById("2020ISubmenu").classList.add("scroll-nav");
		document.getElementById("proximosSubmenu").classList.add("scroll-nav");
		document.getElementById("2020IProximoSubmenu").classList.add("scroll-nav");
		document.getElementById("2020IIProximoSubmenu").classList.add("scroll-nav");
		document.getElementById("sightSubmenu").classList.add("scroll-nav");
		document.getElementById("imgLogo").classList.add("scroll-logo");

	} else {
		document.getElementById("IEEESubmenu").classList.remove("scroll-nav");
		document.getElementById("IEEEUnillanosSubmenu").classList.remove("scroll-nav");
		document.getElementById("objetivosSubmenu").classList.remove("scroll-nav");
		document.getElementById("misionVisionSubmenu").classList.remove("scroll-nav");
		document.getElementById("historiaSubmenu").classList.remove("scroll-nav");
		document.getElementById("navegation").classList.remove("scroll-nav");
		document.getElementById("nacimientoSubmenu").classList.remove("scroll-nav");
		document.getElementById("primerJSubmenu").classList.remove("scroll-nav");
		document.getElementById("primerRSubmenu").classList.remove("scroll-nav");
		document.getElementById("segundaRSubmenu").classList.remove("scroll-nav");
		document.getElementById("juntaASubmenu").classList.remove("scroll-nav");
		document.getElementById("pesSubmenu").classList.remove("scroll-nav");
		document.getElementById("iasSubmenu").classList.remove("scroll-nav");
		document.getElementById("rasSubmenu").classList.remove("scroll-nav");
		document.getElementById("aessSubmenu").classList.remove("scroll-nav");
		document.getElementById("wieSubmenu").classList.remove("scroll-nav");
		document.getElementById("realizadosSubmenu").classList.remove("scroll-nav");
		document.getElementById("2017Submenu").classList.remove("scroll-nav");
		document.getElementById("2018ISubmenu").classList.remove("scroll-nav");
		document.getElementById("2018IISubmenu").classList.remove("scroll-nav");
		document.getElementById("2019ISubmenu").classList.remove("scroll-nav");
		document.getElementById("2019IISubmenu").classList.remove("scroll-nav");
		document.getElementById("2020ISubmenu").classList.remove("scroll-nav");
		document.getElementById("proximosSubmenu").classList.remove("scroll-nav");
		document.getElementById("2020IProximoSubmenu").classList.remove("scroll-nav");
		document.getElementById("2020IIProximoSubmenu").classList.remove("scroll-nav");
		document.getElementById("sightSubmenu").classList.remove("scroll-nav");
		document.getElementById("imgLogo").classList.remove("scroll-logo");
	}
	if (window.innerWidth < 992) {
		document.getElementById("eventosRealizados").classList.remove("submenu");
		document.getElementById("eventosRealizados").classList.remove("submenu-left");
		document.getElementById("eventosRealizados").classList.add("dropdown-menu");
		document.getElementById("eventosProximos").classList.remove("submenu");
		document.getElementById("eventosProximos").classList.remove("submenu-left");
		document.getElementById("eventosProximos").classList.add("dropdown-menu");
		document.getElementById("navegation").classList.add("overflow-auto");
	}else {
		document.getElementById("eventosRealizados").classList.add("submenu");
		document.getElementById("eventosRealizados").classList.add("submenu-left");
		document.getElementById("eventosRealizados").classList.remove("dropdown-menu");
		document.getElementById("eventosProximos").classList.add("submenu");
		document.getElementById("eventosProximos").classList.add("submenu-left");
		document.getElementById("eventosProximos").classList.remove("dropdown-menu");
		document.getElementById("navegation").classList.remove("overflow-auto");
	}
}

function scrollFunction() {
	if (document.documentElement.scrollTop > 10) {
		document.getElementById("IEEESubmenu").classList.add("scroll-nav");
		document.getElementById("IEEEUnillanosSubmenu").classList.add("scroll-nav");
		document.getElementById("objetivosSubmenu").classList.add("scroll-nav");
		document.getElementById("misionVisionSubmenu").classList.add("scroll-nav");
		document.getElementById("historiaSubmenu").classList.add("scroll-nav");
		document.getElementById("navegation").classList.add("scroll-nav");
		document.getElementById("nacimientoSubmenu").classList.add("scroll-nav");
		document.getElementById("primerJSubmenu").classList.add("scroll-nav");
		document.getElementById("primerRSubmenu").classList.add("scroll-nav");
		document.getElementById("segundaRSubmenu").classList.add("scroll-nav");
		document.getElementById("juntaASubmenu").classList.add("scroll-nav");
		document.getElementById("pesSubmenu").classList.add("scroll-nav");
		document.getElementById("iasSubmenu").classList.add("scroll-nav");
		document.getElementById("rasSubmenu").classList.add("scroll-nav");
		document.getElementById("aessSubmenu").classList.add("scroll-nav");
		document.getElementById("wieSubmenu").classList.add("scroll-nav");
		document.getElementById("realizadosSubmenu").classList.add("scroll-nav");
		document.getElementById("2017Submenu").classList.add("scroll-nav");
		document.getElementById("2018ISubmenu").classList.add("scroll-nav");
		document.getElementById("2018IISubmenu").classList.add("scroll-nav");
		document.getElementById("2019ISubmenu").classList.add("scroll-nav");
		document.getElementById("2019IISubmenu").classList.add("scroll-nav");
		document.getElementById("2020ISubmenu").classList.add("scroll-nav");
		document.getElementById("proximosSubmenu").classList.add("scroll-nav");
		document.getElementById("2020IProximoSubmenu").classList.add("scroll-nav");
		document.getElementById("2020IIProximoSubmenu").classList.add("scroll-nav");
		document.getElementById("sightSubmenu").classList.add("scroll-nav");
		document.getElementById("imgLogo").classList.add("scroll-logo");

	} else {
		document.getElementById("IEEESubmenu").classList.remove("scroll-nav");
		document.getElementById("IEEEUnillanosSubmenu").classList.remove("scroll-nav");
		document.getElementById("objetivosSubmenu").classList.remove("scroll-nav");
		document.getElementById("misionVisionSubmenu").classList.remove("scroll-nav");
		document.getElementById("historiaSubmenu").classList.remove("scroll-nav");
		document.getElementById("navegation").classList.remove("scroll-nav");
		document.getElementById("nacimientoSubmenu").classList.remove("scroll-nav");
		document.getElementById("primerJSubmenu").classList.remove("scroll-nav");
		document.getElementById("primerRSubmenu").classList.remove("scroll-nav");
		document.getElementById("segundaRSubmenu").classList.remove("scroll-nav");
		document.getElementById("juntaASubmenu").classList.remove("scroll-nav");
		document.getElementById("pesSubmenu").classList.remove("scroll-nav");
		document.getElementById("iasSubmenu").classList.remove("scroll-nav");
		document.getElementById("rasSubmenu").classList.remove("scroll-nav");
		document.getElementById("aessSubmenu").classList.remove("scroll-nav");
		document.getElementById("wieSubmenu").classList.remove("scroll-nav");
		document.getElementById("realizadosSubmenu").classList.remove("scroll-nav");
		document.getElementById("2017Submenu").classList.remove("scroll-nav");
		document.getElementById("2018ISubmenu").classList.remove("scroll-nav");
		document.getElementById("2018IISubmenu").classList.remove("scroll-nav");
		document.getElementById("2019ISubmenu").classList.remove("scroll-nav");
		document.getElementById("2019IISubmenu").classList.remove("scroll-nav");
		document.getElementById("2020ISubmenu").classList.remove("scroll-nav");
		document.getElementById("proximosSubmenu").classList.remove("scroll-nav");
		document.getElementById("2020IProximoSubmenu").classList.remove("scroll-nav");
		document.getElementById("2020IIProximoSubmenu").classList.remove("scroll-nav");
		document.getElementById("sightSubmenu").classList.remove("scroll-nav");
		document.getElementById("imgLogo").classList.remove("scroll-logo");
	}
}

function contacto(){
	alert("En el momento no se encuentra disponible el formulario, te invitamos a comunicarte a través de nuestras redes sociales. Estamos mejorando para ustedes.");
}
