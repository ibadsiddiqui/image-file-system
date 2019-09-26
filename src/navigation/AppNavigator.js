import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ViewFolderData from '../screens/ViewFolderData';
import ViewFolderInsideLvl1Screen from '../screens/ViewFolderInsideLvl1';
import MainTabNavigator from './MainTabNavigator';


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    ViewFolder: ViewFolderData,
    ViewFolderInsideLvl1: ViewFolderInsideLvl1Screen,
  })
);
