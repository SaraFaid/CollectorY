import React, { useEffect } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
    Image,
} from "react-native";
import { getCardsList } from "../../services/pokemonAPI";
import styles from "../styling/style";
import Card from "../cardLayouts/Card";
import QuantityBadge from "./QuantityBadge";
import { getAllCardsInCollection, getQuantity } from "../../services/collectionApi";
import { stringify } from "qs";

type CardCollectionProps = {
  collection:{
    collectionId: number;
    collectionName: string;
};
  cardIdList: string[];
};

const CardCollection = ({ collection, cardIdList }: CardCollectionProps) => {
  const [cards, setCards] = React.useState<any[]>([]);
  const [quantity, setQuantity] = React.useState<number[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<{id: string, name: string, images: {small: string, large: string}}>({id: "", name: "", images: {small: "", large: ""}});
  const [collectionSelected, setCollectionSelected] = React.useState({collectionId: 0, collectionName: ""});

  
  const request =  () => {

    setCollectionSelected(collection)
    console.log(collection)
    getAllCardsInCollection(collection.collectionId)
    .then((res) => {
      console.log("all the quantities " + JSON.stringify(res))
      const list = res
      if (list !== undefined) {
        const quantityList: number[] = []
        list.map((item: {cardId: string, quantity: number}) => {
          quantityList.push(item.quantity)
        })
        console.log("quantityList: " + quantityList) 
        if (quantityList !== quantity)
        {
          setQuantity(quantityList)
        }
    
      getCardsList(cardIdList)
    .then((res2) => {
      console.log("all the cards " + res2)
    //   if(list.length !== 0)
    //   {
    //     list.map((item, index) => {
    //       item = {...item, quantity: quantity[index]}
    //     })
    // }
    if (cards !== res2) {
      setCards(res2)
    }

    })
      .catch((error) => {
        console.log(error);
      }
    );
      }  
    })
    .catch((error) => {
      console.log(error);
    }
  );

    
  };

  if (cards.length === 0 && quantity.length === 0) {
    // getCardsList(cardIdList);
    request()
  }

  const showFullCard = (card: {id: string, name: string, images: {small: string, large: string}}) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const getImage = () => {
    if(selectedCard.images.large === undefined) return (<></>)
    else {
        const image = selectedCard.images.large
        //console.log(selectedCard.images.large)
        return <Image source={{uri : image}} style={styles.largeCard} resizeMode="contain" key={selectedCard.id}/>
    }
    }

    const switchScreen = () => {
      // if(cards.length === 0) request()
      if(cardIdList.length === 0){
        return (
          <>
          <SafeAreaView style={styles.darkLargeContent}>
          <Text style={styles.darkTitleContent}>{collectionSelected.collectionName}</Text>
            <Text style={styles.darkTitleContent}>No cards in this collection.</Text>
            </SafeAreaView>
            </>)
      }
      else {
        return (
          <>
          <SafeAreaView style={styles.darkLargeContent}>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible && selectedCard.id !==""}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setSelectedCard({id: "", name: "", images: {small: "", large: ""}});
        setModalVisible(!modalVisible);
      }
    }
      >
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <Text style={styles.darkTitleContent}>{selectedCard.name}</Text>
      {selectedCard.id !== ""? getImage(): <></>}
      <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
        setSelectedCard({id: "", name: "", images: {small: "", large: ""}});
        setModalVisible(!modalVisible)}}>
        <Text style={styles.textStyle}>Back</Text>
        </Pressable>
        </View>
        </View>
        </Modal>
        <Text style={styles.darkTitleContent}>{collectionSelected.collectionName}</Text>
        <FlatList
        data={cards}
        renderItem={({ item }) => (
          <>
          
          <Card card={item} onPress={() => showFullCard(item)} />
          <QuantityBadge color={0} quantity={item.quantity} />
          
        </>
        )
        }
          keyExtractor={(item) => item.id}
          numColumns={3}
          />
          </SafeAreaView>
          </>
        )

      }
    }

  return switchScreen()
};

export default CardCollection;
