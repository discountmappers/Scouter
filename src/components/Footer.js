import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  COLOR,
  ThemeContext,
  getTheme,
  withTheme,
  ListItem,
  BottomNavigation,
  Button, BottomNavigationAction
} from 'react-native-material-ui';
import light from 'react-native-material-ui/src/styles/themes/light';

const uiTheme = {
  ...light,
  palette: {
    ...light.palette,
    accentColor: COLOR.amber900,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
};

const Footer = () => {
    const [active, navIndex, setNavIndex] = useState({
        navIndex: 0,
        active: true
    })
      return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <BottomNavigation active={active} hidden={false}>
            <BottomNavigationAction
              label="Home"
              iconName="home"
              isActive={navIndex === 0}
              onPress={() => this.setNavIndex({navIndex: 0})}
            />
          </BottomNavigation>
        </ThemeContext.Provider>
      );
};

export default Footer;
