import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Alert, Button, Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import uuidV4 from 'uuid/v4';
import { mapDispatchToProps, mapStateToProps } from '../redux/dispatchers';

class LinksScreen extends React.Component {
  addRootFolder = () => {
    const { folderName } = this.props
    this.props.addFolder({ name: folderName, path: '/' + folderName, type: "folder", data: [], id: uuidV4() })
  }

  FromGallery = async () => {
    const response = await ImagePicker.launchImageLibraryAsync({ allowsEditing: true, mediaTypes: ImagePicker.MediaTypeOptions.Images })
    let imageName = response.uri.slice(response.uri.lastIndexOf("/") + 1)
    this.props.addImageToRoot({ id: uuidV4(), name: imageName, path: '/' + imageName, diskUri: response.uri, type: "image", })
  }


  FromCamera = async () => {
    const response = await ImagePicker.launchCameraAsync({ allowsEditing: true, mediaTypes: ImagePicker.MediaTypeOptions.Images })
    let imageName = response.uri.slice(response.uri.lastIndexOf("/") + 1)
    this.props.addImageToRoot({ id: uuidV4(), name: imageName, path: '/' + imageName, diskUri: response.uri, type: "image", })
  }

  addImageToRoot = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Open Gallery',
          onPress: this.FromGallery
        },
        {
          text: 'Open Camera',
          onPress: this.FromCamera,
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
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
        <View style={{ alignSelf: 'center' }}>
          <Button onPress={this.addImageToRoot} title="Add Image" />
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