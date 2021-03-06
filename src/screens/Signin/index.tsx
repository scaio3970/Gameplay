import React from 'react';
import {View,
        Text,
        Image,
        StatusBar
    } from 'react-native';
import { styles } from './style'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/buttonIcon';

export function Signin(){


    return(
        <View style={styles.container}>
            <StatusBar
            barStyle='light-content'
            backgroundColor='tranparent'
            translucent={true}
            />
            <Image source={IllustrationImg} style={styles.image} resizeMode={'stretch'}></Image>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente {`\n`}
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon title={'Entrar com o discord'} activeOpacity={0.7}/>

            </View>
        </View>
    );
}