import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConferenceService }  from '../../service/conference.service';
import { Conference } from '../../model/conference';

@Component({
	selector: 'app-view-conference',
	templateUrl: './view-conference.component.html',
	styleUrls: ['./view-conference.component.css']
})
export class ViewConferenceComponent implements OnInit {

	conference: Conference;
	title = 'Conference: ';
	status;

	constructor( private conferenceService: ConferenceService,
				 private location: Location,
				 private route: ActivatedRoute ) { }

	ngOnInit() {
		this.getConferenceInfo();
		console.log(this.status);
	}
	
	getConferenceInfo() {
		const id = +this.route.snapshot.paramMap.get('id');
		this.conferenceService.getConference(id)
		.subscribe(conference => { 
			this.conference = conference;
			console.log(this.conference);
			
		});
	}
	
	save() {
		console.log(this.status);
		if(this.status == 'Block') {
			this.conference.status = 2;
		} else if (this.status == 'Publish') {
			this.conference.status = 1;
		}
		
		this.conferenceService.editStatus(this.conference).subscribe(conference => {
			this.goBack();
		});
	}
	
	goBack(): void {
		this.location.back();
	}

}
