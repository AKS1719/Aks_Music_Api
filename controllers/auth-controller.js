
const fs = require('fs')

var music_data={};

fs.readdir('./resource/music', (eror,files)=>{
    if(eror){
        console.log(eror);
    }
    else{
        let i=0;
        files.forEach(file => {
            let tExt = file.replace('.mp3', '.jpeg');
            let songPath = `http://localhost/resource/music/${file}`; // URL path for song
            let imgPath = `http://localhost/resource/img/${tExt}`; // URL path for image

            music_data[i++] = {
                title: file,
                song: songPath,
                img: imgPath
            };
        });
    }
});



const getSongs = async (req,res)=>{
    try{

        res.json(music_data);
    }catch(error ){
        console.log(error);
    }
}

module.exports = {getSongs,music_data};