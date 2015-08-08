"use strict";

;(function () {

  if (window.ECR === undefined) {
    window.ECR = {};
  }

  var IntroPage = React.createClass({
    displayName: "IntroPage",

    render: function render() {
      return React.createElement(
        "section",
        null,
        React.createElement(
          "div",
          { className: "container" },
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
              React.createElement("div", { className: "er-border" }),
              React.createElement(
                "details",
                null,
                React.createElement("div", { className: "er-details" })
              )
            )
          )
        )
      );
    }
  });

  ECR.initializePage = function () {
    React.render(React.createElement(IntroPage, null), document.getElementById('main-content-area'));
  };
})();
