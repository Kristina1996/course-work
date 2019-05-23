package com.krist.server.controller;

import java.io.IOException;

import org.json.JSONObject;

import com.braintreepayments.http.HttpResponse;
import com.braintreepayments.http.serializer.Json;
import com.krist.server.model.PayPalClient;
import com.paypal.orders.Order;
import com.paypal.orders.OrdersGetRequest;

public class GetOrder extends PayPalClient {
	
	public void getOrder(String orderId) throws IOException {
	    OrdersGetRequest request = new OrdersGetRequest(orderId);
	    //3. Call PayPal to get the transaction
	    HttpResponse<Order> response = client().execute(request);
	    
	    //4. Save the transaction in your database. Implement logic to save transaction to your database for future reference.
	    System.out.println("Full response body:");
	    System.out.println(new JSONObject(new Json().serialize(response.result())).toString(4));
	  }

}
