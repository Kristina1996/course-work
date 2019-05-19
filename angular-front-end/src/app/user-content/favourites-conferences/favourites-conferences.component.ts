import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../auth/token-storage.service';

import { ConferenceService } from '../../service/conference.service';
import { UserService } from '../../service/user.service';

import { Conference } from '../../model/conference';
import { User } from '../../model/user';

@Component({
	selector: 'app-favourites-conferences',
	templateUrl: './favourites-conferences.component.html',
	styleUrls: ['./favourites-conferences.component.css'],
	providers: [ ConferenceService ]
})
export class FavouritesConferencesComponent implements OnInit {

	show = false;
    title = 'Favourites';
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
		this.getUser();
    }

    /**
     * Получение списка всех конференций через conferenceService
     */
    getFavouritesConferences(user) {
		this.conferenceService.getFavouritesConferences(this.user)
			.subscribe(conferences => {
				console.log(conferences);
				this.conferences = conferences;
				console.log(this.conferences);
			});
    }
	
	getUser() {
		this.userService.getUserByUsername(this.tokenStorage.getUsername())
            .subscribe(user => {
                console.log(user);
				this.user = user;
				this.getFavouritesConferences(user);
				console.log(this.user);
            });
	}
	
	deleteConference(conference: Conference) {
		this.conferences = this.conferences.filter(conf => conf !== conference);
		console.log(conference.id);
		this.conferenceService.deleteConference(conference.id).subscribe();
	}
}
