import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useGoodDispatch } from "../../hooks/good-dispatch";
import { addStore } from "../list/list-slice";


export const Header = () => {
  const addStoreAction = useGoodDispatch(addStore);
  const [addStoreModal, setAddStoreModal] = useState(false);
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>
      <Button title="add store" onPress={() => setAddStoreModal(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={addStoreModal}
        onRequestClose={() => {
          setAddStoreModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.textInput} onSubmitEditing={(e) => {
              addStoreAction(e.nativeEvent.text);
              setAddStoreModal(false);
            }} />
            <Button title="cancel" onPress={() => {
              setAddStoreModal(false);
            }} />
          </View>
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#333',
    width: '80%',
    marginRight: 10,
    fontSize: 16,
    color: 'white',
  },
  header: {
    width: '90%',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 40,
  },
  text: {
    color: '#dda',
    fontSize: 30,
    // borderWidth: 1,
    // borderColor: 'green',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    marginTop: 20,
    backgroundColor: '#444',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    padding: 35,
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
    width: '90%',
    // height: '20%',
    flexDirection: "row"
  },
});
