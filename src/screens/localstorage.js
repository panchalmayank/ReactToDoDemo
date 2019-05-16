import React ,{Component} from 'react'

class LocalStorage extends Component{
    state={
        name:'',
        persons:[],
    };
    changeName = (event) => {
        console.log('changeName');
        this.setState({
            name:event.target.value
        })
    };
    handleSubmit = () => {
      console.log('handleSubmit');
      localStorage.setItem('name',this.state.name)
    };
    render(){
        return(
            <div>
                <form>
                    <input type="text" onChange={this.changeName} />
                    <button onClick={this.handleSubmit}>Add</button>
                </form>
                <div>
                    <ul>
                        <li>{localStorage.getItem('name')}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LocalStorage;