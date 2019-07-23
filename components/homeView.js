import React from 'react'
import { View, Text, TextInput, Image, Button, ActivityIndicator, StyleSheet,TouchableHighlight } from 'react-native'
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux'

export default class HomeView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            SwiperData:[]
        }
    }
    render(): React.ReactNode {
        return (
            <View>
                <View style={{backgroundColor:'#666',height:200}}>
                    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
                        {this.state.SwiperData.map((item,i)=><View style={styles.slide1} key={i}>
                            <Image source={require('../img/9.jpg')} resizeMode="center"/>
                            <Text style={styles.text}>{item.proImg}</Text>
                        </View>)}
                    </Swiper>
                </View>
                <View style={{flexDirection: 'row',flexWrap: 'wrap'}}>
                    <TouchableHighlight style={styles.box} onPress={this.gotoPage.bind(this)}>
                        <View>
                            <Image source={require('../img/foot.png')} resizeMode="center"/>
                            <Text>BaiDu</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.box}>
                        <Image source={require('../img/foot.png')} resizeMode="center"/>
                        <Text>BaiDu</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../img/foot.png')} resizeMode="center"/>
                        <Text>BaiDu</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../img/foot.png')} resizeMode="center"/>
                        <Text>BaiDu</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../img/foot.png')} resizeMode="center"/>
                        <Text>BaiDu</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../img/foot.png')} resizeMode="center"/>
                        <Text>BaiDu</Text>
                    </View>
                </View>
            </View>
        )
    }

    componentWillMount(): void {
        fetch('http://172.16.41.239:3000/pros/list?pageSize=5')
            .then(res=>res.json())
            .then(data=>{
                console.warn(data)
                this.setState({
                    SwiperData: data.result.list
                })
            }).catch(e=>{
                console.warn('请求地址出错，可能使用了本地地址')
                console.warn(e)
        })
    }

    gotoPage() {
        Actions.subPage({id:10})
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    },
    box: {
        width: '33.33%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: "#dadada",
    }
})
