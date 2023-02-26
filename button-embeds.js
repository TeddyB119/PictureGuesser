// Pick a random number between 0 and 4 to select a button
const randomButtonIndex = Math.floor(Math.random() * 5);

// Define the URLs for the videos
const nyanCatUrl = "https://www.youtube.com/embed/QH2-TGUlwu4";
const neverGonnaGiveYouUpUrl = "https://www.youtube.com/embed/sqeMa5YRoe0";

// Set up the handleButtonClick function that gets called when a button is clicked
function handleButtonClick(buttonIndex) {
  const videoContainer = document.getElementById("video-container");
  if (buttonIndex === randomButtonIndex) {
    // Embed the Nyan Cat video if the button is the random one
    videoContainer.innerHTML = `<iframe width="560" height="315" src="${nyanCatUrl}" frameborder="0" allowfullscreen></iframe>`;
    document.getElementById(`button${buttonIndex}`).style.backgroundColor = "green";
  } else {
    // Embed the Never Gonna Give You Up video otherwise
    videoContainer.innerHTML = `<iframe width="560" height="315" src="${neverGonnaGiveYouUpUrl}" frameborder="0" allowfullscreen></iframe>`;
    document.getElementById(`button${buttonIndex}`).style.backgroundColor = "red";
  }
}


