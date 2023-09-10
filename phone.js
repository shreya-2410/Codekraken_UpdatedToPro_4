import React, { useEffect, useState } from 'react'; 
import { View, Text, Button } from 'react-native'; 

const App = () => { 
  const [fillLevel, setFillLevel] = useState(0); // You're giving your robot a memory to remember how full the trash bin is

  useEffect(() => { 
    fetch('your-api-endpoint') 
      .then(response => response.json()) 
      .then(data => setFillLevel(data.fillLevel)) 
      .catch(error => console.error(error)); 
  }, []); 

  return (
    <View> 
      <Text>Fill Level: {fillLevel}</Text> 
      <Button title="Report Overflow" onPress={() => reportOverflow()} /> 
    </View>
  );
};

export default App; 