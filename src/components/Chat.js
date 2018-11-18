import React from 'react';
import PropTypes from 'prop-types';
//import {Text} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
//import Backend from '../Backend'; 

class Chat extends React.Component {
    state= {
        messages: []
    };

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                   // Backend.sendMessage(message);
                }}
                user={{
                    _id: 2,//Backend.getUid(),
                    name: this.props.username,
                }}
            />
        );
    }
     /*componentDidMount() {
        Backend.loadMessages((message) => {
          this.setState((previousState) => {
            return {
              messages: GiftedChat.append(previousState.messages, message),
            };
          });
        });
    }
     componentWillUnmount() {
        Backend.closeChat();
      }  
      */
}

Chat.defaultProps = {
    username: 'John'
};

Chat.propTypes = {
    username: PropTypes.string
};

export default Chat;