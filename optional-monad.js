
const optionalObj = function(val){
	let value = val;
	const get = () => {
		if(typeof value !== "undefined")
			return value
		else throw new Error("Value not Present");
	};
	const map = (fn) => optionalObj(fn(value));
	const flatmap = (fn) => fn(value);

	return {
		get,
		map,
		flatmap
	}
};

const optional = {
	of: function(param){
		if(typeof param === "function")
			return optionalObj(param());
		else
			return optionalObj(param);
	}
};




