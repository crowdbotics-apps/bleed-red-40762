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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c91e134-f02e-4109-bbba-8256781dbdd5"
        }}
        style={styles.ImageBackground_182_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b733999d-bbb6-4092-b960-6025bdd1e403"
        }}
        style={styles.ImageBackground_182_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65675a49-88b1-4201-a3e2-1a6edfb3b0bd"
        }}
        style={styles.ImageBackground_178_1}
      />
      <View style={styles.View_178_2}>
        <View source={{ uri: "null" }} style={styles.View_178_3} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f07ab95-bf7b-4866-911d-ce0a17e31c68"
          }}
          style={styles.ImageBackground_178_4}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/535f002e-1dbf-41ff-9551-940de1f2298e"
        }}
        style={styles.ImageBackground_178_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/921e6d4c-25e5-4a2a-ad84-1ed310fc4212"
        }}
        style={styles.ImageBackground_178_14}
      />
      <View style={styles.View_178_100}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2690aad2-3284-4335-b688-92be23399d80"
          }}
          style={styles.ImageBackground_178_101}
        />
      </View>
      <View style={styles.View_178_126}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9cae0b6-fd2a-4097-b50d-5bfdf772d39c"
          }}
          style={styles.ImageBackground_178_127}
        />
      </View>
      <View style={styles.View_178_131}>
        <View style={styles.View_178_132}>
          <View style={styles.View_178_133}>
            <View style={styles.View_178_134} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66d799f5-444b-4c5c-8c79-c6f9ec3a283f"
          }}
          style={styles.ImageBackground_178_135}
        />
      </View>
      <View style={styles.View_225_0}>
        <Text style={styles.Text_225_0}>Mobile App &amp; Landing Page</Text>
      </View>
      <View style={styles.View_225_1}>
        <Text style={styles.Text_225_1}>
          An Online Blood Donate &amp; Collect App
        </Text>
      </View>
      <View style={styles.View_225_2}>
        <Text style={styles.Text_225_2}>Drop</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28d65470-8fa6-4bc5-a83c-5a4f027d5d65"
        }}
        style={styles.ImageBackground_178_144}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3c3cce0-baa8-41cf-abf2-67ec5a53eadd"
        }}
        style={styles.ImageBackground_178_145}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ebb47d8-ed11-4c45-a215-593750d8fc6d"
        }}
        style={styles.ImageBackground_178_146}
      />
      <View style={styles.View_178_147}>
        <View style={styles.View_I178_147_136_17160} />
        <View style={styles.View_I178_147_136_17161}>
          <Text style={styles.Text_I178_147_136_17161}>Blood</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be4ea8f8-2a2e-496f-b33c-0d7d68cc3ae3"
          }}
          style={styles.ImageBackground_I178_147_136_17162}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a93f15b-038e-4160-bf11-1e994e65cbe5"
          }}
          style={styles.ImageBackground_I178_147_136_17158}
        />
        <View style={styles.View_I178_147_136_17165}>
          <Text style={styles.Text_I178_147_136_17165}>
            Do you want to make your contact number visible for other
          </Text>
        </View>
      </View>
      <View style={styles.View_178_148}>
        <View style={styles.View_I178_148_136_17160} />
        <View style={styles.View_I178_148_136_17161}>
          <Text style={styles.Text_I178_148_136_17161}>Powder Red</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39e6d190-a924-4c38-9d9b-a7bdd84126ce"
          }}
          style={styles.ImageBackground_I178_148_136_17162}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76aa5504-bd2c-448b-acff-4094613c7eff"
          }}
          style={styles.ImageBackground_I178_148_136_17158}
        />
        <View style={styles.View_I178_148_136_17165}>
          <Text style={styles.Text_I178_148_136_17165}>
            Do you want to make your contact number visible for other
          </Text>
        </View>
      </View>
      <View style={styles.View_178_149}>
        <Text style={styles.Text_178_149}>
          Blood Donor App puts the power to save lives in the palm of your hand.
          Donating blood, platelets and AB Plasma is easier than ever.{" "}
        </Text>
      </View>
      <View style={styles.View_178_150}>
        <View style={styles.View_I178_150_136_17160} />
        <View style={styles.View_I178_150_136_17161}>
          <Text style={styles.Text_I178_150_136_17161}>AB Plasma</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ea89fdb-cc04-40bd-820a-1c462a1c6b30"
          }}
          style={styles.ImageBackground_I178_150_136_17162}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/776d5346-bff9-4311-8bf1-7000e5c79d9b"
          }}
          style={styles.ImageBackground_I178_150_136_17158}
        />
        <View style={styles.View_I178_150_136_17165}>
          <Text style={styles.Text_I178_150_136_17165}>
            Do you want to make your contact number visible for other
          </Text>
        </View>
      </View>
      <View style={styles.View_182_34}>
        <View style={styles.View_I182_34_136_17160} />
        <View style={styles.View_I182_34_136_17161}>
          <Text style={styles.Text_I182_34_136_17161}>Platelets</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/823a236d-8a80-4d13-874e-aae5b07af521"
          }}
          style={styles.ImageBackground_I182_34_136_17162}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/246d09d1-8b82-4f57-8592-288788fd17aa"
          }}
          style={styles.ImageBackground_I182_34_136_17158}
        />
        <View style={styles.View_I182_34_136_17165}>
          <Text style={styles.Text_I182_34_136_17165}>
            Do you want to make your contact number visible for other
          </Text>
        </View>
      </View>
      <View style={styles.View_178_151}>
        <Text style={styles.Text_178_151}>Give the gift of life </Text>
      </View>
      <View style={styles.View_178_152}>
        <Text style={styles.Text_178_152}>
          Blood Donor App puts the power to save lives in the palm of your hand.
          Donating blood, platelets and AB Plasma is easier than ever.{" "}
        </Text>
      </View>
      <View style={styles.View_178_153}>
        <Text style={styles.Text_178_153}>Show all Screen</Text>
      </View>
      <View style={styles.View_178_154}>
        <View style={styles.View_178_157}>
          <View style={styles.View_I178_157_127_253} />
          <View style={styles.View_I178_157_135_53}>
            <View style={styles.View_I178_157_135_52}>
              <View style={styles.View_I178_157_135_40} />
              <View style={styles.View_I178_157_135_41} />
              <View style={styles.View_I178_157_135_42} />
              <View style={styles.View_I178_157_135_45} />
              <View style={styles.View_I178_157_135_43} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9ad6b49-acca-4cca-b9b5-1388e423914b"
              }}
              style={styles.ImageBackground_I178_157_131_89}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6bbcb77-3212-4fcb-9f4b-f9300090ff4d"
              }}
              style={styles.ImageBackground_I178_157_136_1286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45d2726a-c573-4f00-8e07-121127ed7f30"
              }}
              style={styles.ImageBackground_I178_157_131_86}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f58dceb-cd43-4a31-a7c4-6129ba872c80"
              }}
              style={styles.ImageBackground_I178_157_131_87}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f41cd050-8395-4852-9f42-f63085bcd552"
              }}
              style={styles.ImageBackground_I178_157_131_88}
            />
            <View style={styles.View_I178_157_131_91}>
              <View style={styles.View_I178_157_131_90} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1adb96c5-dd8a-40f0-a0ba-a1571c5f74ca"
                }}
                style={styles.ImageBackground_I178_157_127_246}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_178_158}>
          <Text style={styles.Text_178_158}>
            Each Donations can help save up to 3 lives!
          </Text>
        </View>
        <View style={styles.View_178_159}>
          <Text style={styles.Text_178_159}>Give the gift of life </Text>
        </View>
        <View style={styles.View_178_160}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69abb45f-005f-4e5c-91b7-0371cb74c35c"
            }}
            style={styles.ImageBackground_I178_160_126_39}
          />
        </View>
        <View style={styles.View_178_161}>
          <Text style={styles.Text_178_161}>donate blood</Text>
        </View>
        <View style={styles.View_178_162}>
          <View style={styles.View_I178_162_126_2405}>
            <Text style={styles.Text_I178_162_126_2405}>San francisco</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db8b01b4-abb1-4d8b-a702-eccdd128b2e4"
            }}
            style={styles.ImageBackground_I178_162_126_2411}
          />
        </View>
        <View style={styles.View_178_163}>
          <View style={styles.View_178_164}>
            <Text style={styles.Text_178_164}>Last updated on :</Text>
          </View>
          <View style={styles.View_178_165}>
            <Text style={styles.Text_178_165}>1:15 PM, Fri, Jun 1, 2019</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_178_166}>
        <View style={styles.View_178_167}>
          <View style={styles.View_178_168}>
            <View style={styles.View_178_169} />
            <View style={styles.View_178_170}>
              <Text style={styles.Text_178_170}>157</Text>
            </View>
            <View style={styles.View_178_171}>
              <Text style={styles.Text_178_171}>new blood requested</Text>
            </View>
          </View>
          <View style={styles.View_178_172}>
            <View style={styles.View_178_173} />
            <View style={styles.View_178_174}>
              <Text style={styles.Text_178_174}>15K</Text>
            </View>
            <View style={styles.View_178_175}>
              <Text style={styles.Text_178_175}>Save Lives</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_178_176}>
        <View style={styles.View_178_177}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83e165f1-de4e-4761-84dc-9c6c0cf6acfd"
            }}
            style={styles.ImageBackground_178_178}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd245c8f-07ff-4a98-897d-167fa7116c44"
            }}
            style={styles.ImageBackground_178_179}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c56dd27-b30a-4c5c-a324-9a13d6a1920e"
            }}
            style={styles.ImageBackground_178_180}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/424c2f3a-d660-46c6-af98-dee60638b940"
            }}
            style={styles.ImageBackground_178_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/922ba3e7-3f28-4f1d-aa12-eaf8678cc073"
            }}
            style={styles.ImageBackground_178_182}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5029aba-2584-40d9-8355-9d6ba023f9eb"
            }}
            style={styles.ImageBackground_178_183}
          />
          <View style={styles.View_178_184} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/017b34c0-c319-43e0-a1bb-893d9f34fe96"
            }}
            style={styles.ImageBackground_178_185}
          />
          <View style={styles.View_178_186}>
            <Text style={styles.Text_178_186}>14.2 k</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_178_187}>
        <View style={styles.View_178_188}>
          <View style={styles.View_178_189}>
            <View style={styles.View_I178_189_127_259} />
            <View style={styles.View_I178_189_127_260}>
              <Text style={styles.Text_I178_189_127_260}>Blood Bank</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca8c79a5-cf6f-475e-b10b-004773ad1085"
              }}
              style={styles.ImageBackground_I178_189_127_261}
            />
            <View style={styles.View_I178_189_127_263} />
            <View style={styles.View_I178_189_127_264}>
              <Text style={styles.Text_I178_189_127_264}>Map</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee0790e7-d242-4468-be04-0ea4c2ae299e"
            }}
            style={styles.ImageBackground_178_190}
          />
        </View>
      </View>
      <View style={styles.View_178_191}>
        <View style={styles.View_178_192}>
          <View style={styles.View_178_193}>
            <View style={styles.View_178_194}>
              <View style={styles.View_I178_194_127_259} />
              <View style={styles.View_I178_194_127_260}>
                <Text style={styles.Text_I178_194_127_260}>Other</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae10f1eb-f432-431a-89e6-670b1e392fb1"
                }}
                style={styles.ImageBackground_I178_194_127_261}
              />
              <View style={styles.View_I178_194_127_263} />
              <View style={styles.View_I178_194_127_264}>
                <Text style={styles.Text_I178_194_127_264}>More</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14f77317-602c-44f2-b303-bd71a84e5784"
              }}
              style={styles.ImageBackground_178_195}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_178_198}>
        <View style={styles.View_178_199}>
          <View style={styles.View_178_200}>
            <View style={styles.View_I178_200_127_259} />
            <View style={styles.View_I178_200_127_260}>
              <Text style={styles.Text_I178_200_127_260}>Blood Request</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/feca0696-41ac-4013-8f86-53e1bc807fa3"
              }}
              style={styles.ImageBackground_I178_200_127_261}
            />
            <View style={styles.View_I178_200_127_263} />
            <View style={styles.View_I178_200_127_264}>
              <Text style={styles.Text_I178_200_127_264}>500K</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c0e91e3-ae1d-4d90-b6e1-f4cd19301976"
            }}
            style={styles.ImageBackground_178_201}
          />
        </View>
      </View>
      <View style={styles.View_178_204}>
        <View style={styles.View_178_205}>
          <View style={styles.View_178_206}>
            <View style={styles.View_I178_206_127_259} />
            <View style={styles.View_I178_206_127_260}>
              <Text style={styles.Text_I178_206_127_260}>Find A Donor</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23e0b595-3efa-48e8-9e61-c74c4ecf5cf7"
              }}
              style={styles.ImageBackground_I178_206_127_261}
            />
            <View style={styles.View_I178_206_127_263} />
            <View style={styles.View_I178_206_127_264}>
              <Text style={styles.Text_I178_206_127_264}>235K</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14467e9d-417b-44a6-99ea-188eb17ce3fd"
            }}
            style={styles.ImageBackground_178_207}
          />
        </View>
      </View>
      <View style={styles.View_178_210}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2b73cc0-8e50-4c48-b90d-226377932a30"
          }}
          style={styles.ImageBackground_178_211}
        />
        <View style={styles.View_178_212} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b67f56bd-0291-4c7e-8b25-4652b2973474"
          }}
          style={styles.ImageBackground_178_213}
        />
        <View style={styles.View_178_214}>
          <Text style={styles.Text_178_214}>Save Life</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b070cf2-f8c4-4f65-b465-fb4920612947"
          }}
          style={styles.ImageBackground_178_215}
        />
      </View>
      <View style={styles.View_178_216}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04230c75-994a-47e8-bad1-ed0b51ce6116"
          }}
          style={styles.ImageBackground_178_217}
        />
        <View style={styles.View_178_218} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1609c062-e516-4beb-9f69-e84c2da2dbf3"
          }}
          style={styles.ImageBackground_178_219}
        />
        <View style={styles.View_178_220}>
          <Text style={styles.Text_178_220}>blood Donor count</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a056f18-e81a-49fd-ae86-96b365537c8b"
          }}
          style={styles.ImageBackground_178_221}
        />
      </View>
      <View style={styles.View_178_222}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2c9b976-a2e3-4e47-87c9-44ca5947ed21"
          }}
          style={styles.ImageBackground_178_223}
        />
        <View style={styles.View_178_224} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6883f81e-b3ba-4741-84a3-d9ed0618aaac"
          }}
          style={styles.ImageBackground_178_225}
        />
        <View style={styles.View_178_226}>
          <Text style={styles.Text_178_226}>map view near blood Doron</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25a1593a-8a20-4c05-af12-796884cbe71d"
          }}
          style={styles.ImageBackground_178_227}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e68c5e8f-ab22-4685-bcb9-4085ba82849c"
        }}
        style={styles.ImageBackground_178_228}
      />
      <View style={styles.View_178_229}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fce7157d-62cf-45da-b8cb-d0ddc217c8c3"
          }}
          style={styles.ImageBackground_178_230}
        />
        <View style={styles.View_178_231} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/630dec9b-0a7d-4797-98be-975b5dbbd0d2"
          }}
          style={styles.ImageBackground_178_232}
        />
        <View style={styles.View_178_233}>
          <Text style={styles.Text_178_233}>Donor request graph</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b314aea5-e2c5-4321-8c74-7f1031b8cc02"
          }}
          style={styles.ImageBackground_178_234}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35946cd2-60e3-4257-a0b4-2bc060a23af0"
        }}
        style={styles.ImageBackground_178_235}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb956bfa-e222-4df8-938a-c6c5c8bcea64"
        }}
        style={styles.ImageBackground_178_236}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46dfcaf2-5748-475d-8cb0-648f7cb45e72"
        }}
        style={styles.ImageBackground_178_237}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3f48bbb-4ad5-486a-95e0-cd5ab9737374"
        }}
        style={styles.ImageBackground_178_238}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e935c80-a42d-4ef6-8aa4-dc1b76cba702"
        }}
        style={styles.ImageBackground_178_239}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9689d3d1-5e3d-476c-92d1-242dcbd140eb"
        }}
        style={styles.ImageBackground_178_240}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/713383c8-cd08-4d93-ae03-3777509477b0"
        }}
        style={styles.ImageBackground_178_241}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2bd8c89-823a-44c5-a969-27b858086fd4"
        }}
        style={styles.ImageBackground_178_242}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d117da04-d3ac-43fd-8b0b-30a7b470c6b7"
        }}
        style={styles.ImageBackground_182_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceb797a2-d255-49ed-bb17-d645f8e7e073"
        }}
        style={styles.ImageBackground_182_27}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0e7b12e-f993-451e-b663-c13e30bd0b8d"
        }}
        style={styles.ImageBackground_182_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b3e9841-c8e5-4c6a-b077-be2b29103bde"
        }}
        style={styles.ImageBackground_182_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/852e731c-2a66-4f81-8a7b-c1f9aff73391"
        }}
        style={styles.ImageBackground_182_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4b04eb8-feef-4852-8334-ff8db6d58ac3"
        }}
        style={styles.ImageBackground_182_25}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 248, 251, 1)" },
  View_2: { height: hp("441%") },
  ImageBackground_182_29: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("119%"),
    minHeight: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-37%"),
    top: hp("9%")
  },
  ImageBackground_182_30: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("119%"),
    minHeight: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("-32%")
  },
  ImageBackground_178_1: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("208%")
  },
  View_178_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("216%")
  },
  View_178_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_178_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_178_9: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("184%")
  },
  ImageBackground_178_14: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("216%")
  },
  View_178_100: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("11%")
  },
  ImageBackground_178_101: {
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
  View_178_126: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("28%")
  },
  ImageBackground_178_127: {
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
  View_178_131: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("96%")
  },
  View_178_132: {
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
  View_178_133: {
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
  View_178_134: {
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
  ImageBackground_178_135: {
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
  View_225_0: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_225_0: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 33.11302947998047,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_225_1: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_225_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 43.269065856933594,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_225_2: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_225_2: {
    color: "rgba(239, 71, 118, 1)",
    fontSize: 51.416015625,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_178_144: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("116%"),
    minHeight: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("328%")
  },
  ImageBackground_178_145: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("339%")
  },
  ImageBackground_178_146: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("354%")
  },
  View_178_147: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("114%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_147_136_17160: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I178_147_136_17161: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_I178_147_136_17161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I178_147_136_17162: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  ImageBackground_I178_147_136_17158: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_I178_147_136_17165: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_I178_147_136_17165: {
    color: "rgba(116, 125, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_148: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_148_136_17160: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I178_148_136_17161: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_I178_148_136_17161: {
    color: "rgba(48, 54, 61, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I178_148_136_17162: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  ImageBackground_I178_148_136_17158: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_I178_148_136_17165: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_I178_148_136_17165: {
    color: "rgba(116, 125, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_149: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("146%"),
    justifyContent: "flex-start"
  },
  Text_178_149: {
    color: "rgba(56, 52, 53, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_178_150: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_150_136_17160: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I178_150_136_17161: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_I178_150_136_17161: {
    color: "rgba(48, 54, 61, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I178_150_136_17162: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  ImageBackground_I178_150_136_17158: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_I178_150_136_17165: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_I178_150_136_17165: {
    color: "rgba(116, 125, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_34: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("137%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_34_136_17160: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I182_34_136_17161: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_I182_34_136_17161: {
    color: "rgba(48, 54, 61, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I182_34_136_17162: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  ImageBackground_I182_34_136_17158: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_I182_34_136_17165: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_I182_34_136_17165: {
    color: "rgba(116, 125, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_151: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("134%"),
    justifyContent: "flex-start"
  },
  Text_178_151: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_178_152: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("310%"),
    justifyContent: "flex-start"
  },
  Text_178_152: {
    color: "rgba(56, 52, 53, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_178_153: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("301%"),
    justifyContent: "flex-start"
  },
  Text_178_153: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_178_154: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("202%"),
    backgroundColor: "rgba(244, 248, 251, 1)",
    overflow: "hidden"
  },
  View_178_157: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_157_127_253: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I178_157_135_53: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I178_157_135_52: {
    width: wp("27%"),
    height: hp("25%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I178_157_135_40: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I178_157_135_41: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(224, 224, 224, 1)"
  },
  View_I178_157_135_42: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I178_157_135_45: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I178_157_135_43: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(224, 224, 224, 1)"
  },
  ImageBackground_I178_157_131_89: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I178_157_136_1286: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I178_157_131_86: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_I178_157_131_87: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_I178_157_131_88: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_I178_157_131_91: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I178_157_131_90: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 189, 189, 1)",
    borderWidth: 0.38799718022346497
  },
  ImageBackground_I178_157_127_246: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_178_158: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_178_158: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 8.863921165466309,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_159: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_178_159: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 12.519887924194336,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_178_160: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I178_160_126_39: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_178_161: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_178_161: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 21.93579864501953,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.7759943604469299,
    textTransform: "capitalize"
  },
  View_178_162: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_162_126_2405: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I178_162_126_2405: {
    color: "rgba(56, 52, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I178_162_126_2411: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_178_163: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("35%")
  },
  View_178_164: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_178_164: {
    color: "rgba(56, 52, 53, 1)",
    fontSize: 7.311932563781738,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_178_165: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_178_165: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 7.311932563781738,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_178_166: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("209%")
  },
  View_178_167: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_178_168: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  View_178_169: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 189, 189, 1)",
    borderWidth: 0.656862735748291
  },
  View_178_170: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_178_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36.98039245605469,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.3794117736816405,
    textTransform: "none"
  },
  View_178_171: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_178_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.764705657958984,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_178_172: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  View_178_173: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 239, 243, 1)"
  },
  View_178_174: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_178_174: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 36.98039245605469,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_175: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_178_175: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 12.764705657958984,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_178_176: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("226%")
  },
  View_178_177: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_178_178: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  ImageBackground_178_179: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_178_180: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_178_181: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%")
  },
  ImageBackground_178_182: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("8%")
  },
  ImageBackground_178_183: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%")
  },
  View_178_184: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_178_185: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("7%")
  },
  View_178_186: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_178_186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.227230072021484,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_187: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("256%")
  },
  View_178_188: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_178_189: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_189_127_259: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I178_189_127_260: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I178_189_127_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I178_189_127_261: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_I178_189_127_263: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_I178_189_127_264: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I178_189_127_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_178_190: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%")
  },
  View_178_191: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("240%")
  },
  View_178_192: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_178_193: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_178_194: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_194_127_259: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I178_194_127_260: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I178_194_127_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I178_194_127_261: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_I178_194_127_263: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_I178_194_127_264: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I178_194_127_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_178_195: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_178_198: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("240%")
  },
  View_178_199: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_178_200: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_200_127_259: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I178_200_127_260: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I178_200_127_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I178_200_127_261: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_I178_200_127_263: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_I178_200_127_264: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I178_200_127_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_178_201: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_178_204: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("253%")
  },
  View_178_205: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_178_206: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_206_127_259: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I178_206_127_260: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I178_206_127_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I178_206_127_261: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_I178_206_127_263: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_I178_206_127_264: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I178_206_127_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_178_207: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%")
  },
  View_178_210: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("173%")
  },
  ImageBackground_178_211: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_178_212: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_178_213: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_178_214: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_178_214: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_178_215: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%")
  },
  View_178_216: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("229%")
  },
  ImageBackground_178_217: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("43%")
  },
  View_178_218: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_178_219: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("45%")
  },
  View_178_220: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("47%"),
    justifyContent: "center"
  },
  Text_178_220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_178_221: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_178_222: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("217%")
  },
  ImageBackground_178_223: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_178_224: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_178_225: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_178_226: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_178_226: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_178_227: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%")
  },
  ImageBackground_178_228: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("383%"),
    resizeMode: "cover"
  },
  View_178_229: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("187%")
  },
  ImageBackground_178_230: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_178_231: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_178_232: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_178_233: {
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
  Text_178_233: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_178_234: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%")
  },
  ImageBackground_178_235: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("343%"),
    resizeMode: "cover"
  },
  ImageBackground_178_236: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("345%"),
    resizeMode: "cover"
  },
  ImageBackground_178_237: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("389%"),
    resizeMode: "cover"
  },
  ImageBackground_178_238: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("340%"),
    resizeMode: "cover"
  },
  ImageBackground_178_239: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19%"),
    top: hp("322%"),
    resizeMode: "cover"
  },
  ImageBackground_178_240: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12%"),
    top: hp("384%"),
    resizeMode: "cover"
  },
  ImageBackground_178_241: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_178_242: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_182_22: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("-14%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 230, 232, 1)",
    borderWidth: 0.914675772190094
  },
  ImageBackground_182_27: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%"),
    top: hp("-29%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 230, 232, 1)",
    borderWidth: 0.914675772190094
  },
  ImageBackground_182_23: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("20%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 230, 232, 1)",
    borderWidth: 0.914675772190094
  },
  ImageBackground_182_24: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("49%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 230, 232, 1)",
    borderWidth: 0.914675772190094
  },
  ImageBackground_182_26: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("105%"),
    top: hp("7%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 230, 232, 1)",
    borderWidth: 0.914675772190094
  },
  ImageBackground_182_25: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("-21%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 230, 232, 1)",
    borderWidth: 0.914675772190094
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
