const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

const containerRow = document.getElementById("row-container");

for (let member of team) {
  const colHtml = `
    <div class="col-4">
      <div class="card">
          <img src="./img/${member.image}">
          <div class="card-text">
              <h5>${member.name}</h5>
              <p>${member.role}</p>
          </div>
      </div>
    </div>
  `
  console.log(colHtml);
  containerRow.innerHTML += colHtml; 
}
