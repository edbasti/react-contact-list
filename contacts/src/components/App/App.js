import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './App.css';
import Contacts from '../Contacts/Contacts'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
  },
  mediaHolder: {
    height: '100%',
    width: '50%',
    backgroundSize: 'contain',
  },
  media: {
    height: 140,
    width: 140,
    alignItems: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [ sortedResults, setSortedResults ] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const [ data, setData ]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson);
        setSortedResults(myJson);
      });
  }
  useEffect(()=>{
    getData()
    if (searchTerm !== '') {
      const results = data.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    } else {
      setSearchResults(data);
    }
    setSortedResults(data); 
  },[ data, searchTerm ])

  const handleSort = () => {
    const data = searchResults.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    setSortedResults(data); 

  }
  
  return (
    <Container maxWidth="sm" className="App">
      <div className="App">
        <h1 className="App-h1">Deltek Contact List</h1>
        <Button variant="small" color="secondary" onClick={ handleSort }>
          Sort by Name
        </Button>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        { sortedResults.map((item, i) => (
          <Contacts item={ item } key= { i } i={ i } />
        ) ) }
      </div>
    </Container>
  );
}
export default App;