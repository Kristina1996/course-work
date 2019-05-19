import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-yandex-payment',
	templateUrl: './yandex-payment.component.html',
	styleUrls: ['./yandex-payment.component.css']
})
export class YandexPaymentComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		paypal.Buttons({
			createOrder: function(data, actions) {
				return actions.order.create({
					purchase_units: [{
						amount: {
							value: '5'
						}
					}]
				});
				console.log("create order");
			},
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
				});
			}
		}).render('#paypal-button-container');
	}

}
