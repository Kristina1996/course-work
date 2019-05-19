import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../auth/token-storage.service';

import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.css'],
	providers: [ UserService ]
})
export class UserInfoComponent implements OnInit {
	
	user: User;
	title = 'User Profile';

	constructor( private userService: UserService, 
				 private tokenStorage: TokenStorageService ) { }

	ngOnInit() {
		console.log(this.tokenStorage.getUsername());
		this.getUserInfo();
	}
	
	getUserInfo() {
		this.userService.getUserByUsername(this.tokenStorage.getUsername())
            .subscribe(user => {
                console.log(user);
				this.user = user;
				console.log(this.user);
            });
		
	}

}
