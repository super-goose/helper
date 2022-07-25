import { useState } from "react";
import { SafeAreaView, SectionList, View, Text, SectionListData, Button, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { useGoodDispatch } from "../../hooks/good-dispatch";
import { addItem, getList, ListItem } from "./slice";

const ItemAddField = ({ title }: { title: string }) => {
  const [adding, setAdding] = useState(false);
  const addItemAction = useGoodDispatch(addItem);
  if (adding) {
    return <TextInput
      style={{
        backgroundColor: '#666',
        fontSize: 24,
        color: "#ffe",
        width: '60%'
      }}
      autoCapitalize='none'
      onSubmitEditing={e => addItemAction({ item: e.nativeEvent.text, store: title })}
      onEndEditing={() => setAdding(false)} />
  }
  return <Button title={'add item'} onPress={() => setAdding(true)}></Button>;
};

const SectionHeader = ({ title }: { title: string }) => {
  console.log('title:', title)

  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 6,
      borderColor: '#ffe',
      borderBottomLeftRadius: 8,
      borderLeftWidth: 2,
      borderBottomWidth: 2,
    }}>
      <Text style={{
        color: '#ffe',
        fontSize: 24
      }}>{title}</Text>
      <ItemAddField title={title} />
    </View>
  );
}
const Item = ({ title }: { title: ListItem }) => {
  return (
    <View style={{
      padding: 14,
    }}>
      <Text style={{
        color: '#ffe',
        fontSize: 18,
        paddingLeft: 14,
      }}>{title.item}</Text>
    </View>
  );
}
export const List = () => {
  const list = useSelector(getList)
  return (
    <SafeAreaView>
      <SectionList
        style={{
          maxHeight: '90%',
          minWidth: '90%',
          borderColor: '#f33',
          borderWidth: 3,
        }}
        sections={list}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section }: { section: SectionListData<ListItem, string> }) => {
          console.log('section:::', section);
          return <SectionHeader title={section['title']} />
        }}
      />
    </SafeAreaView>
  )
};