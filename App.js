import { StatusBar } from 'expo-status-bar';
import { Card } from './components/card';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Recipes from './components/Recipes.js';
import Favorite from './components/Favorite.js';
import Shoplist from './components/Shoplist.js';
import Pantry from './components/Pantry.js';
import Profile from './components/Profile.js';
import { pageStyles } from './styles/styles.js';
import { useState } from 'react';

//testing more hello
// a comment from ankan, hello guys


export default function App() {

  const RECIPES = 0;
  const FAVORITE = 1;
  const SHOPLIST = 2;
  const PANTRY = 3;
  const PROFILE = 4;

  const [screen, setScreen] = useState(RECIPES);

  let view;

  const changePage = (pageName) => {
    setScreen(pageName);
  }

  switch (screen) {

    case RECIPES:
      view = <Recipes props1={{ name: "test", styles: pageStyles }} />
      break;

    case FAVORITE:
      view = <Favorite props1={{ name: "test", styles: pageStyles }} />
      break;

    case SHOPLIST:
      view = <Shoplist props1={{ name: "test", styles: pageStyles }} />
      break;

    case PANTRY:
      view = <Pantry props1={{ name: "test", styles: pageStyles }} />
      break;

    case PROFILE:
      view = <Profile props1={{ name: "test", styles: pageStyles }} />
      break;
  }

  return (

      <View style={styles.container}>
        
        <View style={styles.currentPage}>
            {view}
          </View>
          <View style={styles.navBar}>
            <Button title="Recipes" onPress={() => { changePage(RECIPES) }}></Button>
            <Button title="Favorite" onPress={() => { changePage(FAVORITE) }}></Button>
            <Button title="Shoplist" onPress={() => { changePage(SHOPLIST) }}></Button>
            <Button title="Pantry" onPress={() => { changePage(PANTRY) }}></Button>
            <Button title="Profile" onPress={() => { changePage(PROFILE) }}></Button>
          </View>

          <StatusBar hidden = {false} backgroundColor = "white" translucent = {false}/>
      </View>


  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentPage: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
  },
});
