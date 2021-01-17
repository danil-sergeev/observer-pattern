

export interface IObserver<T> {
    update: (data: Set<T>) => void;
}


