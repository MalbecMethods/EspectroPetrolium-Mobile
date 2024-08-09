import { View, Text } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';

export default function ListPage() {
  return (
    <View className="flex flex-1">
      <Header />
      <List />
      <Footer />
    </View>
  );
}

function List() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl">chau</Text>
    </View>
  );
}
