
//set the map height according to the window. It's set to a fixed value in CSS before the JS is loaded.
document.getElementById("map").style.height = (window.innerHeight + "px");

//LEAFLET CONFIGURATION - init
//var map = L.map('map').setView([47.68122,-2.20396], 13);
var map = L.map('map').setView([47.67348,-2.30558], 13);

//LEAFLET CONFIGURATION - overlay + layers (OpenStreetMap + google + IGN.fr)
var osm =		   L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),
	ign = L.tileLayer("https://data.geopf.fr/wmts?&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/jpeg&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",{minZoom : 0, maxZoom : 18, attribution : "IGN-F/Geoportail", tileSize : 256}),
	googleSat =	 L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',	{maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']}),
	googleTerrain = L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}',	{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']}),
	googleHybrid =  L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}',	{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']});

var baseMaps = {
	"OpenStreetMap": osm,
	"IGN.fr Satellite":ign,
	"Google Satellite": googleSat,
	"Google Satellite + noms": googleHybrid,
	"Google Relief": googleTerrain,
};

var overlays =  {//add any overlays here

	};

L.control.layers(baseMaps,overlays, {position: 'bottomleft'}).addTo(map);

//LEAFLET CONFIGURATION - default overlay
osm.addTo(map);

//cleaning leaflet by removing that cringy flag
let flag = document.getElementsByTagName("A")[3];
flag.removeChild(flag.firstChild);


var LeafIcon = L.Icon.extend({
	options: {
		shadowUrl: './img/pin-shadow.png',
		iconSize:	 [36, 62],
		shadowSize:   [53, 34],
		iconAnchor:   [17, 61],
		shadowAnchor: [0, 32],
		popupAnchor:  [0, -55]
	}
});
var pinIconW = new LeafIcon({iconUrl: './img/pinW.png'})
var pinIconR = new LeafIcon({iconUrl: './img/pinR.png'})
var pinIconG = new LeafIcon({iconUrl: './img/pinG.png'})
var pinIconB = new LeafIcon({iconUrl: './img/pinB.png'})
	
L.icon = function (options) {
	return new L.Icon(options);
};

let dayofweek = ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"];

for( let ressourcerie of adresses)
{
	
	if(ressourcerie.disabled)
		continue
	let label = "hello <br />world!";
	label = "";
	if(ressourcerie.nom)
		label += "<b>" + ressourcerie.nom+"</b><br />";
	if(ressourcerie.description_courte)
		label += "<i>" + ressourcerie.description_courte+"</i><br />";
	if(ressourcerie.adresse)
		label += "📌" + ressourcerie.adresse+"<br />";
	if(ressourcerie.telephone)
		label += "☎ <a href=\"tel:" + ressourcerie.telephone + "\"/>" + ressourcerie.telephone + "</a><br />";
	if(ressourcerie.siteweb && ressourcerie.siteweb_nom)
		label += "🌐 <a href=" + ressourcerie.siteweb + ">" + ressourcerie.siteweb_nom + "</a><br />";
	if(ressourcerie.email)
		label += "📧 <a href=\"mailto:" + ressourcerie.email + "\"/>"+ressourcerie.email + "</a><br />";
	
	if(ressourcerie.horaire)
		for(let [i, day] of dayofweek.entries())
		{
			label += "📅⏰" + day + ": " + ressourcerie.horaire[i] + "<br />";
		}
		
	let thisIcon = pinIconW;
	switch (ressourcerie.couleur)
	{
		case "R":
			thisIcon = pinIconR;
			break;
		case "G":
			thisIcon = pinIconG;
			break;
		case "B":
			thisIcon = pinIconB;
			break;
		default:
			thisIcon = pinIconW;
			break;
	}

	L.marker(
		[ressourcerie.GPS[0],ressourcerie.GPS[1]],
		{icon: thisIcon}).bindPopup(label, { maxWidth: 9999, maxHeight: 9999}).addTo(map);
}


function showDivisionGeometryWithText(data, text, lineColor)
{
	let divisionPolygon =  swapPairsOfArray(data.features[0].geometry.coordinates[0][0]);
	let divisionName = text + ' : ' + data.features[0].properties.section + ' ' + data.features[0].properties.numero;
	let boundingBox = L.polygon(divisionPolygon,{color: lineColor, fillColor: 'white', fillOpacity: 0.0}).addTo(map).bindPopup(divisionName);
}

//the API gives coordinates in a a/b format and leaflet requires a b/a format. IDK which one is wrong and it doesn't matter.
function swapPairsOfArray(data)
{
	let result = [];
	for(let pair of data)
		result.push([pair[1],pair[0]]);
	return result;
}
