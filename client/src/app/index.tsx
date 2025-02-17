import { View, Image, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Footer from './components/footer';
import Header from './components/header';

export default function Page() {
  return (
    <View className="flex flex-1">
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

function Content() {
  return (
    <View className="flex-1" style={{ backgroundColor: 'rgb(42,97,112)' }}>
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Image source={require('../../public/images/image.png')} style={styles.imagen} />
            <Text
              role="heading"
              className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ color: 'white' }}
            >
              Analiza, visualiza y descarga tus datos de hidrocarburos con nuestro software
            </Text>
            <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
              Aprovecha todo el poder de nuestro software para analizar tus datos de manera sensacional y sencilla. Evaluamos tus datos para futuras decisiones en tu empresa, a partir del comportamiento de los datos en el tiempo.
            </Text>
            <View className="gap-4">
              <Link
                suppressHighlighting
                className="flex h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/"
              >
                Analizar Datos
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: 300,
    height: 180,
    opacity: 0.8,
    borderRadius: 10,
  },
});
