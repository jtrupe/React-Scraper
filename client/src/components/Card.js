import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        marginBottom: '25px'
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props) {
    // console.log("PROPS:");
    console.log(props);
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            {props.i}
            <CardActionArea>
                <Link href={props.articleObject.link} target='_blank'>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.articleObject.heading}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.articleObject.info}
                        </Typography>
                    </CardContent>
                </Link>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => props.handleSaveArticle(props.articleObject._id)} size="small" color="primary">
                    Save </Button>
                <Button onClick={() => {props.handleGetSelectedArticle(props.articleObject._id)}} size="small" color="primary">
                    Comment </Button>
            </CardActions>
        </Card>
    );
}