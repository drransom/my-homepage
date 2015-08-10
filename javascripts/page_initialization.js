;(function () {

if (window.ECR === undefined) {
  window.ECR = {};
}

var ChoiceLink = React.createClass({
  render: function() {
    return (
      <button type="button" className="btn er-btn" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
});

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
              <span className="subheading-text"><ChoiceLink onClick={ECR.displayPortfolio}>Portfolio</ChoiceLink> -
              <ChoiceLink onClick={ECR.displaySkills}>Skills</ChoiceLink> - <ChoiceLink onClick={ECR.displayBio}>Bio</ChoiceLink></span>
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


ECR.displayPortfolio = function() {
  alert("You clicked on the portfolio link!");
};

ECR.displaySkills = function() {
  alert("You clicked on the skills link!");
};

ECR.displayBio = function() {
  alert("you clicked on the bio link!");
};



ECR.initializePage = function() {
  ECR.createNavbar();
  React.render(
    <IntroPage />,
    document.getElementById('main-content-area')
  );
}

})();
