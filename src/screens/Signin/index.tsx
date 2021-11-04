import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import { styles } from './style'

export function Signin(){

    const [text, setText] = useState('');


    return(
        <View style={styles.container}>
            <Text> 
                Hello world, NLW Togheter
            </Text>
            <TextInput 
                style={styles.input}
                onChangeText={setText}

            />
            <Text>
                Você digitou: {text}
            </Text>
        </View>
    );
}