async function search(){

	let title = document.getElementById('title').value;
 	//console.log(title);

 	const resp = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`);
 	const respData = await resp.json();

 	for (var i = 0; i < respData.results.length; i++) {
 		var movieTitle = respData.results[i++].title;
 		var poster_path = respData.results[i++].poster_path;
 		var moviePoster = `https://image.tmdb.org/t/p/original/${poster_path}`;

 		var div = document.createElement('div');
 		div.id = 'all-movies';
 		//div.innerHTML = `<<h1>${movieTitle}</h1>`;
 		div.innerHTML = `<img src="${moviePoster}" alt="${movieTitle}"> <p>${movieTitle}</p>`;
 		document.getElementById('movies').appendChild(div);
 		console.log(movieTitle + moviePoster);
 	}

 	//console.log(respData.results.length);
}
