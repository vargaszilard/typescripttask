import { Employee } from "./Employee";

export interface ILocation {
    addPerson(employee: Employee): void;
    getPerson(index: number): Employee | undefined;
    getCount(): number;
}