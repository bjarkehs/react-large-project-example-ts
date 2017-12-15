
export const getUsers = () => {
	const userData = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				users: [
					{ name: "Jakob" },
					{ name: "Bjarke" }
				]
			});
		}, 250);
	});

	return userData;
}
