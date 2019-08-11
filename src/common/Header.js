import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button'
import logo from '../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

//making use of styled JSX elements, in form of ready  components, from materialUI library


const customStyles={

content:{
    top: '50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    marginRight: '-50%',
    transform: 'translate(-50%,-50%)'

}

}
//---------------------------------------------------------

//below is stateless functional typrography component

const TabContainer=function(props){
//note the styling priority : inline>internal>external
    return (
    <Typography component="div" style={{padding:0,textAlign:'center'}}>
{props.children}

    </Typography>    /* note that inline styling has {{}} */
    
    );

}

//we validate if tabContainer component always have children elements or not
//PropTypes required for inbuilt typeChecking of data
TabContainer.propTypes={
    children:PropTypes.node.isRequired
}


//---------------------------------------------------------------

// why cant we make use of JSX elements instead of importing these elements
class Header extends Component {
    constructor(){
super();
//dynamic members is initialised within state
this.state={
    modalIsOpen:false,
    value:0
}
        
    }

    //----------------------------------------

    openModalHandler=()=>{
this.setState({modalIsOpen:true})
    }

    //--------------------------------
    closeModal=()=>{
        this.setState({modalIsOpen:false})
    }
    //----------------------------------

    tabChangeHandler=(event,position)=>{
        console.log(position);
        this.setState({ value:position });

       // note: this value controls the display of underlining line on the tab
}

//---------------------------------------------
render(){
    return(<div class="mainContainer">
        <header className="header">
        <img src={logo} className="app-logo" alt="logo"></img>
    <Button variant="contained" className="login-button" onClick={this.openModalHandler}>  {/*  we directly import ready-made button element as component from materialUI library */}
    Login
    </Button>
    </header>
    
    {/* display of modal is controlled via modalIsopen attribute, similar to display attribute in html/css */}
    <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModal} style={customStyles}>
    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>  {/* change of position */}
                        <Tab label="Login" />   {/* position 0 */}
                        <Tab label="Register"/>  {/*  position1 */}
                        
                    </Tabs>

{/* Here onChange event handler for the Tabs,sets the state of value to 0 or 1, based upon position passed.
So is position an inbuilt property of Tab component*/}

{this.state.value===0 &&

<TabContainer>
<FormControl>
<InputLabel htmlFor="username" > UserName</InputLabel>
<Input id="username" type="text"/>
</FormControl>
<br/>
<FormControl>
<InputLabel htmlFor="password"> Password </InputLabel>
<Input id="password" type="text"/>
</FormControl> <br/><br/>
<Button variant="contained" color="primary">LOGIN</Button>
</TabContainer>
}
            
        </Modal>
    </div>);
}
}


export default Header