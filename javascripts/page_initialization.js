;(function () {

if (window.ECR === undefined) {
  window.ECR = {};
}


var IntroPage = React.createClass({
  render: function() {
    return (
        <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="er-name">
                Elliot Reed
              </span>
              <div className="er-border">
              </div>
              <div className="er-details">
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

ECR.initializePage = function() {
  React.render(
    <IntroPage />,
    document.getElementById('main-content-area')
  );
}

})();
