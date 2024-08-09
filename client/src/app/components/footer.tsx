import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6">
        <Text style={styles.textCenter}>
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
    color: '#4A5568',
  },
});
