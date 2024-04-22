const students = [
    { id: "1", name: "Alice Johnson", averageGrade: 8.5, graduated: false },
    { id: "2", name: "Bob Smith", averageGrade: 9.2, graduated: true },
    { id: "3", name: "Charlie Brown", averageGrade: 8.8, graduated: false },
    { id: "4", name: "David Davis", averageGrade: 9.7, graduated: true },
    { id: "5", name: "Eve Williams", averageGrade: 7.9, graduated: false },
    { id: "6", name: "Frank White", averageGrade: 9.9, graduated: true },
    { id: "7", name: "Grace Lee", averageGrade: 8.2, graduated: false },
    { id: "8", name: "Henry Wilson", averageGrade: 9.5, graduated: true },
    { id: "9", name: "Isabella Martinez", averageGrade: 8.6, graduated: false },
  ];
  

  function filterTopStudents(students) {
    return students.filter(student => student.averageGrade > 9);
  }
  
  
  function filterGraduated(students) {
    return students.filter(student => student.graduated);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const allStudentsDiv = document.getElementById("allStudents");
    const topStudentsDiv = document.getElementById("topStudents");
    const graduatedStudentsDiv = document.getElementById("graduatedStudents");
 
    allStudentsDiv.innerHTML = students.map(student => `<div>${student.name}</div>`).join('');
  
    const topStudents = filterTopStudents(students);
    topStudentsDiv.innerHTML = topStudents.map(student => `<div>${student.name}</div>`).join('');
  
  
    const graduatedStudents = filterGraduated(students);
    graduatedStudentsDiv.innerHTML = graduatedStudents.map(student => `<div>${student.name}</div>`).join('');
  });
  