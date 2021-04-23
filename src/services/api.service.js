import axios from 'axios'

const getHeroes = async (name) => {
  const urlBase = 'https://gateway.marvel.com/v1/public/characters'
  const apiKey = 'c2ef74f57e77e78978909e0b220bc140';
  const apiHash = '010aa46c8220f2bc9e70b47d3d8b1a22';

  const result = await axios.get(`${urlBase}?ts=1&hash=${apiHash}&apikey=${apiKey}&nameStartsWith=${name}`);

  return result
}

export default getHeroes