import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Container, Content } from 'native-base'

import Concerts from '../Components/Concerts';
import ConcertDetail from '../Components/ConcertDetail';
import Home from '../Components/Home';
import Music from '../Components/Music';
import MusiqueDetail from '../Components/MusiqueDetail'
import Merchandising from '../Components/Merchandising';
import Newsletter from '../Components/Newsletter';
import News from '../Components/News';
import About from '../Components/About';
import DrawerTrigger from '../Components/DrawerTrigger';
import VideoClips from '../Components/videoclips';
import Clip from '../Components/clip';

// DRAWER CONFIGURATION

const CustomDrawerContentComponent = (props) => (
  <Container style={styles.container}>
      <Image
          style={styles.drawerImage}
          source={require('../Images/fuzzanddrumsimageulule.png')}/>
    <Content style={styles.content}>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  
  drawerImage: {
    flex: 0.4,
    resizeMode: 'stretch',
    height: undefined,
    width: undefined
  },

  content: {
    backgroundColor: 'black'
  }
})

//////////////////////////////// LES STACKNAVIGATORS

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        title: 'Home',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }}
  })


const ConcertsStack = createStackNavigator({
  Concert: {
    screen: Concerts,
    navigationOptions: {
        title: 'Concerts',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
    ConcertDetail: {
      screen: ConcertDetail,
      navigationOptions: {
          title: 'Concerts Détails',
          headerRight: () => <DrawerTrigger/>,
          headerTitleStyle: {
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold'
         },
         headerStyle: {
          backgroundColor: 'black',
         },
         headerTintColor: {
            color: 'red'
         }
      }},
  })

const MusicStack = createStackNavigator({
  Music: {
    screen: Music,
    navigationOptions: {
        title: 'Musique',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
  MusiqueDetail: {
    screen: MusiqueDetail,
        navigationOptions: {
        title: '',
        headerRight: () => <DrawerTrigger/>,
        headerTintColor: 'red',
        headerTitleStyle: {
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold'
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }},
})

const VideosStack = createStackNavigator({
  VideoClips: {
    screen: VideoClips,
    navigationOptions: {
      title: 'Videos',
      headerRight: () => <DrawerTrigger/>,
      headerTitleStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
     },
     headerStyle: {
      backgroundColor: 'black',
     },
     headerTintColor: {
        color: 'red'
     }
    }},
    Clip: {
    screen: Clip,
    navigationOptions: {
      title: 'Clip',
      headerRight: () => <DrawerTrigger/>,
      headerTitleStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
     },
     headerStyle: {
      backgroundColor: 'black',
     },
     headerTintColor: {
        color: 'red'
     }
    }
  }
})

const MerchandisingStack = createStackNavigator({
  Merch: {
    screen: Merchandising,
    navigationOptions: {
        title: 'Merch',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
  })

const NewsletterStack = createStackNavigator({
  Newsletter: {
    screen: Newsletter,
    navigationOptions: {
        title: 'Newsletter',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
  })

const AboutStack = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: {
        title: 'About',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold'
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }},
  })

  const NewsStack = createStackNavigator({
    News: {
      screen: News,
      navigationOptions: {
          title: 'News',
          headerRight: () => <DrawerTrigger/>,
          headerTitleStyle: {
            color: 'white'
         },
         headerStyle: {
          backgroundColor: 'black',
         }
      }},
    })

//////////////////////////////// DRAWERNAGIVATOR

const DrawerNavigator = createDrawerNavigator(

  {
    One: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Home',
        drawerIcon:(
          <Image source={require('../Images/icon/hand.png')}
          style={ {height:24, width:24}}/>
        )
      }},
    Two: {    
      screen: ConcertsStack,
      navigationOptions: {
      title: 'Concerts',
      drawerIcon:(
        <Image source={require('../Images/icon/concert.png')}
        style={ {height:30, width:30}}/>
      )
    }},
    Three: {    
      screen: MusicStack,
      navigationOptions: {
      title: 'Music',
      drawerIcon:(
        <Image source={require('../Images/icon/audio.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Four: {    
      screen: VideosStack,
      navigationOptions: {
      title: 'Videos',
      drawerIcon:(
        <Image source={require('../Images/icon/video.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Five: {    
      screen: MerchandisingStack,
      navigationOptions: {
      title: 'Merch',
      drawerIcon:(
        <Image source={require('../Images/icon/shirt.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Six: {    
      screen: NewsletterStack,
      navigationOptions: {
      title: 'Newsletter',
      drawerIcon:(
        <Image source={require('../Images/icon/newsletter.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Seven: {    
      screen: AboutStack,
      navigationOptions: {
      title: 'About',
      drawerIcon:(
        <Image source={require('../Images/icon/About.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Eight: {    
      screen: NewsStack,
      navigationOptions: {
      title: 'News',
      drawerIcon:(
        <Image source={require('../Images/icon/newspaper.png')}
        style={ {height:24, width:24}}/>
      )
    }}
  },

  {
    contentOptions: {
      inactiveTintColor: 'white',
      activeTintColor: 'red',
      activeBackgroundColor:'#1B1B1B',
      labelStyle: {
        fontSize:18,
        fontWeight:'bold'
      },
      iconContainerStyle: {
        opacity: 1
      }
    },

    drawerPosition: "right",
    drawerBackgroundColor: "black",
    initialRouteName: 'One',
    backBehavior: 'history',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

  }
);

const App = createSwitchNavigator({
  Main: DrawerNavigator
});

export default createAppContainer(App);
