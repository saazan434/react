import {Container, Grid, Paper, TextField, Button, IconButton} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import ClearAllIcon from '@mui/icons-material/ClearAll'

const TodoForm = props => {

  const {input, setInput, list, setList, toggle, setToggle, editID, setEditID} = props
  
  const addHandler = input => {
    if (input && toggle) {
      const addItem = {
        id: new Date().getTime(),
        text: input,
      }
      setList([...list, addItem])
      setInput('')
    } 
    else if (input && !toggle) {
      const editItem = list.map(item =>
        item.id === editID ? { ...item, text: input } : item
      )
      setList(editItem)
      setToggle(true)
      setInput('')
      setEditID(null)
    } 
    else {
      alert('⚠ Please fill out this field')
    }
  }
    
  return (
    <Container maxWidth='sm'>
     <Paper style={{padding:15}}>
      <Grid container alignItems='center'>
        <Grid item md={12}>
          <TextField id='standard-basic' size='small' label='Add Task' variant='outlined' value={input} onChange={e => setInput(e.target.value)}/>
          <Button style={{marginBottom:6, marginLeft:10}} size='medium' variant='contained' startIcon={<SaveIcon />} onClick={() => addHandler(input)}>SAVE</Button>
          <IconButton style={{marginBottom:6, marginLeft:10}} size='medium' onClick={() => setList([])}><ClearAllIcon /></IconButton>
        </Grid>
       </Grid>
      </Paper>
    </Container>
  )
}

export default TodoForm
