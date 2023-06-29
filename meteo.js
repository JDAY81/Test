import transpJson from './transp.json' assert {type: 'json'};
async function appelerApiMeteo(ville, lang) {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + ville + '&lang=' + lang;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '07c1033f30msha52cdaa04a64e1cp1d14d6jsnc5ebcc9cfad2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let reponseApi;
try {
	reponseApi = await fetch(url, options);
} catch (error) {
	console.error(error);
}

const reponseApiJson = await reponseApi.json();

document.getElementById('ville').textContent = reponseApiJson.location.name;
document.getElementById('temperature').textContent = reponseApiJson.current.temp_c +"°C";
document.getElementById('condition').textContent = reponseApiJson.current.condition.text;

}

window.onload = appelerApiMeteo(transpJson.ville, transpJson.lang);

window.appelerApiMeteo = appelerApiMeteo;