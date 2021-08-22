import React, {ReactNode, useState} from 'react';
import type { NextPage } from 'next'
import SearchBar from '../components/SearchBar';
import CoinList from '../components/CoinList';
import Layout from '../components/Layout'


type Home = NextPage & {
  children?: ReactNode 
}


//ReactNode is the go-to type if you want the children prop to accept anything. 
//It takes React elements, primitives, portals, fragments, etc.

const Home: NextPage = ({filteredCoins}:any) => {
  const [search, setSearch] = useState('');


  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    e.preventDefault();
    //Search for specific crypto
    setSearch(e.target.value.toLowerCase());
  };
  
  return (
    <Layout>
      <div className="coin_app">
          <SearchBar type='text' placeholder='Search' onChange={handleChange} />
          <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const filteredCoins = await res.json()


  return {
    props: {
      filteredCoins

    }
  }
}

export default Home
