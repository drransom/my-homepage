;(function () {

if (window.ECR === undefined) {
  window.ECR = {};
}


var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ECR.createCommentBox = function() {
  React.render(
    <CommentBox />,
    document.getElementById('main-content-area')
  );
}

})();
