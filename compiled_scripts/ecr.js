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
"use strict";

;(function () {

  if (window.ECR === undefined) {
    window.ECR = {};
  }

  var elliotImageData = {
    className: "er-profile-photo",
    src: "http://elliot-c-reed-taskforce.s3.amazonaws.com/elliot-profile-photo.jpg",
    alt: "Photo of Elliot"
  };

  var asteroidsImageData = {
    className: 'img-responsive center-block',
    src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/asteroids-logo.png',
    alt: 'Asteroids logo'
  };

  var dominionImageData = {
    className: 'img-responsive center-block',
    src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/dominion-logo.png',
    alt: 'Dominion logo'
  };

  var chessImageData = {
    className: 'img-responsive center-block',
    src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/chess-logo-temp.png',
    alt: 'Chess logo'
  };

  var taskForceImageData = {
    className: 'img-responsive center-block',
    src: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/logo-web.jpg',
    alt: 'TsakForce logo'
  };

  var img = React.createFactory('img');

  var elliotProfile = img(elliotImageData);
  var asteroidsLogo = img(asteroidsImageData);
  var dominionLogo = img(dominionImageData);
  var chessLogo = img(chessImageData);
  var taskForceLogo = img(taskForceImageData);

  ECR.photos = {
    dominion: dominionLogo,
    chess: chessLogo,
    asteroids: asteroidsLogo,
    taskForce: taskForceLogo,
    elliotProfile: elliotProfile
  };

  ECR.loadImages = function () {
    var profilePhoto = new Image();
    profilePhoto.onload = preloadImages;
    profilePhoto.src = elliotImageData.src;
  };

  var preloadImages = function preloadImages() {
    var imageData = [asteroidsImageData, chessImageData, dominionImageData, taskForceImageData];
    imageData.map(function (data) {
      var image = new Image();
      image.src = data.src;
      return image;
    });
  };
})();
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
                { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse",
                  "data-target": "#er-navigation", "aria-expanded": "false" },
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
                { className: "navbar-brand er-navbar-brand", href: "http://www.elliotreed.com" },
                "Elliot Reed"
              )
            ),
            React.createElement(
              "div",
              { className: "collapse navbar-collapse", id: "er-navigation" },
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
                    { className: "dropdown-menu er-navbar-item" },
                    React.createElement(
                      "li",
                      { className: "er-navbar-list-item" },
                      React.createElement(
                        "a",
                        { href: "javascript:void(0)", onClick: ECR.displayBio, className: "er-navbar-list-item-link" },
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
                    "Projects"
                  ),
                  React.createElement(
                    "ul",
                    { className: "dropdown-menu er-navbar-item" },
                    React.createElement(
                      "li",
                      { ClassName: "er-navbar-list-item" },
                      React.createElement(
                        "a",
                        { className: "er-navbar-list-item-link er-portfolio-link", target: "_blank", href: "javascript:void(0)", onClick: ECR.displayPortfolio },
                        "All Projects"
                      )
                    ),
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
                      ),
                      React.createElement(
                        "a",
                        { href: "http://www.github.com/drransom/TaskForce", target: "_blank", className: "er-navbar-list-item-link er-portfolio-source smaller-text" },
                        "Source"
                      )
                    ),
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
                      ),
                      React.createElement(
                        "a",
                        { href: "http://www.github.com/drransom/Asteroids", target: "_blank", className: "er-navbar-list-item-link er-portfolio-source smaller-text" },
                        "Source"
                      )
                    ),
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
                      ),
                      React.createElement(
                        "a",
                        { href: "http://www.github.com/drransom/chess", target: "_blank", className: "er-navbar-list-item-link er-portfolio-source smaller-text" },
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
                    { target: "_blank", href: "mailto:elliotreed2@gmail.com", className: "er-navbar-item" },
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
    $('.dropdown-toggle').dropdownHover({
      delay: 0
    });
  };
})();
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
            "About"
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
          { className: "container er-main-page" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-lg-12" },
              ECR.photos.elliotProfile
            )
          ),
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
    ECR.loadImages();
    ECR.createNavbar();
    React.render(React.createElement(IntroPage, null), document.getElementById('main-content-area'));
  };
})();
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
        { className: "col-md-6 er-project-detail" },
        React.createElement(
          "a",
          { href: this.props.projectLink },
          this.props.image
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
        return React.createElement(ProjectDisplay, { image: project.image,
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
    image: ECR.photos.taskForce,
    imgAltText: 'TaskForce logo',
    projectName: 'TaskForce',
    projectDescription: 'TaskForce is a contractor-hiring and task-completion app ' + 'inspired by TaskRabbit. TaskForce is built on a <a target="_blank" ' + 'href="http://backbonejs.org">Backbone</a> front end and a ' + '<a target="_blank" href="http://rubyonrails.org/">Rails</a> ' + 'back end. I made extensive use of Backbone composite views to minimize ' + 'DOM re-rendering.<p><br>Try giving a task a poor rating!',
    projectLink: 'https://taskforce.elliotreed.com',
    sourceUrl: 'http://github.com/drransom/taskforce'
  };

  var dominionator = {
    image: ECR.photos.dominion,
    projectName: 'Dominionator',
    projectDescription: 'I love the card game ' + '<a target="_blank" href="https://en.wikipedia.org/wiki/Dominion_(card_game)">' + 'Dominion</a>, and I wasn\'t satisfied with any of the existing selectors for the card game ' + 'so I\'m making my own. I\'m not using an third party libraries or ' + 'frameworks, including jQuery. Everything is pure JavaScript, HTML5, and CSS.' + '<p><br>The project isn\'t production-ready, but you can find a demo of ' + 'the current version <a target="_blank" ' + 'href="https://drransom.github.io/Dominionator">here</a>.',
    projectLink: 'https://drransom.github.io/Dominionator',
    sourceUrl: 'http://github.com/drransom/dominionator'
  };

  var asteroids = {
    image: ECR.photos.asteroids,
    projectName: 'Asteroids',
    projectDescription: 'My version of the <a target="_blank" ' + 'href="https://en.wikipedia.org/wiki/Asteroids_(video_game)">classic Atari ' + 'game</a> is written with <a target="_blank" ' + 'href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">' + 'HTML5 Canvas</a>. I made my own vector graphics by starting with the ' + 'collision detection system <a target="_blank" ' + 'href="https://github.com/jriecken/sat-js">' + 'SAT.js</a> and expanding it into a complete vector graphics engine.<p><br>' + 'Check out the explosions when things are destroyed!',
    projectLink: 'https://drransom.github.io/Asteroids',
    sourceUrl: 'http://github.com/drransom/asteroids'
  };

  var chess = {
    image: ECR.photos.chess,
    projectName: 'Command Line Chess',
    projectDescription: 'Written in Ruby, this command line game supports ' + 'two human players or a human-AI match against a <a target="_blank" ' + 'href="https://en.wikipedia.org/wiki/Greedy_algorithm">greedy algorithm</a>. ' + 'The game and board are UI-agnostic, so the API is ready for use ' + 'beyond the command ' + 'line.<p><br>I implemented the complete rule set, and my comprehensive ' + 'test suite validates even the most most obscure edge cases.',
    projectLink: 'https://github.com/drransom/chess',
    sourceUrl: 'https://github.com/drransom/chess'
  };

  ECR.displayPortfolio = function () {
    ECR.clearDisplayArea();
    React.render(React.createElement(ProjectAreaDisplay, { projects: [taskForce, asteroids, chess, dominionator] }), document.getElementById('main-content-area'));
  };
})();
