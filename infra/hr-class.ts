import {ISubject} from "../core/subject";
import {IObserver} from "../core/observer";

export type Vacancy = {
    title: string;
    rate: number;
}


export class HrClass implements ISubject<Vacancy> {
    observers: Set<IObserver<Vacancy>> = new Set();
    data: Set<Vacancy> = new Set();

    registerObserver = (o: IObserver<Vacancy>): void => {
        this.observers.add(o);
    };

    removeObserver = (o: IObserver<Vacancy>): void => {
        if (this.observers.has(o)) {
            this.observers.delete(o);
        }
    };

    notifyObservers = (): void => {
        this.observers.forEach((o) => o.update(this.getState()));
    }

    addItem = (item: Vacancy): void => {
        if (!this.data.has(item)) {
            this.data.add(item);
            this.dataChanged();
        }
    }

    removeItem = (item: Vacancy): void => {
        if (this.data.has(item)) {
            this.data.delete(item);
            this.dataChanged();
        }
    }

    dataChanged = (): void => {
        this.notifyObservers();
    }

    getState = (): Set<Vacancy> => {
        return this.data;
    }
}
