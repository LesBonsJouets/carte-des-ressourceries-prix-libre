
//set the map height according to the window. It's set to a fixed value in CSS before the JS is loaded.
document.getElementById("map").style.height = (window.innerHeight + "px");

//LEAFLET CONFIGURATION - init
var map = L.map('map').setView([47.715800, -2.202265], 13);

//LEAFLET CONFIGURATION - overlay + layers (OSM + GGL)
var osm =           L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),
    googleSat =     L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',	{maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']}),
    googleTerrain = L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}',	{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']}),
	googleHybrid =  L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}',	{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']});

var baseMaps = {
    "OpenStreetMap": osm,
    "Google Satellite": googleSat,
    "Google Satellite + noms": googleHybrid,
    "Google Relief": googleTerrain
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
        shadowUrl: 'pin-shadow.png',
        iconSize:     [63, 126],
        shadowSize:   [93, 78],
        iconAnchor:   [31, 125],
        shadowAnchor: [1, 76],
        popupAnchor:  [-3, -76]
    }
});
var pinIcon = new LeafIcon({iconUrl: 'pin.png'})
	
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

	L.marker(
		[ressourcerie.GPS[0],ressourcerie.GPS[1]],
		{icon: pinIcon}).bindPopup(label).addTo(map);//*/
}

//var layerControl = L.control.layers(null, my_overlays).addTo(map);



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
