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
    //columns = COLUMNS;
    page = 1;

    /**
     * Инициализация userService для получения списка пользователей
     */
    constructor( private userService: UserService ) {
    }

    ngOnInit() {
        //this.getDataFromLocalStorage();
        //this.getUserswithPage();
		this.getAllUsers();
    }

	/*
    onChanged(increased: any) {
        console.log(increased);
        if (increased === false) {
            this.getDataFromLocalStorage();
            this.show = false;
        }
    }
	*/

    /**
     * Получение списка колонок из localStorage
     */
	 
	/*
    getDataFromLocalStorage() {
        const localStorageColumns = JSON.parse(localStorage.getItem('columnsName'));
        if (localStorageColumns == null) {
            console.log('localStorage пустой');
        } else {
            console.log('localStorage не пустой');
            this.columns = localStorageColumns.columns;
            //localStorageColumns.forEach(sitem => {
               //console.log(COLUMNS.find(item => item.name === sitem));
            //});
        }
    }*/

    /**
     * Получение списка всех пользователей через userService
     */
    getAllUsers() {
        this.userService.readUsers()
            .subscribe(users => {
                console.log(users);
				this.users = users;
                //this.users = users['records'];
				console.log(this.users);
            });
    }

    /**
     * Получение списка пользователей с учетом динамической подгрузки
     */
    getUserswithPage() {
        this.userService.getUserswithPage(this.page)
            .subscribe(users => {
                console.log(users);
                if (this.page === 1) {
                    this.users = users['records'];
                }

                if (this.page > 1) {
                    for (let i = 0; i < users['records'].length; i++) {
                        const size = this.users.push(users['records'][i]);
                        console.log(size);
                    }
                    console.log(users);
                }
            });
    }

    /**
     * Метод для получения списка новых данных с бэка, срабатывающий при скролле компонента
     */
    onScroll() {
        console.log('Scrolled');
        this.page = this.page + 1;
        this.getUserswithPage();
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
