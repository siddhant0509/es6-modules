var implement = function(interface){
	var obj = Object.create(interface);
	obj["fn"] = function(name,fn){
		obj[name] = fn;	
		return obj;		
	}
	return obj;
};

var interface = function(){
	const interfaces = Array.prototype.slice.call(arguments);
	let obj = {};
	interfaces.forEach(interface => obj[interface] = function(){
		throw new Error("Not Implemented");
	});
	return obj;
};


export {
	implement,
	interface
}
