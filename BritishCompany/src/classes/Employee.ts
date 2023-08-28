export class Employee {
    private name: string;
    private currentProject: string;

    constructor(name: string, currentProject: string) {
        this.name = name;
        this.currentProject = currentProject;
    }

    public getCurrentProject() {
        return this.currentProject;
    }

    public getName() {
        return this.name;
    }
}