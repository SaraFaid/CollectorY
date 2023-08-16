import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    // base styles
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
    },

    // content styles
    content: {
        width: '80%',
        backgroundColor: colors.tertiary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 20,
        marginVertical: 20,
    },
    titleContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary,
        marginVertical: 20,
    },
    textContent: {
        fontSize: 16,
        fontWeight: 'normal',
        color: colors.secondary,
        marginVertical: 10,
    },
    smallTextContent: {
        fontSize: 12,
        fontWeight: 'normal',
        color: colors.secondary,
        marginVertical: 10,
        textAlign: 'center',
    },
    errorTextInput: {
        fontSize: 12,
        fontWeight: 'normal',
        color: colors.error,
        marginVertical: 10,
        textAlign: 'center',
    },

    // form styles
    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: colors.tertiary,
        borderColor: colors.secondary,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        
    },

    // button styles
    buttonAction: {
        width: '100%',
        height: 40,
        backgroundColor: colors.dark,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },

    styledButtonView: {
        width: 'auto',
        marginHorizontal: 60,
        marginVertical: 15,
    },

    // separator styles
    separator: {
        width: '100%',
        marginTop: 30,
    }

  });

  export default styles;