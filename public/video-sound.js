(function () {
  "use strict";
  
  var $toggleAudio = document.getElementById( 'toggle-audio' );
  var $video = document.querySelector( 'video' );
  
  $toggleAudio.disabled = false;
  $toggleAudio.addEventListener( 'click', function ( event ) {
    if ( $video.muted ) {
      $video.muted = false;
      $toggleAudio.textContent = $toggleAudio.dataset.audibleIcon;
    } else {
      $video.muted = true;
      $toggleAudio.textContent = $toggleAudio.dataset.mutedIcon;
    }
  } )
})();