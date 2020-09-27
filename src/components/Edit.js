import React , { useState, useEffect  } from 'react';
import { useParams} from "react-router-dom";
import {SaveLoc, LoadLoc} from '../LocStore';


import {
    Card,
    CardContent,
    CardActions,
    IconButton, Typography
  } from '@material-ui/core';
  
  import {Grid} from '@material-ui/core';
  import TextField from '@material-ui/core/TextField';
  import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
  import SaveIcon from '@material-ui/icons/Save';
  import DeleteIcon from '@material-ui/icons/Delete';
  import { makeStyles } from '@material-ui/core/styles';
  import { useHistory } from 'react-router-dom';
  import Container from '@material-ui/core/Container';
  // import data from '../Data';





  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#FAFAFA',
      minWidth: 375,
      paddingBottom: 8,
      [theme.breakpoints.down('md')]: {
        minWidth: 320,
    },
    },
   
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1), 
      width: '95%', 
      display: 'flex',
    },
    textFieldDate: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1), 
      display: 'flex',
      width: 190,
    },
     typography: {
     display: 'flex',
     justifyContent: 'flex-end',
     paddingBottom: 8,
    },
    container: {
      flexGrow: 1,
      // overflow: 'hidden',
      // padding: theme.spacing(0, 3),
      marginTop: theme.spacing(1),
    },
    cardActions: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
    },
    },
  }));


const Edit = (props)=> {
    let { id } = useParams();
    let history = useHistory();
    const classes = useStyles();
    const [todos,setTodos] = useState({});
    

    const getTodos = ()=> {

      return LoadLoc();
    }

    useEffect(() => {
      
   //  setTodos(getTodos());
   let todosData = getTodos();
      
      let newTodos= [...todosData.filter((item)=> item.id === parseInt(id))];
          setTodos(...newTodos);
         
         },[id]);
  
  
  const Done = (idx) => {
    let data = getTodos();
    let newTodos = data.map((item)=> { if(item.id === parseInt(id)) { return {...todos, completed: !todos.completed}; } 
                            else { return item;} });
    setTodos({...todos, completed: !todos.completed}) 
    SaveLoc(newTodos);
  }
  
  function Save() {
  
    if(todos.text.trim().length < 5) {
      alert('Wpisz tekst więcej niż 5 znaków');
      return;
  }


    let data = getTodos();
    let newTodos = data.map((item)=> { if(item.id === parseInt(id)) { return todos; } 
                            else { return item;} });
     SaveLoc(newTodos);
     history.push('/');
    
  
  }

const Delete = (id) => {
 
 let data = getTodos();
 let newTodos = [];


newTodos= [...data.filter((item)=> item.id !== parseInt(id))];

        setTodos([newTodos])
        SaveLoc(newTodos);

        history.push('/');

}

  const handleText = event => {
    let newTodos = {...todos};
    newTodos.text = event.target.value;
   setTodos(newTodos);
  }
  
  const handleData = event => {
    let newTodos = {...todos};
    newTodos.end = event.target.value;
  
   setTodos(newTodos);
  }

      return <Container className={classes.container}  maxWidth="sm" > 
           <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center'}} >
              
  <Grid item>
          <Card  className={classes.root}> 
            <CardContent>
              <Typography className={classes.typography}  variant='body2'>created: {todos.created}  </Typography>
                    <TextField style={todos.completed?{textDecoration:  "line-through"}:{textDecoration:  "none"}}
                        id="outlined-multiline-static"   
                        label="Note"
                        multiline
                        rows={4}
                        // defaultValue={todos.text}
                        value={todos.text || ""}
                        variant="outlined"
                        className={classes.textField}
                        onChange={handleText}
                      />
   
            </CardContent>
                   
          <CardActions disableSpacing >
            <div className={classes.cardActions}>
              <div style={{display: 'flex'}}>
                <IconButton aria-label="done" onClick={()=>Done(todos.id)}>
                      <CheckCircleOutlineIcon />
                </IconButton>
  
                <IconButton aria-label="save" onClick={Save}> 
                     <SaveIcon />
                </IconButton>
  
                <IconButton aria-label="delete" onClick={()=>Delete(todos.id)}>
                    <DeleteIcon />
                </IconButton>
                </div>
              <TextField style={{display: 'flex'}}
                  id="datetime-local"
                  label="End"
                  type="datetime-local"
                 defaultValue={todos.end}
                   value={todos.end || ''}
                  className={classes.textFieldDate}
                  onChange={handleData}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </div>
          </CardActions>
    </Card>
  </Grid>
  </Grid>  
</Container>;
}

export default Edit;