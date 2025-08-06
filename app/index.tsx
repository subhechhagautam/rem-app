import { router } from 'expo-router';
import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"; // Added Pressable
import { SafeAreaView } from "react-native-safe-area-context";


// Replace the SVG imports with PNG imports:
const Icbaselineplus = require("../assets/images/ic_baseline-plus.png");
const Materialsymbolsperson = require("../assets/images/material-symbols_person.png");
const Materialsymbolssearch = require("../assets/images/material-symbols_search.png");
const Mdipillmultiple = require("../assets/images/mdi_pill-multiple.png");

const Page = () => {
  return (
    <SafeAreaView style={styles.pageBg}>
      <View style={[styles.view, styles.pageBg]}>
        <View style={styles.searchBar} />

        {/* Make medicine info boxes clickable */}
        <Pressable style={[styles.medicineInfo1, styles.medicineLayout]} onPress={() => router.push('/about')} />
        <Pressable style={[styles.medicineInfo2, styles.medicineLayout]} onPress={() => router.push('/about')} />
        <Pressable style={[styles.medicineInfo3, styles.medicineLayout]} onPress={() => router.push('/about')} />
        <Pressable style={[styles.medicineInfo4, styles.medicineLayout]} onPress={() => router.push('/about')} />

        <Text style={[styles.hello, styles.helloTypo]}>Hello</Text>
        <Text style={[styles.dailyReview, styles.helloTypo]}>Daily Review</Text>
        <Text style={[styles.username, styles.searchTypo]}>Username</Text>
        <View style={styles.child} />

        {/* Make medicine names clickable */}
        <Pressable onPress={() => router.push('/about')}>
          <Text style={[styles.paracetamol, styles.paracetamolTypo]}>Paracetamol</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/about')}>
          <Text style={[styles.paracetamol1, styles.amPosition]}>Paracetamol</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/about')}>
          <Text style={[styles.paracetamol2, styles.paracetamolTypo]}>Paracetamol</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/about')}>
          <Text style={[styles.paracetamol3, styles.am1Position]}>Paracetamol</Text>
        </Pressable>

        <Text style={[styles.am, styles.amPosition]}>10:00AM</Text>
        <Text style={[styles.am1, styles.am1Position]}>10:00AM</Text>
        <Text style={[styles.am2, styles.paracetamolTypo]}>10:00AM</Text>
        <Text style={[styles.am3, styles.paracetamolTypo]}>10:00AM</Text>
        <Image source={Materialsymbolsperson} style={styles.materialSymbolspersonIcon} />
        <Pressable onPress={() => router.push('./plan_screen')}>
          <Image source={Icbaselineplus} style={[styles.icbaselinePlusIcon, styles.iconLayout]} />
        </Pressable>
        <Image source={Materialsymbolssearch} style={[styles.materialSymbolssearchIcon, styles.iconLayout]} />
        <Text style={[styles.search, styles.searchTypo]}>Search</Text>

        {/* Make pill icons clickable */}
        <Pressable onPress={() => router.push('/about')}>
          <Image source={Mdipillmultiple} style={[styles.mdipillMultipleIcon, styles.mdipillIconLayout]} />
        </Pressable>
        <Pressable onPress={() => router.push('/about')}>
          <Image source={Mdipillmultiple} style={[styles.mdipillMultipleIcon1, styles.mdipillIconLayout]} />
        </Pressable>
        <Pressable onPress={() => router.push('/about')}>
          <Image source={Mdipillmultiple} style={[styles.mdipillMultipleIcon2, styles.mdipillIconLayout]} />
        </Pressable>
        <Pressable onPress={() => router.push('/about')}>
          <Image source={Mdipillmultiple} style={[styles.mdipillMultipleIcon3, styles.mdipillIconLayout]} />
        </Pressable>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f6f7fa"
  },
  pageBg: {
    backgroundColor: "#f6f7fa",
    flex: 1
  },
  medicineLayout: {
    height: 96,
    width: 362,
    backgroundColor: "#d6ddeb",
    borderRadius: 10,
    position: "absolute"
  },
  helloTypo: {
    textAlign: "left",
    color: "#05259b",
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    fontSize: 20,
    position: "absolute"
  },
  searchTypo: {
    color: "#000",
    fontFamily: "Inter-Regular",
    textAlign: "left",
    position: "absolute"
  },
  paracetamolTypo: {
    fontSize: 16,
    color: "#000",
    textAlign: "left",
    position: "absolute"
  },
  amPosition: {
    left: 101,
    fontSize: 16,
    color: "#000",
    textAlign: "left",
    position: "absolute"
  },
  am1Position: {
    left: 102,
    fontSize: 16,
    color: "#000",
    textAlign: "left",
    position: "absolute"
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden"
  },
  mdipillIconLayout: {
    height: 29,
    width: 29,
    left: 46,
    position: "absolute",
    overflow: "hidden"
  },
  searchBar: {
    top: 45,
    height: 49,
    width: 362,
    backgroundColor: "#d6ddeb",
    borderRadius: 10,
    left: 20,
    position: "absolute"
  },
  medicineInfo1: {
    top: 267,
    left: 28
  },
  medicineInfo2: {
    top: 396,
    left: 21
  },
  medicineInfo3: {
    top: 525,
    left: 20,
    height: 96
  },
  medicineInfo4: {
    top: 654,
    left: 21
  },
  hello: {
    top: 129,
    left: 19,
    textAlign: "left",
    color: "#05259b"
  },
  dailyReview: {
    top: 215,
    left: 21
  },
  username: {
    top: 160,
    fontSize: 20,
    color: "#000",
    left: 19
  },
  child: {
    top: 800,
    left: 174,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 5,
    backgroundColor: "#05259b",
    width: 56,
    height: 48,
    position: "absolute"
  },
  paracetamol: {
    top: 288,
    left: 100,
    fontSize: 16,
    fontFamily: "Inter-Bold",
    fontWeight: "700"
  },
  paracetamol1: {
    top: 416,
    fontFamily: "Inter-Bold",
    fontWeight: "700"
  },
  paracetamol2: {
    top: 545,
    left: 99,
    fontFamily: "Inter-Bold",
    fontWeight: "700"
  },
  paracetamol3: {
    top: 679,
    fontFamily: "Inter-Bold",
    fontWeight: "700"
  },
  am: {
    top: 315,
    fontFamily: "Inter-Regular"
  },
  am1: {
    top: 443,
    fontFamily: "Inter-Regular"
  },
  am2: {
    top: 572,
    left: 100,
    fontSize: 16,
    fontFamily: "Inter-Regular"
  },
  am3: {
    top: 706,
    left: 103,
    fontFamily: "Inter-Regular"
  },
  materialSymbolspersonIcon: {
    top: 116,
    left: 315,
    width: 74,
    height: 74,
    position: "absolute",
    overflow: "hidden"
  },
  icbaselinePlusIcon: {
    top: 812,
    left: 190
  },
  materialSymbolssearchIcon: {
    top: 58,
    left: 31
  },
  search: {
    top: 61,
    left: 68,
    fontSize: 14
  },
  mdipillMultipleIcon: {
    top: 301
  },
  mdipillMultipleIcon1: {
    top: 428
  },
  mdipillMultipleIcon2: {
    top: 555
  },
  mdipillMultipleIcon3: {
    top: 687
  },
  view: {
    width: "100%",
    height: 874,
    overflow: "hidden"
  }
});

export default Page;