"use strict";

;(function () {

  if (window.ECR === undefined) {
    window.ECR = {};
  }

  var ProjectDisplay = React.createClass({
    displayName: "ProjectDisplay",

    render: function render() {
      var heading;
      if (this.props.projectName) {
        heading = React.createElement(
          "h2",
          { className: "er-project-heading" },
          this.props.projectName,
          "   ",
          React.createElement(
            "a",
            { className: "smaller-text gray-text", target: "_blank",
              href: this.props.sourceUrl },
            React.createElement(
              "span",
              { className: "smaller-text" },
              "Source"
            )
          )
        );
      } else {
        heading = null;
      };
      return React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(
          "a",
          { href: this.props.projectLink },
          React.createElement("img", { className: "img-responsive center-block", src: this.props.imageUrl, alt: this.props.imgAltText })
        ),
        heading,
        React.createElement("span", { className: "er-project-description",
          dangerouslySetInnerHTML: { __html: this.props.projectDescription } })
      );
    }
  });

  var ProjectAreaDisplay = React.createClass({
    displayName: "ProjectAreaDisplay",

    render: function render() {
      var displayNodes = this.props.projects.map(function (project) {
        return React.createElement(ProjectDisplay, { imageUrl: project.imageUrl, imgAltText: project.imgAltText,
          projectName: project.projectName,
          projectDescription: project.projectDescription,
          projectLink: project.projectLink,
          sourceUrl: project.sourceUrl });
      });
      return React.createElement(
        "div",
        { className: "container-fluid er-project-area" },
        displayNodes
      );
    }
  });

  var taskForce = {
    imageUrl: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/logo-web.jpg',
    imgAltText: 'TaskForce logo',
    projectName: 'TaskForce',
    projectDescription: 'TaskForce is a contractor-hiring and task-completion app ' + 'inspired by TaskRabbit. TaskForce is built on a <a target="_blank" ' + 'href="http://backbonejs.org">Backbone</a> front end and a ' + '<a target="_blank" href="http://rubyonrails.org/">Rails</a> ' + 'back end.',
    projectLink: 'https://taskforce.elliotreed.com',
    sourceUrl: 'http://github.com/drransom/taskforce'
  };

  var dominionator = {
    imageUrl: "http://elliot-c-reed-taskforce.s3.amazonaws.com/dominion-logo.png",
    imgAltText: 'Dominion logo',
    projectName: 'Dominionator',
    projectDescription: 'I wasn\'t satisfied with any of the existing selectors for the card game ' + '<a target="_blank" href="https://en.wikipedia.org/wiki/Dominion_(card_game)">' + 'Dominion</a>, so I wrote my own. Users can select expansions on an opt-in ' + 'or opt-out basis, veto and unveto individual cards, and view previously ' + 'selected tableux using the browser history. The app is designed to not ' + 'require a server, so once the page is loaded an Internet connection ' + 'is no longer needed.<p><br>' + 'I am making this project without any third party libraries or frameworks, ' + 'including jQuery. Everything is pure JavaScript, HTML5, and CSS.',
    projectLink: 'https://drransom.github.io/Dominionator',
    sourceUrl: 'http://github.com/drransom/dominionator'
  };

  var asteroids = {
    imageUrl: "http://elliot-c-reed-taskforce.s3.amazonaws.com/asteroids-logo.png",
    imgAltText: 'Asteroids logo',
    projectName: 'Asteroids',
    projectDescription: 'My version of the <a target="_blank" ' + 'href="https://en.wikipedia.org/wiki/Asteroids_(video_game)">classic Atari ' + 'game</a> is written with <a target="_blank" ' + 'href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">' + 'HTML5 Canvas</a>. I made my own vector graphics by starting with the ' + 'collision detection system <a target="_blank" ' + 'href="https://github.com/jriecken/sat-js">' + 'SAT.js</a> and expanding it into a complete vector graphics engine.<p><br>' + 'Check out the explosions when things are destroyed!',
    projectLink: 'https://drransom.github.io/Asteroids',
    sourceUrl: 'http://github.com/drransom/asteroids'
  };

  ECR.displayPortfolio = function () {
    ECR.clearDisplayArea();
    React.render(React.createElement(ProjectAreaDisplay, { projects: [taskForce, dominionator, asteroids] }), document.getElementById('main-content-area'));
  };
})();
