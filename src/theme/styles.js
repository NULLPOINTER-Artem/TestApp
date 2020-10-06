import { StyleSheet } from 'react-native';
import { WINDOW } from '../constants/constants';

// Here is all applied styles of the application
export const styles = StyleSheet.create({
    frame: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: WINDOW.height,
        width: WINDOW.width,
    },
    imageFormatFull: {
        height: WINDOW.height,
        width: WINDOW.width,
    },
    imageFormatMini: {
        height: WINDOW.width / 2,
        width: WINDOW.width / 2,
    },
    authorViewer: {
        flexDirection: "row",
        alignItems: 'flex-start',
    },
    authorAvatar: {
        height: 32,
        width: 32,
        marginLeft: 4,
        marginTop: 8,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
    },
    authorName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 8,
        marginTop: 8,
        top: 3,
    },
    transparentGrayBackground: {
        position: 'absolute',
        width: (WINDOW.width / 2),
        height: 50,
        backgroundColor: '#808080',
        opacity: 0.5,
    }
});