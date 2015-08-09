;(function () {

if (window.ECR === undefined) {
  window.ECR = {};
}

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
              <span class="subheading-text" onClick={element.onClick}>Portfolio - Skills - Bio</span>
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



ECR.initializePage = function() {
  React.render(
    <IntroPage />,
    document.getElementById('main-content-area')
  );
}

})();
