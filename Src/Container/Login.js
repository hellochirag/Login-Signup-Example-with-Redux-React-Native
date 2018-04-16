import  React from 'react';
import {Actions} from 'react-native-router-flux';
import {Field, reduxForm} from 'redux-form';
import {View, Alert} from 'react-native';
import {
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Header,
    Left,
    Right,
    Button,
    Icon,
    Title,
} from 'native-base';
import  textInput  from '../Components/TextInput';
import * as Validate from '../Components/Validate';
import AllStyles from "../Resources/Styles/AllStyles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../Reducers/Actions'
const _submit = (values) => {
    if(values.pass === values.cpass){
        actions._addLoginCredentials(values)
        Actions.Details();
    }else{
        Alert.alert("! Opss  Confirm PassWord Does Not Match..");
        values.cpass = '';
    }
};

const  Login  = (props) => {
    const {handleSubmit,pristine,submitting,invalid} = props;

    return (
        <Container style={{padding:20}}>
            <Content>
                <Card style={{marginTop:40,elevation:10}}>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.3,paddingTop:15}}>
                                <Text style={{fontWeight:'bold'}}>Email:</Text>
                            </View>
                            <View style = {{flex :0.7}}>
                                <Field name = "email"
                                       component = {textInput}
                                       type={Validate.email}
                                       placeholder = "Email"
                                       validate={[Validate.email,Validate.required]}
                                       warn={Validate.aol}
                                />
                            </View>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.3,paddingTop:15}}>
                                <Text style={{fontWeight:'bold'}}>Password:</Text>
                            </View>
                            <View style = {{flex :0.7}}>
                                <Field name = "pass"
                                       component = {textInput}
                                       type={Validate.pass}
                                       placeholder = "Password"
                                       validate={[ Validate.required, Validate.pass ]}
                                       secureTextEntry={true}

                                />
                            </View>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.3,paddingTop:15}}>
                                <Text style={{fontWeight:'bold'}}>Confirm Password:</Text>
                            </View>
                            <View style = {{flex :0.7}}>
                                <Field name = "cpass"
                                       component = {textInput}
                                       type={Validate.pass}
                                       placeholder = "Confirm Password"
                                       validate={[ Validate.required, Validate.pass ]}
                                       secureTextEntry={true}
                                />
                            </View>
                        </View>
                    </CardItem>
                    </Card>
                <View style = {{width:90,height:50,paddingTop:5,
                    paddingLeft:270
                    }}>
                    <Button
                        onPress={handleSubmit(_submit)}
                        style = {AllStyles.buttonStyle}
                        disabled={invalid||pristine || submitting}>
                        <Text style={AllStyles.nativeButtonText}>Next></Text>
                    </Button>
                </View>
            </Content>
        </Container>
    );
};

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
})(Login));