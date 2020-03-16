import React from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Divider} from 'react-native-elements';

export default function DatePickerContainer(props) {
  return (
    <View>
      <div>
        <DateTimePicker
          mode="date"
          id="start-date-picker"
          label="Start date"
          value={props.startDate}
          format="MM/DD/YYYY"
          onChange={props.handleStartDateChange}
        />
      </div>
      <div>
        <DateTimePicker
          mode="date"
          id="end-date-picker"
          label="End date"
          value={props.endDate}
          format="MM/DD/YYYY"
          onChange={props.handleEndDateChange}
        />
      </div>
      <Divider />
    </View>
  );
}