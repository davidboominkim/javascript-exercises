const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const par = document.createElement('p');
par.textContent = 'Hey I\'m red!';

const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.style.cssText = "border-style: solid; border-color: black; background-color: pink;";

const nestedHeading = document.createElement('h1');
nestedHeading.textContent = "I'm in a div";

const nestedPar = document.createElement('p');
nestedPar.textContent = "ME TOO!";


div.appendChild(nestedHeading);
div.appendChild(nestedPar);

container.appendChild(content);
container.appendChild(par);
container.appendChild(heading);
container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
