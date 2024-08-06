// @ts-nocheck
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {StyledView, StyledText, StyledButton} from '@common/StyledComponents';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaProvider style={{alignContent: 'center'}}>
      <SafeAreaView edges={['right', 'left', 'top']} style={{flex: 1}}>
        <StyledView
          style={{alignItems: 'center'}}
          className="flex-1 bg-blue-400">
          <StyledText className="text-3xl mt-10">App</StyledText>
          <StyledButton title="+" onPress={() => setCounter(counter + 1)} />
          <StyledText className="text-2xl m-5">Counter: {counter}</StyledText>
          <StyledButton title="-" onPress={() => setCounter(counter - 1)} />
        </StyledView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 40,
    alignSelf: 'center',
  },
});
