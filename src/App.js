import React,{useEffect,useState} from 'react';



function App() {

  let [gifMeme,obtenerGIF]=useState({})
  let llave="iWKgEQDoiJeTYfR71hHj3vXLPEPatbDJ&limi"
  let consultarAPI = async()=>{
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${llave}`
    // console.log(resultado.data[0])
    let respuesta = await fetch(url)
    let memes = await respuesta.json()
    console.log(memes)
    //agregar el resultado de la API al state (similar a this.setState)
    obtenerGIF(memes.data[0])

  }

  useEffect(
    ()=>{
      consultarAPI()
    },[]
  )

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
