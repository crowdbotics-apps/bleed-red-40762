import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3df7054a-a4d9-4647-a93c-1db0dbf1dc37"
        }}
        style={styles.ImageBackground_173_44}
      />
      <View style={styles.View_172_310}>
        <View style={styles.View_172_311}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d505e61c-7511-4446-b588-a3d766058dab"
            }}
            style={styles.ImageBackground_172_312}
          />
        </View>
      </View>
      <View style={styles.View_173_40}>
        <View style={styles.View_173_21} />
        <View style={styles.View_173_39}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/929f1e1d-8269-4586-9931-431b63f19c1e"
            }}
            style={styles.ImageBackground_173_33}
          />
          <View style={styles.View_173_37}>
            <View style={styles.View_173_38}>
              <Text style={styles.Text_173_38}>Pantho</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_173_45} />
      <View style={styles.View_173_23}>
        <View style={styles.View_173_24}>
          <Text style={styles.Text_173_24}>Blood Donation App</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_173_44: {
    width: wp("343%"),
    minWidth: wp("343%"),
    height: hp("343%"),
    minHeight: hp("343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-43%"),
    top: hp("-19%")
  },
  View_172_310: {
    width: wp("9%"),
    height: hp("13%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_172_311: {
    width: wp("9%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_172_312: {
    width: wp("9%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_173_40: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("7%")
  },
  View_173_21: {
    width: wp("66%"),
    height: hp("85%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10
  },
  View_173_39: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("12%")
  },
  ImageBackground_173_33: {
    width: wp("24%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_173_37: {
    width: wp("50%"),
    height: hp("11%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_173_38: {
    width: wp("50%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_173_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.424083709716797,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_173_45: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67%"),
    backgroundColor: "rgba(255, 0, 0, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0
  },
  View_173_23: {
    width: wp("82%"),
    height: hp("13%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_173_24: {
    width: wp("82%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_173_24: {
    color: "rgba(242, 244, 247, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
