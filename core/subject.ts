import {IObserver} from "./observer";

export interface ISubject<T> {
    observers: Set<IObserver<T>>;
    data: Set<T>;

    registerObserver: (o: IObserver<T>) => void;
    removeObserver: (o: IObserver<T>) => void;
    notifyObservers: () => void;

    addItem: (item: T) => void;
    removeItem: (item: T) => void;

    getState: () => Set<T>;
}
