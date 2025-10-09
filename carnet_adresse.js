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
		horaire:["⌀","⌀","⌀","⌀","⌀","⌀","⌀"],
		
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
		nom:'Les Bons Jouets',
		GPS:[47.715734,-2.201997],
		description_courte:'Jeux, jouets, divertissements',
		adresse:"7, la Croix de la Route - 56220 PEILLAC",
		horaire:["⌀","⌀","⌀","⌀","13h30 - 16h00","10h00 - 18h00","⌀"],
		telephone:'+33667420969',
		email:'lesbonsjouets56@gmail.com ',
		siteweb:'		https://www.facebook.com/people/Association-Les-Bons-Jouets/100063671133700/',
		siteweb_nom:'page facebook',
		couleur:"R",
	},
	{
		nom:'Les Meubles de l\'Asso',
		GPS:[47.703002,-2.226641],
		description_courte:'Meubles, Art, Livres, Décoration',
		adresse:"grand hangar à la Bécharderie sur la route de Prameux<br />56220 PEILLAC",
		horaire:["⌀","⌀","⌀","⌀","09h30 - 12h30","⌀","⌀"],
		telephone:'+33667420969',
		siteweb:'https://www.facebook.com/profile.php?id=61572315757572',
		siteweb_nom:'page facebook',
		couleur:"B",
	},
	{
		nom:'Demain En Mains',
		GPS:[47.643443, -2.163582],
		description_courte:'Ressourcerie',
		adresse:"330, rue de Brancheleux - 56350 Allaire",
		horaire:["⌀","⌀","⌀","⌀","⌀","10h00 - 18h00", "⌀"],
		telephone:'+33646039590',
		email:'recycleriedem@gmail.com',
		siteweb:'https://www.facebook.com/profile.php?id=61573835180170',
		siteweb_nom:'page facebook',
		couleur:"G",
	},
	{
		nom:'Ressourcerie de Questembert',
		GPS:[47.665899,-2.435341],
		description_courte:'Objets du quotidien en seconde main',
		adresse:"20, rue Charles Coulomb - 56230 Questembert",
		horaire:["⌀","⌀","13h30 - 17h30","⌀","13h30 - 17h30 ","10h00 - 12h00 & 13h30 - 18h00", "⌀"],
		telephone:'+33757083612',
		siteweb:'https://ressourceriequestembert.fr',
		siteweb_nom:'Site web Ressourcerie de Questembert',
		couleur:"G",
	},/*
	{
		nom:'La Tri-Dimension',
		GPS:[47.713840, -2.215089],
		description_courte:'Ressourcerie',
		adresse:"3, rue Marcel Callo - 56220 PEILLAC",
		horaire:["⌀","⌀","14h00 - 18h00","⌀","12h00 - 18h00","9h30 - 12h30 & 14h00 - 18h00", "⌀"],
		siteweb:'https://www.facebook.com/groups/943718017038941',
		siteweb_nom:'page facebook',
	}*/
];

