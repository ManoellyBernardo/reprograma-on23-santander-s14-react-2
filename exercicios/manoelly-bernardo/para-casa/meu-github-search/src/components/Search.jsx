import { useState, useEffect } from 'react'
import Axios from 'axios';
import '../styles/Search.css'
import { GoArrowRight } from 'react-icons/go'

import Subtitle from './Subtitle';
import Text from './Text';
import Link from './Link';

const Search = () => {

  const [inputValue, setInputValue] = useState('');
  const [userReposGitHub, setUserGitHubRepos] = useState([]);
  const [reposFiltered, setReposFiltered] = useState([]);
  const url = 'https://api.github.com/users/manoellybernardo/repos'

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await Axios.get(url);
        setUserGitHubRepos(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getRepos();
  }, [])

  useEffect(() => {
    const reposFiltered = userReposGitHub.filter((repo) => {
      return repo.name.toLowerCase().includes(inputValue.toLowerCase());
    })
    setReposFiltered(reposFiltered);
  }, [inputValue, userReposGitHub])

  return (
    <main>
      <Subtitle content='Meus Repositórios no GitHub: ' />
      <input
        type="text"
        placeholder="Digite um repo"
        onChange={handleChange} />
      <section className='content-repos'>
        {reposFiltered.map((repo) => {
          return (
            <div className='card-repo' key={repo.id}>
              <Subtitle content={repo.name} />
              <Text content={repo.description ?? 'Repositório sem descrição'} />
              <Link content={repo.html_url} text='Conferir' />
              <GoArrowRight />
            </div>
          )
        })
        }
      </section>
    </main>
  )
}

export default Search;