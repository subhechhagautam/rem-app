import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"; // Added Image
import { SafeAreaView } from "react-native-safe-area-context";

// Replace SVG imports with PNG imports:
const Emojionemonotoneforkandknife = require("../assets/images/emojione.png");
const Emojionemonotoneforkandknife1 = require("../assets/images/emojione.png");
const Healthiconspill1outline24px = require("../assets/images/health_icon.png");
const Healthiconspill1outline24px1 = require("../assets/images/health_icon.png");
const Emojionemonotoneforkandknife2 = require("../assets/images/emojione.png");
const Vector = require("../assets/images/ic_baseline-plus.png"); // Using existing icon
const Mingcutenotificationfill = require("../assets/images/mingcute_notification-fill.png");
const Solarhandpillsbold = require("../assets/images/mdi_pill-multiple.png"); // Using existing pill icon
const Uilcalender = require("../assets/images/ic_baseline-plus.png"); // Using existing icon
const Icbaselineplus = require("../assets/images/ic_baseline-plus.png");
const Healthiconspill1outline24px2 = require("../assets/images/health_icon.png");
const ArrowIcon = require("../assets/images/weui_arrow-filled.png");

const PlanScreen = () => {

    return (
        <SafeAreaView style={styles.viewBg}>
            <View style={[styles.view, styles.viewLayout]}>
                <View style={styles.child} />
                <View style={[styles.item, styles.itemLayout]} />
                <View style={[styles.inner, styles.innerPosition]} />
                <Text style={styles.addPlan}>Add Plan</Text>
                <Text style={[styles.medicineName, styles.amTypo]}>Medicine Name</Text>
                <Text style={[styles.durationAmount, styles.amTypo]}>{`Duration & Amount`}</Text>
                <Text style={[styles.foodTiming, styles.amTypo]}>Food Timing</Text>
                <Text style={[styles.notification, styles.amTypo]}>Notification</Text>
                <Text style={styles.done}>Done</Text>
                <View style={[styles.rectangleView, styles.child1Bg]} />
                <View style={[styles.child1, styles.child1Bg]} />
                <View style={[styles.child2, styles.childLayout]} />
                <View style={styles.child3} />
                <View style={[styles.child4, styles.child4Layout]} />
                <Pressable style={[styles.rectanglePressable, styles.daysPosition]} onPress={() => { }} />
                <View style={[styles.child5, styles.childLayout]} />
                <Text style={[styles.paracetamol, styles.amTypo]}>Paracetamol</Text>
                <Text style={[styles.pills, styles.amTypo]}>2 pills</Text>
                <Text style={[styles.days, styles.daysPosition]}>30 days</Text>
                <Text style={[styles.am, styles.amTypo]}>10:00 AM</Text>

                {/* Replace SVG components with Image components */}
                <Image source={Emojionemonotoneforkandknife} style={[styles.emojioneMonotoneforkAndKniIcon, styles.emojioneIconLayout]} />
                <Image source={Emojionemonotoneforkandknife1} style={[styles.emojioneMonotoneforkAndKniIcon1, styles.emojioneIconLayout]} />
                <Image source={Healthiconspill1outline24px} style={[styles.healthiconspill1Outline24p, styles.healthiconspill1Layout]} />
                <Image source={Healthiconspill1outline24px1} style={[styles.healthiconspill1Outline24p1, styles.healthiconspill1Layout]} />
                <Image source={Emojionemonotoneforkandknife2} style={[styles.emojioneMonotoneforkAndKniIcon2, styles.emojioneIconLayout]} />
                <View style={[styles.gridiconsdropdown, styles.weuiarrowFilledLayout]} />
                <Image source={Vector} style={[styles.vectorIcon, styles.healthiconspill1Layout]} />
                <Pressable style={[styles.weuiarrowFilled, styles.weuiarrowFilledLayout]} onPress={() => { }}>
                    <Image style={[styles.icon, styles.viewLayout]} resizeMode="cover" source={ArrowIcon} />
                </Pressable>
                <Image source={Mingcutenotificationfill} style={[styles.mingcutenotificationFillIcon, styles.iconPosition]} />
                <Image source={Solarhandpillsbold} style={[styles.solarhandPillsBoldIcon, styles.solarhandPillsBoldIconPosition]} />
                <Image source={Uilcalender} style={styles.uilcalenderIcon} />
                <Image source={Icbaselineplus} style={[styles.icbaselinePlusIcon, styles.iconPosition]} />
                <Image source={Healthiconspill1outline24px2} style={[styles.healthiconspill1Outline24p2, styles.solarhandPillsBoldIconPosition]} />
            </View>
        </SafeAreaView>);
};

// Update the icon style to remove invalid properties:
const styles = StyleSheet.create({
    planScreen: {
        flex: 1,
        backgroundColor: "#f6f7fa"
    },
    viewLayout: {
        width: "100%",
        overflow: "hidden"
    },
    itemLayout: {
        borderRadius: 5,
        backgroundColor: "#05259b",
        position: "absolute"
    },
    innerPosition: {
        top: 675,
        height: 52
    },
    amTypo: {
        color: "#000",
        fontSize: 16,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700"
    },
    child1Bg: {
        backgroundColor: "#d6ddeb",
        borderRadius: 10,
        position: "absolute"
    },
    childLayout: {
        height: 45,
        width: 153,
        top: 371,
        backgroundColor: "#d6ddeb",
        borderRadius: 10,
        position: "absolute"
    },
    child4Layout: {
        top: 500,
        height: 97,
        width: 103,
        backgroundColor: "#d6ddeb",
        borderRadius: 10
    },
    daysPosition: {
        left: 278,
        position: "absolute"
    },
    emojioneIconLayout: {
        height: 53,
        width: 53,
        position: "absolute"
    },
    healthiconspill1Layout: {
        maxWidth: "100%",
        position: "absolute"
    },
    weuiarrowFilledLayout: {
        height: 24,
        position: "absolute"
    },
    iconPosition: {
        top: 689,
        height: 24,
        width: 24,
        position: "absolute"
    },
    solarhandPillsBoldIconPosition: {
        left: 33,
        position: "absolute"
    },
    child: {
        top: 786,
        left: 95,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        width: 210,
        height: 52,
        backgroundColor: "#05259b",
        borderRadius: 10,
        position: "absolute"
    },
    item: {
        top: 29,
        width: 56,
        height: 48,
        left: 20
    },
    inner: {
        left: 330,
        width: 52,
        borderRadius: 5,
        backgroundColor: "#05259b",
        position: "absolute"
    },
    addPlan: {
        top: 122,
        fontSize: 20,
        color: "#05259b",
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        left: 20,
        position: "absolute"
    },
    medicineName: {
        top: 184,
        left: 20,
        position: "absolute"
    },
    durationAmount: {
        top: 323,
        left: 21,
        position: "absolute"
    },
    foodTiming: {
        top: 453,
        left: 20,
        position: "absolute"
    },
    notification: {
        top: 627,
        left: 21,
        position: "absolute"
    },
    done: {
        marginLeft: -20,
        top: 802,
        left: "50%",
        color: "#fffade",
        fontSize: 16,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    rectangleView: {
        top: 223,
        width: 362,
        height: 71,
        left: 19
    },
    child1: {
        width: 257,
        left: 21,
        top: 675,
        height: 52
    },
    child2: {
        left: 19
    },
    child3: {
        top: 501,
        height: 97,
        width: 103,
        backgroundColor: "#d6ddeb",
        left: 20,
        borderRadius: 10,
        position: "absolute"
    },
    child4: {
        left: 149,
        position: "absolute"
    },
    rectanglePressable: {
        top: 500,
        height: 97,
        width: 103,
        backgroundColor: "#d6ddeb",
        borderRadius: 10
    },
    child5: {
        left: 228
    },
    paracetamol: {
        top: 249,
        left: 42,
        position: "absolute"
    },
    pills: {
        top: 386,
        left: 82,
        position: "absolute"
    },
    days: {
        top: 385,
        color: "#000",
        fontSize: 16,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700"
    },
    am: {
        top: 691,
        left: 100,
        position: "absolute"
    },
    emojioneMonotoneforkAndKniIcon: {
        left: 45,
        top: 523,
        height: 53,
        width: 53
    },
    emojioneMonotoneforkAndKniIcon1: {
        left: 174,
        top: 523,
        height: 53,
        width: 53
    },
    healthiconspill1Outline24p: {
        top: 574,
        right: "48.76%",
        left: "48.26%",
        height: 12,
        width: "2.99%",
        maxWidth: "100%"
    },
    healthiconspill1Outline24p1: {
        top: 545,
        right: "8.21%",
        left: "88.81%",
        height: 12,
        width: "2.99%",
        maxWidth: "100%"
    },
    emojioneMonotoneforkAndKniIcon2: {
        top: 522,
        left: 303
    },
    gridiconsdropdown: {
        top: 727,
        left: 231,
        width: 24,
        height: 24,
        overflow: "hidden"
    },
    vectorIcon: {
        height: "0.57%",
        width: "2.49%",
        top: "79.86%",
        right: "37.06%",
        bottom: "19.57%",
        left: "60.45%",
        maxHeight: "100%"
    },
    icon: {
        height: "100%",
        width: 12 // Fixed: removed nodeWidth and nodeHeight
    },
    weuiarrowFilled: {
        top: 41,
        width: 12,
        left: 42
    },
    mingcutenotificationFillIcon: {
        left: 40
    },
    solarhandPillsBoldIcon: {
        top: 381,
        width: 26,
        height: 26
    },
    uilcalenderIcon: {
        top: 383,
        left: 237,
        width: 22,
        height: 22,
        position: "absolute"
    },
    icbaselinePlusIcon: {
        left: 344
    },
    healthiconspill1Outline24p2: {
        top: 549,
        width: 12,
        height: 12
    },
    view: {
        height: 874,
        overflow: "hidden",
        backgroundColor: "#f6f7fa",
        flex: 1
    },
    viewBg: {
        backgroundColor: "#f6f7fa",
        flex: 1
    }
});

export default PlanScreen;