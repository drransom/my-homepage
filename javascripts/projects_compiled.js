"use strict";

;(function () {

  if (window.ECR === undefined) {
    window.ECR = {};
  }

  var ProjectDisplay = React.createClass({
    displayName: "ProjectDisplay",

    render: function render() {
      debugger;
      return React.createElement(
        "div",
        { className: "media" },
        React.createElement(
          "div",
          { className: "media-left" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { className: "media-object", src: this.props.imageUrl, alt: this.props.imgAltText })
          )
        ),
        React.createElement(
          "div",
          { className: "media-body" },
          React.createElement(
            "h4",
            { className: "media-heading" },
            this.props.projectName
          ),
          React.createElement("span", { dangerouslySetInnerHTML: { __html: this.props.projectDescription } })
        )
      );
    }
  });
  var taskForce = {
    imageUrl: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/logo-web.jpg',
    imgAltText: 'TaskForce logo',
    projectName: 'TaskForce',
    projectDescription: 'TaskForce is a contractor-hiring and task-completion app ' + 'inspired by TaskRabbit. TaskForce is built on a <a href="http://backbonejs.org">' + 'Backbone</a> front end and a <a href="http://rubyonrails.org/">Rails</a> ' + 'back end.'
  };

  ECR.displayTaskForce = function () {
    React.render(React.createElement(ProjectDisplay, { imageUrl: taskForce.imageUrl, imgAltText: taskForce.imgAltText,
      projectName: taskForce.projectName, projectDescription: taskForce.projectDescription }), document.getElementById('main-content-area'));
  };
})();
