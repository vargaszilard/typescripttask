import { Backend } from "./classes/Backend";
import { Company } from "./classes/Company";
import { Frontend } from "./classes/Frontend";

let company:Company = new Company([]);

company.add(new Frontend('David', 'EPM-RDPA'));
company.add(new Frontend('Dora', 'EPM-DEB'));
company.add(new Frontend('Kevin', 'EPM-INF'));

company.add(new Backend('Arnold', 'EPM-TMP'));
company.add(new Backend('Flora', 'EPM-KFF'));
company.add(new Backend('Tomas', 'EPM-EFF'));


console.log(company.getProjectList());
console.log(company.getNameList());