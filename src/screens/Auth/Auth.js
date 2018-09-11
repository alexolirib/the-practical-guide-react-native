import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import startMainTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component{

    loginHAndler = () =>{
        startMainTabs();
    }

    render(){
        return (
            <View>
                <Text>
                   Auth Sreens dando
                </Text>
                <Button title="Login" onPress={this.loginHAndler} />
            </View>
        );
    }
}

export default AuthScreen;