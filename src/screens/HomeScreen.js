import { Feather } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../redux/dispatchers';
import { TouchableOpacity } from 'react-native-gesture-handler';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.foldersList.data}
          keyExtractor={(item, idx) => idx}
          renderItem={({ item }) => {
            if (item.type === "folder")
              return (
                <View style={{
                  height: 75,
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderBottomColor: 'black',
                  paddingHorizontal: 50,
                  paddingVertical: 5,
                  marginVertical: 0
                }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewFolder', { item })}>
                    <Feather name="folder" size={20} />
                    <Text style={{ marginHorizontal: 25 }}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )
            else return (
              <View style={{
                height: 75,
                flexDirection: 'row',
                alignItems: 'flex-start',
                borderWidth: 1,
                borderColor: "transparent",
                borderBottomColor: 'black',
                paddingHorizontal: 50,
                paddingVertical: 5,
                marginVertical: 0
              }}>
                <View style={{ height: 50, width: 50 }}>
                  <Image source={{ uri: item.diskUri }} style={{ height: 60, width: 35 }} />
                </View>
                <Text style={{ marginHorizontal: 25 }}>{item.name}</Text>
              </View>
            )
          }
          }
        />
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
    paddingVertical: 100,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)