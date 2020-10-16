import React, { useState, useEffect, Fragment} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { axiosDelete, axiosPut } from '../../utils/service';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
  },
  mediaHolder: {
    height: '100%',
    width: '50%',
    backgroundSize: 'contain',
  },
  media: {
    height: 140,
    width: 140,
    alignItems: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const handleEdit = async() => {
    // just a sample code for editing, needs actual API to work
    await axiosPut('sample/API/here')
}

const handleDelete = async() => {
    // just a sample code for editing, needs actual API to work
    await axiosDelete('sample/API/here')
}

function Contacts({ item, i }) {
    const classes = useStyles();
    return (
        <Fragment key={ i }>
            <Card key={ i }>
                <CardContent className={ classes.root }>
                <div className={ classes.mediaHolder }>
                    <CardMedia
                    className={classes.media}
                    image="avatar.png"
                    title="contact"
                    />
                </div>
                <div>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Contact Name
                    </Typography>
                    <Typography variant="h5" component="h2">
                    { item.name }
                    </Typography>
                    <br />
                    <Typography className={classes.pos} color="textSecondary">
                    Email
                    </Typography>
                    <Typography variant="body2" component="p">
                    { item.email }
                    </Typography>
                </div>
                </CardContent>
                <CardActions>
                <Button variant="contained" color="primary" onClick={ handleEdit }>
                    EDIT
                </Button>
                <Button variant="contained" color="secondary" onClick={ handleDelete }>
                    DELETE
                </Button>
                </CardActions>
            </Card>
        </Fragment>
    )
}

  export default Contacts;