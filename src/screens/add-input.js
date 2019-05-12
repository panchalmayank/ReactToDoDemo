import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import purple from '@material-ui/core/colors/purple';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'


const styles = (theme) => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    },
    fab: {
        margin: theme.spacing.unit,
    },
    iconbutton:{
        margin: theme.spacing.unit,
    },
    appbar: {
        flexGrow: 1,
    },
});

class AddInput extends Component{
    state = {
        name: '',
        addname: [ ],
    }
    changeName= (event) => {
        this.setState({
            name:event.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            addname:this.state.addname.concat(this.state.name),name:''
        })
    }
    handleRemove = (i) => {
        let newname = this.state.addname.filter(function (item,index) {
            return index !== i
        });
        this.setState({
            addname:newname
        })
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
                <div className={classes.appbar} >
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" >
                                ToDo
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <FormControl className={classes.margin} >
                    <InputLabel htmlFor="custom-css-standard-input"
                                classes={{
                                    root:classes.cssLabel,
                                    focused:classes.cssFocused
                                }}
                    >Name</InputLabel>
                    <Input id="custom-css-standard-input"
                           classes={{
                               underline:classes.cssUnderline
                           }}
                           onChange={this.changeName}
                           value={this.state.name}
                    />
                </FormControl>
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleSubmit} ><AddIcon/></Fab>
                <div>
                    <div>
                        {this.state.addname.map( (item, i) => {
                            return <div>{item}
                                        <div>
                                            <IconButton  onClick={() => this.handleRemove(i)} >
                                                <DeleteIcon/>
                                            </IconButton>
                                        </div>
                                   </div>
                        })}

                    </div>

                </div>
            </div>
        );
    }
}
export default  withStyles(styles)(AddInput);