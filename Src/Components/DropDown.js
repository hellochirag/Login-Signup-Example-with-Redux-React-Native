import React from 'react';
import { View, Picker, Text } from 'native-base';
import styles from "../Resources/Styles/AllStyles";

const DropDown = ({
    options,
    input:{ value, onChange },
    meta: {touched, error, warning}
}) => {

    return(
        <View>
            <View style = {{borderWidth:2}}>
                <Picker
                    selectedValue={value}
                    onValueChange={onChange.bind(this)}
                >
                    {
                        options.map((opt, index) => (
                            <Picker.Item
                                key={index}
                                label={opt.label}
                                value={opt.value}
                            />
                        ))
                    }
                </Picker>
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

export default DropDown;
