import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService }  from '../../service/user.service';
import { User } from '../../model/user';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.component.html',
	styleUrls: ['./create-user.component.css'],
	providers: [ UserService ]
})
export class CreateUserComponent implements OnInit {

	create_user_form: FormGroup;
	title = 'Create new user';
	
	/**
	 * Метод для включения/выключения кнопки "Сохранить"
     */
	get buttonSaveDisabled() {
		if (this.create_user_form.value.name !== '' && this.create_user_form.value.surname !== '' &&
            this.create_user_form.value.username !== '' && this.create_user_form.value.email !== '' && 
			this.create_user_form.get('role').touched) {
			return true;
		}
	}
	
	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private location: Location,
		private formBuilder: FormBuilder
	) { 
		this.create_user_form = this.formBuilder.group({
			name: ['', Validators.required],
            surname: ['', Validators.required],
			username: ['', Validators.required],
            email: ['', Validators.required],
            photo: ['', Validators.required],
			role: ['', Validators.required],
			password: ['', Validators.required]
        });
	}

	ngOnInit() {
	}
  
	/**
	 * Сохранить введенные значения о пользователе через userService
     */
	save() {
		console.log(this.create_user_form.value);
        //this.userService.createUser(this.create_user_form.value)
		this.userService.registerUser(this.create_user_form.value)
            .subscribe(
                user => {
                   this.goBack();
                },
                error => console.log(error)
            );
	}
	
	/**
	 * Вернуться обратно на страницу со списком пользователей
     */
	goBack(): void {
		this.location.back();
	}

    /**
	 * Сброс формы 
     */
	resetForm(): void {
        // Закладка данных в форму
        this.create_user_form.patchValue({
			name: '',
            surname: '',
            username: '',
            email: '',
			photo: '',
			role: '',
			password: ''
		});
	}

}
