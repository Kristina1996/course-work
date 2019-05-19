import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { TokenStorageService } from '../../auth/token-storage.service';

import { UserService } from '../../service/user.service';
import { ConferenceService } from '../../service/conference.service';

import { Conference } from '../../model/conference';

@Component({
	selector: 'app-conferences-list',
	templateUrl: './conferences-list.component.html',
	styleUrls: ['./conferences-list.component.css'],
	providers: [ ConferenceService ]
})
export class ConferencesListComponent implements OnInit {

	show = false;
    title = 'Conferences';
    conferences: Conference[] = [];
	favouritesConferences;

    /**
     * Инициализация conferenceService для получения списка конференций
     */
    constructor( private conferenceService: ConferenceService,
				 private userService: UserService,
				 private tokenStorage: TokenStorageService) {  }

    ngOnInit() {
		this.getAllConferences();
    }

    /**
     * Получение списка всех конференций через conferenceService
     */
    getAllConferences() {
        this.conferenceService.readConferences()
            .subscribe(conferences => {
				this.conferences = conferences;
				this.conferences.map(conference => {
					conference.like = false;
				});
				this.getUser();
            });
    }
	
	getUser() {
		this.userService.getUserByUsername(this.tokenStorage.getUsername())
            .subscribe(user => {
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
	}
	
}
