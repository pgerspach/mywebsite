const headerAnimateKeypoint = 500;

$(document).ready(() => {
  let headerKeypoint =
    $(window).scrollTop() >= headerAnimateKeypoint ? true : false;
  if (headerKeypoint) {
    $(".pageHeader").css("animation", "headerAnimateForwards 0s forwards");
    $(".socialIcons").css("animation", "animateSocialForward 0s forwards");
  } else {
    $(".pageHeader").css("animation", "headerAnimateReverse 0s forwards");
    $(".socialIcons").css("animation", "animateSocialReverse 0s forwards");
  }
  $(window).on("scroll", event => {
    if (
      $(window).scrollTop() >= headerAnimateKeypoint &&
      headerKeypoint === false
    ) {
      $(".pageHeader").css("animation", "headerAnimateForwards .8s forwards");
      $(".socialIcon").css("animation", "animateSocialForward 1s forwards");

      headerKeypoint = true;
    } else if (
      $(window).scrollTop() < headerAnimateKeypoint &&
      headerKeypoint === true
    ) {
      $(".pageHeader").css("animation", "headerAnimateReverse .8s forwards");
      $(".socialIcon").css("animation", "animateSocialReverse 1s forwards");

      headerKeypoint = false;
    }
  });

  $(".descButton").click(event => {
    if($(event.target)[0].localName === "i"){
      event.target = $(event.target)[0].parentElement;
    }
    $($(event.target.parentElement)[0].children[1]).css("display", $($(event.target.parentElement)[0].children[1]).css("display")==="none"?"flex":"none");
    $($(event.target.parentElement)[0].children[2]).css("display", $($(event.target.parentElement)[0].children[2]).css("display")==="none"?"flex":"none");
  });
});
