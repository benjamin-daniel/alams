import { Ionicons } from '@expo/vector-icons'

import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, Platform, StatusBar, Dimensions } from 'react-native'
import PropTypes from 'prop-types';
import { colors, theme } from '../Constants';

// devfrnz iphone x helper
function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
}

function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}



function getBottomSpace() {
    return isIphoneX() ? 34 : 0;
}

function getStatusBarHeight(skipAndroid = true) {
    if (Platform.OS === 'ios') {
        return isIphoneX() ? 44 : 20;
    }
    if (skipAndroid) {
        return 0;
    }
    return StatusBar.currentHeight;
}



const headerParams = ({ title, frhieght, textStyle, leftInstruction, rightInstruction, startColor, endColor, left, right, leftFlex, rightFlex, backgroundColor }) => {
    return (
        <>

            {Platform.OS === 'ios' && <View style={[{ height: frhieght, backgroundColor, },]}></View>}
            <View
                style={[{
                    backgroundColor, height: 60,
                    width: '100%',
                }, theme.headerheight]}
            >

                <View style={[{ flex: 1, flexDirection: 'row', marginHorizontal: 10, justifyContent: 'center', }, theme.tPaddingV5]}>
                    <TouchableOpacity onPress={() => leftInstruction()} style={{ flex: leftFlex, justifyContent: 'center' }}>
                        {left ? left :
                            <Image
                                fadeDuration={0}
                                style={{ width: 20, height: 20 }}
                                //  style={{ width: 18, height: 18,resizeMode: 'contain' }} 
                                source={require('../../assets/Nav.png')} />
                            // <Ionicons name="md-navicon" size={24} color='white' />
                        }
                    </TouchableOpacity>
                    {!!title && <View style={{ flex: 3, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[{ ...textStyle, color: colors.white }, theme.h4]}>{title}</Text>
                    </View>}
                    <TouchableOpacity onPress={() => rightInstruction()} style={{ flex: rightFlex, alignItems: 'flex-end', justifyContent: 'center' }}>
                        {right ? right :
                            <Ionicons name="md-thumbs-up" size={24} color='white' />
                        }
                    </TouchableOpacity>

                </View>
            </View>

        </>

    )

}

export { getStatusBarHeight };
export default headerParams;

headerParams.defaultProps = {
    style: {},
    textStyle: {
        fontSize: 18,
        color: colors.white,
    },
    startColor: '#AB41FF',
    endColor: '#A100FA',
    rightInstruction: () => { },
    leftInstruction: () => { },
    leftFlex: 1,
    rightFlex: 1,
    frhieght: getStatusBarHeight(),
    backgroundColor: colors.brandPrimary,
    // height: Head.HEIGHT,
};

headerParams.propTypes = {
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    left: PropTypes.element,
    right: PropTypes.element,
    rightInstruction: PropTypes.func,
    leftInstruction: PropTypes.func,
    leftFlex: PropTypes.number,
    rightFlex: PropTypes.number,
}
