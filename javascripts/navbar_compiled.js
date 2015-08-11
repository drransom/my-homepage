"use strict";

;(function () {

  if (window.ECR === undefined) {
    window.ECR = {};
  }

  var Navbar = React.createClass({
    displayName: "Navbar",

    render: function render() {
      return React.createElement(
        "header",
        null,
        React.createElement(
          "nav",
          { className: "navbar navbar-default er-navbar" },
          React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
              "div",
              { className: "navbar-header" },
              React.createElement(
                "button",
                { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "aria-expanded": "false" },
                React.createElement(
                  "span",
                  { className: "sr-only" },
                  "Toggle navigation"
                ),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" })
              ),
              React.createElement(
                "a",
                { className: "navbar-brand er-navbar-brand", href: "#" },
                "Elliot Reed"
              )
            ),
            React.createElement(
              "div",
              { className: "collapse navbar-collapse" },
              React.createElement(
                "ul",
                { className: "nav navbar-nav er-navbar-nav" },
                React.createElement(
                  "li",
                  { className: "dropdown" },
                  React.createElement(
                    "a",
                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
                    "About Me"
                  ),
                  React.createElement(
                    "ul",
                    { className: "dropdown-menu er-navbar-item er-about" },
                    React.createElement(
                      "li",
                      { className: "er-navbar-list-item" },
                      React.createElement(
                        "a",
                        { href: "#", className: "er-navbar-list-item-link" },
                        "About"
                      )
                    ),
                    React.createElement(
                      "li",
                      { className: "er-navbar-list-item" },
                      React.createElement(
                        "a",
                        { href: "http://www.linkedin.com/in/elliotcreed", target: "_blank", className: "er-navbar-list-item-link" },
                        "LinkedIn"
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  { className: "dropdown" },
                  React.createElement(
                    "a",
                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
                    "Portfolio"
                  ),
                  React.createElement(
                    "ul",
                    { className: "dropdown-menu er-navbar-item" },
                    React.createElement(
                      "li",
                      { className: "er-navbar-list-item" },
                      React.createElement(
                        "a",
                        { className: "er-navbar-list-item-link er-portfolio-link", target: "_blank", href: "https://taskforce.elliotreed.com" },
                        "TaskForce ",
                        React.createElement(
                          "span",
                          { className: "smaller-text" },
                          "(Rails)"
                        )
                      )
                    ),
                    React.createElement(
                      "li",
                      { className: "er-navbar-list-item" },
                      React.createElement(
                        "a",
                        { href: "http://www.github.com/drransom/TaskForce", target: "_blank", className: "er-navbar-list-item-link er-portfolio-source" },
                        "Source"
                      )
                    ),
                    React.createElement("li", { role: "separator", className: "divider" }),
                    React.createElement(
                      "li",
                      { className: "er-navbar-list-item" },
                      React.createElement(
                        "a",
                        { href: "http://drransom.github.io/Asteroids", target: "_blank", className: "er-navbar-list-item-link er-portfolio-link" },
                        "Asteroids ",
                        React.createElement(
                          "span",
                          { className: "smaller-text" },
                          "(HTML5 Canvas)"
                        )
                      )
                    ),
                    React.createElement(
                      "li",
                      { className: "er-navbar-list-item" },
                      React.createElement(
                        "a",
                        { href: "http://www.github.com/drransom/Asteroids", target: "_blank", className: "er-navbar-list-item-link er-portfolio-source" },
                        "Source"
                      )
                    ),
                    React.createElement("li", { role: "separator", className: "divider" }),
                    React.createElement(
                      "li",
                      { className: "er-navbar-list-item" },
                      React.createElement(
                        "a",
                        { href: "http://www.github.com/drransom/chess", target: "_blank", className: "er-navbar-list-item-link er-portfolio-link" },
                        "Command Line Chess ",
                        React.createElement(
                          "span",
                          { className: "smaller-text" },
                          "(Ruby)"
                        )
                      )
                    ),
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "a",
                        { href: "http://www.github.com/drransom/chess", target: "_blank", className: "er-navbar-list-item-link er-portfolio-source" },
                        "Source"
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#", className: "er-navbar-item" },
                    "Contact"
                  )
                )
              )
            )
          )
        )
      );
    }
  });

  ECR.createNavbar = function () {
    React.render(React.createElement(Navbar, null), document.getElementById('header-wrapper'));
    // $('.dropdown-toggle').dropdownHover({
    //   delay: 0
    // });
  };
})();
