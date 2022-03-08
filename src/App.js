import React, { useState } from 'react'
import Insert from './layouts/components/Insert'
import { Container, Typography } from '@material-ui/core'


function App() {
  const [team, setTeam] = useState([])
  
  function inserting(player) {
    let newTeam = [...team];
    newTeam.push(player)
    setTeam(newTeam)
    console.log(team)
  }
  
  return (
    <Container maxWidth='sm' component='article'>
      <Typography 
        component="h2" 
        variant="h3" 
        align="center">
          Caderninho da Aurora FC
      </Typography>
         <Insert handleAdd={inserting} />
    </Container>
  );
}


export default App;
