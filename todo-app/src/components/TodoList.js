import {Box, Paper, Typography, IconButton} from '@mui/material'
import {List, ListItem, ListItemText, ListItemSecondaryAction} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const TodoList = props => {
    
  const {setInput, list, setList, setToggle, setEditID} = props

  const editHandler = id => {
    const editItem = list.find((item) => item.id === id)
    setToggle(false)
    setInput(editItem.text)
    setEditID(id)
  }
    
  const deleteHandler = id => {
    const removeItem = list.filter((item) => item.id !== id)
    setList(removeItem)
  }

  return (
    <>
      {list.map(item => {
        const { id, text } = item
          return (
            <Box key={id}>
              <Paper elevation={5}>
                <Box m={1}>
                  <List>
                  <ListItem>
                    <ListItemText>
                      <Typography variant='subtitle1'>{text}</Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton  color='primary' onClick={() => editHandler(id)}><EditIcon /></IconButton>
                      <IconButton color='error' onClick={() => deleteHandler(id)}><DeleteIcon /></IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  </List>
                  </Box>
              </Paper>
            </Box>
          )
      })}
    </>
  )
}

export default TodoList
