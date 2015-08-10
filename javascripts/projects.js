;(function() {

if (window.ECR === undefined) {
  window.ECR = {};
}

var ProjectDisplay = React.createClass({
  render: function() {
    debugger;
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={this.props.imageUrl} alt={this.props.imgAltText} />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.projectName}</h4>
            <span dangerouslySetInnerHTML={{__html: this.props.projectDescription}} />
        </div>
      </div>
    );
  }
});
var taskForce = {
  imageUrl: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/logo-web.jpg',
  imgAltText: 'TaskForce logo',
  projectName: 'TaskForce',
  projectDescription: 'TaskForce is a contractor-hiring and task-completion app ' +
    'inspired by TaskRabbit. TaskForce is built on a <a href="http://backbonejs.org">' +
    'Backbone</a> front end and a <a href="http://rubyonrails.org/">Rails</a> ' +
    'back end.'
};

ECR.displayTaskForce = function() {
  React.render(
    <ProjectDisplay imageUrl={taskForce.imageUrl} imgAltText={taskForce.imgAltText}
     projectName={taskForce.projectName}   projectDescription={taskForce.projectDescription} />,
   document.getElementById('main-content-area')
 );
}


})();
