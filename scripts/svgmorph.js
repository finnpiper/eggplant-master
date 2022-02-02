$(document).ready(function ($) {
  "use strict";
  var svg = document.getElementById("blobs"),
    s = Snap(svg),
    blobIntro = Snap.select('#blob-intro'),
    blobOne = Snap.select('#blob-1'),
    blobTwo = Snap.select('#blob-2'),
    blobThree = Snap.select('#blob-3'),
    blobFour = Snap.select('#blob-4'),
    blobFive = Snap.select('#blob-5'),
    blobSix = Snap.select('#blob-6'),
    blobSeven = Snap.select('#blob-7'),
    blobEight = Snap.select('#blob-8'),
    blobNine = Snap.select('#blob-9'),
    blobTen = Snap.select('#blob-10'),
    blobEleven = Snap.select('#blob-11'),
    blobTwelve = Snap.select('#blob-12'),
    blobThirteen = Snap.select('#blob-13'),
    blobFourteen = Snap.select('#blob-14'),

    blobOnePoints = blobOne.node.getAttribute('d'),
    blobTwoPoints = blobTwo.node.getAttribute('d'),
    blobThreePoints = blobThree.node.getAttribute('d'),
    blobFourPoints = blobFour.node.getAttribute('d'),
    blobFivePoints = blobFive.node.getAttribute('d'),
    blobSixPoints = blobSix.node.getAttribute('d'),
    blobSevenPoints = blobSeven.node.getAttribute('d'),
    blobEightPoints = blobEight.node.getAttribute('d'),
    blobNinePoints = blobNine.node.getAttribute('d'),
    blobTenPoints = blobTen.node.getAttribute('d'),
    blobElevenPoints = blobEleven.node.getAttribute('d'),
    blobTwelvePoints = blobTwelve.node.getAttribute('d'),
    blobThirteenPoints = blobThirteen.node.getAttribute('d'),
    blobFourteenPoints = blobFourteen.node.getAttribute('d'),

    toBlobOne = function () {
      blobIntro.animate({
        d: blobOnePoints
      }, 600, mina.easeout);
    },
    toBlobTwo = function () {
      blobIntro.animate({
        d: blobTwoPoints
      }, 600, mina.easeout);
    },
    toBlobThree = function () {
      blobIntro.animate({
        d: blobThreePoints
      }, 600, mina.easeout);
    },
    toBlobFour = function () {
      blobIntro.animate({
        d: blobFourPoints
      }, 600, mina.easeout);
    },
    toBlobFive = function () {
      blobIntro.animate({
        d: blobFivePoints
      }, 600, mina.easeout);
    },
    toBlobSix = function () {
      blobIntro.animate({
        d: blobSixPoints
      }, 600, mina.easeout);
    },
    toBlobSeven = function () {
      blobIntro.animate({
        d: blobSevenPoints
      }, 600, mina.easeout);
    },
    toBlobEight = function () {
      blobIntro.animate({
        d: blobEightPoints
      }, 600, mina.easeout);
    },
    toBlobNine = function () {
      blobIntro.animate({
        d: blobNinePoints
      }, 600, mina.easeout);
    },
    toBlobTen = function () {
      blobIntro.animate({
        d: blobTenPoints
      }, 600, mina.easeout);
    },
    toBlobEleven = function () {
      blobIntro.animate({
        d: blobElevenPoints
      }, 600, mina.easeout);
    },
    toBlobTwelve = function () {
      blobIntro.animate({
        d: blobTwelvePoints
      }, 600, mina.easeout);
    },
    toBlobThirteen = function () {
      blobIntro.animate({
        d: blobThirteenPoints
      }, 600, mina.easeout);
    },
    toBlobFourteen = function () {
      blobIntro.animate({
        d: blobFourteenPoints
      }, 600, mina.easeout);
    };

  $("#next-1").click(function () {
    toBlobOne();
  });
  $("#next-2").click(function () {
    toBlobTwo();
  });
  $("#next-3").click(function () {
    toBlobThree();
  });
  $("#next-4").click(function () {
    toBlobFour();
  });
  $("#next-5").click(function () {
    toBlobFive();
  });
  $("#next-6").click(function () {
    toBlobSix();
  });
  $("#next-7").click(function () {
    toBlobSeven();
  });
  $("#next-8").click(function () {
    toBlobEight();
  });
  $("#next-9").click(function () {
    toBlobNine();
  });
  $("#next-10").click(function () {
    toBlobTen();
  });
  $("#next-11").click(function () {
    toBlobEleven();
  });
  $("#next-12").click(function () {
    toBlobTwelve();
  });
  $("#next-13").click(function () {
    toBlobThirteen();
  });
  $("#next-14").click(function () {
    toBlobFourteen();
  });
});