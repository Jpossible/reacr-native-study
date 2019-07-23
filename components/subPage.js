import React from 'react'
import { View as Div, Text, Image, FlatList} from 'react-native'

export default class SubPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listData:[]
        }
    }
    render(): React.ReactNode {
        return (
            <Div>
                <FlatList
                    data={this.state.listData}
                    ItemSeparatorComponent={()=><Div style={{borderBottomWidth:1,borderColor:"red"}}></Div>}
                    onEndReachedThreshold={0.5}
                    onEndReached={()=>{
                        console.warn("快到底部了")
                    }}
                    renderItem={({item}) => {
                        return (
                            <Div>
                                <Image source={require('../img/foot.png')} resizeMode="center"/>
                                <Text>item.proImg</Text>
                            </Div>
                        )
                    }}
                />
            </Div>
        )
    }
    componentWillMount(): void {
        fetch('http://172.16.41.239:3000/pros/list')
            .then(res=>res.json())
            .then(data=>{
                console.warn(data)
                this.setState({
                    listData: data.result.list
                })
            }).catch(e=>{
            console.warn('请求地址出错，可能使用了本地地址')
            console.warn(e)
        })
    }
}
