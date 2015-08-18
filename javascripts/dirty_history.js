;(function() {
window.ECR = window.ECR || {};


ECR.initializeHistory = function() {
  history.pushState({ url: "elliotreed.com", page: "home"}, "", "");
  window.onpopstate = ECR.updatePageStatus;
};

ECR.updatePageStatus = function(event) {
  switch(event.state.page) {
    case "home":
      ECR.displayIntroPage({pushHistory: false});
      break;
    case "projects":
      ECR.displayPortfolio({pushHistory: false});
      break;
    case "about":
      ECR.displayBio({pushHistory: false});
      break;
  };
};
})();
