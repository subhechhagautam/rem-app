import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"; // Added Image import
import { SafeAreaView } from "react-native-safe-area-context";

const ArrowIcon = require("../assets/images/weui_arrow-filled.png");
const About = () => {

    return (
        <SafeAreaView style={styles.viewBg}>
            <View style={[styles.view, styles.viewLayout]}>
                <View style={styles.child} />
                <Text style={styles.paracetamol}>Paracetamol</Text>
                <Pressable style={styles.weuiarrowFilled} onPress={() => { }}>
                    <Image style={[styles.icon, styles.viewLayout]} resizeMode="cover" source={ArrowIcon} />
                </Pressable>
                {/* ... rest of your JSX remains the same */}
                <Text style={[styles.overview, styles.overviewTypo]}>Overview</Text>
                <Text style={styles.schedule}>Schedule</Text>
                <Text style={[styles.foodTiming, styles.overviewTypo]}>Food Timing</Text>
                <View style={[styles.item, styles.itemLayout]} />
                <View style={[styles.inner, styles.itemLayout]} />
                <Text style={[styles.pills, styles.daysTypo]}>2 pills</Text>
                <Text style={[styles.days, styles.daysTypo]}>{`29 Days `}</Text>
                <Text style={[styles.left, styles.leftTypo]}>Left</Text>
                <Text style={[styles.dailyDose, styles.leftTypo]}>Daily Dose</Text>
                <View style={[styles.rectangleView, styles.childLayout1]} />
                <View style={[styles.child1, styles.childLayout1]} />
                <View style={[styles.child2, styles.childLayout1]} />
                <Text style={[styles.am, styles.amTypo]}>10:00 AM</Text>
                <Text style={[styles.pm, styles.amTypo]}>16:00 PM</Text>
                <Text style={[styles.pm1, styles.amTypo]}>22:00 PM</Text>
                <View style={styles.child3} />
                <View style={[styles.child4, styles.childLayout]} />
                <View style={[styles.child5, styles.childLayout]} />
                <Text style={[styles.before, styles.afterTypo]}>Before</Text>
                <Text style={[styles.during, styles.afterTypo]}>During</Text>
                <Text style={[styles.after, styles.afterTypo]}>After</Text>
                <View style={styles.child6} />
                <Text style={[styles.editPlan, styles.daysTypo]}>Edit Plan</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    about: {
        flex: 1,
        backgroundColor: "#f6f7fa"
    },
    viewLayout: {
        overflow: "hidden",
        width: "100%"
    },
    overviewTypo: {
        color: "#05259b",
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        fontSize: 20,
        position: "absolute"
    },
    itemLayout: {
        height: 79,
        top: 256,
        backgroundColor: "#d6ddeb",
        borderRadius: 10,
        position: "absolute"
    },
    daysTypo: {
        fontSize: 16,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    leftTypo: {
        fontFamily: "Inter-Regular",
        top: 302,
        color: "#000",
        fontSize: 16,
        textAlign: "left",
        position: "absolute"
    },
    childLayout1: {
        height: 57,
        width: 362,
        left: 22,
        backgroundColor: "#d6ddeb",
        borderRadius: 10,
        position: "absolute"
    },
    amTypo: {
        left: 49,
        color: "#000",
        fontSize: 16,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    childLayout: {
        width: 80,
        height: 45,
        top: 690,
        borderRadius: 10,
        position: "absolute"
    },
    afterTypo: {
        top: 703,
        fontSize: 16,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    child: {
        top: 0,
        left: 0,
        borderRadius: 12,
        width: 402,
        height: 194,
        backgroundColor: "#05259b",
        position: "absolute"
    },
    paracetamol: {
        marginLeft: -62,
        top: 90,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        fontSize: 20,
        color: "#fffade",
        left: "50%",
        position: "absolute"
    },
    icon: {
        height: "100%",
        width: 12
    },
    weuiarrowFilled: {
        left: 16,
        top: 16,
        width: 12,
        height: 24,
        position: "absolute"
    },
    overview: {
        top: 213,
        left: 21
    },
    schedule: {
        top: 367,
        left: 20,
        color: "#05259b",
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        fontSize: 20,
        position: "absolute"
    },
    foodTiming: {
        top: 634,
        left: 23
    },
    item: {
        left: 25,
        width: 148
    },
    inner: {
        left: 229,
        width: 153
    },
    pills: {
        left: 79,
        color: "#000",
        top: 269,
        fontSize: 16
    },
    days: {
        left: 274,
        color: "#000",
        top: 269,
        fontSize: 16
    },
    left: {
        left: 290
    },
    dailyDose: {
        left: 61
    },
    rectangleView: {
        top: 410
    },
    child1: {
        top: 477
    },
    child2: {
        top: 545
    },
    am: {
        top: 430
    },
    pm: {
        top: 496
    },
    pm1: {
        top: 565
    },
    child3: {
        width: 76,
        height: 45,
        top: 690,
        backgroundColor: "#d6ddeb",
        borderRadius: 10,
        left: 20,
        position: "absolute"
    },
    child4: {
        marginLeft: -40,
        backgroundColor: "#d6ddeb",
        width: 80,
        left: "50%"
    },
    child5: {
        left: 302,
        backgroundColor: "#05259b"
    },
    before: {
        left: 32,
        color: "#000"
    },
    during: {
        left: 174,
        color: "#000"
    },
    after: {
        left: 321,
        color: "#fffade"
    },
    child6: {
        top: 783,
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
        borderRadius: 10,
        backgroundColor: "#05259b",
        position: "absolute"
    },
    editPlan: {
        marginLeft: -35,
        top: 799,
        color: "#fffade",
        fontSize: 16,
        left: "50%"
    },
    view: {
        height: 874,
        backgroundColor: "#f6f7fa",
        flex: 1
    },
    viewBg: {
        backgroundColor: "#f6f7fa",
        flex: 1
    }
});

export default About;
