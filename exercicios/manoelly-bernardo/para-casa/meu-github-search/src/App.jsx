import Header from './components/Header';
import Bio from './components/Bio';
import Search from './components/Search';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <>
      <Header text="Meu github search" />
      <Bio />
      <Search />
      <Footer content="Feito com ♡ por Manoelly. E todos os direitos são reservados." />
    </>
  )
}

export default App
