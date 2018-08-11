import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon/';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import red from '@material-ui/core/colors/red';

    
const styles = {
    
      width: '100%',
      maxWidth: 360,
      backgroundColor: 'lightgrey'
  };

const CardList = (props) => {

    return ( 
        <div style={styles} className="Person">
     
                <Card >
                    <Typography 
                    variant="title" 
                    color="inherit">Some text in here
                    </Typography>
                </Card>
           
        </div>
    
    )
};

export default CardList;