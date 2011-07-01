$.fn.removeDefaults = function()
{
	$(':input').each(function(){
		var data = $(this).data('label');
		if(data!=undefined){
			if(data==$(this).attr("value")){
				$(this).attr("value","");
			}
		}
	})
}

$.fn.fakeLabel = function()
{
  return $(this).each(function () {
	    $(this).attr("value", $(this).data("label"));
	  }).blur(function () {
	    if ($(this).attr("value") == "") {
	      $(this).removeClass('changed');
	      $(this).attr("value", $(this).data("label"));
	    } else if( $(this).attr('value') != $(this).data('label')) {
	      $(this).addClass('changed');
	    } else $(this).removeClass('changed');

	  }).focus(function () {
	    if ($(this).attr("value") == $(this).data("label")) {
	      $(this).attr("value", "");
	    }
	  }).submit(function () {
	    if ($(this).attr('value') == $(this).data('label')) {
	      $(this).attr('value') = '';
	    }
  });
}

