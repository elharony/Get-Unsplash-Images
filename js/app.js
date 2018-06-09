const queryText = document.querySelector("#query");
const searchForm = document.querySelector("#searchForm");
const imagesContainer = document.querySelector(".images");
const articlesContainer = document.querySelector(".articles");

searchForm.addEventListener("submit", (e) => {

    // Stop reloading the page
    e.preventDefault();

    // Delete Current Images
    imagesContainer.innerHTML = "";

    // Pass the 'query' to our XHR Function
    const query = queryText.value;
    unsplashRequest(query);
    // nytXHR(query);
});


/* 
 * Unsplash Request
 */
function unsplashRequest(query) {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
        headers: {
            'Authorization': 'Client-ID 94e374e7706ba6fc2ad3404e5a9de517f75a305ff1363fa4c52e63340bb531bd'
        }
    })
    .then(response => response.json())
    .then(loadImages)
    .catch(error => console.error(error));
}

/*
 * Load Images
 */
function loadImages(data) {
    const imagesArr = data.results;
    imagesArr.map((img) => {
        newImage(img.urls.regular);
    });
}

/*
 * New Image
 */
function newImage(url) {
    const img = document.createElement("img");
    img.setAttribute("src", url);
    imagesContainer.appendChild(img);
}

/*
 * NewYorkTimes XHR
 */
/*
function nytXHR(query) {
    const nytRequest = new XMLHttpRequest();
    nytRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=c86b66740bc240c8b53d8d030a8b2f24`)
    nytRequest.onload = loadArticles;
    nytRequest.send();
}
*/

/*
 * Load Articles
 */
/*
function loadArticles() {
    const data = JSON.parse(this.responseText);
    const results = data.response.docs;
    // All Articles
    results.map((article) => {
        const headline = article.headline.main;
        const snippet  = article.snippet;
        const url      = article.web_url;
        newArticle(headline, snippet, url);
    });
}
*/

/*
 * New Article
 */
/*
function newArticle(headline, snippet, url) {
    const article = document.createElement("div");
    article.setAttribute("class", "article");
    article.innerHTML = `<h2>
                            <a href="${url}">${headline}</a>
                        </h2>
                        <p>${snippet}</p>`;
    articlesContainer.appendChild(article);
}
*/