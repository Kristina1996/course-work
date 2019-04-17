import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConferenceService }  from '../../service/conference.service';
import { Conference } from '../../model/conference';

@Component({
	selector: 'app-edit-conference',
	templateUrl: './edit-conference.component.html',
	styleUrls: ['./edit-conference.component.css'],
	providers: [ ConferenceService ]
})
export class EditConferenceComponent implements OnInit {
	
	update_conference_form: FormGroup;
	title = 'Edit conference';
	
	@Input() conference: Conference;
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
		private conferenceService: ConferenceService,
		private location: Location,
		private formBuilder: FormBuilder
	) {
		this.update_conference_form = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
			category: ['', Validators.required],
            author: ['', Validators.required],
            creationDate: ['', Validators.required],
			startDate: ['', Validators.required],
			password: ['', Validators.required]
        });
	}

	ngOnInit() {
		this.getConference();
		this.resetForm();
	}

    /**
	 * Получение данных о выбранной конференции с бэка
     */
	getConference(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.conferenceService.getConference(id)
		.subscribe(conference => this.conference = conference);
	}

    /**
	 * Вернуться обратно на страницу со списком конференций
     */
	goBack(): void {
		this.location.back();
	}

    /**
	 * Сброс формы до значений по умолчанию
     */
	resetForm(): void {
		const id = +this.route.snapshot.paramMap.get('id');

        this.conferenceService.getConference(id)
            .subscribe(conference => {
                // Закладка данных в форму
                this.update_conference_form.patchValue({
                    name: conference.name,
                    surname: conference.surname,
                    username: conference.username,
					password: conference.password,
					email: conference.email,
					photo: conference.photo,
					role: user.role
                });
            });
	}

    /**
	 * Сохранить введенные значения через conferenceService
     */
	save() {
		const id = +this.route.snapshot.paramMap.get('id');
		
		this.conferenceService.getConference(id)
            .subscribe(conference => {
                this.update_conference_form.patchValue({
                    password: conference.password
                });
            });
		
		console.log(this.update_conference_form.value);
		
		this.update_conference_form.value.id = id;
        this.conferenceService.updateConference(this.update_conference_form.value)
            .subscribe(
                 conference => {
                    this.goBack();
                 },
                 error => console.log(error)
             );
	}


}
