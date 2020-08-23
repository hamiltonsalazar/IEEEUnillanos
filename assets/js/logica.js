
window.onscroll = function() {scrollFunction()};

window.onresize = function() {windowResize()};

function windowResize(){
	if (window.innerWidth < 992) {
		document.getElementById("eventosRealizados").classList.remove("submenu");
		document.getElementById("eventosRealizados").classList.remove("submenu-left");
		document.getElementById("eventosRealizados").classList.add("dropdown-menu");
		document.getElementById("navegation").classList.add("overflow-auto");
	}else {
		document.getElementById("eventosRealizados").classList.add("submenu");
		document.getElementById("eventosRealizados").classList.add("submenu-left");
		document.getElementById("eventosRealizados").classList.remove("dropdown-menu");
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
		document.getElementById("wieSubmenu").classList.add("scroll-nav");
		document.getElementById("sightSubmenu").classList.add("scroll-nav");
		document.getElementById("realizadosSubmenu").classList.add("scroll-nav");
		document.getElementById("2017Submenu").classList.add("scroll-nav");
		document.getElementById("2018ISubmenu").classList.add("scroll-nav");
		document.getElementById("2018IISubmenu").classList.add("scroll-nav");
		document.getElementById("2019ISubmenu").classList.add("scroll-nav");
		document.getElementById("2019IISubmenu").classList.add("scroll-nav");
		document.getElementById("2020ISubmenu").classList.add("scroll-nav");
		document.getElementById("proximosSubmenu").classList.add("scroll-nav");
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
		document.getElementById("wieSubmenu").classList.remove("scroll-nav");
		document.getElementById("sightSubmenu").classList.remove("scroll-nav");
		document.getElementById("realizadosSubmenu").classList.remove("scroll-nav");
		document.getElementById("2017Submenu").classList.remove("scroll-nav");
		document.getElementById("2018ISubmenu").classList.remove("scroll-nav");
		document.getElementById("2018IISubmenu").classList.remove("scroll-nav");
		document.getElementById("2019ISubmenu").classList.remove("scroll-nav");
		document.getElementById("2019IISubmenu").classList.remove("scroll-nav");
		document.getElementById("2020ISubmenu").classList.remove("scroll-nav");
		document.getElementById("proximosSubmenu").classList.remove("scroll-nav");
		document.getElementById("imgLogo").classList.remove("scroll-logo");
	}
	if (window.innerWidth < 992) {
		document.getElementById("eventosRealizados").classList.remove("submenu");
		document.getElementById("eventosRealizados").classList.remove("submenu-left");
		document.getElementById("eventosRealizados").classList.add("dropdown-menu");
		document.getElementById("navegation").classList.add("overflow-auto");
	}else {
		document.getElementById("eventosRealizados").classList.add("submenu");
		document.getElementById("eventosRealizados").classList.add("submenu-left");
		document.getElementById("eventosRealizados").classList.remove("dropdown-menu");
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
		document.getElementById("wieSubmenu").classList.add("scroll-nav");
		document.getElementById("sightSubmenu").classList.add("scroll-nav");
		document.getElementById("realizadosSubmenu").classList.add("scroll-nav");
		document.getElementById("2017Submenu").classList.add("scroll-nav");
		document.getElementById("2018ISubmenu").classList.add("scroll-nav");
		document.getElementById("2018IISubmenu").classList.add("scroll-nav");
		document.getElementById("2019ISubmenu").classList.add("scroll-nav");
		document.getElementById("2019IISubmenu").classList.add("scroll-nav");
		document.getElementById("2020ISubmenu").classList.add("scroll-nav");
		document.getElementById("proximosSubmenu").classList.add("scroll-nav");
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
		document.getElementById("wieSubmenu").classList.remove("scroll-nav");
		document.getElementById("sightSubmenu").classList.remove("scroll-nav");
		document.getElementById("realizadosSubmenu").classList.remove("scroll-nav");
		document.getElementById("2017Submenu").classList.remove("scroll-nav");
		document.getElementById("2018ISubmenu").classList.remove("scroll-nav");
		document.getElementById("2018IISubmenu").classList.remove("scroll-nav");
		document.getElementById("2019ISubmenu").classList.remove("scroll-nav");
		document.getElementById("2019IISubmenu").classList.remove("scroll-nav");
		document.getElementById("2020ISubmenu").classList.remove("scroll-nav");
		document.getElementById("proximosSubmenu").classList.remove("scroll-nav");
		document.getElementById("imgLogo").classList.remove("scroll-logo");
	}
}

function contacto(){
	alert("En el momento no se encuentra disponible el formulario, te invitamos a comunicarte a través de nuestras redes sociales. Estamos mejorando para ustedes.");
}

function narvar(){
	if(window.innerWidth < 992 && !document.getElementById("navbarTogglerDemo01").classList.contains("show")){
		document.getElementById("navegation").classList.add("scroll-nav");
	}else if(window.innerWidth < 992 && document.getElementById("navbarTogglerDemo01").classList.contains("show") && (document.documentElement.scrollTop < 10)){
		document.getElementById("navegation").classList.remove("scroll-nav");
	}
}





function showModal(img) {
	//debugger;
	//console.log(" # # # FUNCTION showModal "+img);
	var modal = document.getElementById('myModal');
	modal.style.display = "block";
	var modalImg = document.getElementById("modalImg");
	modalImg.src = img.src;
	var modalCaption = document.getElementById("modalCaption");
	modalCaption.innerHTML = img.alt;
}



/*
var imgs = ["myImg00", "myImg01","myImg02","myImg03","myImg04", "myImg05","myImg06","myImg07","myImg08", "myImg09", "myImg10", "myImg11", "myImg12", "myImg13", "myImg14", "myImg15", "myImg16", "myImg17", "myImg18", "myImg19", "myImg20", "myImg21", "myImg22", "myImg23", "myImg24", "myImg25", "myImg26", "myImg27", "myImg28", "myImg29"];
imgs.forEach(function(imgId) {
	//debugger;
	//console.log(" # # # ANONYMOUS FUNCTION imgs.foreach(function("+imgId+"){})");
	var img = document.getElementById(imgId);
	if(img!=null){
		img.onclick = function(event) {
			document.getElementById("navegation").style.visibility = "hidden";
			showModal(event.target);
		}
	}
});*/



var imgs = [];
for (i = 0; i < 350; i++) {
	var x ="";
    if (i < 10) {
		x = "myImg0"+i;
    }else{
		x = "myImg"+i;
	}
	imgs.push(x);
}
/*
imgs.forEach((item, i) => {
	console.log(i+"\t"+item+typeof (item));
});

console.log(typeof(imgs));

// Get the image and enable modal functionality: on click insert it inside modal and use alt text as caption
var imgs = ["myImg00", "myImg01", "myImg02", "myImg03", "myImg04", "myImg05", "myImg06", "myImg07", "myImg08", "myImg09", "myImg10", "myImg11", "myImg12", "myImg13", "myImg14", "myImg15", "myImg16", "myImg17", "myImg18", "myImg19", "myImg20", "myImg21", "myImg22", "myImg23", "myImg24", "myImg25", "myImg26", "myImg27", "myImg28", "myImg29", "myImg30", "myImg31", "myImg32", "myImg33", "myImg34", "myImg35", "myImg36", "myImg37", "myImg38", "myImg39", "myImg40", "myImg41", "myImg42", "myImg43", "myImg44", "myImg45", "myImg46", "myImg47", "myImg48", "myImg49"];
*/

imgs.forEach(function(imgId) {
	//debugger;
	//console.log(" # # # ANONYMOUS FUNCTION imgs.foreach(function("+imgId+"){})");
	var img = document.getElementById(imgId);
	if(img!=null){
		img.onclick = function(event) {
			document.getElementById("navegation").style.visibility = "hidden";
			showModal(event.target);
		}
	}
});


// Get the <span> element that closes the modal, no matter which image is being viewed
var span = document.getElementById("closeModal");
if(span!=null){
	span.onclick = function(event) {
			closeModal(event.target);
	}
}



/*var spans = ["closeModal"];
spans.forEach(function(spanId){
	var span = document.getElementById(spanId);

});*/

function closeModal(span) {
	//console.log(" # # # FUNCTION showModal "+span);
	document.getElementById("navegation").style.visibility = "visible";
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
}
