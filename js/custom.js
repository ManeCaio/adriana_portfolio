(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

const showProjectsButton = document.querySelector('.btn-show-project');
const projectHidden = document.querySelectorAll('.projects:not(.active)');

showProjectsButton.addEventListener('click', () => {
    /* ----- Adicionar a classe "ativo" nos projetos escondidos -----*/
    projectHidden.forEach(projectHidden => {
        projectHidden.classList.add('active');
    });

    /* ----- Esconder o botão de "Mostrar Mais" ------*/
    showProjectsButton.classList.add("hidden");
});

document.getElementById('whatsappForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  
  const name = document.getElementById('fullname').value;
 
  const message = document.getElementById('message').value;

  // Formata a mensagem para ser enviada
  const formattedMessage = `Olá, meu nome é ${encodeURIComponent(name)}, ${encodeURIComponent(message)}`;
  const whatsappUrl = `https://wa.me/5521964735727?text=${formattedMessage}`;

  // Redireciona para o WhatsApp
  window.open(whatsappUrl, '_blank');
});