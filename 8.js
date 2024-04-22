class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    introduce() {
      return `Pavadinimas: ${this.name}, Amžius: ${this.age}, Lytis: ${this.gender}`;
    }
  }
  
  const person1 = new Person('John', 30, 'Vyras');
  const introduction = person1.introduce();
  console.log(introduction); 
  