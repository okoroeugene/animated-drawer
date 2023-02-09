import { useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";
import React, { memo, useCallback } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { commonStyles } from "../theme/commonStyles";

type DrawerViewOptions = {
  children: any;
  navigation?: any;
};

function DrawerView({ children, navigation }: DrawerViewOptions) {
  const drawerProgress: any = useDrawerProgress();
  const viewStyles: any = useAnimatedStyle((): any => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 40]);
    const rotate = interpolate(drawerProgress.value, [0, 1], ["0deg", "-8deg"]);
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, 70]);
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 20]);
    return {
      transform: [{ scale }, { rotate }, { translateX }, { translateY }],
      borderRadius,
    };
  });

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
