import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';

const MarkList = ({
  textName,
  textIcao,
  textLat,
  textLon,
  textCity,
  textState,
  name,
  icao,
  lat,
  lon,
  city,
  state,
}) => {
  return (
    <View>
      <ListItem>
        <ListItem.Content>
          <View>
            <ListItem.Subtitle>{textName}</ListItem.Subtitle>
            <ListItem.Title
              style={styles.listTitle}>{`${name}`}</ListItem.Title>
            <ListItem.Subtitle>{textIcao}</ListItem.Subtitle>
            <ListItem.Title
              style={styles.listTitle}>{`${icao}`}</ListItem.Title>
          </View>
          <View style={styles.container}>
            <ListItem.Subtitle>{(textCity, textState)}</ListItem.Subtitle>
            <ListItem.Title
              style={styles.listTitle}>{`${city},${state}`}</ListItem.Title>
          </View>

          <View style={styles.container}>
            <ListItem.Subtitle>{textLon}</ListItem.Subtitle>
            <ListItem.Title style={styles.listTitle}>{`${lon}`}</ListItem.Title>
            <ListItem.Subtitle>{textLat}</ListItem.Subtitle>
            <ListItem.Title style={styles.listTitle}>{`${lat}`}</ListItem.Title>
          </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default MarkList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  listTitle: {
    fontWeight: 'bold',
  },
});
