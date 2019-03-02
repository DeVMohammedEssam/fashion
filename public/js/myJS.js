/*global $, document*/
/* hiding the sign in section temporarly*/

/* end of hiding section*/

$(document).ready(function() {
  "use-strict";
  var xButton = $(".sign-in-window>button");
  /*close X */
  xButton.on("click", function() {
    xButton.parent().hide(100);
    /* hiding cover when clicking X*/
    $("div:eq(0)").fadeOut(200);
  });
  $("div:eq(0)").click(function() {
    "use-strict";
    xButton.parent().hide(100);
    $(".when-eye-clicked .close")
      .parent()
      .slideUp();
    /* hiding cover when clicking X*/
    $("div:eq(0)").fadeOut(200);
  });

  /* user pops sign*/
  $(".user").click(function() {
    "use strict";
    $(".sign-in-window,.back-cover").show();
  });
  /*end user pops sign*/

  /*end close X */

  /*sign in and up*/
  var signIn = $(".sign-in-button"),
    signUp = $(".sign-up-button");
  signUp.click(function() {
    signUp.removeClass("when-disabled");
    signIn.addClass("when-disabled");
    $(".hidden-input").show(50);
    $("section.sign-in-window").animate({ height: "450px" }, 50);
  });
  signIn.click(function() {
    signIn.removeClass("when-disabled");
    signUp.addClass("when-disabled");
    $(".hidden-input").hide(50);
    $("section.sign-in-window").animate({ height: "400px" }, 50);
  });

  /*search field showing*/
  var searchField = $(".search-field"),
    searchIcon = $("#search"),
    searchBoxCurrentWidth = $(".search-field").width();
  /* making the search field's first case hidden*/
  searchField.stop();
  $(" .search-field input, .search-field button").hide();
  searchField.animate({ width: "20px" }, 500, function() {
    searchField.slideUp(200);
  });
  /*end of it*/

  searchIcon.on("click", function() {
    "use strict";
    searchField.stop();
    if (searchField.width() < 21) {
      searchField.slideDown(200, function() {
        "use strict";
        searchField.animate({ width: searchBoxCurrentWidth }, 500, function() {
          "use strict";
          $(" .search-field input, .search-field button").show();
        });
      });
    } else {
      $(" .search-field input, .search-field button").hide();
      searchField.animate({ width: "20px" }, 500, function() {
        searchField.slideUp(200);
      });
    }
  });
  /* chiking if myactive is focus */
  var all_Li_Except_1st = $(".animated-pics .nav li:not(:first-child)"),
    myactive = $(".animated-pics .nav li:first-child");
  all_Li_Except_1st.on("click", function() {
    "use strict";
    myactive.removeClass("myactive");
  });

  myactive.on("click", function() {
    "use strict";
    myactive.addClass("myactive");
  });

  /* click show function for panels*/
  $("#skirts,#watches,#sandals,#jewellery").hide();
  function clickShow(tabLi, contentID) {
    "use strict";
    var allContentIDs = $("#tshirts,#skirts,#watches,#sandals,#jewellery");

    $(tabLi).click(function() {
      "use strict";
      allContentIDs.hide();
      contentID.show();
    });
  }

  clickShow($(".animated-pics .nav li:eq(0)"), $("#tshirts"));
  clickShow($(".animated-pics .nav li:eq(1)"), $("#skirts"));
  clickShow($(".animated-pics .nav li:eq(2)"), $("#watches"));
  clickShow($(".animated-pics .nav li:eq(3)"), $("#sandals"));
  clickShow($(".animated-pics .nav li:eq(4)"), $("#jewellery"));

  /*starting image shuffling*/
  /*img shuffling and eyeAnimate*/
  var objOfImgs = {
      tshirts: ["images/1.jpg", "images/2.jpg", "images/3.jpg"],
      skirts: ["images/4.jpg", "images/5.jpg", "images/6.jpg"],
      watches: ["images/7.jpg", "images/8.jpg", "images/9.jpg"],
      sandals: ["images/10.jpg", "images/11.jpg", "images/12.jpg"],
      jewellery: ["images/13.jpg", "images/14.jpg", "images/15.jpg"],

      skirtsII: ["images/16.jpg", "images/17.jpg", "images/18.jpg"],
      jackets: ["images/19.jpg", "images/20.jpg", "images/21.jpg"],
      dresses: ["images/22.jpg", "images/23.jpg", "images/24.jpg"],
      jeans: ["images/25.jpg", "images/23.jpg", "images/27.jpg"]
    },
    shadow,
    currentShadow,
    currentEyeIcon,
    currentImg,
    theWholePicContainer = $(".js-animate"),
    eyeIcon,
    divID,
    setcontainer,
    i = 0;
  /*eye and shadow animation*/
  $(theWholePicContainer).hover(
    function() {
      divID = $(this).attr("id");
      currentShadow = "#" + divID + " .fixing-cont div.shadow";
      shadow = $(currentShadow);

      currentEyeIcon = "#" + divID + " .eye";
      eyeIcon = $(currentEyeIcon);

      /*img shuffle function*/
      function imgShuffle() {
        var currentDiv = "#" + divID;
        currentImg = $(currentDiv)
          .children("div")
          .children("img")
          .first();
        if (
          $(currentDiv)
            .parent()
            .attr("id") === "tshirts"
        )
          currentImg.attr("src", objOfImgs.tshirts[i]);
        else if (
          $(currentDiv)
            .parent()
            .attr("id") === "skirts"
        )
          currentImg.attr("src", objOfImgs.skirts[i]);
        else if (
          $(currentDiv)
            .parent()
            .attr("id") === "watches"
        )
          currentImg.attr("src", objOfImgs.watches[i]);
        else if (
          $(currentDiv)
            .parent()
            .attr("id") === "sandals"
        )
          currentImg.attr("src", objOfImgs.sandals[i]);
        else if (
          $(currentDiv)
            .parent()
            .attr("id") === "jewellery"
        )
          currentImg.attr("src", objOfImgs.jewellery[i]);
        else if ($(currentDiv).attr("id") === "15")
          currentImg.attr("src", objOfImgs.skirtsII[i]);
        else if ($(currentDiv).attr("id") === "16")
          currentImg.attr("src", objOfImgs.jackets[i]);
        else if ($(currentDiv).attr("id") === "17")
          currentImg.attr("src", objOfImgs.dresses[i]);
        else if ($(currentDiv).attr("id") === "18")
          currentImg.attr("src", objOfImgs.jeans[i]);
      }

      /*repeating img shuffling*/
      setcontainer = setInterval(function() {
        imgShuffle();
        i++;
        if (i == 3) i = 0;
      }, 500);

      shadow.stop(true, false);
      eyeIcon.stop(true, false);

      shadow.show();
      shadow.animate({ left: "0" }, 300);
      eyeIcon.slideDown().animate({ top: "100px" });
      shadow.css("transform", "rotate(0deg)");
    },
    function() {
      divID = $(this).attr("id");
      currentShadow = "#" + divID + " .fixing-cont div.shadow";
      /* stopping img shuffling*/
      clearInterval(setcontainer);
      shadow = $(currentShadow);
      shadow.stop(true, false);
      eyeIcon.stop(true, false);
      eyeIcon.animate({ top: "-400px" }).slideUp();
      shadow
        .animate({ left: "400px" }, 300)
        .css({ transform: "rotate(-80deg)" });
    }
  ); /**/

  /*scrolling page to top*/
  $(".scroll-top button").click(function() {
    "use strict";
    $("body").animate({ scrollTop: "0" }, 200);
  });

  /* on eye click*/
  $(".eye").click(function() {
    "use strict";
    $(".back-cover").show();
    $(".when-eye-clicked").slideDown();
  });

  $(".when-eye-clicked .close").click(function() {
    "use strict";
    $(this)
      .parent()
      .slideUp();
    $(".back-cover").hide();
  });
});
