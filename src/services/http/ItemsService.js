import { UrlConfig } from "../../config/Url-Config";


function getItems(itemType, pageNumber) {
	if (!pageNumber) {
		pageNumber = 1;
	}

	const fullUrl = `${UrlConfig.apiBaseUrl}/${itemType}?page=${pageNumber}`;
	return fetch(fullUrl)
		.then(response => response.json())
		.catch(err => console.error("Error while fetching items list", err));
}

function getItemDetails(articleId) {
	const fullUrl = `${UrlConfig.apiBaseUrl}/item/${articleId}`;
	return fetch(fullUrl)
		.then(response => response.json())
		.catch(err => console.error("Error while fetching items details", err))
}

export {
	getItems,
	getItemDetails
}

