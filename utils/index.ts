import { FilterProps } from "@/types";

export async function fetchShoes(filters: FilterProps) {
    const { name } = filters;
    const headers = {
		'X-RapidAPI-Key': '39d9196ee3msh135bc51b74edc15p191b8djsn2a3f8ef49862',
		'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
	}

    const response = await fetch(`https://shoes-collections.p.rapidapi.com/shoes?name=${name}`, {headers: headers});

    const result = await response.json();

    return result;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
  
    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
};