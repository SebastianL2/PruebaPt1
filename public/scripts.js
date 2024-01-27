
const API_URL ='https://api.github.com/users'
let dataUser=[];
let listHTML="";

function alertManager(type, message) {
  // Aquí puedes implementar la lógica para mostrar alertas
  alert(`${type.toUpperCase()}: ${message}`);
}

const getData =async (USERNAME) => {
  try {
    console.log("hola", USERNAME);
    const response = await fetch(`https://api.github.com/search/repositories?q=user:${USERNAME}+stars:>=1000&sort=stars&order=desc`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Datos completos:", data);
    dataUser=data;
  } catch (error) {
    console.error('Error al obtener los repositorios:', error);
  }
};



const renderTable = () => {
  const tableBody = document.getElementById("table-body");
  let tableHTML = "";
 
  dataUser.items.slice(0, 10).forEach(repo => {
  
    tableHTML += `
      <tr>
        <td>${repo.name}</td>
        <td>${repo.stargazers_count}</td>
        <td>${repo.language}</td>
        <td>${repo.description}</td>
      </tr>
    `;
  });
  
  tableBody.innerHTML = tableHTML;
};

getData("google").then(() => {
  renderTable();
});


