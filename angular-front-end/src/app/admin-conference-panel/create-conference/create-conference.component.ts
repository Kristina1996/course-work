import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { TokenStorageService } from '../../auth/token-storage.service';

import { UserService } from '../../service/user.service';
import { ConferenceService }  from '../../service/conference.service';
import { CategoryService }  from '../../service/category.service';

import { User } from '../../model/user';
import { Conference } from '../../model/conference';
import { Category } from '../../model/category';


@Component({
	selector: 'app-create-conference',
	templateUrl: './create-conference.component.html',
	styleUrls: ['./create-conference.component.css'],
	providers: [ ConferenceService, CategoryService, DatePipe ]
})
export class CreateConferenceComponent implements OnInit {

	create_conference_form: FormGroup;
	title = 'Create new conference';
	categories: Category[] = [];
	category: Category;
	user: User;
	@ViewChild('fileInput') fileInput: ElementRef;
	
	constructor(
		private route: ActivatedRoute,
		private datePipe: DatePipe,
		private conferenceService: ConferenceService,
		private categoryService: CategoryService,
		private userService: UserService, 
		private tokenStorage: TokenStorageService,
		private location: Location,
		private formBuilder: FormBuilder
	) { 
		this.create_conference_form = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
			category: ['', Validators.required],
            startDate: ['', Validators.required],
			icon: [''],
			price: ['', Validators.required]
        });
	}

	ngOnInit() {
		this.getCategories();
		this.getAuthor();
	}
	
	onFileChange(event) {
		let reader = new FileReader();
		if(event.target.files && event.target.files.length > 0) {
			let file = event.target.files[0];
			reader.readAsDataURL(file);
			reader.onload = () => {
				this.create_conference_form.patchValue({
					filename: file.name,
					filetype: file.type,
					icon: "data:" + file.type + ";base64," + reader.result.split(',')[1]
				})
			};
		}
		console.log(this.create_conference_form.value);
	}
  
	/**
	 * Сохранить введенные значения о конференциях через conferenceService
     */
	save(category) {
		
		console.log(this.create_conference_form.value);
		
		let currentDate = new Date();
		
		currentDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm');
		console.log(currentDate);
		
		console.log(this.create_conference_form.value);
		this.conferenceService.createConference(this.create_conference_form.value, currentDate, this.user)
            .subscribe(
                conference => {
                   this.goBack();
                },
                error => console.log(error)
            );
	}
	
	getAuthor() {
		this.userService.getUserByUsername(this.tokenStorage.getUsername())
            .subscribe(user => {
                console.log(user);
				this.user = user;
				console.log(this.user);
            });
		
	}
	
	getCategories() {
		this.categoryService.readCategories()
            .subscribe(categories => {
                console.log(categories);
				this.categories = categories;
				console.log(this.categories);
            });
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
            startDate: '',
			icon: '',
			price: ''
		});
	}

}
