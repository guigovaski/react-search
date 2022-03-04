import { useState, useMemo } from 'react'
import './App.css'

import { usersList } from './helpers/usersList';

function App() {
  const [search, setSearch] = useState('');

  
  const users = useMemo(() => {
    const searchLowerCase = search.toLowerCase();  
    return usersList.filter(data => data.toLowerCase().includes(searchLowerCase));
  }, [search]) 

  return (
    <div className="container">
      <h1>Filtrar por nome</h1>
      <input 
        type="text"
        placeholder="Busque por nome..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <hr />
      <ul>
        {users.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
