fetch("https://community-food2fork.p.rapidapi.com/search?key=undefined&q=shredded%20chicken", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-food2fork.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

