function showCopyright() {var currentYear = new Date().getFullYear();var output = '<p><strong>Copyright © ' + currentYear + '</strong> Christopher Aytona. All Rights Reserved.</p>';document.getElementById("copyright").innerHTML = output;}$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip();});$(document).ready(function(){$(window).scroll(function(){if ($(this).scrollTop() > 30) {$('.scrollToTop').fadeIn();} else {$('.scrollToTop').fadeOut();}});$('.scrollToTop').click(function(){$('html, body').animate({scrollTop : 0},800);return false;});});
