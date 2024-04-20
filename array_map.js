const students=[
		{name:'Asif',roll:52,age:25,reg:11},
		{name:'Sultan',roll:50,age:26,reg:12},
		{name:'Siyam',roll:22,age:25,reg:14},
		{name:'Faruk',roll:21,age:26,reg:37},
		{name:'Jahangir',roll:10,age:15,reg:31},
	];
const stdName=students.map(student=>student.name);
console.log(stdName);

const rolls = [12,16,20,23,25];
const roll = rolls.map(r=>r);
console.log(roll);
