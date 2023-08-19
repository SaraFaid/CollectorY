import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { getCardsFromSetID } from "../../services/pokemonAPI";
import styles from "../styling/style";
import Card from "./Card";

type CardsListProps = {
    idSet: string;
    nameSet: string | undefined;
}

const CardsList = ({idSet, nameSet}: CardsListProps ) => {

    const [cards, setCards] = React.useState<{
        id: string;
        name: string;
        image: string;
    }[]>([]);

    const request = async () => {await getCardsFromSetID(idSet)
        .then((set) => {
            set.map((card: any) => {
                        const tmp = {id: card.id, name: card.name, image: card.images.small}
                        setCards((cards) => [...cards, tmp]);
                 })
        })
        .catch((error) => {
            console.log(error);
        })

    }

    if(cards.length === 0) {
        request();
    }

    return (
            <SafeAreaView style={styles.darkLargeContent}>
                <Text style={styles.darkTitleContent}>{nameSet}</Text>
                {cards.length !== 0? <FlatList data={cards} renderItem={({item}) => <Card image={item.image} cardName={item.name} cardId={item.id}/>} keyExtractor={(item) => item.id} numColumns={3} />
                : <Text style={styles.darkTitleContent}>Loading . . .</Text>
                }
            </SafeAreaView>
    )
}

export default CardsList;