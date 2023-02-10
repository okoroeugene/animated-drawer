import { useDrawerProgress } from "@react-navigation/drawer";
import React, { memo, useCallback } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { commonStyles } from "../theme/commonStyles";
import { useDispatch } from "react-redux";
import { persistDerivedValue } from "../redux/actions/navigation";

interface DrawerViewOptions {
  children: any;
  navigation?: any;
}

function DrawerView({ children, navigation }: DrawerViewOptions) {
  const dispatch = useDispatch();
  const drawerProgress: any = useDrawerProgress();
  const animatedValue = useSharedValue(0);
  const derivedValue = useDerivedValue(() => {
    animatedValue.value = drawerProgress.value;
    return drawerProgress.value;
  });

  const viewStyles: any = useAnimatedStyle(() => {
    const scale = interpolate(derivedValue.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(derivedValue.value, [0, 1], [1, 40]);
    const rotate = interpolate(derivedValue.value, [0, 1], [0, -8]);

    return {
      borderRadius,
      transform: [{ scale }, { rotateZ: `${rotate}deg` }],
    };
  });

  /**dispatch shared value to redux so we can use animation in other components */
  dispatch(persistDerivedValue({ animatedValue: animatedValue }));

  const handleToggle = useCallback(() => navigation.toggleDrawer(), []);

  return (
    <Animated.View style={[styles.container, viewStyles]}>
      <SafeAreaView style={styles.innerWrapper}>
        <TouchableOpacity onPress={handleToggle}>
          <Ionicons name="menu" size={32} color={commonStyles.primaryColor} />
        </TouchableOpacity>
        {children}
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  innerWrapper: {
    flex: 1,
  },
});

export default memo(DrawerView);
