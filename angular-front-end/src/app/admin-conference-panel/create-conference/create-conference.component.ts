import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConferenceService }  from '../../service/conference.service';
import { Conference } from '../../model/conference';

@Component({
	selector: 'app-create-conference',
	templateUrl: './create-conference.component.html',
	styleUrls: ['./create-conference.component.css'],
	providers: [ ConferenceService ]
})
export class CreateConferenceComponent implements OnInit {

	create_conference_form: FormGroup;
	title = 'Create new conference';
	
	constructor(
		private route: ActivatedRoute,
		private conferenceService: ConferenceService,
		private location: Location,
		private formBuilder: FormBuilder
	) { 
		this.create_conference_form = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
			category: ['', Validators.required],
            startDate: ['', Validators.required]
        });
	}

	ngOnInit() {
	}
  
	/**
	 * Сохранить введенные значения о конференциях через conferenceService
     */
	save() {
		this.conferenceService.createConference(this.create_conference_form.value)
            .subscribe(
                conference => {
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
        this.create_conference_form.patchValue({
            title: '',
            description: '',
            category: '',
            startDate: ''
		});
	}

}
