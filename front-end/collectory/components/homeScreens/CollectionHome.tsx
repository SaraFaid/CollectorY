import { View, Text } from "react-native";
import styles from "../styling/style";
import React from "react";
import { getUserFromToken } from "../../services/userAPI";
import CollectionButton from "../buttons/CollectionButton";
import { getCollectionByUser } from "../../services/collectionApi";
import CardCollection from "../others/CardCollection";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../styling/colors";

const CollectionHome = () => {

    const [collections, setCollections] = React.useState<any[]>([]);
    const [user, setUser] = React.useState<any>();
    const [selectedCollection, setSelectedCollection] = React.useState<{collectionId: number, collectionName: string}>({collectionId: 0, collectionName: ""});

    React.useEffect(() => {
        getUserFromToken()
        .then((user) => {
            console.log("user: " + JSON.stringify(user))
            setUser(user)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])  


    const onPressCollection = (collectionId: number, nameCollection: string) => {
        setSelectedCollection({collectionId: collectionId, collectionName: nameCollection})
        console.log("pressed");
    }

    const getCollections = () => {
        getCollectionByUser(user.id)
        .then((collections) => {
            console.log("collections: " + JSON.stringify(collections))
            setCollections(collections)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const fillScreen = () => {
        const components: JSX.Element[] = []
        if (collections.length === 0) {
            getCollections()
        }
        else {
            collections.map((collection) => {
                components.push(<CollectionButton collectionName={collection.name} onPress={() => onPressCollection(collection.id, collection.name)} />)
            })
    }
    return components
    }

    const getCardList = () => {
        const cardsId: string[] = []
        if (selectedCollection.collectionId === 1)
        {
            cardsId.push("ecard1-39")
            cardsId.push("ex3-100")
            cardsId.push("ex6-105")
            cardsId.push("pl3-143")
            cardsId.push("xyp-XY121")
            cardsId.push("g1-RC5")
            cardsId.push("sm12-22")
            cardsId.push("smp-SM226")
            cardsId.push("swsh4-25")
            cardsId.push("swsh9-154")
            cardsId.push("swsh11tg-TG03")
            cardsId.push("sv3-223")
        }
        else if (selectedCollection.collectionId === 2)
        {
            cardsId.push("base3-5")
            cardsId.push("basep-39")
            cardsId.push("ex13-31")
            cardsId.push("pl1-83")
            cardsId.push("hgss4-94")
            cardsId.push("xy7-57")
            cardsId.push("xyp-XY92")
            cardsId.push("sm5-58")
            cardsId.push("sm9-165")
            cardsId.push("swshp-SWSH096")
            cardsId.push("sv2-98")
            cardsId.push("svp-4")
        }
        return cardsId
    }

    const switchScreen = () => {
        if (selectedCollection.collectionId === 0) {
            return (
                <>
             <Text style={styles.titleContent}>Welcome in your Collections</Text>
             <View style={styles.content}>
             {collections.length !== 0? <Text style={styles.titleContent}>Loading . . .</Text> : <>
                 <CollectionButton collectionName="Charizard!" onPress={() => onPressCollection(1, "Charizard!")} />
                 <CollectionButton collectionName="Cool Ghosts Squad" onPress={() => onPressCollection(2, "Cool Ghosts Squad")} />

             </>
             }
             </View>

         </>
            )
        }
        else {
            return (
                <>
                <Icon name='keyboard-backspace' size={40} color={colors.dark} onPress={() => {
                    setSelectedCollection({collectionId: 0, collectionName: ""})
                }}/>
                <CardCollection nameCollection={selectedCollection.collectionName} cardIdList={getCardList()} />
                </>
            )
        }
    }



    return (switchScreen())
}


export default CollectionHome;