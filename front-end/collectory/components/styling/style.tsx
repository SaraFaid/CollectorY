import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    // base styles
    container: {
        flex: 1,
      backgroundColor: colors.primary,
        alignItems: 'center',
    },

    scrollContainer: {
        backgroundColor: colors.primary,
        minHeight: '100%',
        width: '100%',
        borderRadius: 10,
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
        alignSelf: 'center',
        borderRadius: 10,
        padding: 20,
        marginVertical: 20,
        paddingBottom: 80,
    },
    largeContent: {
        width: '90%',
        backgroundColor: colors.light,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        marginVertical: 20,
        paddingBottom: 120,
    },

    safeAreaViewContent: {
        width: '90%',
        minHeight: '90%',
        backgroundColor: colors.light,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        marginVertical: 20,
    },

    darkLargeContent: {
        width: '95%',
        minHeight: '80%',
        backgroundColor: colors.dark,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        padding: 10,
        marginVertical: 20,
    },
    titleContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark,
        marginVertical: 20,
        alignSelf: 'center',
    },
    darkTitleContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.light,
        marginVertical: 20,
        alignSelf: 'center',
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

    researchInput: {    
        width: '90%',
        height: 40,
        backgroundColor: colors.light,
        borderColor: colors.dark,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        alignSelf: 'center',
        marginLeft: 5,
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
    },

    //post
    post: {
        width: '100%',
        backgroundColor: colors.primary,
        borderRadius: 10,
        padding: 10,
        marginVertical: 20,
    },
    postAuthor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.dark,
        marginVertical: 5,
        backgroundColor: colors.light,
        width: '50%',
        borderRadius: 10,
        padding: 5,
    },
    postContent: {
        fontSize: 16,
        fontWeight: 'normal',
        color: colors.dark,
        marginVertical: 5,
        fontStyle: 'italic',
    },
    postImage: {
        height: 275,
        justifyContent: 'flex-end',
        margin: 5,
    },
    postTextImage: {
        color: 'white',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
        width: '100%',
    },

    // cards styles
    card: {
        flex: 1,
        height: 160,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 5,
        maxWidth: '33%',
    },

    license: {
        flex: 1,
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 5,
    },

    blockText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.light,
        marginVertical: 5,
        backgroundColor: colors.dark,
        width: '100%',
        textAlign: 'left',
        padding: 15,
        borderRadius: 15,
    },

    setText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: colors.light,
        marginVertical: 5,
        backgroundColor: colors.secondary,
        textAlign: 'left',
        padding: 15,
        marginLeft: 40,
        borderRadius: 15,
    },
    hiddensetText: {
        display: 'none',
    },

  });

  export default styles;