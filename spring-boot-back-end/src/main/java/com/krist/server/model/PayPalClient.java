package com.krist.server.model;

import com.paypal.core.PayPalEnvironment;
import com.paypal.core.PayPalHttpClient;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Iterator;

public class PayPalClient {
	
	private PayPalEnvironment environment = new PayPalEnvironment.Sandbox(
		    "AaycrdvyH1PiufqCBGViYTAaOwSNlPHloamLWsmGCwxNHDvnMdt4eLXfC9bNzag8dZrUt1_YbHhSonuR",
		    "EDQqaMOw8CggYUC1h2UOI7XLixIi-FqsNV58L2OfBkoF53z3UDxD0zBzI-t_1IvuhRNtkVLZFkEkYSbJ");

	PayPalHttpClient client = new PayPalHttpClient(environment);

	public PayPalHttpClient client() {
		return this.client;
	}

}
