import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositores.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

//https://api.github.com/users/joseduardo42/repos

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([]);
  
  useEffect(() => {
    fetch ('https://api.github.com/users/joseduardo42/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);


  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository =>{
          return <RepositoryItem key = {repository.name} repository={repository}/>
        })}
        
      </ul>
    </section>
  );
}