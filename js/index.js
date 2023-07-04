import { tweetsData } from "/js/data.js";


const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
  console.log(tweetInput.value)
  tweetInput.value = ""
})

function getFeedHtml(){
  for (let tweet of tweetsData){
    let feedHtml = `
    <div class="tweet">
      <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
          <p class="handle">${tweet.handle}</p>
          <p class="tweet-text">${tweet.tweetText}</p>
          <div class="tweet-details">
            <span class="tweet-detail">
            ${tweet.replies.length}
            </span>
            <span class="tweet-detail">
            ${tweet.likes}
            </span>
            <span class="tweet-detail">
            ${tweet.retweets}
            </span>
          </div>   
        </div>            
      </div>
    </div>
    `
    console.log(feedHtml)
  }
}


getFeedHtml()