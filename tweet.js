const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");

// Update character count
tweetInput.addEventListener("input", () => {
    let textLength = tweetInputInput.value.length;
    charCount.textContent = `${textLength} / 280`;

    //Enable/Disable button based on input length
})




































// import { text } from "body-parser";
// import { log } from "console";

//   FIRST TRIAL


// const tweet = prompt("Enter your tweet?");
// const tweetCount = tweet.length;
// alert(
//   "You have inserted " +
//     tweetCount +
//     " texts and you have " +
//     (240 - tweetCount) +
//     " texts remaining."

//     if (tweetCount >= 240) {
//         alert("You have no inputs.");
//     }
//     else {
//         alert("Input accepted")
//     }
// );

//    END


// CORRECTION


// const tweet = prompt("Enter your tweet");
// const tweetCount = tweet.length;
// const remainingChars = 240 - tweetCount;

// if (tweetCount > 240) {
//   alert(
//     "You have exceeded the 240-character limits. Please shorten your tweet."
//   );
// } else {
//   alert(
//     "You have inserted " +
//       tweetCount +
//       " characters and you have " +
//       remainingChars +
//       " characters remaining."
//   );
// }