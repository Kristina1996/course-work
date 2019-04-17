import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CategoryService }  from '../../service/category.service';
import { Category } from '../../model/category';

@Component({
	selector: 'app-create-category',
	templateUrl: './create-category.component.html',
	styleUrls: ['./create-category.component.css'],
	providers: [ CategoryService ]
})
export class CreateCategoryComponent implements OnInit {
	
	create_category_form: FormGroup;
	title = 'Create new category';
	
	constructor(
		private route: ActivatedRoute,
		private categoryService: CategoryService,
		private location: Location,
		private formBuilder: FormBuilder
	) { 
		this.create_category_form = this.formBuilder.group({
			name: ['', Validators.required],
            description: ['', Validators.required]
        });
	}

	ngOnInit() {
	}
  
	/**
	 * Сохранить введенные значения о конференции через categoryService
     */
	save() {
		this.categoryService.createCategory(this.create_category_form.value)
            .subscribe(
                category => {
                   this.goBack();
                },
                error => console.log(error)
            );
	}
	
	/**
	 * Вернуться обратно на страницу со списком конференций
     */
	goBack(): void {
		this.location.back();
	}

    /**
	 * Сброс формы 
     */
	resetForm(): void {
        this.create_category_form.patchValue({
			name: '',
            description: ''
		});
	}

}
