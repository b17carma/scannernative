import {createStackNavigator} from '@react-navigation/stack';
import AnalyticsView from '../locations/analytics/AnalyticsView';
import OverallAnalyticsView from '../locations/analytics/overall/OverallAnalyticsView';
import React from 'react';
import HistoryView from '../locations/analytics/history/HistoryView';
import EquipmentAnalyticsView from '../locations/analytics/equipment/EquipmentAnalyticsView';
import EquipmentView from '../locations/equipment/EquipmentView';
import StackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

const headerOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#3f51b5',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function AnalyticsStackScreen() {
  const AnalyticsStack = createStackNavigator();

  return (
    <AnalyticsStack.Navigator>
      <AnalyticsStack.Screen
        name="Analytics"
        component={AnalyticsView}
        options={headerOptions}
      />
      <AnalyticsStack.Screen
        name="Overall"
        component={OverallAnalyticsView}
        options={headerOptions}
      />
      <AnalyticsStack.Screen
        name="History"
        component={HistoryView}
        options={headerOptions}
      />
      <AnalyticsStack.Screen
        name="Equipment Analytics"
        component={EquipmentView}
        options={headerOptions}
      />
      <AnalyticsStack.Screen
        name="Equipment Analytics Item"
        component={EquipmentAnalyticsView}
        options={headerOptions}
      />
    </AnalyticsStack.Navigator>
  );
}
