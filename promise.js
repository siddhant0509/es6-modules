var promise = f => {
	let status = "processing";
	let result = null;
	let error = null;
	let called = false;
	
	const then = fn => {		
		success = fn;
		if(status === "success" && called === false)
			fn(result);
	}
	const fail = fn => {
		failure = fn;
		if(status === "failed" && called === false)
			fn(new Error(error));
	}

	const resolve = res => {
		result = res;
		status = "success";
		if(typeof then !== "undefined"){
			status = true;			
			then(result);
		}
	};
	
	const reject = err => {
		status = "failed";
		error = err;
		if(typeof fail !== "undefined"){
			status = true;			
			fail(new Error(error));
		}
	};

	f(resolve, reject);
	return {
		then,
		catch: fail
	};
};
