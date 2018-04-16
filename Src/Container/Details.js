import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import { View,ToastAndroid,AsyncStorage,Image } from 'react-native';
import {
    Container,
    Content,
    Card,
    CardItem,
    Button,
    Text
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import AllStyles from "../Resources/Styles/AllStyles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../Reducers/Actions'

class Details extends Component {

    _saveData = async () => {

        AsyncStorage.setItem('userData', JSON.stringify(this.props.user));
        ToastAndroid.showWithGravity(
            'SignUp SuccessFully',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
        Actions.PersonalDetails();
    };


    render(){
        const {firstname,lastname,address,city,country,email,profile,State} = this.props.user;
        return(
            <Container>
                <Content>
                <View style = {{
                    marginTop :10,
                    height: 180,
                    width: 180,
                    borderRadius: 180,
                    borderColor: 'gray',
                    borderWidth: 3,
                    marginBottom : 15,
                    justifyContent:'center',
                    alignSelf:'center'}}>
                    <Image source={profile}
                           style={AllStyles.imageStyle}/>
                </View>
                    <Card>
                        <CardItem>
                            <View style = {{marginBottom:7,flexDirection:'row'}}>
                                <View style = {{flex :0.3}}>
                                    <Text style={{fontWeight:'bold'}}>First Name:</Text>
                                </View>
                                <View style = {{flex :0.7,borderWidth:2}}>
                                    <Text style={{color:'orange'}}>{firstname}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View style = {{marginBottom:7,flexDirection:'row'}}>
                                <View style = {{flex :0.3}}>
                                    <Text style={{fontWeight:'bold'}}>Last Name:</Text>
                                </View>
                                <View style = {{flex :0.7,borderWidth:2}}>
                                    <Text style={{color:'orange'}}>{lastname}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View style = {{marginBottom:7,flexDirection:'row'}}>
                                <View style = {{flex :0.3}}>
                                    <Text style={{fontWeight:'bold'}}>Address:</Text>
                                </View>
                                <View style = {{flex :0.7,borderWidth:2}}>
                                    <Text style={{color:'orange'}}>{address}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View style = {{marginBottom:7,flexDirection:'row'}}>
                                <View style = {{flex :0.3}}>
                                    <Text style={{fontWeight:'bold'}}>City:</Text>
                                </View>
                                <View style = {{flex :0.7,borderWidth:2}}>
                                    <Text style={{color:'orange'}}>{city}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View style = {{marginBottom:7,flexDirection:'row'}}>
                                <View style = {{flex :0.3}}>
                                    <Text style={{fontWeight:'bold'}}>State:</Text>
                                </View>
                                <View style = {{flex :0.7,borderWidth:2}}>
                                    <Text style={{color:'orange'}}>{State}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View style = {{marginBottom:7,flexDirection:'row'}}>
                                <View style = {{flex :0.3}}>
                                    <Text style={{fontWeight:'bold'}}>Country:</Text>
                                </View>
                                <View style = {{flex :0.7,borderWidth:2}}>
                                    <Text style={{color:'orange'}}>{country}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View style = {{marginBottom:7,flexDirection:'row'}}>
                                <View style = {{flex :0.3}}>
                                    <Text style={{fontWeight:'bold'}}>Email:</Text>
                                </View>
                                <View style = {{flex :0.7,borderWidth:2}}>
                                    <Text style={{color:'orange'}}>{email}</Text>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
                    <View style = {{width:90,height:50,paddingTop:5,
                        paddingLeft:250}}>
                        <Button
                            onPress={this._saveData.bind(this)}
                            style = {{backgroundColor:'gray,
                                borderRadius:10,
                                borderWidth:3,
                                borderColor:'black',
                                width :150}}>
                            <Text style={AllStyles.nativeButtonText}>Submit</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        form: state.form
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'WizardForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(Details));