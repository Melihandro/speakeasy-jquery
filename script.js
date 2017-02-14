var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
     var text = $('#todo').val();
     var html = template(text);
     $('.list').append(html);
    $('#todo').val('Add item');

    return false;  
  });
  
    $(document).on('click', '.glyphicon-star', function(){
      $(this).toggleClass('active');
    });
};

	$(document).on('click', '.glyphicon-remove', function() {
    
    $(this).parent().remove();
    
    });

 var showFlickr = function(term) {
  var url = 'http://api.flickr.com/services/rest/?tags='+tag;
  $.getJSON(url);
};

var commands = {
  // Let's define our first command. First the command we expect, and then the function it should call   
  // annyang will capture anything after a splat (*) and pass it to the function.
  // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
  'add *term': showFlickr,
};

// Add our commands to annyang
annyang.addCommands(commands);

// Start listening
annyang.start();

$(document).ready(main);