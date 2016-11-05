
( function( window ) {

  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  var hasClass, addClass, removeClass;

  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }

  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
  } else {
    // browser global
    window.classie = classie;
  }

  (function() {
      
    var bodyEl = document.body,
      content = document.querySelector( '.box' ),
      openbtn = document.getElementById( 'open-button' ),
      closebtn = document.getElementById( 'close-button' ),
      obtn_box = document.getElementById( 'btn_box' ),    
      aBtn = obtn_box.getElementsByTagName( 'a' ),  
      
      isOpen = false;
   
    function init() {
      initEvents();
    }

    function initEvents() {
      openbtn.addEventListener( 'touchstart', toggleMenu );
      if( closebtn ) {
        closebtn.addEventListener( 'touchstart', toggleMenu );
      }
      content.addEventListener( 'touchstart', function(ev) {
        var target = ev.target;
        if( isOpen && target !== openbtn ) {
          toggleMenu();
        }
      } );
    }

    function toggleMenu() {
      if( isOpen ) {
        classie.remove( bodyEl, 'show-menu' );
      }
      else {
        classie.add( bodyEl, 'show-menu' );
      }
      isOpen = !isOpen;
    }

    init();
    function show(){
        if( isOpen ) {
        classie.remove( bodyEl, 'show-menu' );
      }
      else {
        classie.add( bodyEl, 'show-menu' );
      }
      isOpen = !isOpen;
    } 
    aBtn[0].addEventListener( 'touchstart', show );
    aBtn[1].addEventListener( 'touchstart', show );
    aBtn[2].addEventListener( 'touchstart', show );
    aBtn[3].addEventListener( 'touchstart', show );
  })();
})( window );
