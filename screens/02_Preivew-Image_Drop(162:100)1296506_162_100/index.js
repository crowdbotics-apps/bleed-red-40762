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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de2530cb-bcf5-473f-80e4-c9a8e61dc308"
        }}
        style={styles.ImageBackground_181_1081}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f537fb7-a98e-49cc-910d-9898b05f0403"
        }}
        style={styles.ImageBackground_181_979}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5d905ac-8fa0-43bd-90ae-71491189366f"
        }}
        style={styles.ImageBackground_182_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c787aafc-67d1-4667-bb92-5b8b6d9aae2a"
        }}
        style={styles.ImageBackground_182_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc9b37b8-045c-4965-bdc8-fcba3ce609b8"
        }}
        style={styles.ImageBackground_181_980}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94e629be-9ba2-4617-8866-88a2192f1ec9"
        }}
        style={styles.ImageBackground_181_981}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04c9c861-9cdf-4376-a4fa-8476b864fa27"
        }}
        style={styles.ImageBackground_180_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7ebee9a-ec92-4728-b98a-d761119cdacd"
        }}
        style={styles.ImageBackground_180_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ac5a2ef-2b05-4c7c-975a-3b7bc03a693b"
        }}
        style={styles.ImageBackground_181_964}
      />
      <View style={styles.View_169_61}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/372da9dc-f8da-4cdd-84f4-22d5b6068a4d"
          }}
          style={styles.ImageBackground_169_81}
        />
        <View style={styles.View_169_86}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b44331da-20e1-4473-bc82-c5d5569dfea6"
            }}
            style={styles.ImageBackground_169_87}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c030dfab-f3bd-4c0e-9ada-3baa3514e28b"
            }}
            style={styles.ImageBackground_169_89}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/609e524d-bb93-43e4-b0ea-227b7cca34d0"
            }}
            style={styles.ImageBackground_169_91}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e5a9382-cdae-4b07-8bae-0a5c717dba5a"
            }}
            style={styles.ImageBackground_169_93}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf0f1fc4-bcb5-463c-a8fd-4bf25a24c526"
            }}
            style={styles.ImageBackground_169_95}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc95009f-b65a-4774-bfc3-fef4c20fd987"
            }}
            style={styles.ImageBackground_169_96}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f634762-047b-4656-b62a-2b53949526e4"
            }}
            style={styles.ImageBackground_169_97}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7563eab6-1cb1-42cc-ac7a-2896dc633432"
            }}
            style={styles.ImageBackground_169_98}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1dd83de-a2ec-4d16-9048-4bcca4bbb4a9"
            }}
            style={styles.ImageBackground_169_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2abd6d78-cb69-45a7-9ae4-e521be06a076"
            }}
            style={styles.ImageBackground_169_100}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e925824-eb7f-41e9-86c1-2f18dcaf3f92"
            }}
            style={styles.ImageBackground_169_104}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4829df5b-3edd-459e-bf80-cdf741dec2bc"
            }}
            style={styles.ImageBackground_169_108}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d821218d-9899-494a-9a6e-fb6b55890a0d"
            }}
            style={styles.ImageBackground_169_111}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ad3d2fe-89fd-48bf-ba31-8a9b45536cf9"
            }}
            style={styles.ImageBackground_169_114}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4e1e2fc-0129-453e-80ab-5f881d4c7d84"
            }}
            style={styles.ImageBackground_169_117}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bc94dff-ef30-482c-84d7-121f2cc004da"
            }}
            style={styles.ImageBackground_169_138}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52010a3e-02a1-4f52-b78b-3ad2cced4127"
          }}
          style={styles.ImageBackground_169_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82d15d84-6c5b-4ee2-b971-a9395a59c915"
          }}
          style={styles.ImageBackground_169_69}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/feeff225-99c5-4332-98ca-c92fdae4ed2b"
          }}
          style={styles.ImageBackground_169_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a63536c9-55fa-4766-a85b-3f410a402bb6"
          }}
          style={styles.ImageBackground_169_67}
        />
      </View>
      <View style={styles.View_169_73}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5da90091-7bbb-4c47-b38a-8b656d95e273"
          }}
          style={styles.ImageBackground_169_74}
        />
        <View style={styles.View_169_202}>
          <View style={styles.View_169_159}>
            <View style={styles.View_I169_159_136_16775}>
              <View style={styles.View_I169_159_136_16202}>
                <Text style={styles.Text_I169_159_136_16202}>
                  Jacques Webster
                </Text>
              </View>
              <View style={styles.View_I169_159_136_16206}>
                <View style={styles.View_I169_159_136_16207} />
                <View style={styles.View_I169_159_136_16208}>
                  <Text style={styles.Text_I169_159_136_16208}>5km</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16138352-883d-4b89-bdae-5f67b38473c5"
                }}
                style={styles.ImageBackground_I169_159_136_16209}
              />
              <View style={styles.View_I169_159_136_16704}>
                <View style={styles.View_I169_159_136_16203}>
                  <Text style={styles.Text_I169_159_136_16203}>
                    San francisco
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b87044f0-163a-472c-88db-107ab9fc21a5"
                  }}
                  style={styles.ImageBackground_I169_159_136_16430}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_169_183}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fd8599a-aa19-4877-9c3e-02c019cb3e7c"
              }}
              style={styles.ImageBackground_169_184}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/038239c5-20e0-42f7-8f83-8f90a5fccacd"
              }}
              style={styles.ImageBackground_169_185}
            />
            <View style={styles.View_169_186}>
              <View style={styles.View_169_187}>
                <Text style={styles.Text_169_187}>B</Text>
              </View>
              <View style={styles.View_169_188}>
                <Text style={styles.Text_169_188}>+ </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_169_201}>
          <View style={styles.View_169_160}>
            <View style={styles.View_I169_160_136_16775}>
              <View style={styles.View_I169_160_136_16202}>
                <Text style={styles.Text_I169_160_136_16202}>
                  Justin Westervelt
                </Text>
              </View>
              <View style={styles.View_I169_160_136_16206}>
                <View style={styles.View_I169_160_136_16207} />
                <View style={styles.View_I169_160_136_16208}>
                  <Text style={styles.Text_I169_160_136_16208}>5km</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f763a719-02bf-4fb2-932a-8bf6b337a9ec"
                }}
                style={styles.ImageBackground_I169_160_136_16209}
              />
              <View style={styles.View_I169_160_136_16704}>
                <View style={styles.View_I169_160_136_16203}>
                  <Text style={styles.Text_I169_160_136_16203}>
                    San francisco
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3f88f25-022a-42fb-92f0-cdfdb84d49ab"
                  }}
                  style={styles.ImageBackground_I169_160_136_16430}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_169_195}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16285b4b-7a20-4faf-925d-63fff35bb7f6"
              }}
              style={styles.ImageBackground_169_196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c432764-55bb-445e-be54-797669c8b2cb"
              }}
              style={styles.ImageBackground_169_197}
            />
            <View style={styles.View_169_198}>
              <View style={styles.View_169_199}>
                <Text style={styles.Text_169_199}>B</Text>
              </View>
              <View style={styles.View_169_200}>
                <Text style={styles.Text_169_200}>-</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_169_12}>
        <Text style={styles.Text_169_12}>Mobile App &amp; Landing Page</Text>
      </View>
      <View style={styles.View_169_13}>
        <Text style={styles.Text_169_13}>
          An Online Blood Donate &amp; Collect App
        </Text>
      </View>
      <View style={styles.View_221_1926}>
        <Text style={styles.Text_221_1926}>Drop</Text>
      </View>
      <View style={styles.View_169_14}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71409063-1dc2-4f9e-8ebf-a58ca2653a80"
          }}
          style={styles.ImageBackground_169_15}
        />
      </View>
      <View style={styles.View_169_19}>
        <View style={styles.View_169_20}>
          <View style={styles.View_169_21}>
            <View style={styles.View_169_22} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80e32364-2b8f-4655-bde0-1123dffc116c"
          }}
          style={styles.ImageBackground_169_23}
        />
      </View>
      <View style={styles.View_169_241}>
        <Text style={styles.Text_169_241}>
          Blood Donor App puts the power to save lives in the palm of your hand.
          Donating blood, platelets and AB Plasma is easier than ever.{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74a4e31d-d647-4313-8146-996d047327f1"
        }}
        style={styles.ImageBackground_180_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/461f207c-b5f2-4047-a7e3-193c6e303a6f"
        }}
        style={styles.ImageBackground_180_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04307f31-8d50-48ac-ae4f-73b0eb94edee"
        }}
        style={styles.ImageBackground_180_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb753299-70a3-4551-bb61-da0f5377ba6d"
        }}
        style={styles.ImageBackground_181_932}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0bc5bd8-ddbc-46db-8668-3c68b080d4c1"
        }}
        style={styles.ImageBackground_181_934}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/025a0e8e-5fd6-42b9-9477-3e00ab8de708"
        }}
        style={styles.ImageBackground_181_971}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b4d4a7b-283a-4c0f-95b8-8ff9932faafd"
        }}
        style={styles.ImageBackground_181_935}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b153efd-b895-4026-9725-da879c2ed834"
        }}
        style={styles.ImageBackground_181_933}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29f35ba1-c1a8-40e2-9853-e5ba986b7d75"
        }}
        style={styles.ImageBackground_181_955}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/359af49d-c340-484b-a130-474ad5b921d2"
        }}
        style={styles.ImageBackground_181_978}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7be88f9-d7cf-4287-bbc4-69b45d87394b"
        }}
        style={styles.ImageBackground_181_953}
      />
      <View style={styles.View_180_20}>
        <View style={styles.View_180_16} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85110164-c545-4759-9352-f8a47e3b35b4"
          }}
          style={styles.ImageBackground_180_17}
        />
        <View style={styles.View_180_18}>
          <Text style={styles.Text_180_18}>Onboarding screen</Text>
        </View>
      </View>
      <View style={styles.View_181_948}>
        <View style={styles.View_181_949} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b9a31b2-bee0-40d8-ab16-2475decccd4d"
          }}
          style={styles.ImageBackground_181_950}
        />
        <View style={styles.View_181_951}>
          <Text style={styles.Text_181_951}>Login screen</Text>
        </View>
      </View>
      <View style={styles.View_181_974}>
        <View style={styles.View_181_975} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c458aa86-3a19-42fa-b5d4-5cebd57484a8"
          }}
          style={styles.ImageBackground_181_976}
        />
        <View style={styles.View_181_977}>
          <Text style={styles.Text_181_977}>Main screen</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed03d062-1521-4bec-95db-e63234cd83f2"
        }}
        style={styles.ImageBackground_181_968}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25f5d469-e4ea-47f2-a2b0-03d6c825d479"
        }}
        style={styles.ImageBackground_180_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5670f7e4-93ef-4437-b9d0-3098ddecf8b2"
        }}
        style={styles.ImageBackground_181_945}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e224dea-a9b7-4c88-9007-357ef3dad626"
        }}
        style={styles.ImageBackground_181_946}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d54c0d5b-773a-4c47-84ee-95d63ad0e63d"
        }}
        style={styles.ImageBackground_181_947}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d6e71da-c16e-4fdb-a1a0-0b035b4fd9f0"
        }}
        style={styles.ImageBackground_180_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9685efbd-982b-41d8-af37-56300a400d09"
        }}
        style={styles.ImageBackground_180_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1516aa4-da92-45a1-87fd-8f02dd5a659e"
        }}
        style={styles.ImageBackground_181_942}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/206c8a14-3928-4a70-8bd8-4a80db5f13bd"
        }}
        style={styles.ImageBackground_181_936}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7b3db89-d693-4e99-bdb2-67185ec18ba0"
        }}
        style={styles.ImageBackground_181_990}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd344f7f-bec2-49c9-9e66-151e8ec4f2e8"
        }}
        style={styles.ImageBackground_181_939}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd7939d8-d534-4131-870e-ec7cea7ab7d8"
        }}
        style={styles.ImageBackground_181_987}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61d879e4-5007-4d1d-8144-e2ecacb11873"
        }}
        style={styles.ImageBackground_182_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ed769a9-f38e-416f-8c73-4437910a1641"
        }}
        style={styles.ImageBackground_182_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eeb2e9d1-85e4-4a70-abc2-acc070c7538a"
        }}
        style={styles.ImageBackground_182_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b954285b-cd16-459b-9b94-61f6587e097a"
        }}
        style={styles.ImageBackground_182_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef66bb7e-8782-40a0-8639-006d80e643ae"
        }}
        style={styles.ImageBackground_182_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66344d8b-15b8-4555-969a-4b7235a80ad1"
        }}
        style={styles.ImageBackground_180_26}
      />
      <View style={styles.View_169_242}>
        <Text style={styles.Text_169_242}>engaging donation process</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/070d87db-82af-44d4-9ce6-7916fb150dd3"
        }}
        style={styles.ImageBackground_181_952}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1396d78c-7be6-4c60-bfc6-7cebb7fd68f0"
        }}
        style={styles.ImageBackground_181_993}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e69e824-f425-4663-a023-cc37f07d8068"
        }}
        style={styles.ImageBackground_181_994}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bf47877-2513-433d-a494-660a4e3c1fbc"
        }}
        style={styles.ImageBackground_181_997}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28986ddc-cc44-4ce2-bbe3-ace62f9b454f"
        }}
        style={styles.ImageBackground_181_998}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60870a5c-8c55-4be0-aabe-26ba02d539ef"
        }}
        style={styles.ImageBackground_181_995}
      />
      <View style={styles.View_181_1010}>
        <View style={styles.View_181_1011}>
          <Text style={styles.Text_181_1011}>Icon set</Text>
        </View>
        <View style={styles.View_181_1012}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3331b329-4a62-4b86-be3e-eb9c938ab166"
            }}
            style={styles.ImageBackground_181_1013}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18680f90-103f-40c7-acc6-3dfaadafc265"
            }}
            style={styles.ImageBackground_181_1014}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2da7e31e-42ad-4e6b-9d79-ef677c74f58f"
            }}
            style={styles.ImageBackground_181_1015}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6adbbad-1877-42b8-b0c0-b96b4b2417eb"
            }}
            style={styles.ImageBackground_181_1016}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75173820-b1c0-4d4c-9df0-a74ca44658f2"
            }}
            style={styles.ImageBackground_181_1017}
          />
        </View>
        <View style={styles.View_181_1018}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcdc095b-7e23-4a57-9481-743cd011cc7b"
            }}
            style={styles.ImageBackground_181_1019}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8913414-cf73-4100-aea2-2cf695410a3d"
            }}
            style={styles.ImageBackground_181_1020}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7ad03d3-c2c5-4788-8f2f-255cef669a7b"
            }}
            style={styles.ImageBackground_181_1023}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45af4d1e-c22d-42ef-86c8-3623223a6d0c"
            }}
            style={styles.ImageBackground_181_1024}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e143e2e-de2d-4697-a8dc-5105bb2e6188"
            }}
            style={styles.ImageBackground_181_1025}
          />
        </View>
        <View style={styles.View_181_1026}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2a6940e-2b6f-4b97-b23a-ad1b9de61a73"
            }}
            style={styles.ImageBackground_181_1027}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaac45fb-3896-4d75-ba05-6d89691caff5"
            }}
            style={styles.ImageBackground_181_1028}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca8043f4-488f-4720-a4f2-d59fae141b26"
            }}
            style={styles.ImageBackground_181_1029}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38cae43a-8a4b-47b0-9387-f2fb01b326bf"
            }}
            style={styles.ImageBackground_181_1030}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e783f76-faaa-4a0b-926d-2560e7dc3408"
            }}
            style={styles.ImageBackground_181_1031}
          />
        </View>
        <View style={styles.View_181_1032}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6449975d-beb9-42f0-afaf-769db1ae079a"
            }}
            style={styles.ImageBackground_181_1033}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7bae295-e249-4586-aa3b-552634b722d8"
            }}
            style={styles.ImageBackground_181_1034}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48f25793-35be-455f-ab61-d6c459854c1b"
            }}
            style={styles.ImageBackground_181_1035}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06d02885-803b-4bee-8d9f-543afb733c81"
            }}
            style={styles.ImageBackground_181_1036}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/392bca11-5ba2-4f5e-a98d-c67a9480b847"
            }}
            style={styles.ImageBackground_181_1037}
          />
        </View>
        <View style={styles.View_181_1040}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9b07760-c6c3-49bb-94a1-ecd8a279a37c"
            }}
            style={styles.ImageBackground_181_1041}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42040887-6d9b-4c01-902e-d90fe7e49428"
            }}
            style={styles.ImageBackground_181_1042}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19f61eae-3e6e-402b-b5c4-236a72776207"
            }}
            style={styles.ImageBackground_181_1045}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f675031-6ccb-454a-96ee-25595491e8ae"
            }}
            style={styles.ImageBackground_181_1048}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e5902b4-b3fe-4789-a769-f4ebb5c5e16e"
            }}
            style={styles.ImageBackground_181_1051}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f110d325-9e65-4783-8d40-2e061058ca11"
        }}
        style={styles.ImageBackground_181_999}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86ec204b-8262-4625-8d37-b8c7ad2c7a00"
        }}
        style={styles.ImageBackground_181_1000}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a0ef0c1-0642-4f4b-a87c-55f0e8c7c614"
        }}
        style={styles.ImageBackground_181_996}
      />
      <View style={styles.View_181_963}>
        <View style={styles.View_181_960} />
        <View style={styles.View_182_20}>
          <Text style={styles.Text_182_20}>Menu &amp; notification</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8846703-b3bf-45e0-84d5-3237f0f5e8b2"
          }}
          style={styles.ImageBackground_181_961}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 248, 251, 1)" },
  View_2: { height: hp("576%") },
  ImageBackground_181_1081: {
    width: wp("77%"),
    height: hp("142%"),
    top: hp("418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-35%")
  },
  ImageBackground_181_979: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("406%")
  },
  ImageBackground_182_18: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("499%")
  },
  ImageBackground_182_19: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("491%")
  },
  ImageBackground_181_980: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("363%")
  },
  ImageBackground_181_981: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("401%")
  },
  ImageBackground_180_19: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("228%")
  },
  ImageBackground_180_5: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16%"),
    top: hp("126%")
  },
  ImageBackground_181_964: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("292%")
  },
  View_169_61: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_169_81: {
    width: wp("69%"),
    height: hp("121%"),
    top: hp("-5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%")
  },
  View_169_86: {
    width: wp("52%"),
    height: hp("105%"),
    top: hp("-3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%")
  },
  ImageBackground_169_87: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_169_89: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_169_91: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_169_93: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_169_95: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_169_96: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_169_97: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_169_98: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_169_99: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_169_100: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_169_104: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_169_108: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_169_111: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_169_114: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_169_117: {
    width: wp("2%"),
    height: hp("22%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_169_138: {
    width: wp("2%"),
    height: hp("22%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_169_68: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("12%")
  },
  ImageBackground_169_69: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("25%")
  },
  ImageBackground_169_72: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("18%")
  },
  ImageBackground_169_67: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("72%")
  },
  View_169_73: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("13%")
  },
  ImageBackground_169_74: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_169_202: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("28%")
  },
  View_169_159: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I169_159_136_16775: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I169_159_136_16202: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I169_159_136_16202: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I169_159_136_16206: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("1%")
  },
  View_I169_159_136_16207: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(130, 109, 238, 1)"
  },
  View_I169_159_136_16208: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I169_159_136_16208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.488221168518066,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I169_159_136_16209: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I169_159_136_16704: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_I169_159_136_16203: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I169_159_136_16203: {
    color: "rgba(149, 151, 161, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I169_159_136_16430: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_169_183: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%")
  },
  ImageBackground_169_184: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_169_185: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_169_186: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_169_187: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_169_187: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.117724418640137,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_169_188: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_169_188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.411816120147705,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_169_201: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("39%")
  },
  View_169_160: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I169_160_136_16775: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I169_160_136_16202: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I169_160_136_16202: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I169_160_136_16206: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("1%")
  },
  View_I169_160_136_16207: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(130, 109, 238, 1)"
  },
  View_I169_160_136_16208: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I169_160_136_16208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.488221168518066,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I169_160_136_16209: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I169_160_136_16704: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_I169_160_136_16203: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I169_160_136_16203: {
    color: "rgba(149, 151, 161, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I169_160_136_16430: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_169_195: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%")
  },
  ImageBackground_169_196: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_169_197: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_169_198: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_169_199: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_169_199: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.117724418640137,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_169_200: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_169_200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.411816120147705,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_169_12: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_169_12: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 33.11302947998047,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_169_13: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_169_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 43.269065856933594,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_221_1926: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_221_1926: {
    color: "rgba(239, 71, 118, 1)",
    fontSize: 51.416015625,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_169_14: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("13%")
  },
  ImageBackground_169_15: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_169_19: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("94%")
  },
  View_169_20: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_169_21: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_169_22: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_169_23: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_169_241: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("129%"),
    justifyContent: "flex-start"
  },
  Text_169_241: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_180_0: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("152%"),
    resizeMode: "cover"
  },
  ImageBackground_180_1: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("138%"),
    resizeMode: "cover"
  },
  ImageBackground_180_24: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("157%"),
    resizeMode: "cover"
  },
  ImageBackground_181_932: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("316%"),
    resizeMode: "cover"
  },
  ImageBackground_181_934: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("182%"),
    resizeMode: "cover"
  },
  ImageBackground_181_971: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("258%")
  },
  ImageBackground_181_935: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("246%"),
    resizeMode: "cover"
  },
  ImageBackground_181_933: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("231%"),
    resizeMode: "cover"
  },
  ImageBackground_181_955: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("338%"),
    resizeMode: "cover"
  },
  ImageBackground_181_978: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("332%"),
    resizeMode: "cover"
  },
  ImageBackground_181_953: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("322%"),
    resizeMode: "cover"
  },
  View_180_20: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("155%")
  },
  View_180_16: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 187, 17, 1)"
  },
  ImageBackground_180_17: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_180_18: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_180_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_181_948: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("271%")
  },
  View_181_949: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 187, 17, 1)"
  },
  ImageBackground_181_950: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%")
  },
  View_181_951: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_181_951: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_181_974: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("323%")
  },
  View_181_975: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 187, 17, 1)"
  },
  ImageBackground_181_976: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_181_977: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_181_977: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_181_968: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("295%")
  },
  ImageBackground_180_29: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("222%")
  },
  ImageBackground_181_945: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("307%")
  },
  ImageBackground_181_946: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("327%")
  },
  ImageBackground_181_947: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("276%")
  },
  ImageBackground_180_25: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("211%")
  },
  ImageBackground_180_30: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("260%")
  },
  ImageBackground_181_942: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("276%")
  },
  ImageBackground_181_936: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("295%")
  },
  ImageBackground_181_990: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("384%")
  },
  ImageBackground_181_939: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("309%")
  },
  ImageBackground_181_987: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("397%")
  },
  ImageBackground_182_0: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("478%")
  },
  ImageBackground_182_14: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("484%")
  },
  ImageBackground_182_3: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("488%")
  },
  ImageBackground_182_6: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("491%")
  },
  ImageBackground_182_9: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("470%")
  },
  ImageBackground_180_26: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("220%")
  },
  View_169_242: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_169_242: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_181_952: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("250%"),
    resizeMode: "cover"
  },
  ImageBackground_181_993: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("414%"),
    resizeMode: "cover"
  },
  ImageBackground_181_994: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("424%"),
    resizeMode: "cover"
  },
  ImageBackground_181_997: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("422%"),
    resizeMode: "cover"
  },
  ImageBackground_181_998: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("412%"),
    resizeMode: "cover"
  },
  ImageBackground_181_995: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("415%"),
    resizeMode: "cover"
  },
  View_181_1010: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("503%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_181_1011: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_181_1011: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 18.905109405517578,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_181_1012: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("47%")
  },
  ImageBackground_181_1013: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_181_1014: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_181_1015: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_181_1016: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  ImageBackground_181_1017: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_181_1018: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("28%")
  },
  ImageBackground_181_1019: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  ImageBackground_181_1020: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_181_1023: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_181_1024: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_181_1025: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_181_1026: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("18%")
  },
  ImageBackground_181_1027: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_181_1028: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_181_1029: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_181_1030: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_181_1031: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_181_1032: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("37%")
  },
  ImageBackground_181_1033: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_181_1034: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_181_1035: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_181_1036: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  ImageBackground_181_1037: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_181_1040: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("56%")
  },
  ImageBackground_181_1041: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  ImageBackground_181_1042: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_181_1045: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_181_1048: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_181_1051: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_181_999: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("509%"),
    resizeMode: "cover"
  },
  ImageBackground_181_1000: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("498%"),
    resizeMode: "cover"
  },
  ImageBackground_181_996: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7%"),
    top: hp("406%"),
    resizeMode: "cover"
  },
  View_181_963: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("498%")
  },
  View_181_960: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_182_20: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_182_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_181_961: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
