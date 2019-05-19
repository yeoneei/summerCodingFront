import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'

export default class TodolistMain extends React.Component{
    
    render(){
        
        return(
            <div >
                <Card >
                    <Grid container spacing={8}>
                        <Grid item xs={2}>Date</Grid>
                        <Grid item xs={3}>title</Grid>
                        <Grid item xs={6}>content</Grid>
                        <Grid item xs={1}>prior</Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}


