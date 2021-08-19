import React, {useState, useEffect, useLayoutEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ListItems from '../components/listItems';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {STORE_DATA} from '../Redux/actionType';

const FirstScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const stateData = useSelector(state => state.oData);

  useEffect(() => {
    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Airports Lists',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const fetchData = async () => {
    const data = await fetch(
      'https://raw.githubusercontent.com/mwgg/Airports/master/airports.json',
    ).then(res => res.json());

    const newData = Object.values(data).map(
      ({icao, name, city, state, country, lat, lon, tz}) => ({
        icao,
        name,
        city,
        state,
        country,
        lat,
        lon,
        tz,
      }),
    );

    dispatch({
      type: STORE_DATA,
      payload: newData,
    });
    setLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          size="large"
          style={styles.loadingView}
        />
      ) : (
        <View style={styles.viewContainer}>
          <FlatList
            data={stateData}
            onEndReachedThreshold={0.9}
            maxToRenderPerBatch={10}
            updateCellsBatchingPeriod={10}
            initialNumToRender={10}
            keyExtractor={(item, index) => index.toString()}
            removeClippedSubviews={true}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Second', {
                    icao: item.icao,
                    name: item.name,
                    city: item.city,
                    state: item.state,
                    tz: item.tz,
                    lon: item.lon,
                    lat: item.lat,
                    country: item.country,
                  })
                }>
                <ListItems
                  icao={item.icao}
                  textName="Name"
                  name={item.name}
                  textCity="City"
                  textState="State"
                  textIcao="icao"
                  city={item.city}
                  state={item.state}
                  textCountry="country"
                  country={item.country}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 5,
  },
  loadingView: {height: Dimensions.get('window').height - 50},
});
