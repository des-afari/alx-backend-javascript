interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

class StudentObject {
	firstName: string
	lastName: string
	age: number
	location: string

	constructor(firstName: string, lastName: string,
		    age: number, location: string){
			    this.firstName = firstName
			    this.lastName = lastName
			    this.age = age
			    this.location = location
		    }
}

const student1: Student = new StudentObject('Lucas', 'Morris', 22, 'Accra')
const student2: Student = new StudentObject('Bruce', 'Matis', 17, 'Accra')

const studentsList: any[] = [student1, student2]
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const th1: HTMLTableHeaderCellElement = row.insertCell(0);
const th2: HTMLTableHeaderCellElement = row.insertCell(1);
th1.innerHTML = ("<b>First Name</b>");
th2.innerHTML = ("<b>Location</b>");
const body: HTMLTableSectionElement = table.createTBody();
studentsList.map((student) => {
	const newRow: HTMLTableRowElement = body.insertRow();
	const firstNameRow: HTMLTableCellElement = newRow.insertCell();
	const locationRow: HTMLTableCellElement= newRow.insertCell();
	firstNameRow.innerHTML = student.firstName;
	locationRow.innerHTML = student.location;
})
