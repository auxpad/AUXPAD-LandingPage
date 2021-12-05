import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactUs from '../FeatureAudio/Email.svg'; 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Wrapper2 from '../Wrapper/Wrapper2';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import axios from 'axios';
import Classes from './Email.module.css';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    },
  }));


const Email = () => {
    const classes2 = useStyles();
    const [email, setEmail] = React.useState('');
    const [sent, setSent] = React.useState(false);
    const changeEmail = (e) =>{
        setEmail(e.target.value);
    }

    /*
    const sendEmail = async () => {
        try{
            const response = await axios.post('http://localhost:5000/send-email', email);
            if (response.body.complete){
                setSent(true);
            }
        } catch{
            console.log("Error");
        }
    } 
    */

    const mailTo = () =>{
        window.location.href = "mailto:app@auxpad.com";
    }

    return (
        <Wrapper2>
            <div id="Contact" className={Classes.containerGroup}>
                <div className={Classes.innerContainer}>
                        <h1 className={Classes.heading}>Questions? Concerns? <br /> Email us!</h1>
                        <p className={Classes.para}>Email Charles and Andrew at app@auxpad.com and we’ll personally <br /> respond to you as quickly as possible.</p>
                        <p className={Classes.parasm}> Email Charles and Andrew at app@auxpad.com and we’ll personally respond to you as quickly as possible.</p>  
                        <button className={Classes.buttonGroup} onClick={mailTo}>send email</button> 
                        <p className={Classes.outerGroup}>© AUXPAD 2021. All Rights Reserved.</p>
                </div>   
            </div> 
        </Wrapper2>
    );
}

export default Email;
/*
<p className={Classes.para}>Email Charles and Andrew at app@auxpad.com and we’ll personally <br /> respond to you as quickly as possible. Or, just add yourself to the mailing <br /> list below and never miss another update!</p>
<p className={Classes.parasm}> Email Charles and Andrew at app@auxpad.com and we’ll personally respond to you as quickly as possible. Or, just add yourself to the mailing list below and never miss another update! </p>                          
<TextField
    id="outlined-basic"
    label="email"
    name="email"
    value = {email}
    className={Classes.textBox}
    onChange={changeEmail}
/>
{!sent ? 
<button className={Classes.buttonGroup} onClick={sendEmail}>give us a wave 👋</button> 
:
<button className={Classes.buttonGroupSent}>thank you!</button> 
}
*/