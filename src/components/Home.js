import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class Home extends React.Component {
    state = {
        username: ''
    };
    render() {
        return(
            <View>
                <Text style={styles.title}>
                    Enter Your Name :
                </Text>
                <TextInput
                 style={styles.nameInput}
                 onChangeText={(text) => {
                     this.setState({
                        username: text
                     });
                 }}
                 value={this.state.username}
                />
                <TouchableOpacity
                  onPress={() => {
                    Actions.chat({
                        username: this.state.username
                    });
                  }}
                >
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 25
    },
    nameInput:{
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    }
});

export default Home;