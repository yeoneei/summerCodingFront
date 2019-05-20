import React from 'react';
import './TodoList.css';
import axios from "axios";
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Popup from 'reactjs-popup'


const getAllTodoListEndPoint = "http://localhost:8080/list/all";


class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoList:[],
            dueDate:"",
            title:"",
            content:"",
            prior:"",
            
        }
    }

    
    async componentDidMount(){
        try{
            let { data : todoList } = await axios.get(getAllTodoListEndPoint);
            console.log(todoList.data);
            this.setState({todoList});
        }catch(err){
            console.log(Object.keys(err), err.message); 
        }
    }

    handleChange = name => event=>{
        this.setState({
            [name]: event.target.value,
        })
    }

   
   render(){
       const {todoList} = this.state;
       
      
       if(todoList.data!=null){
           return todoList.data.map((todo,idx) =>{
               let dueDate = moment(todo.dueDate).format("MM-DD");
               
               if(dueDate =="Invalid date"){
                   dueDate = "";
               }
               console.log(dueDate);
               var idx = todo.idx;
               const { classes } = this.props;
               
               return(
                <div>
                    <Popup 
                        trigger={<Button container fullWidth="true" xs={15} onClick={this.popup}>
                                <Grid item xs={1}>{dueDate}</Grid>
                                <Grid item xs={4}>{todo.title}</Grid>
                                <Grid item xs={8}>{todo.content}</Grid>
                                <Grid item xs={1}>{todo.prior}</Grid>
                                <Button item xs={1} onClick={async()=>{
                                    const completeQuery = "http://localhost:8080/list/complete";
                                    try{
                                        await axios.post(completeQuery,{
                                            idx:idx,
                                        })
                                    }catch(err){
                                        console.log(err);
                                    }finally{
                                        
                                        onclose();

                                    }

                                }}>{todo.complete} </Button>
                        </Button>}
                        modal>
                        {close=>(
                            <div>
                                <from >
                                    <Grid container xs={12}>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>dueDate </Grid>
                                        <Grid item xs={2}>
                                            <TextField
                                            defaultValue={dueDate}
                                            id='dueDate'
                                            onChange={this.handleChange('dueDate')}/>
                                         </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>prior </Grid>
                                        <Grid item xs={2}>
                                            <TextField
                                            defaultValue={todo.prior}
                                            id='prior'
                                            onChange={this.handleChange('prior')}
                                            ></TextField>
                                        </Grid>
                                    </Grid>
                                    <br/>
                                    <Grid container xs={12}>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>title</Grid>
                                        <Grid item xs={7}>
                                            <TextField
                                            defaultValue={todo.title}
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
                                        <Grid item xs={8}>
                                            <TextField
                                            defaultValue={todo.content}
                                            onChange={this.handleChange('content')}
                                            id='title'
                                            >
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                    </Grid>
                                    <br/>
                                    <Grid container xs={12} >
                                        <Grid item xs={4} >
                                            <Button className="modify" onClick={async()=>{
                                                const updateQuery = "http://localhost:8080/list/modiy"
                                                var result;
                                                try{
                                                    dueDate = (this.state.dueDate==""? dueDate:this.state.dueDate);
                                                    
                                                    result = await axios.post(updateQuery,{
                                                        idx : idx,
                                                        title : (this.state.title==""? todo.title :this.state.title),
                                                        dueDate : moment(dueDate).format('2019-MM-DD'),
                                                        content : (this.state.content==""?todo.content :this.state.content),
                                                        prior : (this.state.prior==""? todo.prior: this.state.prior),
                                                    })
                                                }catch(err){
                                                    console.log(err);
                                                }finally{
                                                    console.log(result);
                                                    
                                                }
                                            }}>modify</Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button onClick={async()=>{
                                                const removeQuery = "http://localhost:8080/list/delete"
                                                var result;
                                                try{
                                                    result = await axios.post(removeQuery,{
                                                        idx:idx,
                                                    })
                                                }catch(err){
                                                    console.log(err);
                                                }finally{
                                                    console.log(result);
                                                    window.location.reload();
                                                }
                                            }}>remove</Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button className="close" onClick={close} justify='center' >close</Button>
                                        </Grid>
                                    </Grid>
                                </from>
                            </div>
                        )}
                    </Popup>
                </div>
               );
           })
       }else{
           return(
               <div>todoList를 추가해주세요</div>
           )
      }

   }
}

export default TodoList;