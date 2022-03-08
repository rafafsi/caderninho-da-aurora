import { Container } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly' + 'safe',
        alignItems: 'stretch' + 'safe',
        alignContent: 'space-around',
    },
    item: {
        order: 2,
        
    }
})

const Box = () => {
    const classes = useStyles();

    <Container className="container">
        
    </Container>
}

export default Box