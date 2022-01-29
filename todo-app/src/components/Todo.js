import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {useState} from 'react'
import {Grid, Box, AppBar, Toolbar, Typography} from '@mui/material'

const Todo = () => {

    const [input, setInput] = useState('')
    const [list, setList] = useState([])
    const [toggle, setToggle] = useState(true)
    const [editID, setEditID] = useState(null)
    
    return (
        <>
            <AppBar position='static'>
                <Toolbar variant='dense' style={{justifyContent: 'center'}} >
                    <Typography variant='h6' color='inherit'>Todo List</Typography>
                </Toolbar>
            </AppBar>
            <Box style={{flexGrow: 1, padding: 15, backgroundColor: '#f5f5f5'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TodoForm input={input} setInput={setInput} list={list} setList={setList} toggle={toggle} setToggle={setToggle} editID={editID} setEditID={setEditID} />
                    </Grid>
                    <Grid item xs={12}>
                        <TodoList setInput={setInput} list={list} setList={setList} setToggle={setToggle} setEditID={setEditID} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Todo