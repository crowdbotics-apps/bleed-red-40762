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
      <View style={styles.View_221_1835}>
        <View style={styles.View_221_1836}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b01edcc9-9ae1-4ede-9610-ad8870b5a6f5"
            }}
            style={styles.ImageBackground_221_1837}
          />
          <View style={styles.View_221_1841}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e705300-6293-4a59-b426-f4cee6e33fbc"
              }}
              style={styles.ImageBackground_221_1842}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b854484-5644-4867-8b6b-e103d7f192ba"
              }}
              style={styles.ImageBackground_221_1844}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e605ea38-56d8-4edd-90c3-c7b820ed5085"
              }}
              style={styles.ImageBackground_221_1846}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9519d4c-1b89-472a-90c9-a500b1a97519"
              }}
              style={styles.ImageBackground_221_1848}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adb45f1f-41a4-42b2-ba16-d85e7aee36f5"
              }}
              style={styles.ImageBackground_221_1850}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6230072-5a3e-4149-a4ff-3b74a616dcaf"
              }}
              style={styles.ImageBackground_221_1851}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4c78469-3d2d-4714-9ca9-370d56c74144"
              }}
              style={styles.ImageBackground_221_1852}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec716b3e-97f6-4a18-986c-c2663bcfd582"
              }}
              style={styles.ImageBackground_221_1853}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ec5e914-e824-4d2a-a586-c1b953a3643f"
              }}
              style={styles.ImageBackground_221_1854}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/275e0d56-69eb-49da-8848-622e920d1dd4"
              }}
              style={styles.ImageBackground_221_1858}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e1386da-a5f5-4b39-9d6d-449496674aad"
              }}
              style={styles.ImageBackground_221_1862}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6aab8f3a-3ca0-4591-87e4-3449b03ef4b1"
              }}
              style={styles.ImageBackground_221_1865}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f803330c-ff9a-445e-bca4-9307cbc04d07"
              }}
              style={styles.ImageBackground_221_1868}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dec8c17-0a3c-47b4-b634-346ebd956749"
            }}
            style={styles.ImageBackground_221_1889}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bea984cb-8c4a-4be1-bd58-f552579df78e"
        }}
        style={styles.ImageBackground_221_1893}
      />
      <View style={styles.View_221_1895}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5344ec20-bd38-462d-84c8-1758640acf65"
          }}
          style={styles.ImageBackground_221_1896}
        />
        <View style={styles.View_221_1897}>
          <Text style={styles.Text_221_1897}>Blood</Text>
        </View>
        <View style={styles.View_221_1898}>
          <Text style={styles.Text_221_1898}>Donation</Text>
        </View>
        <View style={styles.View_221_1899}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/190c53d1-6e27-464f-9cdc-7d22cea56444"
            }}
            style={styles.ImageBackground_221_1900}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2299d018-6454-49fe-8116-edbcd95b9e78"
            }}
            style={styles.ImageBackground_221_1901}
          />
        </View>
      </View>
      <View style={styles.View_221_1908}>
        <View style={styles.View_221_1909}>
          <View style={styles.View_221_1910}>
            <View style={styles.View_221_1911} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41b22203-e8b2-415d-a440-9854dd6fcb1c"
          }}
          style={styles.ImageBackground_221_1912}
        />
      </View>
      <View style={styles.View_221_1918}>
        <View style={styles.View_221_1919}>
          <View style={styles.View_221_1920}>
            <Text style={styles.Text_221_1920}>Pantho</Text>
          </View>
        </View>
        <View style={styles.View_221_1921}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/279021eb-85f5-4daf-a6c4-2a270bc3f7a4"
            }}
            style={styles.ImageBackground_221_1922}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("164%") },
  View_221_1835: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("201%"),
    minHeight: hp("201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-18%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_221_1836: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("225%"),
    minHeight: hp("225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_221_1837: {
    width: wp("122%"),
    height: hp("259%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15%")
  },
  View_221_1841: {
    width: wp("94%"),
    height: hp("249%"),
    top: hp("-8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%")
  },
  ImageBackground_221_1842: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_221_1844: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_221_1846: {
    width: wp("1%"),
    height: hp("18%"),
    top: hp("151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_221_1848: {
    width: wp("1%"),
    height: hp("18%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_221_1850: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  ImageBackground_221_1851: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_221_1852: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_221_1853: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_221_1854: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_221_1858: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_221_1862: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_221_1865: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_221_1868: {
    width: wp("3%"),
    height: hp("52%"),
    top: hp("189%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_221_1889: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("118%"),
    minHeight: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("167%")
  },
  ImageBackground_221_1893: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("169%"),
    minHeight: hp("169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("-2%")
  },
  View_221_1895: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("134%"),
    minHeight: hp("134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%")
  },
  ImageBackground_221_1896: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("134%"),
    minHeight: hp("134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_221_1897: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_221_1897: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 120,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -9,
    textTransform: "none"
  },
  View_221_1898: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_221_1898: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 120,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -9,
    textTransform: "none"
  },
  View_221_1899: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("134%"),
    minHeight: hp("134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_221_1900: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("134%"),
    minHeight: hp("134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_221_1901: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("134%"),
    minHeight: hp("134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_221_1908: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("82%")
  },
  View_221_1909: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_221_1910: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_221_1911: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_221_1912: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_221_1918: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%")
  },
  View_221_1919: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2%")
  },
  View_221_1920: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_221_1920: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44.29411697387695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_221_1921: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_221_1922: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
