import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getHeroes from '../services/api.service'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroList from '../components/HeroList'

function Search() {
  const [ list, setList ] = useState([])
  const { textSearch } = useParams()

  useEffect(() => {
    ;(async () => {
      const result = await getHeroes(textSearch);
      setList(result.data.data.results)
    })()
  }, [textSearch])
  console.log(list)
  return (
    <div>
    <Header />
    <HeroList list={list} search={textSearch}/>
    <Footer />
    </div>
  );
}

export default Search;
