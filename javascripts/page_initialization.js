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
        <span className="subheading-text"><ChoiceLink onClick={ECR.displayPortfolio}>Projects</ChoiceLink>&nbsp;
        <span className="glyphicon glyphicon-certificate" />&nbsp;
        <ChoiceLink onClick={ECR.displayBio}>About</ChoiceLink></span>
      </div>
    );
  }
})

var IntroPage = React.createClass({
  render: function() {
    var element = this;
    return (
        <section>
        <div className="container er-main-page">
          <div className="row">
            <div className="col-lg-12">
            {ECR.photos.elliotProfile}
            </div>
          </div>
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
  }
});

ECR.clearDisplayArea = function() {
  React.unmountComponentAtNode($('#main-content-area').get(0));
};


ECR.initializePage = function() {
  ECR.loadImages();
  ECR.createNavbar();
  ECR.initializeHistory();
  ECR.displayIntroPage();

};

ECR.displayIntroPage = function(options) {
  options = options || {};
  React.render(
    <IntroPage />,
    document.getElementById('main-content-area')
  );
  if (options.pushHistory === undefined || options.pushHistory) {
    history.pushState({page: "home"}, "", "");
  };
};

})();
