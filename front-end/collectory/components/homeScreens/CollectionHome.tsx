import { View, Text, FlatList, Modal, Alert, TextInput } from "react-native";
import styles from "../styling/style";
import React, { useEffect } from "react";
import { getUserFromToken } from "../../services/userAPI";
import CollectionButton from "../buttons/CollectionButton";
import {
  getCollectionByUser,
  getAllCardsInCollection,
  createNewCollection,
} from "../../services/collectionApi";
import CardCollection from "../others/CardCollection";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../styling/colors";
import StyledButton from "../buttons/StyledButton";
import SelectDropdown from "react-native-select-dropdown";

const CollectionHome = () => {
  const [selectedCollection, setSelectedCollection] = React.useState<{
    collectionId: number;
    collectionName: string;
  }>({ collectionId: 0, collectionName: "" });
  const [modalVisible, setModalVisible] = React.useState(false);
  const [collectionList, setCollectionList] = React.useState<any[]>([]);

  const [collectionName, setCollectionName] = React.useState("");
  const [licenseId, setLicenseId] = React.useState(0);
  const [cardIdList, setCardIdList] = React.useState<string[]>([]);

  const licenses = ["Pokémon", "Yu-Gi-Oh", "Magic The Gathering", "Naruto"];

  const onPressCollection = (collectionId: number, nameCollection: string) => {
   setSelectedCollection({
      collectionId: collectionId,
      collectionName: nameCollection,
    });
    console.log("collection: " + JSON.stringify(selectedCollection));
    getCardList(collectionId);
    console.log("pressed");
  };

  useEffect(() => {
    fillScreen();
  }, []);

  const createCollection = () => {
    getUserFromToken().then((user) => {
      if (user !== undefined) {
        createNewCollection(user.id, collectionName, licenseId)
          .then((collection) => {
            //console.log("collection: " + JSON.stringify(collection))
            fillScreen();
            setModalVisible(!modalVisible);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const fillScreen = () => {
    getUserFromToken()
      .then((user) => {
        if (user !== undefined) {
          //console.log("user: " + JSON.stringify(user));
          getCollectionByUser(user.id)
            .then((collections) => {
              const components: JSX.Element[] = [];
              if (collections === undefined) {
                setCollectionList(["You don't have any collections yet."]);
              } else {
                setCollectionList(collections);
              }
              return components;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          setCollectionList([
            "You should been connected to see your collections.",
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCardList = async (id: number) => {
    const cardsId: string[] = [];

    getAllCardsInCollection(id)
      .then((cards) => {
        cards.map(
          (card: {
            id: number;
            collectionId: number;
            cardId: string;
            quantity: number;
          }) => {
            //cardsId.push(card.cardId);
            console.log('ICI',card.cardId);
            cardsId.push(card.cardId);
          }
          );
          setCardIdList(cardsId);
        })
        .catch((err) => {
          console.log(err);
        });
        //console.log("here: ", cardsId)
  };

  const switchScreen = () => {
    if (selectedCollection.collectionId === 0) {
      return (
        <>
          <Text style={styles.titleContent}>Welcome in your Collections</Text>
          <View style={{ width: "100%", alignItems: "flex-end" }}>
            <Icon
              name="plus-circle"
              size={40}
              color={colors.dark}
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log("pressed");
              }}
            />
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              fillScreen();
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.darkTitleContent}>
                  Create New Collection
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Name of the collection"
                  inputMode="text"
                  textContentType="name"
                  onChangeText={(text) => setCollectionName(text)}
                />
                <SelectDropdown
                  data={licenses}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText={"Quantity"}
                  defaultValue={licenses[0]}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    setLicenseId(index + 1);
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    setLicenseId(index + 1);
                    return item;
                  }}
                  buttonStyle={{
                    borderRadius: 15,
                    marginHorizontal: 10,
                    width: 250,
                    backgroundColor: colors.primary,
                  }}
                  buttonTextStyle={{ color: colors.dark, fontWeight: "bold" }}
                />
                <StyledButton
                  color={colors.dark}
                  title="Create"
                  disabled={collectionName === ""}
                  onPress={createCollection}
                />

                <StyledButton
                  color={colors.dark}
                  title="Back"
                  disabled={false}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                />
              </View>
            </View>
          </Modal>
          <View style={styles.listContent}>
            <FlatList
              data={collectionList}
              renderItem={({ item }) => {
                if (typeof item === "string") {
                  return <Text style={styles.textContent}>{item}</Text>;
                } else {
                  return (
                    <CollectionButton
                      key={item.id}
                      collectionName={item.collectionName}
                      onPress={() =>
                        onPressCollection(item.id, item.collectionName)
                      }
                    />
                  );
                }
              }}
            />
          </View>
        </>
      );
    } else {
      return (
        <>
          <Icon
            name="keyboard-backspace"
            size={40}
            color={colors.dark}
            onPress={() => {
              setSelectedCollection({ collectionId: 0, collectionName: "" });
              console.log("pressed : " + JSON.stringify(selectedCollection));
            }}
          />
          <CardCollection
            collection={selectedCollection}
            cardIdList={cardIdList}
          />
        </>
      );
    }
  };

  return switchScreen();
};

export default CollectionHome;
