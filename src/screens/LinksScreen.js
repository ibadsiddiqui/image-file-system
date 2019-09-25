import React from 'react';
import { ScrollView, StyleSheet, TextInput, Dimensions, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/dispatchers';
// import { ExpoLinksView } from '@expo/samples';

class LinksScreen extends React.Component {
  addRootFolder = () => {
    this.props.addFolder({ name: "/root", type: "folder", data: [] })
  }
  render() {
    return (
      <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: "center" }}>
        <View style={{ alignSelf: 'center', width: Dimensions.get('window').width * 0.5, height: 50 }}>
          <TextInput placeholder="Enter Folder Name Here"
            onChangeText={this.props.setFolderName}
          />
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Button onPress={this.addRootFolder} title="Add Folder" />
        </View>
      </View>
    );
  }
}


LinksScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen)