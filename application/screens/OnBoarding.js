// OnboardingScreen.js
import React from 'react';
import { Image, Text, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Button } from 'react-native';
const OnBoardingScreen = ({ navigation }) => { // Add onComplete as a prop



    return (
        <Onboarding
            onSkip={() => navigation.replace('Home')}
            onDone={() => navigation.navigate('Home')}



            pages={
                [{

                    backgroundColor: 'white',
                    title: (
                        <Text style={{ fontSize: 35, fontWeight: 'bold', textAlign: 'center', width: 300, position: 'absolute', top: 180, color: 'rgba(0,0,0,0.8)' }}>
                            Join our
                            community
                        </Text>
                    ),
                    subtitle: (
                        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', width: 300, position: 'absolute', top: 230, color: 'rgba(0,0,0,0.8)' }}>

                          
                        </Text>

                    ),


                    image: (
                        <Image
                            style={{ resizeMode: 'cover', height: 300, width: 300, position: 'absolute', top: -80 }}
                            source={require('../assets/images/onboarding/one.png')}
                        />
                    ),
                },

                {


                    backgroundColor: 'white',
                    image: (
                        <Image
                            style={{ resizeMode: 'contain', height: 100, width: 100, position: 'absolute', top: -200 }}
                            source={require('../assets/images/onboarding/logo.png')}
                        />
                    ),
                    title: (
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 600, color: 'rgba(0,0,0,0.7)', flex: 0.1, position: 'absolute', top: 300 }}>
                            Revolutionizing Consumption
                        </Text>
                    ),
                    subtitle: (
                        <Text style={{ fontSize: 20, textAlign: 'center', color: 'rgba(0,0,0,0.7)', position: 'absolute', top: 350, textAlign: 'left', paddingLeft: '8%', width: '80%' }}>
                            GoRent revolutionizes consumption by enabling convenient rentals through your mobile device.


                        </Text>
                    ),



                },
                {

                    backgroundColor: 'white',
                    title: (
                        <Text style={{ fontSize: 35, fontWeight: 'bold', textAlign: 'center', width: 300, position: 'absolute', top: 180, color: 'rgba(0,0,0,0.8)' }}>
                            Embrace

                        </Text>

                    ),
                    subtitle: (
                        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', width: 300, position: 'absolute', top: 230, color: 'rgba(0,0,0,0.8)' }}>

                            sharing economy
                        </Text>

                    ),


                    image: (
                        <Image
                            style={{ resizeMode: 'cover', height: 300, width: 300, position: 'absolute', top: -80 }}
                            source={require('../assets/images/onboarding/two.png')}
                        />
                    ),

                },

                {


                    backgroundColor: 'white',
                    image: (
                        <Image
                            style={{ resizeMode: 'contain', height: 100, width: 100, position: 'absolute', top: -200 }}
                            source={require('../assets/images/onboarding/logo.png')}
                        />
                    ),
                    title: (
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 600, color: 'rgba(0,0,0,0.7)', flex: 0.1, position: 'absolute', top: 300 }}>
                            Revolutionizing Consumption
                        </Text>
                    ),
                    subtitle: (
                        <Text style={{ fontSize: 20, textAlign: 'center', color: 'rgba(0,0,0,0.7)', position: 'absolute', top: 350, textAlign: 'left', paddingLeft: '8%', width: '80%' }}>
                            Access a variety of items conveniently and contribute to a sustainable community with GoRent.



                        </Text>
                    ),



                },
                {

                    backgroundColor: 'white',
                    title: (
                        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', width: 400, position: 'absolute', top: 180, color: 'rgba(0,0,0,0.8)' }}>
                            Rent, Share, Repeat

                        </Text>

                    ),
                    subtitle: (
                        <Text style={{ fontSize: 35, fontWeight: 'bold', textAlign: 'center', width: 300, position: 'absolute', top: 230, color: 'rgba(0,0,0,0.8)' }}>

                            Together                        </Text>

                    ),


                    image: (
                        <Image
                            style={{ resizeMode: 'cover', height: 300, width: 300, position: 'absolute', top: -80 }}
                            source={require('../assets/images/onboarding/three.png')}
                        />
                    ),

                },





                ]}

        />)
};



export default OnBoardingScreen;
