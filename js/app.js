const queryContainer = document.querySelector("#query");
const queryBtn = document.querySelector("#searchQuery");

queryBtn.addEventListener("click", () => {
    const query = queryContainer.value;
    sendXHR(query);
    console.log("Sent...")
});


/* 
 * Send XHR
 */
function sendXHR(query) {
    const unsplashRequest = new XMLHttpRequest();
    unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${query}`);
    unsplashRequest.onload = loadImage;
    unsplashRequest.setRequestHeader('Authorization', 'Client-ID 94e374e7706ba6fc2ad3404e5a9de517f75a305ff1363fa4c52e63340bb531bd');
    unsplashRequest.send();
}

/*
 * Load Image
 */
function loadImage() {
    console.log(JSON.parse(this.responseText));
}