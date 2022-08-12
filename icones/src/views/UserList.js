import { ListItem, Avatar, Button } from '@rneui/themed'
import { FlatList } from 'react-native-gesture-handler'
import { View } from 'react-native'
import React from 'react'
import users from '../data/users'
//import { Icon } from '@rneui/themed'
//import { Icon } from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert } from 'react-native';

keyExtractor = ( user ) => user.id.toString()

export default props => {

    function deleteUser(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    getActions = ({user}) => {
        return (
            <>
                <Button 
                    onPress={() => props.navigation.navigate("UserForm",user)}
                    type="clear" icon={<Icon name="edit" size={25} color="red" />}
                />
                <Button 
                    onPress={() => navigation.navigate("UserForm")}
                    type="clear" icon={<Icon name="add" size={25} color="red" />}
                    iconn={<Icon name="users" size={60} color="#900" />}
                />
                <View>
                    <Icon name="users" size={60} color="#900" />
                </View>
                
            </>
        )
    } 

    renderItem = ({ item:user }) => (
        <ListItem bottomDivider 
            onPress={() => props.navigation.navigate('UserForm')}
            rightElement={getActions(user)}>
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
        </ListItem>
      )

      return (
        <FlatList
            keyExtractor={user => user.id.toString()}
            data={users}
            renderItem={renderItem}
        />
      )
}


  

    



// renderItem = ({ item : user }) => (
//     <ListItem bottomDivider>
//       <Avatar source={{uri: user.avatarUrl}} />
//       <ListItem.Content>
//         <ListItem.Title>{user.name}</ListItem.Title>
//         <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
//       </ListItem.Content>
//       <ListItem.Chevron />
//     </ListItem>
//   )

//   render () (
//       <FlatList
//       keyExtractor={user => user.id.toString()}
//       data={users}
//       renderItem={renderItem}
//       />
//     )
  


// export default props => {

//     const renderItem = ({ item: user }) => (
//         <Avatar source={{uri: user.avatarUrl}} />
            
//     )

//     return (
//         <FlatList data={users} renderItem={renderItem} keyExtractor={user => user.id.toString()}/>
//     )
// }

// import React from 'react'
// import { FlatList, SectionList, Text, View } from 'react-native'
// import users from '../data/users'
// import { ListItem } from '@rneui/themed'

// export default props => {

//     function getUserItem({ item: user }) {
//         return (
//          <View>     
//             <ListItem
//                 leftAvatar={{source: {uri: user.avatarUrl}}}
//                 key={user.id}
//                 title={user.name}
//                 subtitle={user.email}
//                 bottomDivider
//                 onPress={() => props.navigation.navigate('UserForm')}
//             />
//         </View>
//         )
//     }
//     return (
//         <View>
//             <FlatList 
//                 keyExtractor={user => user.id.toString()}
//                 data={users}
//                 renderItem={getUserItem}
//             />
//         </View>
//     )
// }