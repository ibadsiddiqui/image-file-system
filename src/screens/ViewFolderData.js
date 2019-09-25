import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button, FlatList, Image, View, BackHandler, Text } from 'react-native';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../redux/dispatchers';
import uuidV4 from 'uuid/v4'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
class ViewFolderData extends React.Component {

    componentDidMount() {
        this.BackHandler = BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate('Main'))
    }
    componentWillUnmount() {
        this.BackHandler.remove()
    }

    addImageToCurrentFolder = async () => {
        const response = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images })
        const folderDetails = this.props.navigation.getParam("item")
        this.props.addImageToFolder({
            folderID: folderDetails.id,
            imageData: {
                id: uuidV4(), name: response.uri, path: '/' + folderDetails.id + "/" + response.uri.replace(" ", "_"),
                diskUri: response.uri, type: "image",
            }
        })
    }

    render() {
        const folderID = this.props.navigation.getParam("item").id
        const dataToRender = this.props.foldersList.data.find(item => item.id === folderID).data
        console.log(dataToRender);

        return (
            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: "center" }}>
                {
                    dataToRender.length !== 0 &&
                    <FlatList style={{ width: 200, height: 100, borderWidth: 1, paddingTop: 100, felx: 1 }}
                        data={dataToRender}
                        keyExtractor={(itm, idx) => itm.id}
                        renderItem={(item) =>
                            item.item.type === "folder" ?
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewFolder', { item })}
                                    style={{ borderWidth: 1, alignItems: 'center', flexDirection: 'row' }}>
                                    <Feather name="folder" size={20} />
                                    <Text style={{ marginHorizontal: 25 }}>{item.item.name}</Text>
                                </TouchableOpacity>
                                :
                                <View style={{ justifyContent: 'center', width: 100, height: 100, borderWidth: 1 }}>
                                    <Image source={{ uri: item.item.diskUri }} style={{ width: 50, height: 75 }} />
                                </View>

                        }
                    />
                }
                <View style={{ alignSelf: 'center' }}>
                    <Button onPress={this.addImageToCurrentFolder} title="Add Images" />
                </View>
            </View>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewFolderData)