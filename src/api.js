import Axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5";

var pokedex2 = [];

const privateLoadPokemon = async () => {
  const response = await Axios.get(`${BASE_URL}`);
  const data = [...response.data.results];

  var pokedex = [];
  
  for (let i = 0; i < data.length; i++) {
    await Axios.get(`${data[i].url}`).then((res) => {
      
      pokedex.push({
        name: res.data.name,
        id: res.data.id,
        img: res.data.sprites,
        height: res.data.height,
        weight: res.data.weight,
        types: res.data.types.map((types) => types.type.name).join(", "),
      });
    });
   
  } 


   return pokedex;
};

async function GetDataPok(data){
  var pokedex = [];
  
  for (let i = 0; i < data.length; i++) {
    await Axios.get(`${data[i].url}`).then((res) => {
      
      pokedex.push({
        name: res.data.name,
        id: res.data.id,
        img: res.data.sprites,
        height: res.data.height,
        weight: res.data.weight,
        types: res.data.types.map((types) => types.type.name).join(", "),
      });
    });
   
  } 


   return pokedex;
}





 const _apiCall = async () => {
  const response = await Axios.get(`${BASE_URL}`);
  const data = [...response.data.results];

  var pokedex = [];
  
  for (let i = 0; i < data.length; i++) {
    Axios.get(`${data[i].url}`).then((res) => {
      
      pokedex.push({
        name: res.data.name,
        id: res.data.id,
        img: res.data.sprites,
        height: res.data.height,
        weight: res.data.weight,
        types: res.data.types.map((types) => types.type.name).join(", "),
      });
    });
   
  } 


   return pokedex;
};

export default {
  loadPokemons: () =>  _apiCall(),
  
  loadPokemons2: () => privateLoadPokemon()
};
