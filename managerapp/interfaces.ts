import { Category } from "./enums";

interface House {
    address: string;
    rooms: number;
    baths: number;
    sqft: number;
    available: boolean;
    clean?: boolean;
    category: Category;

}

export { House };