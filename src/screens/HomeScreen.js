import { Feather } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../redux/dispatchers';
import { TouchableOpacity } from 'react-native-gesture-handler';
class HomeScreen extends React.Component {
  moveFolderToLvl1(moveToFolderID: string, folderToMoveID: string) {
    this.props.moveFolderToLvl1({ moveToFolderID, folderToMoveID });
  }

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
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderBottomColor: 'black',
                  paddingHorizontal: 50,
                  paddingVertical: 5,
                  marginVertical: 0,
                }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewFolder', { item })} style={{ borderWidth: 1, alignItems: 'center', flexDirection: 'row' }}>
                    <Feather name="folder" size={20} />
                    <Text style={{ marginHorizontal: 25 }}>{item.name}</Text>
                  </TouchableOpacity>
                  <View style={{marginHorizontal:20,}}>
                    <Text>Move to folders</Text>
                    {
                      this.props.foldersList.data.filter(itm => item.id !== itm.id).map(_itm =>
                        <Text key={_itm.id} style={{ width: 50, height: 20, borderWidth: 1, marginVertical:5 }}
                          onPress={() => this.moveFolderToLvl1(_itm.id, item.id)}>
                          {_itm.name}
                        </Text>
                      )
                    }
                  </View>
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


// import React, { Component } from 'react';
// export default class HomeScreen extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       selected2: undefined
//     };
//   }
//   onValueChange2(value: string) {
//     this.setState({
//       selected2: value
//     });
//   }
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <Form>
//             <Item picker>
//               <Picker
//                 mode="dropdown"
//                 iosIcon={<Icon name="arrow-down" />}
//                 style={{ width: undefined }}
//                 placeholder="Select your SIM"
//                 placeholderStyle={{ color: "#bfc6ea" }}
//                 placeholderIconColor="#007aff"
//                 selectedValue={this.state.selected2}
//                 onValueChange={this.onValueChange2.bind(this)}
//               >
//                 <Picker.Item label="Wallet" value="key0" />
//                 <Picker.Item label="ATM Card" value="key1" />
//                 <Picker.Item label="Debit Card" value="key2" />
//                 <Picker.Item label="Credit Card" value="key3" />
//                 <Picker.Item label="Net Banking" value="key4" />
//               </Picker>
//             </Item>
//           </Form>
//         </Content>
//       </Container>
//     );
//   }
// }