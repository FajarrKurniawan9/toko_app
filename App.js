import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DaftarProduk from "./screens/DaftarProduk";
import DetailProduk from "./screens/DetailProduk";
import Keranjang from "./screens/KeranjangProduk";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BerandaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Daftar" component={DaftarProduk} />
      <Stack.Screen name="Detail" component={DetailProduk} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Beranda" component={BerandaStack} />
        <Tab.Screen name="Keranjang" component={Keranjang} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
