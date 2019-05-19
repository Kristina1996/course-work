package com.krist.server.controller;

import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PaymentController {
	
	@RequestMapping(value = "/paypal-transaction-complete", method = RequestMethod.POST)
    @ResponseBody
    public String completeTransaction(@RequestBody String orderId) throws IOException {
		new GetOrder().getOrder(orderId);
		return ",kf";
    }

}
