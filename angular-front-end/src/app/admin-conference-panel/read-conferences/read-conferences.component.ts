import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {Http, Response, Headers} from '@angular/http';

import { ConferenceService } from '../../service/conference.service';
import { Conference } from '../../model/conference';

@Component({
	selector: 'app-read-conferences',
	templateUrl: './read-conferences.component.html',
	styleUrls: ['./read-conferences.component.css'],
	providers: [ ConferenceService ]
})
export class ReadConferencesComponent implements OnInit {
	
	show = false;
    title = 'Conferences';
    conferences: Conference[] = [];
	//columns = COLUMNS;
    page = 1;

    /**
     * Инициализация conferenceService для получения списка конференций
     */
    constructor( private conferenceService: ConferenceService,
				 private _sanitizer: DomSanitizer	) {
    }

    ngOnInit() {
		this.getAllConferences();
    }

    /**
     * Получение списка всех конференций через conferenceService
     */
    getAllConferences() {
        this.conferenceService.readConferences()
            .subscribe(conferences => {
                console.log(conferences);
				this.conferences = conferences;
				console.log(this.conferences);
            });
    }
	
	deleteConference(conference: Conference) {
		this.conferences = this.conferences.filter(conf => conf !== conference);
		console.log(conference.id);
		this.conferenceService.deleteConference(conference.id).subscribe();
	}
	
	publishConference() {
		
	}
	
	blockConference() {
		
	}

}
