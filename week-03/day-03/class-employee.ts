class Employee {
  private name: String;

  constructor(name: String) {
    this.name = name;
  }

  getName(): String {
    return this.name;
  }
}

const anna = new Employee('Anna');

console.log(anna.getName());

class Company {
  private employees: Employee[];

  constructor() {
    this.employees = [];
  }

  public getEmployees(): Employee[] {
    return this.employees;
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
}

const morganstanley = new Company();
morganstanley.addEmployee(anna);
morganstanley.addEmployee(new Employee('Laci'));
morganstanley.addEmployee(new Employee('David'));

console.log(morganstanley.getEmployees()[0]);
