import { StyleSheet, Text, View } from 'react-native';

export const style = StyleSheet.create({
  container: (c) => ({
    flex: 1,
    backgroundColor: c,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  ts: (s) => ({fontSize:s, color: 'yellow'})
});