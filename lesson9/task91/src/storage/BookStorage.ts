import {IBook} from "../entity/IBook";

export const BookStorage: Array<IBook> = [
    {
        id: '1',
        name: "First Book",
        description: "very interesting book",
    },
    {
        id: '2',
        name: "Second Book",
        description: "funny book",
    },
]

export function getBookStorage(id: string): IBook {
    return BookStorage.filter(book => book.id === id)[0];
}