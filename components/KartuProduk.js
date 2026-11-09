import { View, Text, StyleSheet } from 'react-native';

export default function KartuProduk({ nama, harga }) {
  return (
    <View style={styles.kartu}>
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.harga}>Rp {harga}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: { backgroundColor: '#fff', padding: 16,
           borderRadius: 12, elevation: 2 },
  nama:  { fontSize: 16, fontWeight: '600' },
  harga: { color: '#2f5bea', marginTop: 4 },
});
