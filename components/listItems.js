import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';

const listItems = ({
  icao,
  textName,
  name,
  textCity,
  textState,
  textIcao,
  city,
  state,
  textCountry,
  country,
}) => {
  return (
    <View>
      <ListItem key={icao} bottomDivider>
        <ListItem.Content style={styles.listContent}>
          <View>
            <ListItem.Subtitle>{textName}</ListItem.Subtitle>
            <ListItem.Title style={styles.listTitle}>{name}</ListItem.Title>
            <ListItem.Subtitle>{(textCity, textState)}</ListItem.Subtitle>
            <ListItem.Title
              style={styles.listTitle}>{`${city},${state}`}</ListItem.Title>
          </View>
          <View>
            <ListItem.Subtitle>{textIcao}</ListItem.Subtitle>
            <ListItem.Title style={styles.listTitle}>{icao}</ListItem.Title>
            <ListItem.Subtitle>{textCountry}</ListItem.Subtitle>
            <ListItem.Title style={styles.listTitle}>{country}</ListItem.Title>
          </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default listItems;

const styles = StyleSheet.create({
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listTitle: {
    fontWeight: 'bold',
  },
});
