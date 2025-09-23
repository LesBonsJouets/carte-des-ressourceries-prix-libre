//tout en français pour faciliter les modifications.
let adresses = [
	{
		/*============EXEMPLE EXEMPLE============*/
		
		/*Ceci est un exemple. Retirer la ligne du dessous pour activer sur la carte*/
		disabled:true,
		/*Chaque ligne est facultative*/
		
		/*Le nom*/
		nom:'Ma super ressourcerie',
		description_courte:"Texte d'exemple.",
		
		/*La position GPS, allant sur https://www.openstreetmap.org,
		puis faire clic-droit sur la position et "centrer".
		La position sera dans la barre d'adresse.*/
		GPS:[0,0],
		
		/*adresse postale*/
		adresse:"5, rue - 99000 Ville",
		
		/*Liste des horaires du lundi au dimanche*/
		horaire:["⌀","⌀","⌀","⌀","⌀","⌀","⌀",],
		
		/*Informations de contact*/
		telephone:"0123456789",
		email:"spam@example.com",
		siteweb:"https://example.com",
		
		/*Le texte à afficher à la place du lien*/
		siteweb_nom:"Le site web de la ressourcerie",
		
		/*Pour plus tard*/
		logo:"Pas encore implémenté.",
		categorie:null
		/*============FIN EXEMPLE FIN EXEMPLE============*/
	},
	{
		nom:'Les Trésors de l\'Arz',
		GPS:[47.702242,-2.219249],
		description_courte:'Récupération et reventes de trésors précieux, historiques et vintage',
		adresse:"1 bis au fond de l'Arz - 56220 PEILLAC",
		telephone:"0123456789",
		email:"spam@example.com",
		horaire:["⌀","⌀","⌀","⌀","13h30 - 16h00","10h00 - 18h00","⌀",],
		siteweb:'https://www.facebook.com/profile.php?id=100063671133700p',
		siteweb_nom:'page facebook',
	},
	{
		nom:'Les Trésors de l\'Oust',
		GPS:[47.724801,-2.209121],
		description_courte:'Récupération et reventes de trésors précieux, historiques et vintage',
		adresse:"1 bis au fond de l'Oust - 56220 PEILLAC",
		telephone:"0123456789",
		email:"spam@example.com",
		horaire:["23h58 - 23h59","23h58 - 23h59","⌀","23h58 - 23h59","⌀","⌀","06h15 - 03h99",],
		siteweb:'https://www.facebook.com/profile.php?id=100063671133700p',
		siteweb_nom:'page facebook',
	},
	{
		GPS:[47.70664,-2.18851],
	},

];

