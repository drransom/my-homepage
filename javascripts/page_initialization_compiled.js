"use strict";

;(function () {

  if (window.ECR === undefined) {
    window.ECR = {};
  }

  var ChoiceLink = React.createClass({
    displayName: "ChoiceLink",

    render: function render() {
      return React.createElement(
        "button",
        { type: "button", className: "btn er-btn", onClick: this.props.onClick },
        this.props.children
      );
    }
  });

  var ChoiceButtons = React.createClass({
    displayName: "ChoiceButtons",

    render: function render() {
      return React.createElement(
        "div",
        { className: "btn-group btn-group-lg", role: "group", "aria-label": "content options" },
        React.createElement(
          "span",
          { className: "subheading-text" },
          React.createElement(
            ChoiceLink,
            { onClick: ECR.displayPortfolio },
            "Portfolio"
          ),
          " -",
          React.createElement(
            ChoiceLink,
            { onClick: ECR.displaySkills },
            "Skills"
          ),
          " - ",
          React.createElement(
            ChoiceLink,
            { onClick: ECR.displayBio },
            "Bio"
          )
        )
      );
    }
  });

  var IntroPage = React.createClass({
    displayName: "IntroPage",

    render: function render() {
      var element = this;
      return React.createElement(
        "section",
        null,
        React.createElement(
          "div",
          { className: "container className = er-main-page" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-lg-12" },
              React.createElement(
                "span",
                { className: "er-name" },
                "Elliot Reed"
              ),
              React.createElement(
                "div",
                { className: "er-subheading" },
                React.createElement(
                  "span",
                  null,
                  "Full Stack Web Developer Extraordinaire"
                )
              ),
              React.createElement("div", { className: "er-border" })
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-lg-12" },
              React.createElement(ChoiceButtons, null)
            )
          )
        )
      );
    },
    onClickCapture: function onClickCapture(event) {
      alert('clicked!');
    },
    onClick: function onClick(event) {
      alert('clicked!');
    }
  });

  ECR.displayPortfolio = function () {
    ECR.clearDisplayArea();
    alert("You clicked on the portfolio link!");
  };

  ECR.displaySkills = function () {
    alert("You clicked on the skills link!");
  };

  ECR.displayBio = function () {
    alert("you clicked on the bio link!");
  };

  ECR.clearDisplayArea = function () {
    React.unmountComponentAtNode($('#main-content-area').get(0));
  };

  ECR.initializePage = function () {
    ECR.createNavbar();
    React.render(React.createElement(IntroPage, null), document.getElementById('main-content-area'));
  };
})();
