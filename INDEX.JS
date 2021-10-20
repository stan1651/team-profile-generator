const generateHTML = require('./src/page-template');
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = [];

const addManager = () => {
  return inquirer. prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the team manager?',
      validate: nameInput => {
        if (nameInput) {
          return true;
      } else {
        console.log ("Please enter the managers name.");
        return false;
      }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the manager's ID.",
      validate: nameInput => {
        if (isNaN(nameInput)){
        console.log ("Managers ID required.")
        return false;
      } else {
        return true;
      }
      }
   },
   {
     type: 'input',
     name: 'email',
     message: 'Please enter the managers email.', 
   },
   {
     type: 'input',
     name: 'officeNumber',
     message: "Please enter the manager's office number."
   },
  ])
}
.then(managerInput =>{
  const {name, id, email, officeNumber} = managerInput;
  const manager = new Manager (name, id, email, officeNumber);

  teamArray.push(manager);
  console.log(manager);
})

const addEmployee = () => {
  console.log(`
  adding employees to team
  `);
  return inquirer.prompt ([
    {
      type:'list',
      name:'role',
      message: "Please choose your employee's role",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the employees name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "PLease enter the employee's ID",
    },
    {
      type: 'input',
      name: 'email',
      message:'Please enter the employees email.',
    },
    {
      type: 'input',
      name:"github",
      message: "Please enter the employees GitHub username.",
    },
    {
      type:'input',
      name: 'school',
      message: "Please enter the interns school.",
    },
    {
      type: 'confirm',
      name:"confirmAddEmployee",
      message: "would you like to add more team members?",
      default: false
    }
  ])
  .then(employeeData) => {
    let { name, id, email, role, github, school, confirmAddEmployee} = employeeData
    let employee;
    if ( role === "Engineer") {
      employee = new Engineer (name, id, email, github);
      console.log(employee);
    } else if (role === "Intern") {
      employee = new Intern (name, id, email, schookl);
      console.log(employee);  
    }
    teamArray.push(employee);
    if (confirmAddEmployee) {
      return addEmployee(teamArray);
    } else {
      return teamArray;
    }
  }


const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err =>{
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been created.")
    },
  })
};
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });

const generateHTML = (answers) =>


