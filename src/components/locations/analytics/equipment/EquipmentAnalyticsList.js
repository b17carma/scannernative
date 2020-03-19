import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/core';
import TranslatedImage from '../../../util/TranslatedImage';

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  body: {
    fontWeight: '400',
    marginBottom: 8,
  },
});

export default function EquipmentList(props) {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(() => {
    let unmounted = false;

    async function fetchEquipmentData() {
      const res = await fetch('https://api.carlmaier.se' + '/equipment');

      res
        .json()
        .then(res => {
          if (unmounted) {
            return;
          }

          setEquipment(res);
          setLoading(false);
        })
        .catch(console.log);
    }

    fetchEquipmentData();

    console.log('Fetched equipment data');
    return () => {
      unmounted = true;
    };
  }, []);

  if (loading) {
    return <View />;
  }

  return equipment.map((equip, i) => (
    <TouchableOpacity
      key={i}
      onPress={() =>
        props.navigation.navigate('Equipment Analytics Item', {
          equipmentId: equip._id,
        })
      }>
      <Card key={i} image={TranslatedImage(equip.image)}>
        <Text style={styles.title}>{equip.identifier}</Text>
        <Text style={styles.body}>{equip._id}</Text>
      </Card>
    </TouchableOpacity>
  ));
}