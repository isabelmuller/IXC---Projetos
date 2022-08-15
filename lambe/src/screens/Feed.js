import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'seductive_Chicken__',
            email: 'chichiken@cornmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'roosterFerdinando',
                comment: 'cool.'
            }, {
                nickname: 'claudiaKen',
                comment: 'How Beautiful!'
            }]
        }, {
            id: Math.random(),
            nickname: 'TheKingRooster_01',
            email: 'chickennnn@cornmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts} keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})