export class Person{
  id:number;
  name:string;
  firstname:string;
  age:number;
  cin:number;
  job:string;
  path:string;
  constructor(id=0, name='', firstname='', path='', cin=1, job='',age=0) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age=age;
    this.path = path;
    this.cin = cin;
    this.job = job;

  }


}
