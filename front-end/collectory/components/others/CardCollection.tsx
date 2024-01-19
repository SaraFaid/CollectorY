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
import {
  getAllCardsInCollection,
  getQuantity,
} from "../../services/collectionApi";
import { stringify } from "qs";

type CardCollectionProps = {
  collection: {
    collectionId: number;
    collectionName: string;
  };
  cardIdList: string[];
};

const CardCollection = ({ collection, cardIdList }: CardCollectionProps) => {
  const [cards, setCards] = React.useState<any[]>([]);
  const [quantity, setQuantity] = React.useState<number[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<{
    id: string;
    name: string;
    images: { small: string; large: string };
  }>({ id: "", name: "", images: { small: "", large: "" } });
  const [collectionSelected, setCollectionSelected] = React.useState({
    collectionId: 0,
    collectionName: "",
  });

  const request = () => {
    // request to get all the cards in the selected collection and get the quantity of each card
    if (collectionSelected.collectionId !== collection.collectionId) {
    setCollectionSelected(collection);
    // console.log(collection);
    }
    getAllCardsInCollection(collection.collectionId)
      .then((res) => {
        // console.log("all the quantities " + JSON.stringify(res));
        if (res !== undefined) {
          const quantityList: number[] = [];
          res.map((item: { cardId: string; quantity: number }) => {
            quantityList.push(item.quantity);
            // console.log("quantityList1: " + quantityList);
          });

          getCardsList(cardIdList)
          .then((res2) => {
            // console.log("---- HERE ----");
            if (res2 !== undefined && cards !== res2) {
              
              // console.log("quantityList2: " + quantityList)
              if (quantity.length === 0) {
                quantity.push(...quantityList);
                // console.log("quantity2: " + quantity);
              }
            }
            
            setCards(res2);
        })
        .catch((error) => {
          console.log(error);
        });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (cards.length === 0 && quantity.length === 0) {
    // getCardsList(cardIdList);
    request();
    
  }

  // console.log("cards: " + JSON.stringify(cards[0]));

  const showFullCard = (card: {
    id: string;
    name: string;
    images: { small: string; large: string };
  }) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const getImage = () => {
    if (selectedCard.images.large === undefined) return <></>;
    else {
      const image = selectedCard.images.large;
      // console.log(selectedCard.images.large)
      return (
        <Image
          source={{ uri: image }}
          style={styles.largeCard}
          resizeMode="contain"
          key={selectedCard.id}
        />
      );
    }
  };

  const switchScreen = () => {
    // if(cards.length === 0) request()
    if (cardIdList.length === 0) {
      return (
        <>
          <SafeAreaView style={styles.darkLargeContent}>
            <Text style={styles.darkTitleContent}>
              {collectionSelected.collectionName}
            </Text>
            <Text style={styles.darkTitleContent}>
              No cards in this collection.
            </Text>
          </SafeAreaView>
        </>
      );
    } else {
      return (
        <>
          <SafeAreaView style={styles.darkLargeContent}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible && selectedCard.id !== ""}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setSelectedCard({
                  id: "",
                  name: "",
                  images: { small: "", large: "" },
                });
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.darkTitleContent}>
                    {selectedCard.name}
                  </Text>
                  {selectedCard.id !== "" ? getImage() : <></>}
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setSelectedCard({
                        id: "",
                        name: "",
                        images: { small: "", large: "" },
                      });
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Back</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Text style={styles.darkTitleContent}>
              {collectionSelected.collectionName}
            </Text>
            <FlatList
              data={cards}
              renderItem={({ item, index }) => (
                <>
                  <Card card={item} onPress={() => showFullCard(item)} />
                  <QuantityBadge quantity={quantity[index]} />
                </>
              )}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
          </SafeAreaView>
        </>
      );
    }
  };

  return switchScreen();
};

export default CardCollection;
