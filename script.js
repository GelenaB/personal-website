$(document).ready(function () {
  $(document).on("scroll", onScroll);
  console.log('ready')
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
      console.log(this)
    })
    $(this).addClass('active');
    console.log('new', this)

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll (event) {
  console.log('scroll')
  var scrollPos = $(document).scrollTop();
  $('#header a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    console.log(refElement)
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menu-center ul li a').removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }
  });
}