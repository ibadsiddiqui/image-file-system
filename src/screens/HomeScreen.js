import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/dispatchers';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Feather name="folder" size={42} />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)