"use strict";


export default promise = f => {
	let status = "processing";
	let result = null;
	let error = null;
	let called = false;
	let success, failure;
	
	const then = fn => {			
		success = fn;
		if(status === "success" && called === false){
			called = true;
			success(result);
		}
	}
	const fail = fn => {
		failure = fn;
		if(status === "failed" && called === false){
			called = true;
			failure(new Error(error));
		}
	}

	const resolve = res => {
		result = res;
		status = "success";
		if(typeof then !== "undefined"){						
			success(result);
		}
	};
	
	const reject = err => {
		status = "failed";
		error = err;
		if(typeof fail !== "undefined"){			
			failure(new Error(error));
		}
	};

	f(resolve, reject);
	return {
		then,
		catch: fail
	};
};



