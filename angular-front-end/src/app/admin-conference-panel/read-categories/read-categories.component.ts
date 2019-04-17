import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import { CategoryService } from '../../service/category.service';
import { Category } from '../../model/category';

@Component({
	selector: 'app-read-categories',
	templateUrl: './read-categories.component.html',
	styleUrls: ['./read-categories.component.css'],
	providers: [ CategoryService ]
})
export class ReadCategoriesComponent implements OnInit {
	
	show = false;
    title = 'categories';
    categories: Category[] = [];
    //columns = COLUMNS;
    page = 1;

    /**
     * Инициализация categoryService для получения списка категорий
     */
    constructor( private categoryService: CategoryService ) {
    }

    ngOnInit() {
		this.getAllCategories();
    }

    /**
     * Получение списка всех конференций через categoryService
     */
    getAllCategories() {
        this.categoryService.readCategories()
            .subscribe(categories => {
                console.log(categories);
				this.categories = categories;
				console.log(this.categories);
            });
    }
	
	deleteCategory(category: Category) {
		this.categories = this.categories.filter(conf => conf !== category);
		console.log(category.id);
		this.categoryService.deleteCategory(category.id).subscribe();
	}

}
