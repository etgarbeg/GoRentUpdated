

import { View, TextInput, Text, Button, Image, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';






const styles = StyleSheet.create({

    //overly
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.1)',

    },
    //containers
    containerCatagories: {
        flex: 0.6,
        width: '100%',
        overflow: 'hidden',


        //home 
        homeTitle: {
            fontSize: 150
        },
        hometitleContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }




    }, containerHome: {
        flex: 1,
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(200,200,200,0.9)',

    },

    container: {

        flex: 1,
        flexDirection: 'colum',

        justifyContent: 'center',
        backgroundColor: 'white',



    }

    , container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        width: 200,


    }, container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    container3Circle: {
        width: 50,

        paddingTop: 10,
        height: 50,
        justifyContent: 'center',
    },
    ShadowContainer: {
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: {
            width: 0.5,
            height: 1,
        }, shadowOpacity: 1,
        shadowRadius: 0.84,
        elevation: 3,
        borderRadius: 10,
    },



    containeCollectionRow: {
        margin: 0,
    },
    //catagories elments
    containerCatagoryBox: {
        width: 150,
        margin: 3,
        paddingTop: 70,
        flexDirection: 'colum',
        height: 160,
        justifyContent: 'center',

        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.1)'
        ,
        backgroundColor: 'white',
        borderWidth: 1,





    },






    //sections
    topSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topPostSec: {
        flexDirection: 'row',
        alignItems: 'center',
    }


    //grids


    //boxes





    ,


    //images
    imageCtagory: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150, height: 150,
        alignContent: 'center',
        resizeMode: 'contain',


    }
    ,

    image1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300, height: 300,
        marginVertical: 30,
    }
    , image2: {
        width: 150,
        height: 150,
        borderRadius: 30,

    },
    userImgProfSmall: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,


    }



    //backgrounds
    , imageBackground: {

        flex: 1



    },
    backgroundImageStyle: {
        opacity: 1,
        borderWidth: 1,
        borderRadius: 29,
    },



    //borders
    //images


    postImage: {
        resizeMode: 'cover',


    },

    squareImage: {

        width: 200,  // Adjust the width as needed
        height: 200, // Make the height the same as the width to create a square
         // Optional: Add borderRadius for rounded corners
        
    },
    itemContainer1:{
backgroundColor:'white',
padding:10,
borderRadius:30,




    },
    //icon
    heartIconContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
        height: 30,
        width: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
    },




    //buttons
    button2: {
        backgroundColor: '#4c4c4c', // white with 30% opacity
        padding: 10,
        borderRadius: 25,
        marginVertical: 10,
        minWidth: 200,
        alignItems: 'center',
        borderWidth: 1, // stroke of 2px
        borderColor: '#fff', // color white,
        position: 'absolute',
        left: 110,
        top: 460

    },
    button: {
        backgroundColor: '#4c4c4c', // white with 30% opacity
        padding: 10,
        borderRadius: 25,
        marginVertical: 10,
        minWidth: 200,
        alignItems: 'center',
        borderWidth: 1, // stroke of 2px
        borderColor: '#fff', // color white,
        position: 'absolute',
        left: 110,
        top: 520

    },
    TextWhite: {
        color: 'white',
        fontWeight: 700
    },


    editIcon: {
        resizeMode: 'cover',
        width: 20,
        height: 20
    },
    leftalign: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    //titles
    title1: {
        fontSize: 15, fontWeight: 300,
        alignSelf: 'center',

    },
    title2: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    title3: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    //paragraphs

    //opacity



    //colors



    //sizes






    serialNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ///misc
    line1: {

        alignItems: 'center',
        width: '50%',

    }
    ,
    line1Section: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '35%',
        width: '30%',
        flex: 0.009,
        marginVertical: 30,

        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor: 'rgba(0,0,0,0.0)',

        margin: 5,
        border: 1,
        borderWidth: 1,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 2,
        }, shadowOpacity: 1,
        shadowRadius: 1.84,
        elevation: 15,
        borderRadius: 20,

    },


    //tab container
    Tabcontainerbig: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
    tabContainer: {
        width: '70%',
        height: 50,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',

    },











    //explore


    containerHome: {
        flex: 1,
        paddingLeft: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',

    },
    searchBar: {

        marginBottom: 10,
    },
    textExploreLine: {

        fontSize: 30,
        marginBottom: 10,
    },

    categoriesContainer: {

        marginBottom: 10,

    },
    textExploreTtitle: {

        fontSize: 30,
        marginBottom: 10,
    },
    allFavor: {
        flex: 1,

    },
    container2: {
        flex: 1,
        justifyContent: 'center',

    }, filterOptionsContainer: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '30%',
        top: 50, // Adjust the top position to position the square as desired
        right: 10, // Adjust the right position to position the square as desired
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#ccc',
        borderRadius: 25,
        padding: 10,
        zIndex: 2,
        elevation: 5, zIndex: 9999
    },
    filterOption: {
        paddingVertical: 10,
        paddingHorizontal: 15,

    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10,
    },
    iconContainer: {
        margin: 10,
        padding: 5, // Adjust the padding as needed
        borderRadius: 20, // Make it half of the desired circle size
        backgroundColor: 'white', // Set the background color to match your container's background
        borderWidth: 1, // Border width
        borderColor: 'grey', // Border color
    }

    ,
    editDeleteButtonsContainer: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: -25,


    },
    editDeleteButton: {
        padding: 10,
        borderRadius: 5,
        marginLeft: 25,
        borderWidth: 1,
        borderRadius: 50,
    },
    //PostBox
    container4: {
        margin: 3,
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 30,
        padding: 20,

        backgroundColor: 'white'
    },
    container5: {
        marginTop: 10,

        paddingBottom: 0, flexDirection: 'colum',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    distanceText: {
        fontSize: 10,
        color: 'rgba(1,1,1,0.4)',
    },
    topPostSec: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '15%',


    },
    container3Circle: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'white',

    },
    usernameTitle: {
        marginLeft: -115,
        fontWeight: 500,

    },
    heartIconContainer: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(1,1,1,0.1)',
        overflow: 'hidden',
        borderRadius: 30,





    },
    imageBanner: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'

    },
    lineBanner: {
        width: '100%',

        flex: 0.25, overflow: 'hidden',
        borderRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomEndRadius: 0,

        marginVertical: 20,
        marginTop: -50,


    }, imageBanner2: {
        width: '130%',
        height: '130%',
        resizeMode: 'cover'

    },
    lineBanner2: {
        width: '50%',

        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',

        overflow: 'hidden',

        borderRadius: 20,
        marginVertical: 10,



    },
    CatalogTitle: {
        fontSize: 24,
        fontWeight: 700,
        marginLeft: 20
    }
    ,
    sectionContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 30

    },
    titlePost: {
        fontSize: 12,
        alignContent: 'flex-start',
        marginBottom: 5,
    },
    categorySmall: {
        fontSize: 12,
        alignContent: 'flex-start',
        marginBottom: 5,
        color: 'rgba(0,0,0,0.4)'
    },
    postImage: {

        width: '100%',
        height: '100%',
        resizeMode: 'cover',


    },
    bottomSection: {
        backgroundColor: 'white',
        borderRadius: 500,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(1,1,1,0.2)'
        ,
    },
    rentText: {
        color: 'rgba(1,1,1,0.3)',
        fontSize: 14,
        fontWeight: 'light',
    }, conatinerBoxRowB: {
        flexDirection
            : 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10
    }
    ///search bar

    ,
    containerSearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Aligns the content horizontally in the center
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        zIndex: 9999,

        margin: 20,
        width: '90%', shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 1,
            height: 1,
        }, shadowOpacity: 1,
        shadowRadius: 1.84,
        elevation: 5,
        borderRadius: 20,

    },
    inputSearchBar: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
    },
    searchIcon: {
        marginLeft: 10,
    },
    filterButton: {
        marginLeft: 10,
    },
    myFavoritesContainer: {
        flex: 1,
        justifyContent: 'center',

    },
    topTitleFavor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

        marginBottom: 20,

    }, seeAllButton: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderRadius: 15,
        borderColor: 'rgba(1,1,1,0.2)',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,


    },
    seeAllButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'regular',

    },

    textExploreTitle: {

        color: 'rgba(1,1,1,0.9)',
        fontSize: 30,
        marginLeft: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        fontWeight: 'regular',

    },
    containerAllFavor: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'

    }
    ,
    ///profile

    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#000',
        marginBottom: 10,

    },

    backgroundImage: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    profilePictureContainer: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignSelf: 'center',
        marginTop: 50, marginBottom: 20,
    },


    itemBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    itemBox: {
        width: '23%',
        height: 80,
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: 'center',
        justifyContent: 'center', border: 1, borderRadius: 10,
    },

    userDetailsSection: {
        marginHorizontal: 20,
        marginTop: 30, backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 10, borderRadius: 10,
    },
    userDetailsText: {
        fontSize: 16,
        marginBottom: 10,
        color: 'grey'
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },
    actionButton: {
        width: '48%',
        height: 120,
        alignItems: 'left',
        justifyContent: 'flex-start', padding: 10, borderRadius: 10,
        backgroundColor: 'white'
    },
    actionButtonWide: {

        height: 30,
        width: 30,
        paddingRight: 5,
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center', padding: 10, borderRadius: 50,

    },
    buttomMyRequest: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 15,


    },

    actionButtonText: {
        fontSize: 20,
        fontWeight: 600,


    },


    Imagsbox: {
        resizeMode: 'cover',
        height: 84, width: 140

    }

    , ImagsboxCheck: {
        resizeMode: 'cover',
        height: 30, width: 30

    }


    //loginnnn

    , containerLogin: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageBackgroundLogin: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleLogin: {
        fontSize: 20,
        color: '#555',
        marginBottom: 30,
    },
    imageLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
      
        top: 50,
        left: 50,
        height: 300,

    },
    formSectionLogin: {




        flex: 1,

        width: '100%',
        padding: 20,
        marginTop: -90,

        alignItems: 'center',
    },
    inputContainerLogin: {
        marginBottom: 20,

        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 30,
        width: '70%',
        backgroundColor: 'white'
    },
    inputLabelLogin: {
        fontSize: 16,
        marginBottom: 5,
        color: '#000',
    },
    inputLogin: {

        padding: 10,
        fontSize: 16,
    },
    buttonLogin: {
        backgroundColor: '#4c4c4c', // white with 30% opacity
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
        minWidth: 150,
        alignItems: 'center',
        borderWidth: 1, // stroke of 2px
        borderColor: '#555', // color white

    },
    buttonTextLogin: {
        fontSize: 20,
        color: 'white',
    },


    twoOptionsTxt: {
        textDecorationLine: 'underline',
    },

    twoOptions: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        , marginTop: 150,

    },

    //Register

    containerRegister: {
        flex: 1,
    },
    imageBackgroundRegister: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleRegister: {
        fontSize: 20,
        color: '#555',
        marginBottom: 30,
    },
    imageRegister: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
      
        top: 0,
        left: 100,
        height: 200,

    },
    formSectionRegister: {




        flex: 1,

        width: '100%',
        padding: 10,
        marginTop: -90,

        alignItems: 'center',
    },
    inputContainerRegister: {
        marginBottom: 20,

        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 30,
        width: '70%',
        backgroundColor: 'white'
    }, inputContainerRegisterCityPIckerIn: {
        marginBottom: 0,



        borderRadius: 0,
        width: '70%',


        height: 100,
        backgroundColor: 'transparent'
    }

    , inputContainerRegisterCityPIcker: {
        marginBottom: 0,

        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50,
        marginBottom: 0,
        paddingLeft: 10,
        paddingHorizontal: 30,
        justifyContent: 'center',
        width: '70%',
        height: 40,

        backgroundColor: 'white'
    }


    , pickerOption: {

        height: 30,
        backgroundColor: 'white',
        border: 1,

        alignItems: 'center'
    },
    flatlistCities:
    {
        marginTop: -13,

        borderRadius: 0,
        borderBottomEndRadius: 50,
        borderBottomLeftRadius: 50
    },


    inputLabelRegister: {
        fontSize: 16,
        marginBottom: 5,
        color: '#000',
    },
    inputRegister: {

        padding: 10,
        fontSize: 16,
    },
    buttonRegister: {
        backgroundColor: '#4c4c4c', // white with 30% opacity
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
        minWidth: 150,

        alignItems: 'center',
        borderWidth: 1, // stroke of 2px
        borderColor: '#555', // color white

    },
    buttonTextRegister: {
        fontSize: 20,
        color: 'white',
    },
    ErrorTxt: {
        color: "red",
        opacity: 0.8
    },
    //inbox

    profilePictureContainerInbox1: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignSelf: 'center',
        marginTop: 50, marginBottom: 20,

    },

    containerInbox: {
        flex: 1,
        backgroundColor: '#FFF',

    },
    InboxTitle: {
        fontSize: 20,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#000',


    },

    backgroundImageInbox: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    profilePictureContainerInbox: {
        width: 40,
        height: 40,
        marginRight: 20,
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignSelf: 'center',


        marginLeft: 10
    },
    MainSectionInbox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        marginTop: 0,


    },


    itemBoxContainerInbox: {
        flexDirection: 'colum',
        justifyContent: 'center',
        marginHorizontal: 20,

        marginTop: 10,
    },
    itemBoxInbox: {
        width: '70%',
        marginRight: 20,
        height: 100,
        marginTop: 5,
        flexDirection: 'colum',
        justifyContent: 'center',
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.0)',
        alignItems: 'left',
        backgroundColor: 'rgba(0,0,0,0.05)',
        border: 1, borderRadius: 10, paddingLeft: 20, TextAlign: 'center',
    },
    usernameTitleInbox: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        alignItems: 'center',
    }
    ,
    useMessegeContainerInbox: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    },
    newMessageTextInbox: {
        fontSize: 12,
        color: '#ddd', alignSelf: 'center'

    },
    actionButton3Inbox: {
        width: '30%',
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        justifyContent: 'center', padding: 1, borderRadius: 10,
    }


    , ChatSectionInbox: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // white with 30% opacity

        borderColor: '#333',
        flex: 1,
        marginTop: 30,
        width: '100%',
        padding: 20,


        alignItems: 'center',
    }
    , messengeTextInbox: {
        fontSize: 12,
        color: '#111'
        ,
        paddingTop: 20,
    },
    SearchSectionInbox:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 50,
    },
    //fullCatalog

    containeCollectionColum: {

        height: '100%',

    }, itemContainer: {
        flex: 1,
        height: '100%',
        width: '100%', // Each item should take half of the available width
        paddingHorizontal: 0, // Adjust horizontal spacing as needed
        flexDirection: 'colum',
        justifyContent: 'center',

        alignItems: 'center'

    }, containerCatallog: {
        alignItems: 'center'
    },
    //singleItemScreen
    conatinerInner1Item: {
        width: '90%',
        height: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 40,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)'
    },

    container6: {
        alignItems: 'center',
        flexDirection: 'row',

        width: 400,
        justifyContent: 'space-evenly'
    },


    SingleImageProductScreenItem: {
        width: '80%',
        height: '50%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        resizeMode: 'cover'
    },
    containerItem: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.0)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleItem: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 0,
        color: '#333',
    },
    itemInfoItem: {
        flexDirection: 'colum',
        marginBottom: 10,
        marginTop: 10,
        width: '80%'
    },
    labelItem: {
        fontSize: 14,
        marginRight: 10,
        color: '#999',

    },
    valueItem: {
        fontSize: 14,
        marginLeft: 8,
        color: '#111',
    },
    singleLines: {
        color: 'rgba(0,0,0,0.2)',
        marginBottom: 15
    },
    rentButtonItem: {
        backgroundColor: '#4c4c4c',
        paddingHorizontal: 90,
        paddingVertical: 10,
        borderRadius: 50,
        marginTop: 20,
    },
    rentButtonTextItem: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },


    rentButtonItemClicked: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
        marginTop: 20,
        alignItems: 'center',
        width: 230
    },
    rentButtonTextItemClicked: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },

    reviewButtonItemClicked: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
        marginTop: 20,
        marginLeft: -240
    },
    ///reset password screen 

    conatiner7: {
        flex: 1,

        margin: 10,
        borderWidth: 0,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 25,
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    button7: {
        backgroundColor: '#4c4c4c', // white with 30% opacity
        padding: 10,
        borderRadius: 25,
        marginTop: 50,
        marginBottom: 10,
        minWidth: 200,
        alignItems: 'center',
        borderWidth: 1, // stroke of 2px
        borderColor: '#fff', // color white,



    },
    buttonText7: {
        color: 'white'
    },
    red: {
        color: 'red'
    },
    input7: {

        padding: 10,
        fontSize: 16,
    }, txt7: {
        padding: 10,
        marginTop: 20,
        textAlign: 'center'

    }
    ,

    //single chat

    containerOneMess: {
        flex: 1,

        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 5,
        margin: 10,
        padding: 10,

        backgroundColor: 'white'
    },
    messageContainer: {

        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        padding: 15
        ,
        marginVertical: 15,
        borderRadius: 10
    },
    user1Message: {
        textAlign: 'left'
        ,
    }
    , user2Message: {
        textAlign: 'right',
        backgroundColor: 'rgba(0,0,0,0.2)',

    }
    ,
    messageInputContainer: {
        flex: 0.5,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 20
    },
    sendButton: {
        border: 1,
        padding: 20,
        backgroundColor: 'grey',
        width: '30%',
        borderRadius: 20,
        textAlign: 'center', textAlign: 'center'
    },
    messageInput: {
        padding: 20,
        borderWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.2)',
        borderColor: 'transparent'

    },
    sendButtonText: {
        textAlign: 'center',
        color: 'white'
    },
    titlee: {
        textAlign: 'center', marginTop: -10,
        fontSize: 12
    },
    titleee: {
        position: 'absolute',
        top: 50,
        textAlign: 'center', marginTop: 10,
        fontSize: 15,

    },
    containerEditProfile: {
        flex: 1,
        backgroundColor: '#F8F8F8', // Light grey background color
        padding: 20,
    },
    formSectionEditProfile: {
        flex: 1,
        justifyContent: 'center',
    },
    inputEditProfile: {
        height: 40,
        borderColor: '#DDD', // Light grey border color
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 30, // Rounded corners
        backgroundColor: '#FFF', // White background color
    },
    buttonEditProfile: {
        backgroundColor: '#4c4c4c',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    buttonTextEditProfile: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttomMyRequest: {
        width: '90%',
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around', padding: 10, borderRadius: 10,

        marginLeft: 20, flexDirection: 'row',



    },

    actionButtonText: {
        // Styles for the text
    },
    notificationLogoGreen: {
        width: 10, // Adjust the width
        height: 10, // Adjust the height
        backgroundColor: 'rgba(200, 200, 200, 1)',
        marginRight: 5, // Adjust spacing
        borderRadius: 5, // Adjust border radius for a circular shape
    },
    notificationLogoGrey: {
        width: 10, // Adjust the width
        height: 10, // Adjust the height
        backgroundColor: 'grey', // Grey color for notification when there are no requests
        marginRight: 5, // Adjust spacing
        borderRadius: 5, // Adjust border radius for a circular shape
    },
    categoryproductContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    categoryproductTitle: {
        fontSize: 24,
        marginTop: 50,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    categoryproductSectionContainer: {
        flexDirection: 'row',
    },
    categoryproductItemContainer: {
        marginRight: 8,
    },
    topSecSearch: {
        marginTop: 20
    }, containerTop: {
        marginTop: 30

    }, containerEditProduct: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formSectionEditProduct: {
        width: '80%',
    },
    titleee: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left',
    },
    inputEditProduct: {
        height: 40,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
    buttonEditProduct: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonTextEditProduct: {
        color: 'white',
    },
    buttonUploadText: { padding: 10 },
    buttonUpload: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        width: '40%',
        borderRadius: 30,
        height: 30,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 12,
        marginBottom: 15


    }
    ,
    buttonUploadText: {
        color: 'grey'
    },
    bannerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    banner: {
        backgroundColor: '#3498db', // Adjust the background color as needed
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 5, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    bannerText: {
        color: '#fff', // Adjust the text color as needed
        fontSize: 24,
        fontWeight: 'bold',
    },
    noItemsMessage: {
        width: '150%',
        height: 300,
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 90
    },
    requestedItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 40,
        
        elevation: 2, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 }, // For iOS shadow
        shadowOpacity: 0.2, // For iOS shadow
    },

    requestedItemText: {
        fontSize: 16,
        color: '#333',
    },

    requestedItemButtonsContainer: {
        flexDirection: 'row',
    },

    requestedConfirmButton: {
        backgroundColor: 'green',
        padding: 5,
        marginHorizontal: 5,
    },

    requestedDeclineButton: {
        backgroundColor: 'red',
        padding: 5,
        marginHorizontal: 5,
    },

    requestedButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    requestedNoItemsText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: 'gray',
    },
    actionButtonwide: {
        width: '98%',
        height: 80,

        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'space-between', padding: 10, borderRadius: 10,
        backgroundColor: 'white'
    }, actionButtonTextWide: {
        paddingRight: 0,
        fontSize: 30
    }
    , userText: {
        fontSize: 20,
    }
    , useMessageContainerInbox: {
        width: '100%',
        flexDirection: 'row'
    }, containerCollectionRow: {
        flexDirection: 'row'
    },
    containerInbox: {
        flex: 1,
        marginTop: 60,
        borderRadius: 30,
        padding: 0,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'transparent'
    },
    chatContainer: {
        paddingHorizontal: 20,
        paddingVertical: 40,

    },
    messageContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        width: '100%',

        overflow: 'hidden'


    },
    wideButton: {
        backgroundColor: 'grey',
        padding: 5,
        borderRadius: 30,
        alignItems: 'center',

    },
    wideButtonText: {
        color: 'white'
    },



    senderImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    messageContent: {
        flex: 1,


    },
    senderName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timestempMessege: {
        fontSize: 10,
    },
    timestampText: {
        fontSize: 10,
        color: 'grey'
    },

    messageText: {
        fontSize: 14,
        alignItems: 'center'
        , margin: 10,
        padding: 10,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
        borderRadius: 20,
        color: 'rgba(0,0,0,0.7)'



    },
    messageTextInbox: {
        fontSize: 14,
        alignItems: 'center'
        , marginTop: 10,
        color: 'rgba(0,0,0,0.5)',
        overflow: 'hidden'
    },

    productText: {
        fontWeight: 'bold',
        color: 'black',
    },
    messageInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        marginBottom: 50
    },
    messageInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 12,
        marginRight: 12,
    },
    sendMessageButton: {
        backgroundColor: 'grey',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    sendMessageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    productRequestButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 8, // Adjust as needed
    },

    acceptButton: {
        backgroundColor: '#E0E0E0', // Grey color
        padding: 8,
        borderRadius: 8,
        marginRight: 8, // Adjust spacing as needed
    },

    declineButton: {
        backgroundColor: '#E0E0E0', // Grey color
        padding: 8,
        borderRadius: 8,
    },

    buttonText: {
        color: '#424242', // Dark grey color
        fontWeight: 'bold', // Adjust as needed
    },
    requestedListContainer: {
        flex: 1,
        padding: 20,
        marginTop: 40,
        marginHorizontal: 20,

    },
    requestedListTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    requestedItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 30,

    },
    requestedItemDetailsText: {
        fontSize: 15
    },

    requestedItemDetails: {
        flex: 1,
        marginRight: 10,
    },
    requestedItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    requestedItemText: {
        fontSize: 14,
        marginBottom: 3,
    },
    requestedItemButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    requestedItemButton: {
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    acceptButton: {
        backgroundColor: 'green',
    },
    cancelButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: 'white',
    },
    noItemsText: {
        fontSize: 16,
        textAlign: 'center',
    },
    containerInbox: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePicture: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 25,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    actionButtonsContainerMas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    actionButtonMas: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    actionButtonTextMas: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    messageContainerMas: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    messageContentMas: {
        flex: 1,
        marginLeft: 10,
    },
    usernameMas: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    timestampMas: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5,
    },
    messageTextMas: {
        fontSize: 14,
        color: '#333',
    },
    productTextMas: {
        fontWeight: 'bold',
    },
    
}
);
























export default styles;
