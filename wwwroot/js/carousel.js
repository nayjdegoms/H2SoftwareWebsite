window.clientsCarousel = {
  getVisibleSlides: function() {
    if (window.matchMedia("(max-width: 767.98px)").matches) {
      return 1;
    }

    if (window.matchMedia("(max-width: 991.98px)").matches) {
      return 2;
    }

    return 3;
  }
};
