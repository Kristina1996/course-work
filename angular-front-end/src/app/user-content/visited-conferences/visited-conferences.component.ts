import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { TokenStorageService } from '../../auth/token-storage.service';

import { UserService } from '../../service/user.service';
import { ConferenceService } from '../../service/conference.service';

import { Conference } from '../../model/conference';
import { User } from '../../model/user';

@Component({
	selector: 'app-visited-conferences',
	templateUrl: './visited-conferences.component.html',
	styleUrls: ['./visited-conferences.component.css'],
	providers: [ ConferenceService ]
})
export class VisitedConferencesComponent implements OnInit {

	show = false;
    title = 'Recently Visited';
    conferences: Conference[] = [];
	user: User;
	favouritesConferences;

    /**
     * Инициализация conferenceService для получения списка конференций
     */
    constructor( private conferenceService: ConferenceService,
				 private userService: UserService,
				 private tokenStorage: TokenStorageService) {  }

    ngOnInit() {
		this.getUser();
		//this.getVisitedConferences();
    }

    /**
     * Получение списка посещенных конференций через conferenceService
     */
    getVisitedConferences(idUser) {
		this.conferenceService.getVisitedConferences(idUser)
            .subscribe(conferences => {
				this.conferences = conferences;
				this.conferences.map(conference => {
					conference.like = false;
				});
				//this.getUser();
            });
    }
	
	getUser() {
		this.userService.getUserByUsername(this.tokenStorage.getUsername())
            .subscribe(user => {
				this.user = user;
				this.getVisitedConferences(user.id);
				this.getFavouritesConferences(user);
            });
	}
	
	getFavouritesConferences(user) {
		this.conferenceService.getFavouritesConferences(user)
			.subscribe(favouritesConferences => {
				this.favouritesConferences = favouritesConferences;
				
				this.conferences.map(conference => {
					this.favouritesConferences.forEach(favourite => {
						if (conference.id === favourite.id) {
							conference.like = true;
						}
					});
				});
			});
    }
	
	like(conference) {
		if(conference.like) { conference.like = false;
		} else { conference.like = true; }
		this.conferenceService.likeConference(conference.id, this.user.id).subscribe();
	}

}
