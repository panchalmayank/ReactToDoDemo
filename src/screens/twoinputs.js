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
// import Button from '@material-ui/core/Button'




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
        editFname: '',
        editLname: '',
        selectedIndex: null,
    };

    componentDidMount() {
        this.getUsers();
        this.getSingleUsers();
        this.getUserList();
        this.CreateUser();
    }


    getUsers = () => {
        fetch('https://reqres.in/api/users?page=2')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                console.log("Response USER DATA ", data.data);
               data.data.map((item) => {
                   let name = {firstName:item.first_name, lastName:item.last_name};
                   console.log("NEW NAME",name);
                   let newname = this.state.persons.concat(name);
                   this.setState({
                       persons:newname
                   })
               })
            })
            // .catch(error => console.log("Error ", error));
    };
    getSingleUsers = () => {

        fetch('https://reqres.in/api/unknown/2')
            .then(responseUser => {
                return responseUser.json();
            })
            .then(userData => {
                console.log("UserData",userData);
            })
    };
    getUserList = () => {
        fetch('https://reqres.in/api/unknown')
            .then(responseUserList => {
                return responseUserList.json();
            })
            .then(userList => {
                console.log("UserList",userList);
            })
    };
    CreateUser = (opts) => {
        fetch('https://reqres.in/api/users', {
            method: 'post',
            body: JSON.stringify(opts ,{"name": "morpheus",
                                        "job": "leader"})})
            .then(responseUserCreate => {
                return responseUserCreate.json()
            })
            .then(CreateUser => console.log("CreateUser",CreateUser))
            .catch(error => console.log("CreateError",error));
    };


    changeFirstname = (event) => {
        console.log('changeFirstname');
        this.setState({
            fname: event.target.value
        })
    };
    changeLastname = (event) => {
        console.log('changeLastname');
        this.setState({
            lname: event.target.value
        })
    };
    handleSubmit = () => {
        let name = {firstName: this.state.fname, lastName: this.state.lname}//this.state.fname + " " + this.state.lname;
        console.log(name);
        let newperson = this.state.persons.concat(name);
        this.setState({
            persons: newperson, fname: '', lname: ''
        })
    };
    changeEditFname = (event) => {
        console.log('changeEditFname');
        this.setState({
            editFname: event.target.value
        })
    };
    changeEditLname = (event) => {
        console.log('changeEditLname');
        this.setState({
            editLname: event.target.value
        })
    };
    handleRemove = (i) => {
        console.log('handleRemove');
        let newname = this.state.persons.filter((item, index) => {
            return index !== i
        });
        this.setState({
            persons: newname
        })
    }
    handleEdit = (item,i) => {
        console.log("ITEM", item);
        console.log("Index", i);
        console.log("selected index ", this.state.selectedIndex);
        console.log('handleEdit');
        let isEdit = this.state.selectedIndex !== i;
        this.setState({
            editFname: item.firstName,
            editLname: item.lastName,
            isEdit,
            selectedIndex: isEdit ? i : null
        });
    };
    handleEditSubmit = () => {
        let firstName = this.state.editFname;
        let lastName = this.state.editLname;
        let oldPersonList = this.state.persons;
        oldPersonList[this.state.selectedIndex] = {
            firstName, lastName
        };
        this.setState({
            persons: oldPersonList
        });
        console.log('handleEditSubmit');
        console.log('handleEditSubmitFNAME', firstName);
        console.log('handleEditSubmitLNAME', lastName);
        /* this.setState({
             persons: this.state.persons.map((item, index) =>
                 (index === this.state.selectedIndex ? {...item, firstName, lastName} : item)
             ),

         });*/
    };

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
                                                   onChange={this.changeLastname}
                                                   value={this.state.lname}
                                            />
                                        </FormControl>
                                            <Fab color="primary" aria-label="Add" className={classes.fab}
                                                 onClick={this.handleSubmit}><AddIcon/></Fab>
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
                                            {this.state.isEdit ? <div>
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
                                                               onChange={this.changeEditFname}
                                                               value={this.state.editFname}
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
                                                               onChange={this.changeEditLname}
                                                               value={this.state.editLname}
                                                        />
                                                    </FormControl>
                                                    <Fab color="primary" aria-label="Add"
                                                         className={classes.fab}><DoneIcon onClick={this.handleEditSubmit}/></Fab>
                                                </div>
                                                : null
                                            }
                                            <List component="nav">
                                                {this.state.persons.map((item, i) => {
                                                    return <div key={i}>
                                                        <ListItem>
                                                            <ListItemText>
                                                                {item.firstName} {item.lastName}
                                                            </ListItemText>
                                                            <div onClick={() => {
                                                                console.log(item);
                                                                this.handleEdit(item, i)}}>
                                                                <IconButton>
                                                                    <EditIcon/>
                                                                </IconButton>
                                                            </div>
                                                            <div onClick={() => this.handleRemove(i)}>
                                                                <IconButton>
                                                                    <DeleteIcon/>
                                                                </IconButton>
                                                            </div>
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