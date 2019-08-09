/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('carousel-container')
const imgArr = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]

carouselContainer.appendChild(Carousel());

function Carousel(item) {
  // create element
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const index = document.createElement('ul');
  // const li1 = document.createElement('li');
  // const li2 = document.createElement('li');
  // const li3 = document.createElement('li');
  // const li4 = document.createElement('li')
  // const imgMt = document.createElement('img');
  // const imgCp = document.createElement('img');
  // const imgTree = document.createElement('img');
  // const imgTT = document.createElement('img');
  const rightBtn = document.createElement('div');
  

  // set class to element
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('rightBtn');

  // set value to element
  leftBtn.textContent = '<';
  // imgMt.src = imageMT;
  // imgCp.scr = imageCP;
  // imgTree.src = imageTree;
  // imgTT.src = imageTT;
  rightBtn.textContent = '>';

  // set structure
  carousel.appendChild(leftBtn);
  carousel.appendChild(index);
  // index.appendChild(li1)
  // li1.appendChild(imgMt);
  // index.appendChild(li2)
  // li2.appendChild(imgCp);
  // index.appendChild(li3)
  // li3.appendChild(imgTree);
  // index.appendChild(li4)
  // li4.appendChild(imgTT);
  carousel.appendChild(rightBtn);

  // set img src
  imgArr.forEach(item =>{
    const li = document.createElement('li')
    const 
  })

  // add btn event
  leftBtn.addEventListener('click', ()=>{
    carousel.classList.toggle('img')
  })

  rightBtn.addEventListener('click', ()=>{
    carousel.tag
  })

  return carousel
}