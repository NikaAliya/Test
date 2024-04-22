const employees = [
    { id: "1", name: "John Doe", age: 25, salary: 45000 },
    { id: "2", name: "Alice Johnson", age: 30, salary: 55000 },
    { id: "3", name: "Bob Smith", age: 28, salary: 50000 },
    { id: "4", name: "Charlie Brown", age: 35, salary: 60000 },
    { id: "5", name: "David Davis", age: 22, salary: 40000 },
    { id: "6", name: "Eve Williams", age: 29, salary: 52000 },
    { id: "7", name: "Frank White", age: 26, salary: 48000 },
    { id: "8", name: "Grace Lee", age: 32, salary: 58000 },
    { id: "9", name: "Henry Wilson", age: 27, salary: 51000 },
  ];
  

  function getTotalSalary(employees) {
    return employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
  }
  
 
  function getJuniorEmployees(employees) {
    return employees.filter(employee => employee.age < 30);
  }
  
  const totalSalary = getTotalSalary(employees);
  console.log("Visų darbuotojų alga:", totalSalary);
  
  const juniorEmployees = getJuniorEmployees(employees);
  console.log("Jauni darbuotojai:", juniorEmployees);
  