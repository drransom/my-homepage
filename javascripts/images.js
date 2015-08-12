;(function() {

if (window.ECR === undefined) {
  window.ECR = {};
}

var img = React.createFactory('img');
var elliotProfile = img( {className: "er-profile-photo",
    src: "http://elliot-c-reed-taskforce.s3.amazonaws.com/elliot-profile-photo.jpg"
});

ECR.photos = {
  domionion: dominionLogo,
  chess: chessLogo,
  asteroids: asteroidsLogo,
  taskForce: taskForceLogo,
  elliotProfile: elliotProfile,
};

})();
