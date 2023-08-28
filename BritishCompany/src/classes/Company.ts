import { Employee } from "./Employee";
import { ILocation } from "./ILocation";

export class Company {
    private location: ILocation;

    constructor(location: ILocation) {
        this.location = location;
    }

    add(employee: Employee) {
        this.location.addPerson(employee);
    }

    getProjectList() {
        let projects = [];
        for(let i = 0; i < this.location.getCount(); i++) {
            let person = this.location.getPerson(i);
            projects.push(person?.getCurrentProject());
        }
        return projects;
    }

    getNameList() {
        let names = [];
        for(let i = 0; i < this.location.getCount(); i++) {
            names.push(this.location.getPerson(i)?.getName());
        }
        return names;
    }
}