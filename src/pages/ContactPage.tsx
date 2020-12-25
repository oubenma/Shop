import { createStyles, makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import Footer from '../components/footer';
import NavBar from '../components/NavBar';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';
import emailjs from 'emailjs-com';


const useStyles = makeStyles(()=>
    createStyles({
        root:{
           fontSize:'16px',
           fontWeight:400,
           fontFamily:'normal',
           color:'black',
           border:'1px solid #CDD2D4',
           borderRadius:'4px',
           backgroundColor:'#EDEFF0'
        },
        innerformDiv:{
          maxWidth:'400px',
          marginRight:'400px',
          marginLeft:'440px',
          marginBottom:'40px'  
        },
        formDiv:{
            padding:'25px 40px 30px 40px',
            backgroundColor:'withe',
            border:'3px solid #EDEFF0'
        },
            button: {
                backgroundColor: '#5600e3',
                borderColor: '#5600e3',
                color: '#fff',
                transition: 'all 0.3s ease',
                fontFamily: '"DIN Next",sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                textTransform: 'initial',
                letterSpacing: '0.5px',
                border: '1px solid #f2f2f2',
                borderRadius: '3px',
                padding: '10px 24px',
                lineHeight:1.5,
                fontSize: '17px',
                width: '100%',
                '&:hover': {
                  backgroundColor: '#5600e3',
                  opacity: 0.6,
                },
              },
            

    })
    );


function Contact(){
const classes=useStyles();
const [firstName,setFirstName]=useState<string>('');
const [latName,setLastName]=useState<string>('');
const [message,setMessage]=useState<string>('');
const [email,setEmail]=useState<string>('');

const onFirstNameChange = (e: any) => {
    setFirstName(e.target.value); 
  };
  const onLastNameChange = (e: any) => {
    setLastName(e.target.value);
  };
  const onMessageChange = (e: any) => {
    setMessage(e.target.value);
  };
  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handelSubmit =(e:any)=>{
      e.preventDefault();

  }
 
  function sendEmail(e:any) {
    e.preventDefault();

    emailjs.sendForm('service_qihz6de', 'template_50qespg', e.target, 'user_GtGlzeTVFqhlhq9eQkCN1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
 





    return(
        <>
        <NavBar/>
      
      <div  className={classes.innerformDiv} > 
         <div className={classes.formDiv} >
         <h1  style={{textAlign:'center'}}>Contacts Us </h1>
         
         <form style={{lineHeight:'3.5em'}} onSubmit={sendEmail}>
  <TextField id="outlined-basic"  
         variant="outlined" type='text'     placeholder='Your first name' fullWidth={true}  
         InputProps={{
            classes: {
              input: classes.root
            }
          }}
          name='firstName'
          size='small'
          
          onChange={onFirstNameChange}
         
             
  />
  <TextField id="outlined-basic"  variant="outlined" 
  type='text'    placeholder='Your  last name' fullWidth={true} name='lastName'
  InputProps={{
      classes: { 
    input: classes.root } }}
   size='small'
    
    onChange={onLastNameChange}/>
  <TextField id="outlined-basic"  variant="outlined" type='email'
     placeholder='Your email'  fullWidth={true}  name='email'
   InputProps={{
        classes:
    { input: classes.root}}} 
    size='small' 
    onChange={onEmailChange}/>
 <TextareaAutosize aria-label="empty textarea" placeholder='Your messages'  rowsMin={5} style={{width:'308px', marginBottom:'0px'}}
 className={classes.root} onChange={onMessageChange} name='message'
 />
 <button  className={classes.button} >
      Submit
  </button>
</form>


  </div>
</div>


        <Footer/>

        </>

    );
}
export default Contact;