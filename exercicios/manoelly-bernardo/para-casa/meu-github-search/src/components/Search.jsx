import { useState, useEffect } from 'react'
import Axios from 'axios';
import '../styles/Search.css'

import Subtitle from './Subtitle';
import Text from './Text';
import Link from './Link';

const Search = () => {

  const [userReposGitHub, setUserGitHubRepos] = useState([]);
  const url = 'https://api.github.com/users/manoellybernardo/repos'

  useEffect(() => {
    async function getRepos() {
      const response = await Axios.get(url)
      setUserGitHubRepos(response.data)
    }
    getRepos();
    console.log(userReposGitHub);
  }, [])

  return (
    <main>
      <Subtitle content='Meus Repositórios no GitHub: ' />
      <section className='content-repos'>
        {userReposGitHub.map((repo) => {
          return (
            <div className='card-repo' key={repo.id}>
              <Subtitle content={repo.name} />
              <Text content={repo.description ?? 'Repositório sem descrição'} />
              <Link content={repo.html_url} text='Conferir' />
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Search;