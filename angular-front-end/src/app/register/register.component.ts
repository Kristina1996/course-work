import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../model/signup';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	form: any = {};
	signupInfo: SignUpInfo;
	isSignedUp = false;
	isSignUpFailed = false;
	errorMessage = '';

	constructor( private authService: AuthService ) { }

	ngOnInit() { }

	onSubmit() {
		console.log(this.form);

		this.signupInfo = new SignUpInfo(
			this.form.name,
			this.form.surname,
			this.form.username,
			this.form.email,
			this.form.photo,
			this.form.password
		);

		this.authService.signUp(this.signupInfo).subscribe(
			data => {
				console.log(data);
				this.isSignedUp = true;
				this.isSignUpFailed = false;
			},
			error => {
				console.log(error);
				this.errorMessage = error.error.message;
				this.isSignUpFailed = true;
			}
		);
	}

}
