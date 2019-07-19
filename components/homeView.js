import React from 'react'
import { View, Text, TextInput, Image, Button, ActivityIndicator, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'

export default class HomeView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            SwiperData:[]
        }
    }
    render(): React.ReactNode {
        return (
            <View style={{backgroundColor:'#666',height:200}}>
                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
                    {this.state.SwiperData.map((item,i)=><View style={styles.slide1} key={i}>
                        <Image source={require('../img/9.jpg')} resizeMode="center"/>
                        <Text style={styles.text}>{item.proImg}</Text>
                    </View>)}
                </Swiper>
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
    }
})
