;(function() {

if (window.ECR === undefined) {
  window.ECR = {};
}

var elliotImageData = {
  className: "er-profile-photo",
  src: "http://elliot-c-reed-taskforce.s3.amazonaws.com/elliot-profile-photo.jpg",
  alt: "Photo of Elliot"
};

var asteroidsImageData = {
  className: 'img-responsive center-block',
  src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/asteroids-logo.png',
  alt: 'Asteroids logo'
};

var dominionImageData = {
  className: 'img-responsive center-block',
  src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/dominion-logo.png',
  alt: 'Dominion logo'
};

var chessImageData = {
  className: 'img-responsive center-block',
  src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/chess-logo-temp.png',
  alt: 'Chess logo'
};

var taskForceImageData = {
  className: 'img-responsive center-block',
  src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/logo-web.jpg',
  alt: 'TsakForce logo'
};

var img = React.createFactory('img');

var elliotProfile = img(elliotImageData);
var asteroidsLogo = img(asteroidsImageData);
var dominionLogo = img(dominionImageData);
var chessLogo = img(chessImageData);
var taskForceLogo = img(taskForceImageData);

ECR.photos = {
  dominion: dominionLogo,
  chess: chessLogo,
  asteroids: asteroidsLogo,
  taskForce: taskForceLogo,
  elliotProfile: elliotProfile,
};

ECR.loadImages = function() {
  var profilePhoto = new Image();
  profilePhoto.onload = preloadImages;
  profilePhoto.src = elliotImageData.src;
};

var preloadImages = function() {
  var imageData = [asteroidsImageData, chessImageData,
                   dominionImageData, taskForceImageData];
  imageData.map(function(data) {
    var image = new Image();
    image.src = data.src;
    return image;
  });
};

})();
