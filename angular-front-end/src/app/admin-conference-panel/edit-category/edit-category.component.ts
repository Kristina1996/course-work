import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CategoryService }  from '../../service/category.service';
import { Category } from '../../model/category';

@Component({
	selector: 'app-edit-category',
	templateUrl: './edit-category.component.html',
	styleUrls: ['./edit-category.component.css'],
	providers: [ CategoryService ]
})
export class EditCategoryComponent implements OnInit {
	
	update_category_form: FormGroup;
	title = 'Edit category';
	
	@Input() category: Category;
	@Input() id;

    /**
	 * Метод для включения/выключения кнопки "Сохранить"
     */
	/* 
	get buttonDisabled() {
		if (this.update_user_form.value.age > 17 && this.update_user_form.value.name !== '' &&
            	this.update_user_form.value.surname !== '' && this.update_user_form.value.position !== '') {
			if (this.newFunction() === false || (this.newFunction() && this.update_user_form.value.inn !== '')) {
                return true;
            }
		}
	}
	*/

	constructor(
		private route: ActivatedRoute,
		private categoryService: CategoryService,
		private location: Location,
		private formBuilder: FormBuilder
	) {
		this.update_category_form = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
	}

	ngOnInit() {
		this.getCategory();
		this.resetForm();
	}

    /**
	 * Получение данных о выбранном пользователе с бэка
     */
	getCategory(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.categoryService.getCategory(id)
			.subscribe(category => this.category = category);
		console.log(id, this.category);
	}

    /**
	 * Вернуться обратно на страницу со списком пользователей
     */
	goBack(): void {
		this.location.back();
	}

    /**
	 * Сброс формы до значений по умолчанию
     */
	resetForm(): void {
		const id = +this.route.snapshot.paramMap.get('id');

        this.categoryService.getCategory(id)
            .subscribe(category => {
                this.update_category_form.patchValue({
                    name: category.name,
                    description: category.description
                });
            });
	}

    /**
	 * Сохранить введенные значения через userService
     */
	save() {
		const id = +this.route.snapshot.paramMap.get('id');
		
		this.update_category_form.value.id = id;
        this.categoryService.updateCategory(this.update_category_form.value)
            .subscribe(
                 category => {
                    this.goBack();
                 },
                 error => console.log(error)
             );
	}
}
