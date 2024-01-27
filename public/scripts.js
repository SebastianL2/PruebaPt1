
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
  let num = 0;
 
  dataUser.items.slice(0, 10).forEach(repo => {
       num++;
    tableHTML += `
      <tr>
        <td>${num}</td>
        <td>${repo.id}</td>
        <td>${repo.name}</td>
        <td>${repo.description}</td>
        <td>${repo.stargazers_count}</td>
        <td>${repo.clone_url}</td>
        <td>${repo.private}</td>
        <td>${repo.forks_count}</td> 
        <td>${repo.watchers_count}</td> 
      </tr>
    `;
  });
  
  tableBody.innerHTML = tableHTML;
};

getData("google").then(() => {
  renderTable();
});


