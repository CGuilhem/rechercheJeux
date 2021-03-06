import DAO from "./../DAO"

export default class Jeu {
    nom = "";
    guid = "";

    plateformes = [];

    imageScreen = "";
    imageSmall = "";

    descriptionCourte = "";
    descriptionLongue = "";

    date = "";

    jsonJeu;

    constructor(jsonJeu) {
        this.jsonJeu = jsonJeu;
        
        this.nom = jsonJeu.name;
        this.guid = jsonJeu.guid;

        this.plateformes = jsonJeu.platforms;

        this.imageScreen = jsonJeu.image.original_url;
        this.imageSmall = jsonJeu.image.small_url;

        this.descriptionCourte = jsonJeu.deck;
        this.descriptionLongue = jsonJeu.description;

        if (jsonJeu.original_release_date !== null) {
            this.date = "Date de sortie : "
            this.date += jsonJeu.original_release_date;
        } else {
            this.date = "Année de sortie attendue : "
            this.date += jsonJeu.expected_release_year;
        }
    }
}