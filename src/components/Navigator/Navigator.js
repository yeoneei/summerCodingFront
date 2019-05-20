import React from 'react';
import {Button} from 'semantic-ui-react';
import './Navigator.css'
import axios from "axios";
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import MButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Popup from 'reactjs-popup'

class Navigate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dueDate:"",
            title:"",
            content:"",
            prior:"",
        }
    }

    handleChange = name => event=>{
        this.setState({
            [name]: event.target.value,
        })
    }

    render(){
        return(
        <div className="Navigate">        
            <Popup
                trigger={<Button
                color="teal"
                content="pluse"
                icon="futbol"
                labelPosition="right"
                className="Navigate-right-button"></Button>
                } modal>
                    {close=>(
                        <div>
                        <from >
                            <Grid container xs={12}>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={2} justify="center">dueDate </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                    id='dueDate'
                                    onChange={this.handleChange('dueDate')}/>
                                 </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={2}>prior</Grid>
                                <Grid item xs={2}>
                                    <TextField
                                    id='prior'
                                    onChange={this.handleChange('prior')}
                                    ></TextField>
                                </Grid>
                            </Grid>
                            <br/>
                            <Grid container xs={12}>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={2} justify="center">title</Grid>
                                <Grid item xs={7}>
                                    <TextField
                                    onChange={this.handleChange('title')}
                                    id='title'>
                                    </TextField>
                                
                                </Grid>
                            </Grid>
                            <br/>
                            <Grid container xs={12}>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={2}>content</Grid>
                                <Grid item xs={7}></Grid>
                            </Grid>
                            <br/>

                            <Grid container xs={12}>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={8} justify="center">
                                    <TextField
                                    onChange={this.handleChange('content')}
                                    id='title'
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={1}></Grid>
                            </Grid>
                            <br/>
                            <Grid container xs={12} >
                                <Grid item xs={6} >
                                    <MButton className="modify" onClick={async()=>{
                                        const updateQuery = "http://15.164.141.146:8080/list"
                                        var result;
                                        try{
                                            result = await axios.post(updateQuery,{
                                                title :this.state.title,
                                                dueDate : moment(this.state.dueDate).format('2019-MM-DD'),
                                                content : this.state.content,
                                                prior : this.state.prior,
                                            })
                                        }catch(err){
                                            console.log(err);
                                        }finally{
                                            close();
                                            window.location.reload();
                                        }
                                    }}>new List</MButton>
                                    
                                </Grid>
                                
                            </Grid>
                        </from>
                    </div>
                    )}
            </Popup>
            
        </div>
        );

    }
    

}

export default Navigate;