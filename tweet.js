const tweet = prompt("What is your tweet?");
const tweetCount = tweet.length;
alert(
  "You have inserted " +
    tweetCount +
    " and you have " +
    (240 - tweetCount) +
    " texts remaining."
);
