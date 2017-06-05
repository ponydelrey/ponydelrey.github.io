angular.module('BBApp').controller('galleryCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 400 + slides.length + 1;
    slides.push({
      image: ['modules/gallery/img/kk.jpg', 'modules/gallery/img/kk2.jpg', 'modules/gallery/img/kk3.jpg', 'modules/gallery/img/kk4.jpg', 'modules/gallery/img/kk5.jpg', 'modules/gallery/img/kk6.jpg', 'modules/gallery/img/kk7.jpg', 'modules/gallery/img/kk8.jpg', 'modules/gallery/img/kk9.jpg' ][slides.length % 9],
      text: [' ',' ',' ',' ', ' ', ' ', ' '][slides.length % 9],
      id: currIndex++
    }
    );
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 9; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
    return shit;
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});