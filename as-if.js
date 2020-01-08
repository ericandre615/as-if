const asIf = (condition, fn) => {
	if (condition) {
		return fn();
	}

	return undefined;
};

export default asIf;

