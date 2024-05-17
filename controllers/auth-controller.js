
const fs = require('fs')
const path = require('path')

var music_data={};

fs.readdir('./resource/music', (eror,files)=>{
    if(eror){
        console.log(eror);
    }
    else{
        let i=0;
        files.forEach(file => {
            let p = '../../../../Server/resource/music/'+file;
            music_data[i++] = {"song":p}; 
        });
    }
});



const getSongs = async (req,res)=>{
    try{

        res.json(music_data)
    }catch(error ){
        console.log(error);
    }
}

module.exports = {getSongs};