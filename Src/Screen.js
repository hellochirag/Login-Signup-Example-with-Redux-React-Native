import {Router,Scene,Stack}  from 'react-native-router-flux'
import React,{Component} from 'react';
import PersonalDetails from './Container/PersonalDetails';
import ProfilePic from './Container/ProfilePic';
import Login from './Container/Login';
import Details from './Container/Details';

const router = () => (
    <Router>
        <Stack key="root">
            <Scene key="PersonalDetails" component={PersonalDetails} title="Signup" intial={true} navigationBarStyle={{ backgroundColor: 'blue',borderColor:'black'}}/>
            <Scene key="ProfilePic" component={ProfilePic} title ="Image"navigationBarStyle={{ backgroundColor: 'blue'}}/>
            <Scene key="Login" component={Login} title="Login" navigationBarStyle={{ backgroundColor: 'blue'}}/>
            <Scene key="Details" component={Details} title = "Details" navigationBarStyle={{ backgroundColor: 'blue'}}/>
        </Stack>
    </Router>
);

export default router;
