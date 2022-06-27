import { Loading } from './components/atoms/Loading';
import { MovieItemList } from './components/molecules/MovieItemList';
import { Search } from './components/molecules/Search';
import { useFetchData } from './hooks/usefetchdata';
import { Providers } from './providers';

function App() {
  const { loading, data } = useFetchData();

  if(loading) {
    return <Loading />
  }
  
  return (
    <Providers>
      <Search />
      <MovieItemList movies={data} />
    </Providers>
  );
}

export default App;
