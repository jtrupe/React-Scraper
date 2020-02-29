import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';

import API from '../utilities/API'

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

const Homepage = props => {
    const classes = useStyles();

    const [selectedArticle, setSelectedArticle] = useState({ id: '', heading: '', info: '', link: '' });
    const [isSelectedArticle, setIsSelectedArticle] = useState(false);

    const handleGetSelectedArticle = articleId => {
        API.findOneWhereUnsaved(articleId).then(selectedArticleResult => {
            setSelectedArticle(selectedArticleResult.data);
            setIsSelectedArticle(false);
        })
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {isSelectedArticle === true ? (
                        <Card isSelectedArticle={isSelectedArticle} articleObject={selectedArticle} />
                ) : (
                        <>
                            {props.articles.length !== 0 ?
                                <Grid item xs={12}>
                                    {props.articles.map((a) => {
                                        return <Card key={a._id} handleGetSelectedArticle={handleGetSelectedArticle}
                                            handleSaveArticle={props.handleSaveArticle}
                                            articleObject={a} />;
                                    })}
                                </Grid> : (
                                    <p>Scrape to get some articles</p>
                                )}
                        </>
                    )}
            </Grid>
        </div>
    );
};

export default Homepage;