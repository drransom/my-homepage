;(function() {

if (window.ECR === undefined) {
  window.ECR = {};
}

var Navbar = React.createClass({
  render: function() {
    return (
      <header>
        <nav className="navbar navbar-default er-navbar">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand er-navbar-brand" href="#">Elliot Reed</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav er-navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Me</a>
                  <ul className="dropdown-menu er-navbar-item er-about">
                    <li className="er-navbar-list-item"><a href="#" className="er-navbar-list-item-link">About</a></li>
                    <li className="er-navbar-list-item"><a href="http://www.linkedin.com/in/elliotcreed"target="_blank" className="er-navbar-list-item-link">LinkedIn</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Portfolio</a>
                  <ul className="dropdown-menu er-navbar-item">
                    <li className="er-navbar-list-item">
                      <a className="er-navbar-list-item-link er-portfolio-link" target="_blank" href="https://taskforce.elliotreed.com">TaskForce <span className="smaller-text">(Rails)</span></a>
                    </li>
                    <li className="er-navbar-list-item">
                      <a href="http://www.github.com/drransom/TaskForce" target="_blank" className="er-navbar-list-item-link er-portfolio-source">Source</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li className="er-navbar-list-item">
                      <a href="http://drransom.github.io/Asteroids" target="_blank" className="er-navbar-list-item-link er-portfolio-link">Asteroids <span className="smaller-text">(HTML5 Canvas)</span></a>
                    </li>
                    <li className="er-navbar-list-item">
                        <a href="http://www.github.com/drransom/Asteroids" target="_blank" className="er-navbar-list-item-link er-portfolio-source">Source</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li className="er-navbar-list-item">
                      <a href="http://www.github.com/drransom/chess" target="_blank" className="er-navbar-list-item-link er-portfolio-link">Command Line Chess <span className="smaller-text">(Ruby)</span></a>
                    </li>
                    <li>
                      <a href="http://www.github.com/drransom/chess" target="_blank" className="er-navbar-list-item-link er-portfolio-source">Source</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#" className="er-navbar-item">Contact</a></li>
              </ul>
            </div>

          </div>


        </nav>
      </header>
    )
  }
});

ECR.createNavbar = function() {
  React.render(
    <Navbar />,
    document.getElementById('header-wrapper')
  );
  // $('.dropdown-toggle').dropdownHover({
  //   delay: 0
  // });
}



})();
