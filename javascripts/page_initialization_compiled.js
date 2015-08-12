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
        { type: "button", className: "btn er-btn btn-xlarge", onClick: this.props.onClick },
        this.props.children
      );
    }
  });

  var ChoiceButtons = React.createClass({
    displayName: "ChoiceButtons",

    render: function render() {
      return React.createElement(
        "div",
        { role: "group", "aria-label": "content options" },
        React.createElement(
          "span",
          { className: "subheading-text" },
          React.createElement(
            ChoiceLink,
            { onClick: ECR.displayPortfolio },
            "Projects"
          ),
          " ",
          React.createElement("span", { className: "glyphicon glyphicon-certificate" }),
          " ",
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
    }
  });

  ECR.clearDisplayArea = function () {
    React.unmountComponentAtNode($('#main-content-area').get(0));
  };

  ECR.initializePage = function () {
    ECR.createNavbar();
    React.render(React.createElement(IntroPage, null), document.getElementById('main-content-area'));
  };
})();
