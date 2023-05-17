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
      <View style={styles.View_171_900}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/100c8daa-b074-466a-b738-3db44e6b33d1"
          }}
          style={styles.ImageBackground_171_1005}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36538c0a-569e-4867-ae46-992220fbb255"
          }}
          style={styles.ImageBackground_171_901}
        />
        <View style={styles.View_171_906}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5865984e-7bd7-453c-a545-9dd08754688c"
            }}
            style={styles.ImageBackground_171_907}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3b8f9bb-5253-48da-91f2-530cee377ee6"
            }}
            style={styles.ImageBackground_171_909}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c121059-3968-4c89-9594-a9fbf68b7ee0"
            }}
            style={styles.ImageBackground_171_911}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c2a3f57-fda1-4105-bbd6-4420fa898871"
            }}
            style={styles.ImageBackground_171_913}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/475be81b-b503-41f6-b777-7bb90b040b41"
            }}
            style={styles.ImageBackground_171_915}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/022abfca-38f5-4685-b660-173897e6d09d"
            }}
            style={styles.ImageBackground_171_916}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1b03857-4ac3-4d25-8fe7-1b6a29cdc739"
            }}
            style={styles.ImageBackground_171_917}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4a00edf-55fb-4fa6-b519-484bf459016f"
            }}
            style={styles.ImageBackground_171_919}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a81e8cd1-5466-4bec-bbf7-4cdc3a0c0631"
            }}
            style={styles.ImageBackground_171_920}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0014faff-eb5a-4a62-9452-2c6ae2a888d3"
            }}
            style={styles.ImageBackground_171_924}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c65260a-7565-4868-a5af-6c9d0284805a"
            }}
            style={styles.ImageBackground_171_928}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddbe3d81-ee69-48ba-aad9-cd1c5c47dcda"
            }}
            style={styles.ImageBackground_171_934}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51837050-7ab9-4a7c-b2da-3129466b4917"
            }}
            style={styles.ImageBackground_171_958}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6d3d95d-7355-4753-b9c0-bab53bf62684"
          }}
          style={styles.ImageBackground_171_979}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3ef8667-75a5-4259-b62b-4a7adbc69409"
          }}
          style={styles.ImageBackground_171_996}
        />
        <View style={styles.View_171_989}>
          <View style={styles.View_171_990}>
            <Text style={styles.Text_171_990}>Pantho</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ffd7c1e-94fa-4b8b-89c7-d0ad33a23495"
        }}
        style={styles.ImageBackground_162_533}
      />
      <View style={styles.View_171_892}>
        <Text style={styles.Text_171_892}>Blood Donation Figma Prototype</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f81452bc-71fc-4935-8835-ba03a73b1e67"
        }}
        style={styles.ImageBackground_171_893}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b27c4fcc-bd52-4e55-832c-65aca183f3e8"
        }}
        style={styles.ImageBackground_171_1000}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f5238c3-1e6c-4ce6-9550-9a2c03b69a7b"
        }}
        style={styles.ImageBackground_171_1001}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2502676c-0e5f-4fe3-90e5-070e2dc4eb32"
        }}
        style={styles.ImageBackground_171_991}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a014ce8-753e-4529-884e-e235bba177fb"
        }}
        style={styles.ImageBackground_171_992}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_171_900: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("112%"),
    minHeight: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_171_1005: {
    width: wp("94%"),
    height: hp("54%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_171_901: {
    width: wp("124%"),
    height: hp("143%"),
    top: hp("-6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15%")
  },
  View_171_906: {
    width: wp("93%"),
    height: hp("124%"),
    top: hp("-4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%")
  },
  ImageBackground_171_907: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_171_909: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_171_911: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_171_913: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_171_915: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  ImageBackground_171_916: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_171_917: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_171_919: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_171_920: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_171_924: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_171_928: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_171_934: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_171_958: {
    width: wp("3%"),
    height: hp("26%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_171_979: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("70%")
  },
  ImageBackground_171_996: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("83%")
  },
  View_171_989: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("7%")
  },
  View_171_990: {
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_990: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_162_533: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("121%"),
    top: hp("70%")
  },
  View_171_892: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_171_892: {
    color: "rgba(242, 244, 247, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_893: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("35%")
  },
  ImageBackground_171_1000: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("44%")
  },
  ImageBackground_171_1001: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("63%")
  },
  ImageBackground_171_991: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("26%"),
    resizeMode: "cover"
  },
  ImageBackground_171_992: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("59%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
