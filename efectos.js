
$(function ()
{
	$('nav ul li a').on('click', function(mover)
	{
		mover.preventDefault();
		var strAncla=$(this).attr('href');

		$('body, html').stop(true,true).animate({
			scrollTop: $(strAncla).offset().top
		}, 1000);
	});
});

$(document).on("ready", inicio);

function inicio()
{
		$("#s-acercade").on("click", acercade);
		$("#s-contacto").on("click", contacto);
		$("#s-portafolio").on("click", portafolio);

}

