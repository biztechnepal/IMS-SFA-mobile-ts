import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import VerticalSpacer from '../components/VerticalSpacer';

const CompanySetUpScreen = () => {
  const [company, setCompany] = React.useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Company Name"
        mode="outlined"
        value={company}
        onChangeText={text => setCompany(text)}
      />
      <VerticalSpacer size={10} />
      <Button mode="contained">Submit</Button>
    </ScrollView>
  );
};

export default CompanySetUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
});
