// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')
const newArr = []

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res =>{
        console.log(res);
        console.log(res.data.articles);
        const objValueArr = Object.values(res.data.articles)
       objValueArr.map(subarr =>{
            subarr.forEach(item => {
                newArr.push(item);
            })
        })
        console.log(newArr);
        newArr.forEach(item =>{
            cardsContainer.appendChild(card(item));
        })
    })

function card(obj) {
    // create elements
    const card = document.createElement('div');
    const headL = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const auName = document.createElement('span');

    // set class to element
    card.classList.add('card');
    headL.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // set content to element
    headL.textContent = obj.headline;
    img.src = obj.authorPhoto;
    auName.textContent = obj.authorName;

    // set structure
    card.appendChild(headL);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(auName);
    imgContainer.appendChild(img);

    return card
}