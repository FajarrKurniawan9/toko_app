import { FlatList, Pressable, View } from "react-native";
import KartuProduk from "../components/KartuProduk";

const PRODUK = [
  { id: "1", nama: "Kaos Hitam", harga: 75000 },
  { id: "2", nama: "Topi", harga: 50000 },
  { id: "3", nama: "Tas", harga: 150000 },
];

export default function DaftarProduk({ navigation }) {
  return (
    <FlatList
      data={PRODUK}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Detail", { nama: item.nama })}
        >
          <KartuProduk nama={item.nama} harga={item.harga} />
        </Pressable>
      )}
    />
  );
}
