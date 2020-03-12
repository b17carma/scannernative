import ComponentIcon from './ComponentIcon';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import ContainedOverlineText from '../../../util/ContainedOverlineText';
import {ListItem} from 'react-native-elements';

export default function ComponentList(props) {
  const [components, setComponents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let unmounted = false;

    async function fetchComponentList() {
      const res = await fetch(
        'https://api.carlmaier.se' + '/components/' + props.equipmentId,
      );
      const components = await res.json();

      if (unmounted) {
        return;
      }

      setLoading(false);
      setComponents(components);
    }

    fetchComponentList();

    console.log('Fetched component list');
    return () => {
      unmounted = true;
    };
  }, [props.equipmentId]);

  if (loading) {
    return <View />;
  }

  return (
    <View>
      <ContainedOverlineText text="All Components" />
      {components.map((component, i) => (
        <ListItem
          key={i}
          leftIcon={<ComponentIcon component={component} />}
          onPress={() =>
            props.navigation.navigate('Component', {
              equipmentId: props.equipmentId,
              componentId: component._id,
            })
          }
          title={component.identifier}
        />
      ))}
    </View>
  );
}
