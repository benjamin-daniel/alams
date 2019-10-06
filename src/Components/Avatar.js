import React from 'react'
import PropTypes from 'prop-types';
import { Image, View } from 'react-native'

const Avatar = ({ height, width, style, src, circular, radius, ...props }) => {
    return (
        <View style={style}>
            {circular ?
                <Image
                    style={{ width: radius * 2, height: radius * 2, borderRadius: radius }}
                    source={src}
                />
                :
                <Image
                    style={{ width, height }}
                    source={src}
                />
            }
        </View>
    )
};
Avatar.defaultProps = {
    style: {},
    height: 24,
    width: 24,
    radius: 100,
};

Avatar.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    src: PropTypes.oneOfType([
        PropTypes.shape({
            uri: PropTypes.string,
            headers: PropTypes.objectOf(PropTypes.string)
        }),
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.shape({
                uri: PropTypes.string,
                width: PropTypes.number,
                height: PropTypes.number,
                headers: PropTypes.objectOf(PropTypes.string)
            })
        )
    ]),
    circular: PropTypes.bool,
    radius: PropTypes.number,
}
export default Avatar;