const express = require('express');

const router = express.Router();

module.exports = router;

const albuns = [
    {
        id: 1,
        artista: "Legião Urbana",
        titulo: "II",
        imagem:"https://www.vagalume.com.br/legiao-urbana/discografia/dois.jpg",
        genero: "Rock",
        nota: 8,
        assistido: false
    },
    {
        id: 2,
        artista: "Racionais MC'S",
        titulo: "Sobrevivendo no Inferno",
        imagem:"https://www.vagalume.com.br/racionais-mcs/discografia/sobrevivendo-no-inferno.jpg",
        genero: "Rap",
        nota: 5,
        assistido: true

    },
    {
        id: 3,
        artista: "Milionário e José Rico",
        titulo: "Sentimental Demais",
        imagem: "https://www.vagalume.com.br/milionario-e-jose-rico/discografia/sentimental-demais.jpg",
        genero: "Sertanejo",
        nota: 10,
        assistido: false

    },
    {
        id: 4,
        artista: "Djavan",
        titulo: "Lilás",
        imagem: "https://www.vagalume.com.br/djavan/discografia/lilas.jpg",
        genero: "MPB",
        nota: 6,
        assistido: false
    }
]

router.get('/', (req,res) => {
    res.send(albuns);
})