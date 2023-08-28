import { ILocation } from "./ILocation";
import { Employee } from "./Employee";

export class CompanyLocationArray implements ILocation {
    private employees: Employee[];

    constructor(employees: Employee[]) {
        this.employees = employees;
    }

    addPerson(employee: Employee) { 
        this.employees.push(employee);
    }

    getPerson(index: number) { 
        return this.employees[index];
    }

    getCount() {
        return this.employees.length;
    }
}