// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(date1, title, temp1) {
    // create elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const LambdaTimes = document.createElement('h1');
    const temp =  document.createElement('span');

    // set class to elements
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // set content
    date.textContent = date1;
    LambdaTimes.textContent = title;
    temp.textContent = temp1;

    // set structure
    header.appendChild(date);
    header.appendChild(LambdaTimes);
    header.appendChild(temp);

    return header
}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header('SMARCH 28, 2019', 'Lambda Times', '98°'));
