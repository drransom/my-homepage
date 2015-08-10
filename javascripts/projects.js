;(function() {

if (window.ECR === undefined) {
  window.ECR = {};
}

var ProjectDisplay = React.createClass({
  render: function() {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={this.props.imageUrl} alt={this.props.imgAltText} />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.projectName}</h4>
            <span className="er-project-description"
            dangerouslySetInnerHTML={{__html: this.props.projectDescription}} />
        </div>
      </div>
    );
  }
});

var ProjectAreaDisplay = React.createClass({
  render: function() {
    var displayNodes = this.props.projects.map(function(project) {
      return <ProjectDisplay imageUrl={project.imageUrl} imgAltText={project.imgAltText}
              projectName={project.projectName}
              projectDescription={project.projectDescription} />
    });
    return (
      <div>{displayNodes}</div>
    );
  }
})

var taskForce = {
  imageUrl: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/logo-web.jpg',
  imgAltText: 'TaskForce logo',
  projectName: 'TaskForce',
  projectDescription: 'TaskForce is a contractor-hiring and task-completion app ' +
    'inspired by TaskRabbit. TaskForce is built on a <a href="http://backbonejs.org">' +
    'Backbone</a> front end and a <a href="http://rubyonrails.org/">Rails</a> ' +
    'back end.'
};

var dominionator = {
  imageurl: "",
  imgAltText: 'Dominion logo',
  projectName: 'Dominionator',
  projectDescription: 'I wasn\'t satisfied with any of the existing selectors for the card game ' +
    '<a href="https://en.wikipedia.org/wiki/Dominion_(card_game)">Dominion</a>, ' +
    'so I wrote my own. Users can select expansions on an opt-in or opt-out basis, ' +
    'veto and unveto individual cards, and view previously slelected tableux ' +
    'using the browser history. The app is designed to not require a server, ' +
    'so once the page is loaded an Internet connection is no longer needed.<p>' +
    'I am making this project without any third party libraries or frameworks, ' +
    'including jQuery. Everything is pure JavaScript, HTML5, and CSS.'
};

ECR.displayPortfolio = function() {
  ECR.clearDisplayArea();
  React.render(
    <ProjectAreaDisplay projects={[taskForce, dominionator]} />,
    document.getElementById('main-content-area')
  );
};


})();
