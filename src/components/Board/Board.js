import React from 'react';
import './Board.css';
import Grid from '@material-ui/core/Grid';
import TodolistBoard from'../TodolistBoard/TodolistBoard'

const Board = () => (
    <div className="Board">
        <p>
        <Grid container>
            <Grid item xs={2}>DueDate</Grid>
            <Grid item xs={3}>title</Grid>
            <Grid item xs={5}>content</Grid>
            <Grid item xs={1}>순위</Grid>
            <Grid item xs={1}>완료</Grid>
        </Grid>
        </p>
        <TodolistBoard/>
        
    </div>
);

export default Board;