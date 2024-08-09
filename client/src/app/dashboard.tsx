import { View, Text } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';

export default function DashboardPage() {
  return (
    <View className="flex flex-1">
      <Header />
      <Dashboard />
      <Footer />
    </View>
  );
}

function Dashboard() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl">Hola</Text>
    </View>
  );
}
