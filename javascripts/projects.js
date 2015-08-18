;(function() {

if (window.ECR === undefined) {
  window.ECR = {};
}

var ProjectDisplay = React.createClass({
  render: function() {
    var heading;
    if (this.props.projectName) {
      heading = (<h2 className="er-project-heading">{this.props.projectName}&nbsp; &nbsp;
        <a className="smaller-text gray-text" target="_blank"
          href={this.props.sourceUrl}><span className="smaller-text">Source</span>
        </a>
      </h2>);
    } else {
      heading = null;
    };
    return (
      <div className="col-md-6 er-project-detail">
        <a href={this.props.projectLink}>
          {this.props.image}
        </a>
        {heading}
        <span className="er-project-description"
        dangerouslySetInnerHTML={{__html: this.props.projectDescription}} />
      </div>
    );
  }
});

var ProjectAreaDisplay = React.createClass({
  render: function() {
    var displayNodes = this.props.projects.map(function(project) {
      return <ProjectDisplay image={project.image}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              projectLink={project.projectLink}
              sourceUrl={project.sourceUrl} />
    });
    return (
      <div className="container-fluid er-project-area">{displayNodes}</div>
    );
  }
})

var taskForce = {
  image: ECR.photos.taskForce,
  imgAltText: 'TaskForce logo',
  projectName: 'TaskForce',
  projectDescription: 'TaskForce is a contractor-hiring and task-completion app ' +
    'inspired by TaskRabbit. TaskForce is built on a <a target="_blank" ' +
    'href="http://backbonejs.org">Backbone</a> front end and a '+
    '<a target="_blank" href="http://rubyonrails.org/">Rails</a> ' +
    'back end. I made extensive use of Backbone composite views to minimize ' +
    'DOM re-rendering.<p><br>Try giving a task a poor rating!',
  projectLink: 'https://taskforce.elliotreed.com',
  sourceUrl: 'http://github.com/drransom/taskforce'
};

var dominionator = {
  image: ECR.photos.dominion,
  projectName: 'Dominionator',
  projectDescription: 'I love the card game ' +
    '<a target="_blank" href="https://en.wikipedia.org/wiki/Dominion_(card_game)">' +
    'Dominion</a>, and I wasn\'t satisfied with any of the existing selectors for the card game ' +
    'so I\'m making my own. I\'m not using an third party libraries or ' +
    'frameworks, including jQuery. Everything is pure JavaScript, HTML5, and CSS.' +
    '<p><br>The project isn\'t production-ready, but you can find a demo of ' +
    'the current version <a target="_blank" ' +
    'href="https://drransom.github.io/Dominionator">here</a>.',
  projectLink: 'https://drransom.github.io/Dominionator',
  sourceUrl: 'http://github.com/drransom/dominionator'
};

var asteroids = {
  image: ECR.photos.asteroids,
  projectName: 'Asteroids',
  projectDescription: 'My version of the <a target="_blank" ' +
  'href="https://en.wikipedia.org/wiki/Asteroids_(video_game)">classic Atari ' +
  'game</a> is written with <a target="_blank" ' +
  'href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">' +
  'HTML5 Canvas</a>. I made my own vector graphics by starting with the ' +
  'collision detection system <a target="_blank" ' +
  'href="https://github.com/jriecken/sat-js">' +
  'SAT.js</a> and expanding it into a complete vector graphics engine.<p><br>' +
  'Check out the explosions when things are destroyed!',
  projectLink: 'https://drransom.github.io/Asteroids',
  sourceUrl: 'http://github.com/drransom/asteroids'
};

var chess = {
  image: ECR.photos.chess,
  projectName: 'Command Line Chess',
  projectDescription: 'Written in Ruby, this command line game supports ' +
    'two human players or a human-AI match against a <a target="_blank" ' +
    'href="https://en.wikipedia.org/wiki/Greedy_algorithm">greedy algorithm</a>. ' +
    'The game and board are UI-agnostic, so the API is ready for use ' +
    'beyond the command ' +
    'line.<p><br>I implemented the complete rule set, and my comprehensive ' +
    'test suite validates even the most most obscure edge cases.',
  projectLink: 'https://github.com/drransom/chess',
  sourceUrl: 'https://github.com/drransom/chess'
};

ECR.displayPortfolio = function(options) {
  options = options || {};
  ECR.clearDisplayArea();
  React.render(
    <ProjectAreaDisplay projects={[taskForce, asteroids, chess, dominionator]} />,
    document.getElementById('main-content-area')
  );
  if (options.pushHistory === undefined || options.pushHistory) {
    history.pushState({page: "projects"}, "", "");
  };
};


})();
