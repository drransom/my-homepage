"use strict";

;(function () {

  window.ECR = window.ECR || {};

  ECR.displayBio = function () {
    alert("you clicked on the bio link!");
  };

  var Biography = React.createClass({
    displayName: "Biography",

    render: function render() {
      var funFactObjects = this.props.funFacts.map(function (funFact) {
        return React.createElement(FunFact, { funFact: funFact });
      });
      return React.createElement(
        "section",
        null,
        React.createElement(
          "div",
          { className: "container className = er-main-page" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement("div", { className: "col-md-4" }),
            React.createElement(
              "div",
              { className: "col-md-8 er-about" },
              "About Elliot"
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement("div", { className: "col-md-4" }),
            React.createElement(
              "div",
              { className: "col-md-6 er-biography" },
              React.createElement(
                "article",
                null,
                React.createElement(
                  "h3",
                  { className: "er-bio-start" },
                  bioText1,
                  React.createElement("br", null),
                  bioText2
                ),
                React.createElement(
                  "ul",
                  { className: "er-fun-fact-list" },
                  funFactObjects
                )
              )
            )
          )
        )
      );
    }
  });

  var FunFact = React.createClass({
    displayName: "FunFact",

    render: function render() {
      return React.createElement("li", { className: "er-fun-fact",
        dangerouslySetInnerHTML: { __html: this.props.funFact } });
    }
  });

  var bioText1 = 'I\'m a software developer in the Bay Area.';
  var bioText2 = 'Some fun facts about me:';
  var language = 'My favorite programming language is <a target="_blank" ' + 'href="http://www.ecmascript.org/">JavaScript</a>.';
  var frontEnd = 'My favorite front-end framework is ' + '<a target="_blank" href="http://facebook.github.io/react/">React</a>.';
  var backEnd = 'My favorite back-end framework is ' + '<a target="_blank" href="http://rubyonrails.org/">Rails</a>.';
  var sortAlgorithm = 'My favorite sorting algorithm is </b> ' + '<a target="_blank" href="https://en.wikipedia.org/wiki/Bogosort">Bogosort</a>.';
  var nonSortAlgorithm = 'My favorite non-sorting algorithm is ' + '<a target="_blank" href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm">' + 'Dijkstra\'s algorithm</a>.';
  var firstLanguage = 'The first programming language I learned was ' + '<a target="_blank" ' + 'href="https://en.wikipedia.org/wiki/Pascal_(programming_language)">' + 'Pascal</a>.';
  var age = 'I was 15 when I wrote my <a target="_blank" ' + 'href="http://wiki.freepascal.org/Hello,_World">first line of code</a>.';
  var lawDegrees = 'I have a J.D. from <a target="_blank"' + 'href="https://www.law.stanford.edu/">Stanford University</a>.';
  var moreFun = 'Being a programmer is <a target="_blank" ' + 'href="http://www.ournameisfun.com/">more fun</a> than being a lawyer.';
  var yearsInBayArea = 'I\'ve lived in the Bay Area for <a target="_blank" ' + 'href="https://en.wikipedia.org/wiki/10_(number)">10</a> years.';
  var pastime = 'My favorite thing about San Francisco is ' + '<a href="http://biritecreamery.com/" target="_blank">' + 'Bi-Rite Creamery</a>.';

  var funFacts = [language, frontEnd, backEnd, sortAlgorithm, nonSortAlgorithm, firstLanguage, age, lawDegrees, moreFun, yearsInBayArea, pastime];

  ECR.displayBio = function () {
    ECR.clearDisplayArea();
    React.render(React.createElement(Biography, { funFacts: funFacts }), document.getElementById('main-content-area'));
    return false;
  };
})();
