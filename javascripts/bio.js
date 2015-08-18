;(function() {

window.ECR = window.ECR || {};

var Biography = React.createClass({
  render: function() {
    var funFactObjects = this.props.funFacts.map(function(funFact) {
      return ( <FunFact funFact={funFact} /> );
    });
    return (
        <section>
        <div className="container className = er-main-page">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8 er-about">
              About Elliot
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-6 er-biography">
              <article>
                <h3 className="er-bio-start">{bioText1}<br />{bioText2}</h3>
                <ul className="er-fun-fact-list">{funFactObjects}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  },
});

var FunFact = React.createClass({
  render: function() {
    return (
      <li className="er-fun-fact"
        dangerouslySetInnerHTML={{__html: this.props.funFact}} >
      </li>
    )
  }
});

var bioText1 = 'I\'m a software developer in the Bay Area.';
var bioText2 = 'Some fun facts about me:';
var language = 'My favorite programming language is <a target="_blank" ' +
  'href="http://www.ecmascript.org/">JavaScript</a>.';
var frontEnd = 'My favorite front-end framework is ' +
  '<a target="_blank" href="http://facebook.github.io/react/">React</a>.';
var backEnd = 'My favorite back-end framework is '+
  '<a target="_blank" href="http://rubyonrails.org/">Rails</a>.';
var sortAlgorithm = 'My favorite sorting algorithm is </b> ' +
  '<a target="_blank" href="https://en.wikipedia.org/wiki/Bogosort">Bogosort</a>.';
var nonSortAlgorithm = 'My favorite non-sorting algorithm is ' +
  '<a target="_blank" href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm">' +
  'Dijkstra\'s algorithm</a>.';
var firstLanguage = 'The first programming language I learned was ' +
  '<a target="_blank" ' +
  'href="https://en.wikipedia.org/wiki/Pascal_(programming_language)">' +
  'Pascal</a>.';
var age = 'I was 15 when I wrote my <a target="_blank" ' +
  'href="http://wiki.freepascal.org/Hello,_World">first line of code</a>.';
var lawDegrees = 'I have a J.D. from <a target="_blank"' +
  'href="https://www.law.stanford.edu/">Stanford University</a>.';
var moreFun = 'Being a programmer is <a target="_blank" ' +
  'href="http://www.ournameisfun.com/">more fun</a> than being a lawyer.';
var yearsInBayArea = 'I\'ve lived in the Bay Area for <a target="_blank" ' +
  'href="https://en.wikipedia.org/wiki/10_(number)">10</a> years.';
var pastime = 'My favorite thing about San Francisco is ' +
  '<a href="http://biritecreamery.com/" target="_blank">' +
  'Bi-Rite Creamery</a>.';

var funFacts = [language, frontEnd, backEnd, sortAlgorithm, nonSortAlgorithm,
                firstLanguage, age, lawDegrees, moreFun,
                yearsInBayArea, pastime];


ECR.displayBio = function(options) {
  options = options || {};
  ECR.clearDisplayArea();
  React.render(
    <Biography funFacts={funFacts} />,
    document.getElementById('main-content-area')
  );
  if (options.pushHistory === undefined || options.pushHistory) {
    history.pushState({url: "elliotreed.com", page: "about"}, "", "");
  }

  return false;
};

})();
