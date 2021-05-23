const followButton = document.querySelector(".feed-user-profile button");
const likeButton = document.querySelector(".feed-footer button:first-child");
const commentButton = document.querySelector(".feed-footer button:last-child");
const feedComment = document.querySelector(".feed-comment");

followButton.addEventListener("click", function () {
  if (this.following) {
    this.innerHTML = "Follow";
    this.classList.remove("following");
  } else {
    this.innerHTML = "Following";
    this.classList.add("following");
  }
  this.following = !this.following;
});
followButton.following = false;

likeButton.addEventListener("click", function () {
  if (this.following) {
    this.innerHTML = "100 Likes";
    this.classList.remove("active");
  } else {
    this.innerHTML = "101 Likes";
    this.classList.add("active");
  }
  this.following = !this.following;
});
likeButton.following = false;

commentButton.addEventListener("click", function () {
  if (this.active) {
    feedComment.classList.remove("active");
  } else {
    feedComment.classList.add("active");
  }
  this.active = !this.active;
});
commentButton.active = false;
