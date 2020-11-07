import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { dbHost } from '../Db';
// import data from '../Data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row-reverse',
    cursor: 'pointer',
  },
  grid: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  gridcontainer: {
    flexDirection: 'column',
  },
}));


export default function TodoList() {
  const classes = useStyles();
  const [todos,setTodos] = useState([]);
  let history = useHistory();

  const edit = (id) => {
    history.push("/edit/"+id);
  }

  useEffect(() => {
    let todosData = [];
   /*  if (typeof(Storage) !== "undefined") {
   
      if (localStorage.getItem("myTodo")) {
             todosData = JSON.parse(localStorage.getItem("myTodo"));
      } 
      
    } */

fetch(dbHost)
.then(response => response.json())
.then(data => setTodos(data));

  //  console.log(todosData)
    //setTodos(data);
  // setTodos(todosData);
    
    },[]);

  return (
    <div className={classes.root}>
      { todos.map(item => {
          return (
                  <Paper className={classes.paper} onClick={() => edit(item.id)} key={item.id}>
                    <Grid container wrap="nowrap" spacing={1} className={classes.gridcontainer}>
                      <Grid item className={classes.grid} >
                          <Typography variant="body2" >created: {item.created}</Typography>
                          <Typography variant="body2" >end: {item.end.search !== -1?item.end.replace('T', ' '):item.end}</Typography>
                      </Grid>
                      <Grid  item xs zeroMinWidth  >
                        <Typography  noWrap style={item.completed?{textDecoration:  "line-through"}:{textDecoration:  "none"}}>{item.text}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>)}) } 
    </div>
  );
}
