//display
const app = document.querySelector('#root');
const logo = document.createElement('img');
logo.src = './images/logo.png';
logo.setAttribute('class', 'logo');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

//API
function fetchdata() {
  fetch('https://ghibliapi.herokuapp.com/films').then(res => {
    if (res.status !== 200) {
      console.log('error');
    }
    console.log(res);
    res.json().then(data => {
      data.forEach(movie => {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        const col = document.createElement('div');
        col.setAttribute('class', 'col');
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        const p = document.createElement('p');
        movie.description = movie.description.substring(0, 300);
        p.textContent = `${movie.description}...`;

        container.appendChild(row);
        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
      });
      //   console.log(data);
      //   console.log(Object.keys(data).length);
      //   const size = Object.keys(data).length;
      //   for (let i = 0; i < size; i++) {
      //     const title = data[i].title;
      //     const description = data[i].description;
      //     console.log(title);
      //   }
    });
  });
}
fetchdata();
