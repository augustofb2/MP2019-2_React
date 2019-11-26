import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    corpo: {
        minHeight: '100vh',
        backgroundColor: '#909bb1;',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

export default function ContentSection(props){

    const classes = useStyles();

    return(
    <div className={classes.corpo}>
        {props.children}
    </div>
    )
}