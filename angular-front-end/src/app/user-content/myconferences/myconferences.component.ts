import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../auth/token-storage.service';

import { ConferenceService } from '../../service/conference.service';
import { UserService } from '../../service/user.service';

import { Conference } from '../../model/conference';
import { User } from '../../model/user';

@Component({
	selector: 'app-myconferences',
	templateUrl: './myconferences.component.html',
	styleUrls: ['./myconferences.component.css'],
	providers: [ ConferenceService ]
})
export class MyConferencesComponent implements OnInit {

	show = false;
    title = 'My Conferences';
    conferences: Conference[] = [];
	user: User;

    /**
     * Инициализация conferenceService для получения списка конференций
     */
    constructor( 
			private conferenceService: ConferenceService,
			private userService: UserService,
			private tokenStorage: TokenStorageService ) {
    }

    ngOnInit() {
		this.getAuthor();
		//this.getMyConferences();
    }

    /**
     * Получение списка всех конференций через conferenceService
     */
    getMyConferences(user) {
		if (this.user != undefined) {
			this.conferenceService.getMyConferences(this.user)
				.subscribe(conferences => {
					console.log(conferences);
					this.conferences = conferences;
					console.log(this.conferences);
				});
		}
    }
	
	getAuthor() {
		this.userService.getUserByUsername(this.tokenStorage.getUsername())
            .subscribe(user => {
                console.log(user);
				this.user = user;
				this.getMyConferences(user);
				console.log(this.user);
            });
	}
	
	deleteConference(conference: Conference) {
		this.conferences = this.conferences.filter(conf => conf !== conference);
		console.log(conference.id);
		this.conferenceService.deleteConference(conference.id).subscribe();
	}

}
