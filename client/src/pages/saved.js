import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '../components/Card';
import API from '../utilities/API';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: '40px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Saved = () => {

    const classes = useStyles();
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(() => {
        API.findAllWhereSaved().then(savedArticles => {
            setSavedArticles(savedArticles.data);
        })
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    savedArticles.length !== 0 ?
                        <Grid item xs={12}>
                            {savedArticles.map((a) => {
                                return <Card articleObject={a} />
                            })}
                        </Grid> : <p>Scrape to get some articles</p>
                }

            </Grid>
        </div>
    );
};

export default Saved;