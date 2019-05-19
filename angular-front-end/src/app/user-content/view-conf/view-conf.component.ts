import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConferenceService }  from '../../service/conference.service';

import { Conference } from '../../model/conference';

@Component({
	selector: 'app-view-conf',
	templateUrl: './view-conf.component.html',
	styleUrls: ['./view-conf.component.css'],
	providers: [ ConferenceService ]
})
export class ViewConfComponent implements OnInit {
	
	conference: Conference;
	title = 'Conference Info';

	constructor( private conferenceService: ConferenceService,
				 private route: ActivatedRoute ) { }

	ngOnInit() {
		this.getConferenceInfo();
		
	}
	
	getConferenceInfo() {
		const id = +this.route.snapshot.paramMap.get('id');
		this.conferenceService.getConference(id)
		.subscribe(conference => { 
			this.conference = conference;
			//this.conference["like"] = true;
			console.log(this.conference);
			
		});
	}

}
