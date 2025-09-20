import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>🏠 Home Screen</Text>
      <Text>Đây là tab Home</Text>
    </View>
  );
}
