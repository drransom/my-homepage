;(function() {

if (window.ECR === undefined) {
  window.ECR = {};
}

var img = React.createFactory('img');
var elliotProfile = img( {className: "er-profile-photo",
    src: "http://elliot-c-reed-taskforce.s3.amazonaws.com/elliot-profile-photo.jpg",
    alt: "Photo of Elliot"
});

var asteroidsLogo = img( {className: 'img-responsive center-block',
    src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/asteroids-logo.png',
    alt: 'Asteroids logo'});

var dominionLogo = img( {className: 'img-responsive center-block',
    src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/dominion-logo.png',
    alt: 'Dominion logo'});

var chessLogo = img( {className: 'img-responsive center-block',
    src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/chess-logo-temp.png',
    alt: 'Chess logo'});

var taskForceLogo = img( {className: 'img-responsive center-block',
    src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/logo-web.jpg',
    alt: 'TsakForce logo'});

ECR.photos = {
  dominion: dominionLogo,
  chess: chessLogo,
  asteroids: asteroidsLogo,
  taskForce: taskForceLogo,
  elliotProfile: elliotProfile,
};

})();
