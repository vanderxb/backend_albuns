const express = require('express');

const router = express.Router();

module.exports = router;

const albuns = [
    {
        id: 1,
        artista: "Terno Rei",
        titulo: "Violeta",
        imagem:"https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/4/d/7/709551553191826.jpg",
        genero: "Rock",
        nota: 9,
        status: false,
        statuscolor: "grey"
    },
    {
        id: 2,
        artista: "Criolo",
        titulo: "Espiral de Ilusão",
        imagem:"http://musicainstantanea.com.br/wp-content/uploads/2017/04/18198677_1457209914343776_6120875489976255552_n-700x700.jpg",
        genero: "Samba",
        nota: 10,
        status: false,
        statuscolor: "grey"

    },
    {
        id: 3,
        artista: "Sabotage",
        titulo: "Rap é Compromisso",
        imagem: "https://armazemdovinil.com/wp-content/uploads/2016/12/450xN.jpg",
        genero: "Rap",
        nota: 10,
        status: false,
        statuscolor: "grey"

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
    novoAlbum.status = false;
    novoAlbum.statuscolor = "grey"
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

router.put('/:status/:id',(req,res) =>{
    const idParam = req.params.id;
    let statusParam = req.params.status;
    let statusParamBool = (statusParam == 'true')
    let index = albuns.findIndex(album => album.id == idParam);
    albuns[index].status = statusParamBool
    albuns[index].statuscolor === "grey" ? albuns[index].statuscolor = "green" : albuns[index].statuscolor = "grey";
    
    const albumModificado = albuns[index]
    res.send({
        albumModificado
    });
});