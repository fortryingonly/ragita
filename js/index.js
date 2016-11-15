var navLinks = document.getElementsByClassName('nav-item'),
	
	modalMenu = document.querySelector('.menu-modal'),
	menuTrigger = document.getElementById('menu-trigger'),
	menuClose = document.getElementById('menu-close');

var body = document.body;

window.onload = function(){
	body.style.opacity = 1;
}

for (i=0; i < navLinks.length; i++) {
	navLinks[i].onclick = function(){
		document.body.style.opacity = 0;
	}
}

menuTrigger.onclick = function(){
	modalMenu.classList.remove('is-hidden');
}

menuClose.onclick = function(){
	modalMenu.classList.add('is-hidden');	
}

var nav = document.getElementById('nav'),
		navLogo = nav.getElementsByTagName('img');

window.onscroll = function(){
	if(body.scrollTop > 100){
		console.log('lol');
	}
	else{
		nav.classList.remove('nav-min-height');
	}
}
