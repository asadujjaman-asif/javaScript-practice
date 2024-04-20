const studentInfo={name:"Asif",roll:52,reg:624465,dist:'Rangpur'}

console.log(studentInfo);
const {name,roll,reg}=studentInfo;
console.log(name,reg);

const university={
	name:"Dhaka International University",
	dept:{id:1,deptName:'CSE',batch:'E-73',students:50},
	subject:{id:1,name:'Programing C'},
}

const {deptName, batch}=university.dept;
console.log(deptName, batch);
const {id, name}=university.subject;
console.log(id, name);
