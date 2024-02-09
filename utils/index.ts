export async function fetchShoes() {
    const headers = {
		'X-RapidAPI-Key': '39d9196ee3msh135bc51b74edc15p191b8djsn2a3f8ef49862',
		'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
	}

    const response = await fetch('https://shoes-collections.p.rapidapi.com/shoes', {headers: headers});

    const result = await response.json();

    return result;
}