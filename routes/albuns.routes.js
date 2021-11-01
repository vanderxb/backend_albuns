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
        assistido: false,
        color: "grey"
    },
    {
        id: 2,
        artista: "Racionais MC'S",
        titulo: "Sobrevivendo no Inferno",
        imagem:"https://www.vagalume.com.br/racionais-mcs/discografia/sobrevivendo-no-inferno.jpg",
        genero: "Rap",
        nota: 5,
        assistido: false,
        color: "grey"

    },
    {
        id: 3,
        artista: "Milionário e José Rico",
        titulo: "Sentimental Demais",
        imagem: "https://www.vagalume.com.br/milionario-e-jose-rico/discografia/sentimental-demais.jpg",
        genero: "Sertanejo",
        nota: 10,
        assistido: false,
        color: "grey"

    },
    {
        id: 4,
        artista: "Djavan",
        titulo: "Lilás",
        imagem: "https://www.vagalume.com.br/djavan/discografia/lilas.jpg",
        genero: "MPB",
        nota: 6,
        assistido: false,
        color: "grey"
    }
]


router.get('/', (req,res) => {
    res.send(albuns);
});

router.get("/:id", (req,res) =>{
    const idParam = req.params.id;
    const album = albuns.find(album => album.id == idParam); 
    res.send(album);
});

router.post('/add',(req,res) =>{
    const novoAlbum = req.body;
    novoAlbum.id = albuns[albuns.length -1].id + 1;
    novoAlbum.assistido = false;
    novoAlbum.color = "grey"
    albuns.push(novoAlbum);
    res.send({
        albuns,
        message: `Álbum ${novoAlbum.titulo} cadastrado com sucesso!`
    });
});

router.put('/edit/:id',(req,res) =>{
    const idParam = req.params.id;
    const novoAlbum = req.body;
    let index = albuns.findIndex(album => album.id == idParam);
    albuns[index] = {
        ...albuns[index],
        ...novoAlbum
    }
    res.send({
        albuns,
        message: `Álbum ${novoAlbum.titulo} editado com sucesso`
    });
});


router.delete('/delete/:id',(req,res) =>{
    const idParam = req.params.id;
    const index = albuns.findIndex(album => album.id == idParam);
    const nome = albuns[index];
    albuns.splice(index, 1);
    res.send({
        message: `Album ${nome.titulo} excluido com sucesso !`,
    })
});

router.put('/status/:id',(req,res) =>{
    const idParam = req.params.id;
    let index = albuns.findIndex(album => album.id == idParam);
    albuns[index].assistido === false ? albuns[index].assistido = true : albuns[index].assistido = false;
    albuns[index].color === "grey" ? albuns[index].color = "green" : albuns[index].color = "grey";
    
    const albumModificado = albuns[index]
    res.send({
        albumModificado
    });
});