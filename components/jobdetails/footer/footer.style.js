import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
  },
  applyBtn: {
    backgroundColor: COLORS.tertiary,
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtnText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
});

export default styles;
