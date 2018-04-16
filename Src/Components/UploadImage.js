import React,{Component} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import { View } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import AllStyles from '../Resources/Styles/AllStyles';

let source = '';
 class UploadImage extends React.Component {

    constructor(){
        super();
        this.state = {
            avatarSource: {},
        }
    }

    _selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 180,
            maxHeight: 180,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                });
                this.props.input.onChange(this.state.avatarSource)
            }
        });
    }

    render() {
        const {meta: {touched, error, warning}} = this.props;

        return(
            <View>
                <View>
                    <TouchableOpacity onPress={this._selectPhotoTapped.bind(this)}>
                        <View style={AllStyles.viewStyleImage}>
                            <Image source={this.props.input.value}
                                   style={AllStyles.imageStyle}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        touched && (
                            (error && <Text style={{color:'red',fontSize:12}}>{error}</Text>) ||
                            (warning && <Text style={{color:'yellow',fontSize:12}}>{warning}</Text>))
                    }
                </View>
            </View>
        );
    };
}

export default UploadImage;
