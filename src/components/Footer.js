import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
  COLOR,
  ThemeContext,
  getTheme,
  BottomNavigation,
} from 'react-native-material-ui';

import BottomNavigationAction from 'react-native-material-ui/src/BottomNavigation/BottomNavigationAction.react';
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
    active: true,
  });

  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <BottomNavigation active={active} hidden={false}>
        <BottomNavigationAction
          label="List"
          iconName="home"
          isActive={navIndex === 0}
          onPress={() => setNavIndex({navIndex: 0})}
        />
        <BottomNavigationAction
          label="Map"
          iconName="home"
          isActive={navIndex === 1}
          onPress={() => setNavIndex({navIndex: 1})}
        />
        <BottomNavigationAction
          label="Add Deal"
          iconName="home"
          isActive={navIndex === 1}
          onPress={() => setNavIndex({navIndex: 1})}
        />
      </BottomNavigation>
    </ThemeContext.Provider>
  );
};

export default Footer;
