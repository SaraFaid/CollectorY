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
import { getCardsFromSetID } from "../../services/pokemonAPI";
import styles from "../styling/style";
import Card from "./Card";

import SelectDropdown from "react-native-select-dropdown";
import colors from "../styling/colors";
import StyledButton from "../buttons/StyledButton";

type CardsListProps = {
  idSet: string;
  nameSet: string | undefined;
};

const CardsList = ({ idSet, nameSet }: CardsListProps) => {
  const [cards, setCards] = React.useState<any[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<{id: string, name: string, images: {small: string, large: string}}>({id: "", name: "", images: {small: "", large: ""}});

  const collections = ["Darkrai", "Gallade <3"]
  const quantity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


  const request = async () => {
    await getCardsFromSetID(idSet)
      .then((set) => {
        set.map((card: any) => {
          setCards((cards) => [...cards, card]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (cards.length === 0) {
    request();
  }

  const showFullCard = (card: {id: string, name: string, images: {small: string, large: string}}) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const getCard = () => {
    if(selectedCard.images.large === undefined) return (<></>)
    else {
        const image = selectedCard.images.large
        //console.log(selectedCard.images.large)
        return (
        <>
        <Image source={{uri : image}} style={styles.largeCard} resizeMode="contain" key={selectedCard.id}/>
        <Text style={styles.darkTextContent}>{selectedCard.number} / {selectedCard.set.printedTotal}</Text>
        <Text style={styles.darkTextContent}>{selectedCard.set.name} - {selectedCard.set.series} Set</Text>
        <Text style={styles.darkTextContent}>{selectedCard.rarity}</Text>
        <Text style={styles.darkTextContent}>{selectedCard.artist}</Text>
        <View style={styles.viewRow}>
        <SelectDropdown
        data={quantity}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
        }
        }
        defaultButtonText={"Quantity"}
        defaultValue={quantity[0]}
        buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
        }
        }
        rowTextForSelection={(item, index) => {
            return item
        }
        }
        buttonStyle={{borderRadius: 15, marginHorizontal: 10, width: 100, backgroundColor: colors.primary}}
        buttonTextStyle={{color: colors.dark,fontWeight: 'bold'}}
        />
        <SelectDropdown
        data={collections}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
        }
        }
        defaultButtonText={"Add to collection"}
        buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
        }
        }
        rowTextForSelection={(item, index) => {
            return item
        }
        }
        buttonStyle={{borderRadius: 15, marginHorizontal: 10, width: 200, backgroundColor: colors.primary}}
        buttonTextStyle={{color: colors.dark,fontWeight: 'bold'}}
        />
        </View>
        <StyledButton title="Add to this collection" onPress={() => { } } color={colors.dark} disabled={false}/>
        <StyledButton title="Add to Wishlist" onPress={() => { } } color={colors.dark} disabled={false}/>

        </>
        )
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
            {selectedCard.id !== ""? getCard(): <></>}
            <StyledButton color={colors.dark} title="Back" disabled={false} onPress={() => {
                setSelectedCard({id: "", name: "", images: {small: "", large: ""}});
                setModalVisible(!modalVisible)}}/>
          </View>
        </View>
      </Modal>
      <Text style={styles.darkTitleContent}>{nameSet}</Text>
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

export default CardsList;
