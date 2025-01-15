console.log("This is a typescript file!!!");

interface User {
  name: string;
  id: number;
  greet(): string;
}

const user: User = {
  name: 'Alice',
  id: 1,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};


// const user1: User = { name: 'Alice' }; // Error: Property 'id' is missing in type '{ name: string; }'

// const user2: User = { name: 'Alice', id: '10' };


interface GetGreetingFn {
  (user: User): string;
}


const getGreeting: GetGreetingFn = (user: User) => {
  return user.greet();
};

console.log(getGreeting(user));





interface Employee extends User {
  salary: number;
}




class Manager implements Employee {
  name: string;
  id: number;
  salary: number;

  constructor(name: string, id: number, salary: number) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  greet() {
    return `Hi, my name is ${this.name} and I am the manager.`;
  }
}

const manager = new Manager('Bob', 4, 50000);
console.log(getGreeting(manager)); // "Hi, my name is Bob and I am the manager."