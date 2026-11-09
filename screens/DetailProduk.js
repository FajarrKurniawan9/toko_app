import { ScrollView, Text } from 'react-native';

export default function DetailProduk({ route }) {
  const { nama } = route.params;
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{nama}</Text>
      <Text>Deskripsi produk yang panjang...</Text>
    </ScrollView>
  );
}