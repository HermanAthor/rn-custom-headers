import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Link } from 'expo-router';
import { BlurView } from 'expo-blur';
// import Colors from '../constants/Colors';

interface Colors {
  primary: string;
  primaryMuted: string;
  background: string;
  dark: string;
  gray: string;
  lightGray: string;
}

const Colors: Colors = {
  primary: '#3D38ED',
  primaryMuted: '#C9C8FA',
  background: '#F5F5F5',
  dark: '#141518',
  gray: '#626D77',
  lightGray: '#D8DCE2',
};

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView
      intensity={80}
      tint={'systemMaterialDark'}
      style={{ paddingTop: top }}
    >
      <View
        style={[
          styles.container,
          {
            height: 60,
            gap: 10,
            paddingHorizontal: 20,
            backgroundColor: 'transparent',
          },
        ]}
      >
        <Link href={'/(authenticated)/(modals)/account'} asChild>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: Colors.gray,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>
              HA
            </Text>
          </TouchableOpacity>
        </Link>
        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            size={20}
            color={Colors.dark}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={Colors.dark}
          />
        </View>
        <View style={styles.circle}>
          <Ionicons name={'stats-chart'} size={20} color={Colors.dark} />
        </View>
        <View style={styles.circle}>
          <Ionicons name={'card'} size={20} color={Colors.dark} />
        </View>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    backgroundColor: Colors.gray,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: Colors.lightGray,
    color: Colors.dark,
    borderRadius: 30,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export { CustomHeader };
