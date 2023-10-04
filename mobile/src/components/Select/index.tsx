import React from 'react';
import { Picker, View, Text } from 'react-native'

export class SubjectChoice extends React.Component {
  state = { subject: '', };

  render() {
    const subject = this.state.subject;

    return (
      <View>
        <Picker
          selectedValue={this.state.subject}
          onValueChange={
            (itemValue, itemIndex) =>
              this.setState({ subject: itemValue })
          }
        >
          <Picker.Item value='Arts' label='Arts' />,
          <Picker.Item value='Biology' label='Biology' />,
          <Picker.Item value='Sciences' label='Sciences' />,
          <Picker.Item value='Physical Education' label='Physical Education' />,
          <Picker.Item value='Geography' label='Geography' />,
          <Picker.Item value='History' label='History' />,
          <Picker.Item value='Math' label='Math' />,
          <Picker.Item value='Portuguese' label='Portuguese' />,
          <Picker.Item value='Chemistry' label='Chemistry' />,
          <Picker.Item value='Physics' label='Physics' />,
        </Picker>
        <Text>{subject}</Text>
      </View>
    )
  }
};

export class DayChoice extends React.Component {
  state = { week_day: '' };

  render() {
    const week_day = this.state.week_day;

    return (
      <View>
        <Picker
          selectedValue={this.state.week_day}
          onValueChange={
            (itemValue, itemIndex) =>
              this.setState({ week_day: itemValue })
          }
        >
          <Picker.Item value='0' label='Sunday' />,
          <Picker.Item value='1' label='Monday' />,
          <Picker.Item value='2' label='Tuesday' />,
          <Picker.Item value='3' label='Wednesday' />,
          <Picker.Item value='4' label='Thursday' />,
          <Picker.Item value='5' label='Friday' />,
          <Picker.Item value='6' label='Saturday' />,
        </Picker>
        <Text>{week_day}</Text>
      </View>
    )
  }
};