import { Table } from 'reactstrap';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
const [data, setData] = useState([])
const [dataSearch, setDataSearch] = useState([])
const [usernameSearch, setUsernameSearch] = useState('')

useEffect(() => {
  fetchData()
},[])


const fetchData = async() => {
  await axios.get('http://localhost:5000/api/players')
  .then((data) => {
    setData(data.data.message)
  })
  .catch(err => console.log(err))
}

const handleClick = () => {
  const currentDataUsername = data.filter(user => user.username.includes(usernameSearch))
  setDataSearch(currentDataUsername)
}


  return (  
    <>  
    <div className="App">
      <h1>Data Player</h1>
    <label htmlFor="">
      Search
      <br />
    <input type="text" onChange={(e) => setUsernameSearch(e.target.value)} />
    <button className='btn btn-primary mx-2 px-2 py-1' onClick={handleClick} >Search</button>
    </label>

      <Table
>
  <thead>
    <tr>
      <th>
        id
      </th>
      <th>
        Username
      </th>
      <th>
        Email
      </th>
      <th>
        Experience
      </th>
      <th>
        Level
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    {dataSearch.length < 1 ? 
      data.map((el, key) => {
        return(
          <tr key={key}>
      <td>
        {key + 1}
      </td>
      <td>
        {el.username}
      </td>
      <td>
        {el.email}
      </td>
      <td>
        {el.experience}
      </td>
      <td>
        {el.lvl}
      </td>
      <td>
        <Link to={`/player/update/${el.id}`} className='btn btn-primary mx-2'>Update</Link>
        <Link to={`/player/delete/${el.id}`} className='btn btn-danger'>Delete</Link>
      </td>
    </tr>
            )
          })
          :
          dataSearch.map((el, key) => {
            return(
              <tr key={key}>
          <td>
            {key + 1}
          </td>
          <td>
            {el.username}
          </td>
          <td>
            {el.email}
          </td>
          <td>
            {el.experience}
          </td>
          <td>
            {el.lvl}
          </td>
          <td>
            <Link to={`/player/update/${el.id}`} className='btn btn-primary mx-2'>Update</Link>
            <Link to={`/player/delete/${el.id}`} className='btn btn-danger'>Delete</Link>
          </td>
        </tr>
                )
              })
        }
  </tbody>
  </Table>
  </div>
  <a href='/player/tambah' className='btn btn-primary mx-5 my-2 '>Tambah Player</a>
  </>
  );
}

export default App;
