;(function () {

if (window.ECR === undefined) {
  window.ECR = {};
}

var ChoiceLink = React.createClass({
  render: function() {
    return (
      <button type="button" className="btn er-btn btn-xlarge" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
});

var ChoiceButtons = React.createClass({
  render: function() {
    return (
      <div role="group" aria-label="content options">
        <span className="subheading-text"><ChoiceLink onClick={ECR.displayPortfolio}>Portfolio</ChoiceLink>&nbsp;
        <ChoiceLink onClick={ECR.displaySkills}>Skills</ChoiceLink> <ChoiceLink onClick={ECR.displayBio}>Bio</ChoiceLink></span>
      </div>
    );
  }
})

var IntroPage = React.createClass({
  render: function() {
    var element = this;
    return (
        <section>
        <div className="container className = er-main-page">
          <div className="row">
            <div className="col-lg-12">
              <span className="er-name">
                Elliot Reed
              </span>
              <div className="er-subheading">
                <span>Full Stack Web Developer Extraordinaire</span>
              </div>
              <div className="er-border">
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ChoiceButtons></ChoiceButtons>
            </div>
          </div>
        </div>
      </section>
    );
  },
  onClickCapture: function(event) {
    alert('clicked!');
  },
  onClick: function(event) {
    alert('clicked!');
  }
});

ECR.displaySkills = function() {
  alert("You clicked on the skills link!");
};

ECR.clearDisplayArea = function() {
  React.unmountComponentAtNode($('#main-content-area').get(0));
};


ECR.initializePage = function() {
  ECR.createNavbar();
  React.render(
    <IntroPage />,
    document.getElementById('main-content-area')
  );
}

})();
