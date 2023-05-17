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
      <View style={styles.View_163_787}>
        <View style={styles.View_173_46}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b0d93eb-e948-4b83-87f5-076242374150"
            }}
            style={styles.ImageBackground_173_47}
          />
          <View style={styles.View_173_52}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0e992d5-ded2-4834-89df-df66eb183993"
              }}
              style={styles.ImageBackground_173_53}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2a1ce74-48dc-4697-8c17-639c1bb8d3ce"
              }}
              style={styles.ImageBackground_173_55}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ff14f8e-651a-45a5-805d-c1febb8775ae"
              }}
              style={styles.ImageBackground_173_57}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86c33046-e356-4144-a932-47a1cf2524e3"
              }}
              style={styles.ImageBackground_173_59}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66bab623-198d-4050-a16a-fe826a83ee08"
              }}
              style={styles.ImageBackground_173_61}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95850d91-53ba-403e-98c4-68e68fa683c4"
              }}
              style={styles.ImageBackground_173_62}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d58ad8e-553e-447c-b25f-720757aa34e1"
              }}
              style={styles.ImageBackground_173_63}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c78ba02e-6d61-4bd6-8fa2-96a74112d200"
              }}
              style={styles.ImageBackground_173_64}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c78ec82-e634-4fc0-a6e0-88c9441bf6ae"
              }}
              style={styles.ImageBackground_173_65}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56929c23-9ad8-4609-b974-b6d7244237b6"
              }}
              style={styles.ImageBackground_173_66}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0ec466a-ed7f-49bc-901f-6543e355f11b"
              }}
              style={styles.ImageBackground_173_70}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33c34d1c-5b3f-4e95-9bf5-e9b285fcd333"
              }}
              style={styles.ImageBackground_173_74}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34e4cadf-5119-42e5-a2a2-1488eae702ff"
              }}
              style={styles.ImageBackground_173_77}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f823aae-2eb0-47ce-9264-9862c66a7e76"
              }}
              style={styles.ImageBackground_173_80}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90906bef-638c-4ba8-9b0c-7b3644c0169b"
              }}
              style={styles.ImageBackground_173_83}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f96c7c6c-467b-454a-988a-d6842ad8086a"
              }}
              style={styles.ImageBackground_173_104}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99504549-f1f5-4325-82b6-842ce833d9e4"
            }}
            style={styles.ImageBackground_173_125}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6c89628-6dfd-4dac-a596-e14b6c26fb1c"
            }}
            style={styles.ImageBackground_173_126}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36f96c6f-83c9-40e1-b5ff-816cf4fd3f87"
            }}
            style={styles.ImageBackground_173_129}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24605a78-35e4-4ffb-93f3-cf3f8f862904"
            }}
            style={styles.ImageBackground_173_130}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a458ba39-e074-4674-ae0b-505f3c75ed59"
          }}
          style={styles.ImageBackground_163_786}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9545aa5d-2a84-4c6e-82d8-e2d3aa805442"
          }}
          style={styles.ImageBackground_163_891}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6956d5cd-6fb8-4acf-b1a0-92647a7d565d"
          }}
          style={styles.ImageBackground_163_892}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f4d6183-d394-4ca4-8687-bae2c468ff6d"
          }}
          style={styles.ImageBackground_163_894}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca540e74-8430-4d03-91f6-488381412655"
          }}
          style={styles.ImageBackground_163_893}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73d78973-1302-4611-87c6-f5eb5c3cc2b3"
          }}
          style={styles.ImageBackground_163_896}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2fb7b8c-c0aa-4888-8133-ee7b469f87da"
          }}
          style={styles.ImageBackground_163_897}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6a0ada2-36b7-43fe-8d71-fd26c8b11d2b"
          }}
          style={styles.ImageBackground_163_901}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d867e68-0fe8-45e3-94c6-e16aceaf04c8"
          }}
          style={styles.ImageBackground_163_898}
        />
      </View>
      <View style={styles.View_162_633}>
        <Text style={styles.Text_162_633}>Mobile App &amp; Landing Page</Text>
      </View>
      <View style={styles.View_162_650}>
        <Text style={styles.Text_162_650}>Blood Donation Figma Prototype</Text>
      </View>
      <View style={styles.View_163_903}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/addc4ec7-1675-49b7-905e-6dced2c56ee9"
          }}
          style={styles.ImageBackground_163_904}
        />
      </View>
      <View style={styles.View_163_902}>
        <View style={styles.View_162_634}>
          <View style={styles.View_162_635}>
            <View style={styles.View_162_636} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73b1ee61-5a0d-4d37-8423-940a58239213"
          }}
          style={styles.ImageBackground_162_7}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 248, 251, 1)" },
  View_2: { height: hp("100%") },
  View_163_787: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("112%"),
    minHeight: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("-12%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_173_46: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_173_47: {
    width: wp("71%"),
    height: hp("142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%")
  },
  View_173_52: {
    width: wp("64%"),
    height: hp("152%"),
    top: hp("-5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_173_53: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_173_55: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_173_57: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_173_59: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_173_61: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_173_62: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_173_63: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_173_64: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_173_65: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_173_66: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_173_70: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_173_74: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_173_77: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_173_80: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_173_83: {
    width: wp("2%"),
    height: hp("32%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_173_104: {
    width: wp("2%"),
    height: hp("32%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_173_125: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("29%")
  },
  ImageBackground_173_126: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("61%")
  },
  ImageBackground_173_129: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99%"),
    top: hp("45%")
  },
  ImageBackground_173_130: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("176%")
  },
  ImageBackground_163_786: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("23%"),
    resizeMode: "cover"
  },
  ImageBackground_163_891: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("15%"),
    resizeMode: "cover"
  },
  ImageBackground_163_892: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("64%"),
    resizeMode: "cover"
  },
  ImageBackground_163_894: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("94%"),
    resizeMode: "cover"
  },
  ImageBackground_163_893: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("81%"),
    resizeMode: "cover"
  },
  ImageBackground_163_896: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%")
  },
  ImageBackground_163_897: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("15%")
  },
  ImageBackground_163_901: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("32%")
  },
  ImageBackground_163_898: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("16%")
  },
  View_162_633: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_162_633: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8.622747421264648,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_162_650: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_162_650: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26.13864517211914,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_903: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("15%")
  },
  ImageBackground_163_904: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_163_902: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("77%")
  },
  View_162_634: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_162_635: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_162_636: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_162_7: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
