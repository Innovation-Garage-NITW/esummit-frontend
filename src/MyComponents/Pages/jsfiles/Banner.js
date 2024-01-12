window.addEventListener('scroll', function() {
    parallax();
  });
  
  function parallax() {
    var scrolled = window.scrollY || document.documentElement.scrollTop;
    var hero = document.querySelector('.banner-body');
    hero.style.top = -(scrolled * 0.0315) + 'rem';
  }
  