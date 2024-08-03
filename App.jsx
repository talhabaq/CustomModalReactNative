import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
const App = () => {
  const [show, setShow] = useState(false)
  return (
    <View style={styles.container}>
      {
        show ?
          <View style={styles.modal}>
            <View style={styles.body}>
              <Text style={styles.text}>TALHA BAQAR</Text>
              <Button title='close modal' onPress={()=>setShow(false)} />
            </View>
          </View> :
          null
      }

      <Button title='open dialog' onPress={()=>setShow(true)} />
    </View>


  )
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: "flex-end"
  },
  modal:
  {
    flex: 1,
    backgroundColor: "rgba(50,50,50,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  body:
  {
    backgroundColor: "#fff",
    height: 300,
    width: 300,
    justifyContent: "center",
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
})



export default App
