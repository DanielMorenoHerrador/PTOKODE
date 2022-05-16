export interface Movie {
    poster_path: string; // Contiene la frase
    overview: string;
    id: string; // Identificador la frase aleatoria
    url: string; // URL que contiene el ID y permite recuperar la frase
    title: string;
}
