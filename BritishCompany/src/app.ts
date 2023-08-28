import { Company } from "./classes/Company";
import { CompanyLocationArray } from "./classes/CompanyLocationArray";
import { CompanyLocationLocalSorage } from "./classes/CompanyLocationLocalStorage";
import { Employee } from "./classes/Employee";

let arrayCompany:Company = new Company(new CompanyLocationArray([]));
let localStorageCompany:Company = new Company(new CompanyLocationLocalSorage());

arrayCompany.add(new Employee('David', 'EPM-RDPA'));
arrayCompany.add(new Employee('Dora', 'EPM-DEB'));
arrayCompany.add(new Employee('Kevin', 'EPM-INF'));

localStorageCompany.add(new Employee('Arnold', 'EPM-TMP'));
localStorageCompany.add(new Employee('Flora', 'EPM-KFF'));
localStorageCompany.add(new Employee('Tomas', 'EPM-EFF'));


console.log(arrayCompany.getNameList());
console.log(arrayCompany.getProjectList());

console.log(localStorageCompany.getNameList());
console.log(localStorageCompany.getProjectList());
