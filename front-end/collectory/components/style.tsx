import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    // base styles
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
    },

    viewRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    // content styles
    content: {
        width: '80%',
        backgroundColor: colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 20,
        marginVertical: 20,
    },
    titleContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark,
        marginVertical: 20,
    },
    textContent: {
        fontSize: 16,
        fontWeight: 'normal',
        color: colors.dark,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    smallTextContent: {
        fontSize: 12,
        fontWeight: 'normal',
        color: colors.dark,
        marginVertical: 10,
        textAlign: 'center',
        marginHorizontal: 20,
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
        backgroundColor: colors.light,
        borderColor: colors.dark,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        
    },

    // button styles

    styledButtonView: {
        width: 'auto',
        marginHorizontal: 60,
        marginVertical: 15,
    },
    logoButton: {
        width: '25%',
        height: 50,
        backgroundColor: colors.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedLogoButton: {
        width: '25%',
        height: 50,
        backgroundColor: colors.dark,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // navbar styles
    backBar: {
        width: 'auto',
        maxWidth: '100%',
        height: 50,
        flexDirection: 'row',
        marginTop: 0,
    },


    // separator styles
    separator: {
        width: '100%',
        marginTop: 30,
    }

  });

  export default styles;