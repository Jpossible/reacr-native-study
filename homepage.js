import React, {Component} from 'react'
// View组件负责布局，类似于HTML中的div标签
// 在RN中要插入文本必须用Text组件进行包裹，否则会报错
import { StyleSheet, ScrollView, View, Text, TextInput, Image, Button, ActivityIndicator, FlatList } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import HomeView from './components/homeView'
import ProfileView from './components/profileView'
import Hot from './components/hot'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HomePage extends Component{
    // constructor一般推荐自己复写一次
    constructor(props){
        super(props)
        this.state = {
            selectedTab:'home'
        }
    }
    render(): React.ReactNode {
        return (
            <View style={stylelist.tab}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image style={stylelist.hicon} source={require('./img/home.png')} />}
                        renderSelectedIcon={() => <Image style={stylelist.hicon} source={require('./img/home-a.png')} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        >
                        <HomeView></HomeView>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        renderIcon={() => <Image style={stylelist.ficon} source={require('./img/foot.png')} />}
                        renderSelectedIcon={() => <Image style={stylelist.ficon} source={require('./img/foot-a.png')} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}
                        >
                        <ProfileView></ProfileView>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'hot'}
                        title="Hot"
                        renderIcon={() => <Icon name="user-o" size={26} color="#666" />}
                        renderSelectedIcon={() => <Icon name="user" size={26} color="#666" />}
                        onPress={() => this.setState({ selectedTab: 'hot' })}
                    >
                        <Hot></Hot>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}
const stylelist = StyleSheet.create({
    tab: {
        flex:1
    },
    hicon:{
        width: 26,
        height: 26
    },
    ficon:{
        width: 28,
        height: 25
    }
})
