import React, {useRef, useState} from 'react';

import {Button, SafeAreaView, StyleSheet} from 'react-native';

import Rive, {RiveRef} from 'rive-react-native';

function App(): React.JSX.Element {
  const [selected, setSelected] = useState(false);
  const riveRef = useRef<RiveRef>(null);

  return (
    <SafeAreaView style={styles.bg}>
      <Button
        onPress={() => {
          riveRef.current?.setInputState(
            'ToggleIcon',
            'IconSelected',
            selected,
          );
          setSelected(!selected);
        }}
        title="Select"
      />
      <Rive
        ref={riveRef}
        resourceName={'program'}
        style={styles.rive}
        stateMachineName={'ToggleIcon'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'black',
  },
  rive: {
    width: 200,
    height: 200,
  },
});

export default App;
