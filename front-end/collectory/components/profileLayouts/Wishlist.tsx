import React from "react";
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
import { getCardByID} from "../../services/pokemonAPI";
import styles from "../styling/style";
import Card from "../cardLayouts/Card";
import { findWishlistByUserId, getAllCardsInCollection } from "../../services/collectionApi";
import { getUserFromToken } from "../../services/userAPI";

const Wishlist = () => {
  const [cards, setCards] = React.useState<any[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<{id: string, name: string, images: {small: string, large: string}}>({id: "", name: "", images: {small: "", large: ""}});
  const [cardIdList, setCardIdList] = React.useState<string[]>([]);

  const cardsId = ["dpp-DP52", "sma-SV25", "sv1-208", "bwp-BW73", "xyp-XY45", "neo4-12", "bw11-81"]

  const request = async () => {
    cardsId.map(async (id) => {
        await getCardByID(id)
      .then((card: any) => {
          setCards((cards) => [...cards, card]);
        })
        .catch((error) => {
        console.log(error);
    });
    })
};

// get wishlist id from user id
const getWishlistId = async (id: number) => {
  const wishlistId = findWishlistByUserId(id)
    .then((wishlist) => {
      if (wishlist === undefined) {
        console.log("No wishlist found");
        return 0;}
        else {
          return wishlist[0].id;
        }
    })
    .catch((err) => {
      console.log(err);
    });
  return wishlistId;
}

const getCardList = async (id: number) => {
  const cardsId: string[] = [];

  getWishlistId(id)
  .then((wishlistId) => {

  getAllCardsInCollection(wishlistId)
    .then((cards) => {
      cards.map(
        (card: {
          id: number;
          collectionId: number;
          cardId: string;
          quantity: number;
        }) => {
          //cardsId.push(card.cardId);
          // console.log('ICI',card.cardId);
          cardsId.push(card.cardId);
        }
        );
        setCardIdList(cardsId);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  );
      //console.log("here: ", cardsId)
};


  if (cards.length === 0) {
    getUserFromToken()
      .then((user) => {
        if (user !== undefined) {
          getCardList(user.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

  return (
    <SafeAreaView style={styles.darkLargeContent}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible && selectedCard.id !==""}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setSelectedCard({id: "", name: "", images: {small: "", large: ""}});
          setModalVisible(!modalVisible);
        }}
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
      <Text style={styles.darkTitleContent}>My Wishlist</Text>
      {cards.length !== 0 ? (
        <FlatList
          data={cards}
          renderItem={({ item }) => (
            <Card card={item} onPress={() => showFullCard(item)} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      ) : (
        <Text style={styles.darkTitleContent}>Loading . . .</Text>
      )}
    </SafeAreaView>
  );
};

export default Wishlist;
