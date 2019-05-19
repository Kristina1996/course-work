import { Category } from './category';

export class Conference {
	
	id: number;
    title: string;
	description: string;
    category: Category;
    author: string;
    //creationDate: string;
	creationDate: Date;
	startDate: string;
	status: number;
	icon: string;
	price: number;
	visits: number;
}