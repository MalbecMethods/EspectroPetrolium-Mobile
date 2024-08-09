import { View, Text } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';

export default function MapsPage() {
  return (
    <View className="flex flex-1">
      <Header />
      <Maps />
      <Footer />
    </View>
  );
}

function Maps() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl">maps</Text>
    </View>
  );
}