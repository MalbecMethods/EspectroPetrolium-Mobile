import { Link } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top, backgroundColor: 'rgb(55, 140, 163)' }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between">
        <Link className="font-bold flex-1 items-center justify-center" href="/">
          <View style={styles.logoContainer}>
            <Image source={require('../../../public/images/logo.png')} style={styles.logo} />
          </View>
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/dashboard"
            style={{ color: 'white' }}
          >
            Dashboard
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/list"
            style={{ color: 'white' }}
          >
            List
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/maps"
            style={{ color: 'white' }}
          >
            Maps
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/login"
            style={{ color: 'white' }}
          >
            Login
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 50,
    height: 50,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
