import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaymentService }  from '../../service/payment.service';
import { ConferenceService }  from '../../service/conference.service';

import { Conference } from '../../model/conference';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.css'],
	providers: [ PaymentService, ConferenceService ]
})
export class PaymentComponent implements OnInit {
	
	title = 'Conference payment: ';
	conference: Conference;

	constructor ( private paymentService: PaymentService,
				  private conferenceService: ConferenceService,
				  private route: ActivatedRoute) { }

	ngOnInit() {
		this.getConferenceInfo();
		
		paypal.Buttons({
			createOrder: function(data, actions) {
				console.log(data);
				return actions.order.create({
					purchase_units: [{
						amount: {
							value: 1
							//total: this.conference.price
						}
					}]
				});
				console.log("create order");
			},
			// Finalize the transaction
			onApprove: function(data, actions) {
				
				return actions.order.capture().then(function(details) {
					console.log("transaction completed");
					alert('Transaction completed by ' + details.payer.name.given_name);
					// Call your server to save the transaction
					
					return fetch('http://localhost:8080/paypal-transaction-complete', {
						method: 'post',
						headers: {
							'content-type': 'application/json'
						},
						body: JSON.stringify({
							orderID: data.orderID
						})
					});
					
					//return this.paymentService.compliteTransaction(data.orderID);
				});
			}
		}).render('#paypal-button-container');
	}
	
	getConferenceInfo() {
		const id = +this.route.snapshot.paramMap.get('id');
		this.conferenceService.getConference(id)
		.subscribe(conference => { 
			this.conference = conference;
			console.log(this.conference);
			
		});
	}

}
