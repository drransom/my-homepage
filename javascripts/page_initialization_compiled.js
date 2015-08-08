"use strict";

;(function () {

  if (window.ECR === undefined) {
    window.ECR = {};
  }

  var CommentBox = React.createClass({
    displayName: "CommentBox",

    render: function render() {
      return React.createElement(
        "div",
        { className: "commentBox" },
        "Hello, world! I am a CommentBox."
      );
    }
  });

  ECR.createCommentBox = function () {
    React.render(React.createElement(CommentBox, null), document.getElementById('main-content-area'));
  };
})();
