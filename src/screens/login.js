import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar'
import {withStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import FormContol from '@material-ui/core/FormControl'
import InputLable from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/lightBlue'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
// import Spinner from 'react-spinner-material'

const styles = (theme) => ({
    appbar: {
        flexGrow: 1,
    },
    grid: {
        alignContent: 'center',
        justifyContent: 'center',
        padding:100,
        fontFamily:"Roboto"
    },
    container: {
        padding: '30px'
    },
    card: {
        maxWidth: 700,
        justifyContent: 'center',
        alignContent: 'center',
        width: 430,
        height: 450
    },
    form: {
        margin: theme.spacing.unit,

    },
    inputLable: {
        '&$inputFocused': {
            color: blue[700]
        }
    },
    inputFocused: {},
    inputUnderline: {
        '&after': {
            borderBottomColor: lightBlue[400],
        },
        width: 280,
    },
    cardHeader: {
        paddingTop:50,
        fontFamily:"Roboto",
    },
    formContent: {
        padding: 10
    },
    buttonDiv: {
        paddingTop: 50
    },
    button:{
        width:130,
        height:40
    },
    sbuttondiv:{
        fontFamily:"Roboto",
        paddingTop:20,
        alignContent:'center',
        justifyContent:'center'
    },
});

class Login extends Component {
    state = {
        email:'',
        password:'',
        isOpen:false,
    };
    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    };
    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    };
    handleLogin = () => {
        this.setState({isOpen : true});
    };
    handleClose = () => {
        this.setState({ isOpen : false});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                {/*<div>*/}
                    {/*<Spinner size={120} color={"#333"} spinnerWidth={2} visible={true}/>*/}
                {/*</div>*/}
                <div className={classes.appBar}>
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
                          className={classes.grid} >
                        <Grid item xs={12}>
                            <Grid container
                                  direction="row"
                                  alingItems="center"
                                  justify="space-around" >
                                <Grid item xs={12}>
                                    <Card className={classes.card}>
                                        <CardHeader title="Login" className={classes.cardHeader}/>
                                        <CardContent >
                                            <div className={classes.formContent}>
                                                <div>
                                                    <FormContol className={classes.form}>
                                                        <InputLable htmlFor="custom-css-standard-input"
                                                                    classes={{
                                                                        root: classes.inputLable,
                                                                        focused: classes.inputFocused
                                                                    }}>
                                                            Email
                                                        </InputLable>
                                                        <Input id="custom-css-standard-input"
                                                               classes={{
                                                                   underline: classes.inputUnderline,
                                                               }}
                                                               value={this.state.email}
                                                               onChange={this.changeEmail}
                                                        />
                                                    </FormContol>
                                                </div>
                                                <div>
                                                    <FormContol className={classes.form}>
                                                        <InputLable htmlFor="custom-css-standard-input"
                                                                    classes={{
                                                                        root: classes.inputLable,
                                                                        focused: classes.inputFocused
                                                                    }}>
                                                            Password
                                                        </InputLable>
                                                        <Input id="custom-css-standard-input"
                                                               type="password"
                                                               classes={{
                                                                   underline: classes.inputUnderline,
                                                               }}
                                                               value={this.state.password}
                                                               onChange={this.changePassword}
                                                        />
                                                    </FormContol>
                                                </div>
                                                <div className={classes.buttonDiv}>
                                                    <Button variant="contained" color="primary" onClick={this.handleLogin} className={classes.button}>
                                                        Login
                                                    </Button>
                                                </div>
                                                <div className={classes.sbuttondiv} >
                                                    <Typography>
                                                        Don't have an account<Button color="primary"> Signup</Button>
                                                    </Typography>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Dialog
                        open={this.state.isOpen}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dailog-title"
                        arie-describedby="alert-dailog-description" >
                        <DialogTitle id="alert-dailog-title" >Successful</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dailog-description">
                                You have successfully Login
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);