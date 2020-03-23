//functions that toggle the visibility of individual sections
$( function() {
    var state = true;
    $( "#titleToggle1" ).on( "click", function() {
      if ( state ) {
        $( "#listToggle1" ).hide();
      } else {
        $( "#listToggle1" ).show();
      }
      state = !state;
    });
});

$( function() {
    var state = true;
    $( "#titleToggle2" ).on( "click", function() {
      if ( state ) {
        $( "#listToggle2" ).hide();
      } else {
        $( "#listToggle2" ).show();
      }
      state = !state;
    });
});

$( function() {
    var state = true;
    $( "#titleToggle3" ).on( "click", function() {
      if ( state ) {
        $( "#listToggle3" ).hide();
      } else {
        $( "#listToggle3" ).show();
      }
      state = !state;
    });
});