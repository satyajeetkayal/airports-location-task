import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';

const listItemsModal = ({
  textName,
  textCity,
  textState,
  textCountry,
  textTz,
  textIcao,
  textLat,
  textLong,
  name,
  icao,
  city,
  state,
  country,
  lat,
  lon,
  tz,
}) => {
  return (
    <View>
      <ListItem>
        <ListItem.Content style={styles.listContent}>
          <View>
            <View>
              <ListItem.Subtitle>{textName}</ListItem.Subtitle>
              <ListItem.Title style={styles.listTitle}>{name}</ListItem.Title>
              <ListItem.Subtitle>{(textCity, textState)}</ListItem.Subtitle>
              <ListItem.Title
                style={styles.listTitle}>{`${city},${state}`}</ListItem.Title>
            </View>
            <View>
              <ListItem.Subtitle>{textCountry}</ListItem.Subtitle>
              <ListItem.Title style={styles.listTitle}>
                {country}
              </ListItem.Title>

              <ListItem.Subtitle>{textTz}</ListItem.Subtitle>
              <ListItem.Title style={styles.listTitle}>{tz}</ListItem.Title>
            </View>
            <View>
              <ListItem.Subtitle>{textLong}</ListItem.Subtitle>
              <ListItem.Title style={styles.listTitle}>{lon}</ListItem.Title>
              <ListItem.Subtitle>{textLat}</ListItem.Subtitle>
              <ListItem.Title style={styles.listTitle}>{lat}</ListItem.Title>
            </View>
          </View>
          <View>
            <ListItem.Subtitle>{textIcao}</ListItem.Subtitle>
            <ListItem.Title style={styles.listTitle}>{icao}</ListItem.Title>
          </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default listItemsModal;

const styles = StyleSheet.create({
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listTitle: {
    fontWeight: 'bold',
  },
});
