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
        padding: 5,
        marginVertical: 10,
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
        width: '100%',
        minHeight: '80%',
        backgroundColor: colors.dark,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingTop: 10,
        marginVertical: 20,
        paddingBottom: 50,
    },
    listContent:{
        width: '100%',
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
        marginVertical: 10,
        alignSelf: 'center',
    },
    darkTextContent: {
        fontSize: 16,
        fontWeight: 'normal',
        color: colors.light,
        marginVertical: 10,
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
    collectionButtonView: {
        width: '100%',
        height: 100,
        borderWidth: 2,
        borderColor: colors.light,
        borderRadius: 5,
        backgroundColor: colors.tertiary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    longButtonView: {
        width: '150%',
        height: 50,
        borderWidth: 2,
        borderColor: colors.light,
        borderRadius: 5,
        backgroundColor: colors.tertiary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    longButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.light,
        marginVertical: 5,
        textAlign: 'center',
    },
    logoButton: {
        minWidth: '25%',
        maxWidth: '33%',
        height: 50,
        backgroundColor: colors.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedLogoButton: {
        minWidth: '25%',
        maxWidth: '33%',
        height: 50,
        backgroundColor: colors.dark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    likeButton: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedLikeButton: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //badge styles
    quantityBadge: {
        borderCurve: 15,
        height: 30,
        backgroundColor: colors.mint,
    },
    quantityBadgeText: {
        marginHorizontal: 5,
        marginBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.dark,
        position: 'absolute',
        
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
        height: 290,
        justifyContent: 'flex-end',
        margin: 5,
    },
    postTextImage: {
        color: 'white',
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
        width: '105%',
    },

    // cards styles
    pressableCard: {
        width: '30%',
        margin: 0,
        padding: 0,
        alignItems: 'stretch',
        zIndex: 0,

    },
    card: {
        flex: 1,
        height: 145,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 2,
    },
    largeCard: {
        width: 145,
        height: 200,
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

    //flatlist
    flatList: {
        width: '100%',
        marginTop: 20,
        alignSelf: 'center',
    },

    flatListColumn: {
        width: '90%',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },

    // modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        minHeight: '50%',
        minWidth: '75%',
    },
    modalView: {
        backgroundColor: colors.secondary,
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        minHeight: '80%',
        minWidth: '90%',
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: colors.light,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: colors.light,
      },

      // friends
        friend: {
            width: '100%',
            borderRadius: 10,
            padding: 10,
            marginVertical: 5,
            backgroundColor: colors.tertiary,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',

        },
        friendText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.light,
            borderRadius: 10,
            padding: 5,
        },

        // settings
        viewRowNarrow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 2,
            width: '80%',
        },
        textInputSmall: {
            width: '50%',
            height: 40,
            backgroundColor: colors.light,
            borderColor: colors.dark,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginVertical: 10,
        },

        // profile admin
        userAdminView: {
            width: '100%',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginVertical: 5,
            backgroundColor: colors.tertiary,
        },
        userNameTextAdmin: {
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.light,
            borderRadius: 10,
            padding: 5,
        },
        textAdmin: {
            fontSize: 14,
            fontWeight: 'normal',
            color: colors.light,
            borderRadius: 10,
            padding: 5,
        },
  });

  export default styles;