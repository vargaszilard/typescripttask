import { Employee } from "./Employee";

export class Frontend implements Employee {
    private name: string;
    private currentProject: string;

    constructor(name: string, currentProject: string) {
        this.name = name;
        this.currentProject = currentProject;
    }

    getCurrentProject() {
        return this.currentProject;
    };

    getName() {
        return this.name;
    };
}