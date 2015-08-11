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
          "h4",
          null,
          this.props.projectName
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
          React.createElement("img", { className: "img-responsive", src: this.props.imageUrl, alt: this.props.imgAltText })
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
          projectLink: project.projectLink });
      });
      return React.createElement(
        "div",
        { className: "container-fluid" },
        displayNodes
      );
    }
  });

  var taskForce = {
    imageUrl: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/logo-web.jpg',
    imgAltText: 'TaskForce logo',
    projectName: '',
    projectDescription: '<strong>TaskForce</strong> is a contractor-hiring and task-completion app ' + 'inspired by TaskRabbit. TaskForce is built on a <a href="http://backbonejs.org">' + 'Backbone</a> front end and a <a href="http://rubyonrails.org/">Rails</a> ' + 'back end.',
    projectLink: "https://taskforce.elliotreed.com"
  };

  var dominionator = {
    imageurl: "",
    imgAltText: 'Dominion logo',
    projectName: 'Dominionator',
    projectDescription: 'I wasn\'t satisfied with any of the existing selectors for the card game ' + '<a href="https://en.wikipedia.org/wiki/Dominion_(card_game)">Dominion</a>, ' + 'so I wrote my own. Users can select expansions on an opt-in or opt-out basis, ' + 'veto and unveto individual cards, and view previously slelected tableux ' + 'using the browser history. The app is designed to not require a server, ' + 'so once the page is loaded an Internet connection is no longer needed.<p>' + 'I am making this project without any third party libraries or frameworks, ' + 'including jQuery. Everything is pure JavaScript, HTML5, and CSS.',
    projectLink: "#"
  };

  ECR.displayPortfolio = function () {
    ECR.clearDisplayArea();
    React.render(React.createElement(ProjectAreaDisplay, { projects: [taskForce, dominionator] }), document.getElementById('main-content-area'));
  };
})();
