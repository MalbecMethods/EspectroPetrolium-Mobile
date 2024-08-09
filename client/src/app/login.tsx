import { View, Text } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';

export default function LoginPage() {
  return (
    <View className="flex flex-1">
      <Header />
      <Login />
      <Footer />
    </View>
  );
}

function Login() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl">login</Text>
    </View>
  );
}