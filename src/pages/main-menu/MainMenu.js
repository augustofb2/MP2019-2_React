import React from 'react';
import { Button, Typography } from '@material-ui/core';
import ContentSection from '../../layout/ContentSection';
import { Link } from "react-router-dom";
// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(theme => ({
//     botao: {
//         backgroundColor: theme.palette.primary.main
//     }
// }))

export default function MainMenu(props){

    // const classes = useStyles();

    return(
        <ContentSection>
            <div>
                <Button component={Link} to="/jogo" variant={'contained'} size={"large"} color={'secondary'}>
                    <Typography variant={'h2'}>
                        Novo Jogo
                    </Typography>
                </Button>
            </div>
        </ContentSection>
    )
}