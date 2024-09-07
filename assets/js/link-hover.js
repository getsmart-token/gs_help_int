document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a:not(.btn):not(.td-navbar .nav-link)');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', function() {
        const bgColor = getComputedStyle(this).backgroundColor;
        const rgb = bgColor.match(/\d+/g);
        if (rgb) {
          const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
          this.classList.add(brightness > 125 ? 'text-dark-hover' : 'text-light-hover');
        }
      });
  
      link.addEventListener('mouseleave', function() {
        this.classList.remove('text-dark-hover', 'text-light-hover');
      });
    });
  });
  