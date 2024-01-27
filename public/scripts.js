
const API_URL ='https://api.github.com/users/'
let dataUser=[];
let listHTML="";



const getData= (USERNAME)=>{
fetch(`${API_URL}/api/data/${USERNAME}/repos?per_page=10&sort=stars`)
.then(response => response.json())
.catch(error => {
    alertManager('error', ' Ups! Ocurrió un problema al cargar los datos');
  })
.then(data=>{
    dataUser = data.data;
   console.log(data.data)
    renderResult(data.data);
    
})
}
getData();

