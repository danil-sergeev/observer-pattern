import {HrClass, Vacancy} from "./infra/hr-class";
import {CoderClass} from "./infra/coder-class";

const fixtures: Vacancy[] = [
    {
        title: 'Full-Stack Developer',
        rate: 25,
    },
    {
        title: 'Backend Developer',
        rate: 15,
    },
    {
        title: 'Full-Stack Developer',
        rate: 20,
    },
];

const hr = new HrClass();

const junior = new CoderClass(hr);
const middle = new CoderClass(hr);
const senior = new CoderClass(hr);

(() => {


    hr.addItem(fixtures[0]);

    hr.addItem(fixtures[1]);

    hr.removeObserver(senior);

    hr.addItem(fixtures[2]);
    hr.removeItem(fixtures[1]);
})();
