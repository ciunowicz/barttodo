import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory } from 'react-router-dom';



function NavBar(props) {
    let history = useHistory();

    const handleClick = (link) => {

        history.push(link);
    }

    return (
        <List component="nav">
            <ListItem component="div" >

                <ListItemText inset>
        
                    <TypoGraphy color="inherit" variant="subtitle1" onClick={()=>handleClick("/add/")} style={{cursor: 'pointer'}}>
                        Add  <AddCircleOutlineIcon />
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1" onClick={()=>handleClick("/")} style={{cursor: 'pointer'}}>
                        List <ListAltIcon />
                    </TypoGraphy>
                </ListItemText>

            </ListItem >

        </List>
    )
}


export default NavBar;