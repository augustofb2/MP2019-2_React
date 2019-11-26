import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    corpo: {
        minHeight: '92vh',
        backgroundColor: '#cacaca;',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '3rem'
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