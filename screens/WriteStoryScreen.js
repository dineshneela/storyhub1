import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
export default class WriteStoryScreen extends React.Component {
    render(){
        return(
            <View>
                <Header
                backgroundColor={'black'}
                centerComponent={{
                  text: 'Monkey Chunky',
                  style: { color: '#fff', fontSize: 20 },
                }}
                
                />
               
          <View>
            
            <Text style={{ textAlign: "center", fontSize: 30 }}>Story hub</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="Story title"
              
            />
            
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="Author"
              
            />
           
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="write your story"
              />
            
          </View>
          
          <TouchableOpacity
          style={styles.goButton}>
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          
            </View>
        )
    }
}
const styles = StyleSheet.create({
  goButton:{},
  inputView:{}

})