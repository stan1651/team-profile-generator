const generateEmployees = team => {
    // engineer
    const generateManager = function (manager) {
        return `
             <div class="card bg-light mb-3" style="max-width: 18rem;">
          <div class="card-header text-white bg-primary mb-3">Tom</div>
            <h3>${manager.name}</h3>
            <h4>Manager</h4><i class="list-group list-group-flush"</i>
            <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">EMail: ${manager.email}</p>
              <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
          </div<div class="col px-md-5">
   >
        </div>
      </div> 
     `;
    }
     
     const generateEngineer = function (engineer) {
         return `
         <div class="card bg-light mb-3" style="max-width: 18rem;">
         <div class="card-header text-white bg-primary mb-3">Tom</div>
           <h3>${engineer.name}</h3>
           <h4>Engineer</h4><i class="list-group list-group-flush"</i>
           <div class="card-body">
             <p class="id">ID: ${engineer.id}</p>
             <p class="email">EMail: <a href="email@ ${engineer.email}"></p>
             <p class="github">Github: <a href="https:/github.com/${engineer.github}</p>
           </div>
         </div>
       </div>
     </div> 
    `;

    const generateIntern = function (intern) {
        return `
    <div class="card bg-light mb-3" style="max-width: 18rem;">
           <h3>${intern.name}</h3>
           <h4>Intern</h4>
           <div class="card-body">
             <p class="id">ID: ${intern.id}</p>
             <p class="email">EMail: <a href="email@ ${intern.email}"></p>
             <p class="school">School:${intern.school}</p>
           </div>
         </div>
       </div>
     </div> 
    `
     };

     generateHTML = (data) => {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }
        if (role === "Intern") {
            const internCard = generateIntern(employee)
            pageArray.push(internCard);
        }
    }  
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}
const generateTeamPage = function (employeeCards) {
    return`
}

    

     
     
     
     
     
        
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
<div class="container employees">
    <div class="row mx-md-n5">
        <div class="col px-md-5">
          <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary mb-3">Tom</div>
            <div class="card-body">
              <h5 class="card-title ">Manager</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">EMail</li>
                <li class="list-group-item">office number</li>
              </ul>
            </div>
          </div>
        </div> 
        <div class="col px-md-5">
          <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary mb-3">Casy</div>
            <div class="card-body">
              <h5 class="card-title ">Engineer</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">Github</li>
                <li class="list-group-item">email</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col px-md-5">
          <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary mb-3">Al</div>
            <div class="card-body">
              <h5 class="card-title ">Primary card title</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
<div class="row mx-md-n5">
        <div class="col px-md-5">
          <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary mb-3">Header</div>
            <div class="card-body">
              <h5 class="card-title ">Primary card title</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div> 
        <div class="col px-md-5">
          <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary mb-3">Header</div>
            <div class="card-body">
              <h5 class="card-title ">Primary card title</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col px-md-5">
          <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary mb-3">Header</div>
            <div class="card-body">
              <h5 class="card-title ">Primary card title</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
</div>
</div>
</body>
</html>
`;

}

module.exports = generateHTML;
}}   