import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ProductListing = () => {
    const classes = useStyles();
    // const products = useSelector((state) => state);
    const abc = [{name:"asd",age:2},{name:"eee",age:32},{name:"asd",age:2},{name:"eee",age:32},{name:"asd",age:2},{name:"eee",age:32}]
    // console.log(products)


    const list = abc ? abc.map((element) => {
        
        return(<Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        )
    }) : null
    return(
        <div>
                  <Grid container spacing={3}>
                {list}
                  </Grid>
        </div>
    )
}

export default ProductListing