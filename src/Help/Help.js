import React from 'react'
import QuestionAnswers from '../QuestionAnswers/QuestionAnswers'
import { Button } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import PersonIcon from "@mui/icons-material/Person";

const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },
 
        ],
        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: 'lightblue',
    headerBgColor: '#0F3789',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: 'white',
    userFontColor: 'black',
};
 
// Set some properties of the bot
const config = {
    
    floating: true,
};
 
export default function Help() {
    const handleChat = (e) => {
        prompt="define farmers" 
       console.log(prompt)
      };
  return (

    
    <div style={{margin:"10px"}}>

        <div>
            
        </div>
        <QuestionAnswers/>
        {/* <ThemeProvider theme={theme}>
                <ChatBot
 
                
                    headerTitle="Jeev Endhan"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
             */}
    </div>
  )
}
// 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