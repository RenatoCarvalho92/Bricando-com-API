let btnBusca = document.getElementById('btnClick')
let imgNasaConteudo = document.getElementById("imagemNasa")
let datasParaApi =2021;

btnBusca.addEventListener('click',btnClicked)

const options = {
    method: 'GET',
    mode:'cors',
    cache:'default',
    
}
let NASAApiKey = '95uixcaej6dDtUAEEYestJkuopfTuRmYykRVjMSs';

async function btnClicked(){
 console.log("Botao Clicado!")
 


    
    
//  let respose = await fetch('https://api.nasa.gov/planetary/apod?api_key='+NASAApiKey)
//   console.log(respose);
//   let data= await respose.json();
//  console.log(data);

// imgNasaConteudo.src = data.hdurl;

// console.log(data.hdurl);
}

// function mostrarValores(informacao){

//     console.log(informacao);
//     let data = informacao;
//     console.log(data.url);
//     imgNasaConteudo.src = data.url;
// }

// fetch('https://api.nasa.gov/planetary/apod?api_key='+NASAApiKey,options)
// .then(console.log(response))
// .catch(console.log('não funcionou'))

async function valores (valorResposta){
    let valorTest = await valorResposta.json();
    console.log(valorTest)
    imgNasaConteudo.src = valorTest.hdurl;    
}



fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASAApiKey}&date=${datasParaApi.toString()}-01-01`,options)
.then(response => {valores(response)})
.catch(console.log('não funcionou'))



