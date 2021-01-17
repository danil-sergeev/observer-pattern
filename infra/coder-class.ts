import {Vacancy} from "./hr-class";
import {IObserver} from "../core/observer";
import {ISubject} from "../core/subject";


export class CoderClass implements IObserver<Vacancy> {
    constructor(
        private readonly subject: ISubject<Vacancy>,
    ) {
        this.subject.registerObserver(this);
    }

    vacancies: Set<Vacancy> = new Set();

    update = (data: Set<Vacancy>): void => {
        this.vacancies = data;
        this.display();
    };

    display = (): void => {
        console.info(`Vacancies size: ${this.vacancies.size}`);
    }
}
