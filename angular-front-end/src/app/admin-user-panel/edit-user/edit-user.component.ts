import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService }  from '../../service/user.service';
import { User } from '../../model/user';

@Component({
	selector: 'app-edit-user',
	templateUrl: './edit-user.component.html',
	styleUrls: ['./edit-user.component.css'],
	providers: [ UserService ]
})
export class EditUserComponent implements OnInit {

	update_user_form: FormGroup;
	title = 'Edit user';
	
	@Input() user: User;
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

    /**
	 * Метод для отображения инпута "ИНН"
     */
	newFunction() {
		if (this.update_user_form.value.check) {
			return true;
		} else { return false; }
	}

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private location: Location,
		private formBuilder: FormBuilder
	) {
		this.update_user_form = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
			username: ['', Validators.required],
            email: ['', Validators.required],
            photo: ['', Validators.required],
			role: ['', Validators.required]
			password: ['', Validators.required]
        });
	}

	ngOnInit() {
		this.getUser();
		this.resetForm();
	}

    /**
	 * Получение данных о выбранном пользователе с бэка
     */
	getUser(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.userService.getUser(id)
		.subscribe(user => this.user = user);
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

        this.userService.getUser(id)
            .subscribe(user => {
                // Закладка данных в форму
                this.update_user_form.patchValue({
                    name: user.name,
                    surname: user.surname,
                    username: user.username,
					password: user.password,
					email: user.email,
					photo: user.photo,
					role: user.role
                });
            });
	}

    /**
	 * Сохранить введенные значения через userService
     */
	save() {
		const id = +this.route.snapshot.paramMap.get('id');
		
		this.userService.getUser(id)
            .subscribe(user => {
                this.update_user_form.patchValue({
                    password: user.password
                });
            });
		
		console.log(this.update_user_form.value);
		
		this.update_user_form.value.id = id;
        this.userService.updateUser(this.update_user_form.value)
            .subscribe(
                 user => {
                    this.goBack();
                 },
                 error => console.log(error)
             );
	}

}
