import { Employee } from "./Employee";

export class Company {
    private employees: Employee[];

    constructor(employees: Employee[]) {
        this.employees = employees;
    }

    add(employee: Employee) {
        this.employees.push(employee);
    }

    getProjectList() {
        return this.employees.map(employee => employee.getCurrentProject())
    }

    getNameList() {
        return this.employees.map(employee => employee.getName())
    }
}