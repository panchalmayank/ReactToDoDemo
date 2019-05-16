import React, {Component} from 'react'
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import InputLable from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import teal from '@material-ui/core/colors/teal'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButoon from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeletIcon from '@material-ui/icons/Delete'
import Divider from '@material-ui/core/Divider'
import DoneIcon from '@material-ui/icons/Done'

const styles = (theme) => ({
    grid: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    container: {
        padding: 30
    },
    card: {
        maxWidth: 600,
        textAlign: 'center',
        padding: '30px',
        justifyContent: 'center',
        alignContent: 'center'
    },
    inputLable: {
        '&$inputFocused': {
            color: teal[500]
        },
    },
    inputFocused: {},
    inputUnderline: {
        '&:after': {
            borderBottomColor: teal[500],
        }
    },
    formContent: {
        margin: theme.spacing.unit
    },
    fab: {
        margin: theme.spacing.unit,
        backgroundColor: teal[500],
    }
});

class NewInputs extends Component {
    state = {
        fname: '',
        lname: '',
        persons: [],
        isEdit: false,
        editFname:'',
        editLname:'',
        selectedIndex:null,
    };
    componentDidMount() {
      axios.get('https://reqres.in/api/users?page=2')
          .then(data => {
              const user = data.data.data;
                user.map((item) => {
                    let name = {firstName:item.first_name , lastName:item.last_name};
                    console.log("NAMES",name);
                    let newname = this.state.persons.concat(name);
                    this.setState({
                        persons:newname
                    })
                });
              console.log("Response USER", data);
              console.log("USERS",user);
          })
          .catch(error => console.log("Error ", error));
    };

    changeFname = (event) => {
        console.log('changeFname');
        this.setState({
            fname: event.target.value
        })
    };
    changeLname = (event) => {
        console.log('changeLname');
        this.setState({
            lname: event.target.value
        })
    };
    handleSubmit = () => {
        console.log('handleSubmit');
        let name = {firstName: this.state.fname, lastName: this.state.lname};
        console.log("Name:", name);
        let newpersons = this.state.persons.concat(name);
        this.setState({
            persons: newpersons, fname: '', lname: '',
        })
    };
    changeEditFname = (event) => {
        console.log('changeEditFname');
        this.setState({
            editFname:event.target.value,
        });
    };
    changeEditLname = (event) => {
        console.log('changeEditLname');
        this.setState({
            editLname:event.target.value
        });
    };
    handleEdit = (item,i) => {
        console.log('handleEdit');
        console.log("Index", i);
        console.log("selected index ", this.state.selectedIndex);
        console.log("ITEM", item);
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
    };
    handleDelete = (i) => {
        console.log('handleDelete');
        let newname = this.state.persons.filter((item, index) => {
            return index !== i
        });
        this.setState({
            persons: newname
        })
    };


    render() {
        const {classes} = this.props;
        console.log("render == ", this.state.persons);
        return (
            <div>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                TODO
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div>
                    <Grid container
                          direction="column"
                          justify="space-around"
                          className={classes.grid}
                    >
                        <Grid item xs={12}>
                            <Grid container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                                  className={classes.container}>
                                <Grid item xs={12}>
                                    <Card className={classes.card}>
                                        <CardHeader title="TODO"/>
                                        <CardContent>
                                            <FormControl className={classes.formContent}>
                                                <InputLable htmlFor="custom-css-standard-input"
                                                            classes={{
                                                                root: classes.inputLable,
                                                                focused: classes.inputFocused
                                                            }}
                                                >First Name</InputLable>
                                                <Input id="custom-css-standard-input"
                                                       classes={{
                                                           underline: classes.inputUnderline
                                                       }}
                                                       value={this.state.fname}
                                                       onChange={this.changeFname}
                                                />
                                            </FormControl>
                                            <FormControl className={classes.formContent}>
                                                <InputLable htmlFor="custom-css-standard-input"
                                                            classes={{
                                                                root: classes.inputLable,
                                                                focused: classes.inputFocused
                                                            }}
                                                >Last Name</InputLable>
                                                <Input id="custom-css-standard-input"
                                                       classes={{
                                                           underline: classes.inputUnderline
                                                       }}
                                                       value={this.state.lname}
                                                       onChange={this.changeLname}
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
                                  justify="space-around"
                                  alignItems="center"
                                  className={classes.container}>
                                <Grid item xs={12}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <List component="nav">
                                                {this.state.isEdit ? <div>
                                                        <FormControl className={classes.formContent}>
                                                        <InputLable htmlFor="custom-css-standard-input"
                                                                    classes={{
                                                                        root: classes.inputLable,
                                                                        focused: classes.inputFocused
                                                                    }}
                                                        >First Name</InputLable>
                                                        <Input id="custom-css-standard-input"
                                                               classes={{
                                                                   underline: classes.inputUnderline
                                                               }}
                                                               value={this.state.editFname}
                                                               onChange={this.changeEditFname}
                                                        />
                                                    </FormControl>
                                                        <FormControl className={classes.formContent}>
                                                            <InputLable htmlFor="custom-css-standard-input"
                                                                        classes={{
                                                                            root: classes.inputLable,
                                                                            focused: classes.inputFocused
                                                                        }}
                                                            >Last Name</InputLable>
                                                            <Input id="custom-css-standard-input"
                                                                   classes={{
                                                                       underline: classes.inputUnderline
                                                                   }}
                                                                   value={this.state.editLname}
                                                                   onChange={this.changeEditLname}
                                                            />
                                                        </FormControl>
                                                        <Fab aria-label="Add" className={classes.fab} onClick={this.handleEditSubmit}>
                                                            <DoneIcon  />
                                                        </Fab>
                                                    </div>
                                                    : null
                                                }
                                                {this.state.persons.map((item, i) => {
                                                    return <div key={i}>
                                                        <ListItem>
                                                            <ListItemText>
                                                                {item.firstName} {item.lastName}
                                                            </ListItemText>
                                                            <div onClick={() => {
                                                                console.log("ITEM:",item);
                                                                this.handleEdit(item,i)}}>
                                                                <IconButoon>
                                                                    <EditIcon/>
                                                                </IconButoon>
                                                            </div>
                                                            <div onClick={() => this.handleDelete(i)}>
                                                                <IconButoon>
                                                                    <DeletIcon/>
                                                                </IconButoon>
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

export default withStyles(styles)(NewInputs);