import React from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "./IconButton";
import colors from "../config/colors";

export default function ReaderControls() {
  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, styles.playContainer]}>
        <IconButton
          color={colors.white}
          name="ios-play"
          size={30}
          style={styles.buttons}
          title="Play"
          titleStyle={{ color: colors.white }}
        />
      </View>
      <View style={[styles.buttonContainer, styles.pauseContainer]}>
        <IconButton
          color={colors.white}
          name="ios-pause"
          size={30}
          style={styles.buttons}
          title="Pause"
          titleStyle={{ color: colors.white }}
        />
      </View>
      <View style={[styles.buttonContainer, styles.replayContainer]}>
        <IconButton
          color={colors.white}
          name="ios-refresh"
          size={30}
          style={styles.buttons}
          title="Replay"
          titleStyle={{ color: colors.white }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    height: 70,
    marginVertical: 20,
    width: 250,
  },
  buttons: {
    alignItems: "center",
  },
  iconTitles: {
    color: colors.white,
  },
  pauseContainer: {
    marginHorizontal: 5,
  },
  playContainer: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  replayContainer: {
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
});
