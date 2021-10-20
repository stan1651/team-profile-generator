class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email
    }
    getName() {
      return this.name;
    }
    getId(){
      return this.id;

    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return "Employee";
    }
    printInfo() {
      console.log(`This employee has ${this.id} number`);
      console.log(`This employee has ${this.email}`);
    }
  
  }
module.exports = Employee;