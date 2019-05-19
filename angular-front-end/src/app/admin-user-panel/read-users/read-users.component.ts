import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import { UserService } from '../../service/user.service';
import { User } from '../../model/user';


@Component({
	selector: 'app-read-users',
	templateUrl: './read-users.component.html',
	styleUrls: ['./read-users.component.css'],
	providers: [UserService]
})
export class ReadUsersComponent implements OnInit {

	show = false;
    title = 'System users';
    users: User[] = [];

    /**
     * Инициализация userService для получения списка пользователей
     */
    constructor( private userService: UserService ) {
    }

    ngOnInit() {
		this.getAllUsers();
    }

    /**
     * Получение списка всех пользователей через userService
     */
    getAllUsers() {
        this.userService.readUsers()
            .subscribe(users => {
                console.log(users);
				this.users = users;
				console.log(this.users);
            });
    }
	
	deleteUser(user: User) {
		this.users = this.users.filter(u => u !== user);
		console.log(user.id);
		this.userService.deleteUser(user.id)
            .subscribe(                
                 //error => console.log("Ошибка при удалении юзера" + error)
             );
	}

}
