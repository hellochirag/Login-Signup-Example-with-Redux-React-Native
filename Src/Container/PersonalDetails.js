import  React from 'react';
import {Actions} from 'react-native-router-flux';
import {Field,reduxForm} from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {View} from 'react-native';
import {
    Container,
    Content,
    Text,
    Header,
    Left,
    Right,
    Button,
    Icon,
    Title,
    Card,
    CardItem,
    ListItem
} from 'native-base';
import AllStyles from '../Resources/Styles/AllStyles';
import  textInput  from '../Components/TextInput';
import * as Validate from '../Components/Validate';
import DropDown from '../Components/DropDown';
import * as actions from '../Reducers/Actions';
const _submit = (values) => {
    actions._addUserDetails(values);
    Actions.ProfilePic();
};


const  PersonalDetails  = (props) => {
    const {handleSubmit, pristine,submitting,invalid} = props;

    return (
        <Container style={{padding:20}}>
            <Content>
                <Card style={{elevation:10}}>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.3,paddingTop:15}}>
                                <Text style={{fontWeight:'bold'}}>First Name:</Text>
                            </View>
                            <View style = {{flex :0.7}}>
                                <Field name = "firstname"
                                       component = {textInput}
                                       type="text"
                                       placeholder = "First Name"
                                       validate={[ Validate.required, Validate.maxLength15 ]}
                                />
                            </View>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.3,paddingTop:15}}>
                                <Text style={{fontWeight:'bold'}}>Last Name:</Text>
                            </View>
                            <View style = {{flex :0.7}}>
                                <Field name = "lastname"
                                       component = {textInput}
                                       type="text"
                                       placeholder = "Last Name"
                                       validate={[ Validate.required, Validate.maxLength15 ]}
                                />
                            </View>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.3,paddingTop:15}}>
                                <Text style={{fontWeight:'bold'}}>Address:</Text>
                            </View>
                            <View style = {{flex :0.7}}>
                                <Field name = "address"
                                       component = {textInput}
                                       type="text"
                                       placeholder = "Address"
                                       validate={[ Validate.required]}
                                       warn={Validate.aol}
                                       numberOfLines={3}
                                       multiline={true}
                                />
                            </View>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.3,paddingTop:15}}>
                                <Text style={{fontWeight:'bold'}}>City:</Text>
                            </View>
                            <View style = {{flex :0.7}}>
                                <Field name = "city"
                                       component = {textInput}
                                       type="text"
                                       placeholder = "City"
                                       validate={[Validate.required]}
                                />
                            </View>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.3,paddingTop:15}}>
                                <Text style={{fontWeight:'bold'}}>State:</Text>
                            </View>
                            <View style = {{flex :0.7}}>
                                <Field name = "State"
                                       component = {textInput}
                                       type="text"
                                       placeholder = "State"
                                       validate={[Validate.required]}
                                />
                            </View>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.3,paddingTop:15}}>
                                <Text style={{fontWeight:'bold'}}>Country:</Text>
                            </View>
                            <View style = {{flex :0.7,flexDirection:'column'}}>
                                <Field
                                    name='country'
                                    options={[
                                        {label: 'India', value: 'India'},
                                        {label: 'Bangladesh', value: 'Bangladesh'},
                                        {label: 'USA', value: 'USA'},
                                        {label: 'UK', value: 'UK'},
                                        {label: 'Germany', value: 'Germany'},
                                        {label: 'Pakistan', value: 'Pakistan'},
                                        {label: 'China', value: 'China'},
                                        {label: 'Nepal', value: 'Nepal'}
                                    ]}
                                    component={DropDown}
                                    validate={Validate.required}
                                />
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <View style = {{width:90,height:50,paddingTop:5,
                    paddingLeft:270}}>
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
})(PersonalDetails));