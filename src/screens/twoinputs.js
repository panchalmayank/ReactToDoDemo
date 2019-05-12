import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import purple from '@material-ui/core/colors/purple';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import DoneIcon from '@material-ui/icons/Done'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider';


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
    iconbutton: {
        margin: theme.spacing.unit,
    },
    appbar: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 700,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '30px'
    },
    grid: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    container: {
        padding: '30px'
    },

});

class TwoInput extends Component {
    state = {
        fname: '',
        lname: '',
        persons: [],
        isEdit: false,
    }
    changeFirstname = (event) => {
        console.log('changeFirstname');
        this.setState({
            fname: event.target.value
        })
    }
    changeLastname = (event) => {
        console.log('changeLastname');
        this.setState({
            lname: event.target.value
        })
    }
    handleSubmit = () => {
        let name = this.state.fname + " " + this.state.lname;
        let newperson = this.state.persons.concat( name);
        this.setState({
            persons: newperson, fname: '', lname: ''
        })
    }
    handleRemove = (i) => {
        console.log('handleRemove');
        let newname = this.state.persons.filter((item, index) => {
            return index !== i
        });
        this.setState({
            persons: newname
        })
    }
    handleShowhide = () => {
        if(this.state.isEdit === false){
            this.setState({isEdit:true})
        }
        else{
            this.setState({isEdit:false})
        }
    }

    render() {
        const {classes} = this.props;
        console.log("render == ", this.state.persons);
        return (
            <div>
                <div className={classes.appbar}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                ToDo
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div>
                    <Grid container
                          direction="column"
                        //alignItems="center"
                          justify="space-around" className={classes.grid}
                        // className={classes.grid}
                    >

                        <Grid item xs={12}>
                            <Grid container
                                  direction="row"
                                  alignItems="center"
                                  justify="space-around"
                                  className={classes.container}>
                                <Grid item xs={12}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <FormControl className={classes.margin}>
                                                <InputLabel htmlFor="custom-css-standard-input"
                                                            classes={{
                                                                root: classes.cssLabel,
                                                                focused: classes.cssFocused
                                                            }}
                                                >FirstName</InputLabel>
                                                <Input id="custom-css-standard-input"
                                                       classes={{
                                                           underline: classes.cssUnderline
                                                       }}
                                                       onChange={this.changeFirstname}
                                                       value={this.state.fname}
                                                />
                                            </FormControl><FormControl className={classes.margin}>
                                            <InputLabel htmlFor="custom-css-standard-input"
                                                        classes={{
                                                            root: classes.cssLabel,
                                                            focused: classes.cssFocused
                                                        }}
                                            >LastName</InputLabel>
                                            <Input id="custom-css-standard-input"
                                                   classes={{
                                                       underline: classes.cssUnderline
                                                   }}
                                                   onChange={this.changeLastname}
                                                   value={this.state.lname}
                                            />
                                        </FormControl>
                                            <Fab color="primary" aria-label="Add" className={classes.fab}
                                                 onClick={this.handleSubmit}><AddIcon/></Fab>
                                            <div>
                                                <div>


                                                </div>

                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container
                                  direction="row"
                                  alignItems="center"
                                  justify="space-around"
                                  className={classes.container}>
                                <Grid item xs={12}>
                                    <Card>
                                        <CardContent>
                                            {this.state.isEdit ?
                                                <div>
                                                    <FormControl className={classes.margin}>
                                                        <InputLabel htmlFor="custom-css-standard-input"
                                                                    classes={{
                                                                        root: classes.cssLabel,
                                                                        focused: classes.cssFocused
                                                                    }}
                                                        >FirstName</InputLabel>
                                                        <Input id="custom-css-standard-input"
                                                               classes={{
                                                                   underline: classes.cssUnderline
                                                               }}
                                                            // onChange={this.changeFirstname}
                                                            // value={this.state.fname}
                                                        />
                                                    </FormControl>
                                                    <FormControl className={classes.margin}>
                                                        <InputLabel htmlFor="custom-css-standard-input"
                                                                    classes={{
                                                                        root: classes.cssLabel,
                                                                        focused: classes.cssFocused
                                                                    }}
                                                        >LastName</InputLabel>
                                                        <Input id="custom-css-standard-input"
                                                               classes={{
                                                                   underline: classes.cssUnderline
                                                               }}
                                                            // onChange={this.changeLastname}
                                                            // value={this.state.lname}
                                                        />
                                                    </FormControl>
                                                    <Fab color="primary" aria-label="Add"
                                                         className={classes.fab}><DoneIcon/></Fab>
                                                </div>
                                                :null
                                            }
                                            <List component="nav">
                                                {this.state.persons.map((item, i) => {
                                                    return <div>
                                                        <ListItem>
                                                            <ListItemText>
                                                                {item}
                                                            </ListItemText>
                                                            <IconButton >
                                                                <EditIcon onClick={this.handleShowhide}/>
                                                            </IconButton>
                                                            <IconButton onClick={() => this.handleRemove(i)}>
                                                                <DeleteIcon/>
                                                            </IconButton>
                                                        </ListItem>
                                                        <Divider/>
                                                    </div>
                                                })}
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(TwoInput);