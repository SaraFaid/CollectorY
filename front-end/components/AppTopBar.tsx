import * as React from 'react'
import { Appbar, Text } from 'react-native-paper'
import {Dimensions} from 'react-native';


type AppTopBarProps = {
    needBack: Boolean
}

function AppTopBar ({needBack}: AppTopBarProps) {

    //const title = titleBar

    const addBack = () => {

        if (needBack) {                
            return (
                <>                
                    <Appbar.BackAction centered={false} iconColor='white'  onPress={() => {}}/>
                    <Appbar.Content title="CollectorY" color='white'/>
                    <Appbar.Action icon="dots-vertical" iconColor='white' onPress={() => {}}/>
                </>
            )
        } else {
            return (
                <>
                    <Appbar.Content title="CollectorY" color='white'/>
                    <Appbar.Action icon="dots-vertical" iconColor='white' onPress={() => {}}/>
                </>
            )
        }

    }

    const width =  Dimensions.get('window').width

    return (
        <Appbar.Header collapsable={true} dark={true} style={{backgroundColor: '#28587B', width: width, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>

            {addBack()}
            
        </Appbar.Header>
    )

}

export default AppTopBar;