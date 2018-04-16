import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import UploadImage from '../Components/UploadImage';
import {
    Container,
    Content,
    Card,
    CardItem,
    Button,
    Text
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import AllStyles from "../Resources/Styles/AllStyles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../Reducers/Actions';
import * as Validate from "../Components/Validate";

const _submit = (values) => {
    actions._addProfilePicture(values);

    Actions.Login();
};

const ProfilePic= (props) => {
    const { handleSubmit ,pristine,submitting,invalid} = props;

    return(
        <Container style={{padding:20}}>
            <Content>
                <Card style={{marginTop:40,elevation:10}}>
                    <CardItem>
                        <View style = {{marginBottom:7,flexDirection:'row'}}>
                            <View style = {{flex :0.7,paddingTop:15}}>
                                <Field name='profile' component={UploadImage} type='file' validate={Validate.required}/>
                            </View>
                            <View style = {{width:90,height:50,flex:0.3,paddingTop:120}}>
                                <Button
                                    onPress={handleSubmit(_submit)}
                                    style = {AllStyles.buttonStyle}
                                    disabled={invalid||pristine || submitting}>
                                    <Text style={AllStyles.nativeButtonText}>Next></Text>
                                </Button>
                            </View>
                        </View>
                    </CardItem>
                </Card>
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
})(ProfilePic));