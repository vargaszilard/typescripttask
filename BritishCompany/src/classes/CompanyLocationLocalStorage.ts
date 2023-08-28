import { ILocation } from "./ILocation";
import { Employee } from "./Employee";

export class CompanyLocationLocalSorage implements ILocation {
    addPerson(employee: Employee) { 
        localStorage.setItem(employee.getName(), JSON.stringify(employee));
    }

    getPerson(index: number) { 
        let employeeKey = localStorage.key(index);
        let employee = null;
        if(employeeKey != null) {
            employee = localStorage.getItem(employeeKey);
        }
        if(employee != null) {
            return this.deserialize(JSON.parse(employee));
        }
    }

    getCount() {
        return localStorage.length;
    }

    deserialize(obj: Employee) {
        return new Employee(obj["name"], obj["currentProject"]);
    }
}