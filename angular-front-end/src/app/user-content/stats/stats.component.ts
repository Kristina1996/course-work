import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { TokenStorageService } from '../../auth/token-storage.service';

import { VisitService } from '../../service/visit.service';
import { ConferenceService } from '../../service/conference.service';
import { UserService } from '../../service/user.service';

import { Conference } from '../../model/conference';
import { User } from '../../model/user';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.css'],
	providers: [ VisitService, ConferenceService ]
})
export class StatsComponent implements OnInit {
	
	conferences: Conference[] = [];
	user: User;
	
	totalVisitsChart = [];
	titlesConferences = [];
	visitsConferences = [];
	
	totalVisitsChartBar = [];
	

	constructor( private visitService: VisitService,
				 private conferenceService: ConferenceService,
				 private userService: UserService,
				 private tokenStorage: TokenStorageService ) { }

	ngOnInit() {
		this.getUser();	
	}
	
	getMyConferences() {
		
		this.conferenceService.getMyConferences(this.user)
			.subscribe(conferences => {
				this.conferences = conferences;
				
				this.titlesConferences = this.conferences.map(function(conference) {
					console.log(conference.startDate);
					return conference.startDate;
				});
				console.log(this.titlesConferences);
				
				this.visitsConferences = this.conferences.map(function(conference) {
					console.log(conference.visits);
					return conference.visits;
				});
				console.log(this.visitsConferences);
				console.log("отрисовываю");
				this.drawTotalVisits();
			});
			
    }
	
	getUser() {
		this.userService.getUserByUsername(this.tokenStorage.getUsername())
            .subscribe(user => {
				this.user = user;
				this.getMyConferences();
            });
	}
	
	drawTotalVisits() {
		console.log(this.visitsConferences, this.titlesConferences);
		this.totalVisitsChart = new Chart('totalVisitsChart', {
			type: 'line',
			data: {
				labels: this.titlesConferences,
				datasets: [{
					label: 'Visits of conferences',
					data: this.visitsConferences,
					fill: true,
					lineTension: 0.5,
					borderColor: "rgba(103, 55, 128, 1)",
					borderWidth: 2
				}]
			}, 
			options: {
				title:{
					text: "Total number of visits",
					display: true
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});
		
		this.totalVisitsChartBar = new Chart('totalVisitsChartBar', {
			type: 'bar',
			data: {
				labels: this.titlesConferences,
				datasets: [{
					label: 'Visits of conferences',
					data: this.visitsConferences,
					backgroundColor: 'rgba(171, 72, 163, 1)',
					borderColor: 'rgba(171, 72, 163, 1)',
					borderWidth: 3
				}]
			}, 
			options: {
				title:{
					text: "Total number of visits",
					display: true
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
	}

}
