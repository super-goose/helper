import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";


export const Header = () => {
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
        <View>
          <Text>This is modal contents</Text>
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
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
    // height: 50,
    borderWidth: 1,
    borderColor: 'green',
  },
});
