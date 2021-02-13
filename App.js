import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TouchableHighlight, StyleSheet, Button, Text, View } from "react-native";


const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.container}>
       <TouchableHighlight 
            style ={{
                    height: 40,
                    width:350,
                    borderRadius:10,
                    backgroundColor : "black",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20
                }}>
            <Button
              color="orange"
              onPress={() => {
                setIsHungry(false);
              }}
              disabled={!isHungry}
              title={isHungry ? "Click me, please! " : "Thanks for visiting V4 team!"}
            />
       </TouchableHighlight> 
       <StatusBar style="auto" />
    </View>
  );
}

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
    </>
  );
}

export default Cafe;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
