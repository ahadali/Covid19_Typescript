import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeComponent from '../components/Home';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <HomeComponent />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
      flex : 1
  }
});
