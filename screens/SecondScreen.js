import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import ListItemsModal from '../components/listItemsModal';
import MarkList from '../components/MarkList';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic2F0eWFqZWV0a295YWwiLCJhIjoiY2tzZTc5d3RhMHV2czJ4bzRrZ2Zwdnp1cCJ9.lZppba0STUQKFBIPcU3lzA',
);
const SecondScreen = ({route}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${name},${country}`,
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const renderAnnotations = () => {
    return (
      <MapboxGL.MarkerView
        key="pointAnnotation"
        id="pointAnnotation"
        coordinate={[lon, lat]}>
        <View style={styles.markerView} />
      </MapboxGL.MarkerView>
    );
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const lat = route.params.lat;
  const lon = route.params.lon;
  const name = route.params.name;
  const icao = route.params.icao;
  const city = route.params.city;
  const state = route.params.state;
  const country = route.params.country;
  const tz = route.params.tz;

  return (
    <>
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView
            onPress={toggleModal}
            scrollEnabled={true}
            rotateEnabled={true}
            zoomEnabled={true}
            compassEnabled={true}
            style={styles.map}
            styleURL={MapboxGL.StyleURL.Outdoors}
            showUserLocation={true}
            zoomLevel={16}
            pitchEnabled={true}
            centerCoordinate={[lon, lat]}>
            <MapboxGL.Camera
              maxZoomLevel={25}
              minZoomLevel={0}
              zoomLevel={15}
              centerCoordinate={[lon, lat]}
              animationMode={'flyTo'}
              animationDuration={1}></MapboxGL.Camera>
            {renderAnnotations()}
          </MapboxGL.MapView>
        </View>
      </View>
      <Animatable.View style={styles.animateView} animation={'fadeInUp'}>
        <ListItemsModal
          textName="Name"
          name={name}
          textIcao="icao"
          icao={icao}
          textCity="City"
          city={city}
          textState="State"
          state={state}
          textCountry="Country"
          country={country}
          textTz="tz"
          tz={tz}
          textLong="Long"
          lon={lon}
          textLat="Lat"
          lat={lat}
        />
      </Animatable.View>
      <View style={{flex: 1}}>
        <Modal
          style={styles.modalView}
          onBackdropPress={() => setModalVisible(false)}
          isVisible={isModalVisible}>
          <MarkList
            textName="name"
            name={name}
            textIcao="icao"
            icao={icao}
            textCity="City"
            city={city}
            textState="State"
            state={state}
            textLat="Lat"
            lat={lat}
            textLon="Long"
            lon={lon}
          />
        </Modal>
      </View>
    </>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width,
  },
  map: {
    flex: 1,
  },
  modalView: {
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: Dimensions.get('window').height / 3,
    marginTop: Dimensions.get('window').height / 3,
  },
  animateView: {
    top: '24%',
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  markerView: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
  },
});
