import { UrlConfig } from "../../config/Url-Config";


export default function getItems(itemType, pageNumber) {
	if (!pageNumber) {
		pageNumber = 1;
	}

	let fullUrl = `${UrlConfig.apiBaseUrl}/${itemType}?pageNumber=${pageNumber}`;
	return fetch(fullUrl)
		.then(response => response.json())
		.catch(err => console.error("Error while fetching data ", err));
}