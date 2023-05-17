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
      <View style={styles.View_172_57}>
        <Text style={styles.Text_172_57}>+</Text>
      </View>
      <View style={styles.View_172_0}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a412e6bd-7098-46c8-bf1a-e4282071f9c8"
          }}
          style={styles.ImageBackground_172_4}
        />
      </View>
      <View style={styles.View_172_69}>
        <Text style={styles.Text_172_69}>our solutions</Text>
      </View>
      <View style={styles.View_172_70}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea7b17a9-ba3f-478d-b3ef-e3a0b0a20b23"
          }}
          style={styles.ImageBackground_172_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9081db3b-8832-40c1-8723-fdadf1ab34be"
          }}
          style={styles.ImageBackground_172_149}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f73baa92-b5aa-4853-81b6-a28ed00ecaf3"
          }}
          style={styles.ImageBackground_172_201}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e38b6f00-6357-4217-ad3f-1d4109b87952"
          }}
          style={styles.ImageBackground_172_202}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6948a118-b2cc-4ae7-a36e-4bf5310a47b2"
          }}
          style={styles.ImageBackground_172_203}
        />
        <View style={styles.View_172_216}>
          <View style={styles.View_172_217}>
            <View style={styles.View_172_218}>
              <View style={styles.View_I172_218_127_259} />
              <View style={styles.View_I172_218_127_260}>
                <Text style={styles.Text_I172_218_127_260}>Blood Request</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/655fb85e-5e63-4b26-aa4b-5e07dc1a0318"
                }}
                style={styles.ImageBackground_I172_218_127_261}
              />
              <View style={styles.View_I172_218_127_263} />
              <View style={styles.View_I172_218_127_264}>
                <Text style={styles.Text_I172_218_127_264}>500K</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0ef6235-1f60-434f-86eb-31ac5ca9ec14"
              }}
              style={styles.ImageBackground_172_219}
            />
          </View>
        </View>
        <View style={styles.View_172_204}>
          <View style={styles.View_172_205}>
            <View style={styles.View_172_206}>
              <View style={styles.View_172_207}>
                <View style={styles.View_I172_207_127_259} />
                <View style={styles.View_I172_207_127_260}>
                  <Text style={styles.Text_I172_207_127_260}>Other</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da4232fe-b0cc-497c-8b9f-a4605baf4bfe"
                  }}
                  style={styles.ImageBackground_I172_207_127_261}
                />
                <View style={styles.View_I172_207_127_263} />
                <View style={styles.View_I172_207_127_264}>
                  <Text style={styles.Text_I172_207_127_264}>More</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99097236-ecde-4d18-9f58-5813d6558a7f"
                }}
                style={styles.ImageBackground_172_208}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_172_227}>
          <View style={styles.View_172_228}>
            <View style={styles.View_172_229}>
              <View style={styles.View_I172_229_127_259} />
              <View style={styles.View_I172_229_127_260}>
                <Text style={styles.Text_I172_229_127_260}>Blood Bank</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc09e6c7-6279-4f6f-abc2-3ab19630ada8"
                }}
                style={styles.ImageBackground_I172_229_127_261}
              />
              <View style={styles.View_I172_229_127_263} />
              <View style={styles.View_I172_229_127_264}>
                <Text style={styles.Text_I172_229_127_264}>Map</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3338dec1-8a23-4cb6-b681-b173db056e96"
              }}
              style={styles.ImageBackground_172_230}
            />
          </View>
        </View>
        <View style={styles.View_172_231}>
          <View style={styles.View_172_232}>
            <View style={styles.View_172_233}>
              <View style={styles.View_I172_233_127_259} />
              <View style={styles.View_I172_233_127_260}>
                <Text style={styles.Text_I172_233_127_260}>Find A Donor</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87bf9dfe-c36c-491f-9f99-4d759a7039a4"
                }}
                style={styles.ImageBackground_I172_233_127_261}
              />
              <View style={styles.View_I172_233_127_263} />
              <View style={styles.View_I172_233_127_264}>
                <Text style={styles.Text_I172_233_127_264}>235K</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3480610d-d260-4af0-9d8d-620162ddbf69"
              }}
              style={styles.ImageBackground_172_234}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32cf8452-b149-446f-869b-1ff2e82dd591"
          }}
          style={styles.ImageBackground_172_247}
        />
      </View>
      <View style={styles.View_172_155}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed9b1ae2-0fa6-4b1e-8986-7e8b72f84d12"
          }}
          style={styles.ImageBackground_172_156}
        />
        <View style={styles.View_172_163}>
          <View style={styles.View_172_164}>
            <View style={styles.View_I172_164_136_16775}>
              <View style={styles.View_I172_164_136_16202}>
                <Text style={styles.Text_I172_164_136_16202}>
                  Jacques Webster
                </Text>
              </View>
              <View style={styles.View_I172_164_136_16206}>
                <View style={styles.View_I172_164_136_16207} />
                <View style={styles.View_I172_164_136_16208}>
                  <Text style={styles.Text_I172_164_136_16208}>5km</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb24ad72-a006-4ab2-ba7b-2039e1fb2b8a"
                }}
                style={styles.ImageBackground_I172_164_136_16209}
              />
              <View style={styles.View_I172_164_136_16704}>
                <View style={styles.View_I172_164_136_16203}>
                  <Text style={styles.Text_I172_164_136_16203}>
                    San francisco
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb36f500-2a3f-4284-9bef-8e699745261c"
                  }}
                  style={styles.ImageBackground_I172_164_136_16430}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_172_165}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/416fdeb2-ae69-4b26-9211-fa35a7c52751"
              }}
              style={styles.ImageBackground_172_166}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/810defff-a6a4-4ad1-93d5-808907346b8a"
              }}
              style={styles.ImageBackground_172_167}
            />
            <View style={styles.View_172_168}>
              <View style={styles.View_172_169}>
                <Text style={styles.Text_172_169}>B</Text>
              </View>
              <View style={styles.View_172_170}>
                <Text style={styles.Text_172_170}>+ </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_172_171}>
          <View style={styles.View_172_172}>
            <View style={styles.View_I172_172_136_16775}>
              <View style={styles.View_I172_172_136_16202}>
                <Text style={styles.Text_I172_172_136_16202}>
                  Justin Westervelt
                </Text>
              </View>
              <View style={styles.View_I172_172_136_16206}>
                <View style={styles.View_I172_172_136_16207} />
                <View style={styles.View_I172_172_136_16208}>
                  <Text style={styles.Text_I172_172_136_16208}>5km</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2af6232-7645-41ed-b1ab-03c49bc67358"
                }}
                style={styles.ImageBackground_I172_172_136_16209}
              />
              <View style={styles.View_I172_172_136_16704}>
                <View style={styles.View_I172_172_136_16203}>
                  <Text style={styles.Text_I172_172_136_16203}>
                    San francisco
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cd33804-6aee-4a40-8191-f817dcddfb01"
                  }}
                  style={styles.ImageBackground_I172_172_136_16430}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_172_173}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de962e2b-b597-48d5-8dc8-90a41b8db843"
              }}
              style={styles.ImageBackground_172_174}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0efdb90-089a-4f0b-bd38-45798031a951"
              }}
              style={styles.ImageBackground_172_175}
            />
            <View style={styles.View_172_176}>
              <View style={styles.View_172_177}>
                <Text style={styles.Text_172_177}>B</Text>
              </View>
              <View style={styles.View_172_178}>
                <Text style={styles.Text_172_178}>-</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_172_19}>
        <Text style={styles.Text_172_19}>Paragraph</Text>
      </View>
      <View style={styles.View_172_31}>
        <Text style={styles.Text_172_31}>Body</Text>
      </View>
      <View style={styles.View_171_1014}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f3e0fdd-54ea-4efa-b955-eae6b1b4fdd6"
          }}
          style={styles.ImageBackground_171_1015}
        />
        <View style={styles.View_171_1020}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a3606d1-794f-45cc-bbbf-b02d3a4245f4"
            }}
            style={styles.ImageBackground_171_1021}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abd21a47-fefd-41d3-849a-e2d1ec1e2fa8"
            }}
            style={styles.ImageBackground_171_1023}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/723244e0-1cf7-4d09-9f38-09a78315f0f4"
            }}
            style={styles.ImageBackground_171_1025}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/281e0bc0-730e-4cd0-988d-c4045dae81d8"
            }}
            style={styles.ImageBackground_171_1027}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83eea1b2-8047-4c2a-a49b-75b766dfae99"
            }}
            style={styles.ImageBackground_171_1029}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9132816-e5b0-416b-bda8-ab5817b1e1f8"
            }}
            style={styles.ImageBackground_171_1030}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb944013-0a3b-4e89-9e00-0fd686ff4562"
            }}
            style={styles.ImageBackground_171_1031}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14f54198-4a94-4c14-b0e3-ceac16c1ddee"
            }}
            style={styles.ImageBackground_171_1032}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99b18aa3-cdc4-4a4f-a750-216560fe25f6"
            }}
            style={styles.ImageBackground_171_1033}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccbe7e53-c26b-4796-9bda-7fa552289095"
            }}
            style={styles.ImageBackground_171_1034}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27854812-2c0d-4041-9a7e-2f1db6f538aa"
            }}
            style={styles.ImageBackground_171_1038}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db440103-8837-4051-92af-fe82cab2ac8e"
            }}
            style={styles.ImageBackground_171_1042}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cce9a80-3391-456c-822d-34fd4a9f554f"
            }}
            style={styles.ImageBackground_171_1045}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8e7337f-2bf6-4097-b2f0-ece12f453a8f"
            }}
            style={styles.ImageBackground_171_1048}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa11683a-593c-4001-99fe-0093dc5dc599"
            }}
            style={styles.ImageBackground_171_1051}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4be3b91a-83b0-4a4e-9ce2-c3ea36077ed0"
            }}
            style={styles.ImageBackground_171_1072}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa5a44ef-087e-4c88-afe5-b3f7f2a7c17b"
          }}
          style={styles.ImageBackground_171_1093}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a38790c7-9a9c-445e-a1a9-191afc9b9cef"
          }}
          style={styles.ImageBackground_171_1094}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2a6033d-90a0-4f73-927e-64cef88c15e4"
          }}
          style={styles.ImageBackground_171_1097}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e538f88f-043b-48bb-aed6-f3898b09c254"
          }}
          style={styles.ImageBackground_171_1098}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1851ceb2-0bd9-4079-80a2-afb3a7a9b65e"
          }}
          style={styles.ImageBackground_172_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a71e9b9-25a2-44a5-ab24-63c7cfb7e57a"
          }}
          style={styles.ImageBackground_172_48}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3a7df43-1b6f-4420-b6fa-f33074dc34da"
          }}
          style={styles.ImageBackground_172_49}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d83e08d7-c6f5-4bb8-bf58-a9f69f6c42f7"
          }}
          style={styles.ImageBackground_172_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bad85ca-9ddb-4202-90d0-a02827259956"
          }}
          style={styles.ImageBackground_172_51}
        />
      </View>
      <View style={styles.View_171_887}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7167056d-6d16-487a-8c74-f38f24a99dc8"
          }}
          style={styles.ImageBackground_171_888}
        />
      </View>
      <View style={styles.View_172_295}>
        <View style={styles.View_172_22}>
          <Text style={styles.Text_172_22}>H1</Text>
        </View>
        <View style={styles.View_172_23}>
          <Text style={styles.Text_172_23}>headline 1</Text>
        </View>
        <View style={styles.View_172_25}>
          <Text style={styles.Text_172_25}>H2</Text>
        </View>
        <View style={styles.View_172_26}>
          <Text style={styles.Text_172_26}>headline 2</Text>
        </View>
        <View style={styles.View_172_28}>
          <Text style={styles.Text_172_28}>H3</Text>
        </View>
        <View style={styles.View_172_29}>
          <Text style={styles.Text_172_29}>headline 3</Text>
        </View>
        <View style={styles.View_172_18}>
          <Text style={styles.Text_172_18}>H4</Text>
        </View>
        <View style={styles.View_172_30}>
          <Text style={styles.Text_172_30}>headline 4</Text>
        </View>
        <View style={styles.View_172_20}>
          <Text style={styles.Text_172_20}>H5</Text>
        </View>
        <View style={styles.View_172_32}>
          <Text style={styles.Text_172_32}>headline 5</Text>
        </View>
        <View style={styles.View_172_65}>
          <Text style={styles.Text_172_65}>Montserrat</Text>
        </View>
        <View style={styles.View_172_66}>
          <Text style={styles.Text_172_66}>robot </Text>
        </View>
        <View style={styles.View_172_64}>
          <Text style={styles.Text_172_64}>primary typeface</Text>
        </View>
      </View>
      <View style={styles.View_172_67}>
        <View style={styles.View_172_42}>
          <Text style={styles.Text_172_42}>color palette</Text>
        </View>
        <View style={styles.View_172_58}>
          <Text style={styles.Text_172_58}>
            Blood Donor App puts the power to save lives in the palm of your
            hand.
          </Text>
        </View>
        <View style={styles.View_172_59}>
          <Text style={styles.Text_172_59}>Style Guide</Text>
        </View>
        <View style={styles.View_172_43} />
        <View style={styles.View_172_60} />
        <View style={styles.View_172_61} />
        <View style={styles.View_172_62} />
        <View style={styles.View_172_63} />
      </View>
      <View style={styles.View_172_52}>
        <Text style={styles.Text_172_52}>15</Text>
      </View>
      <View style={styles.View_172_56}>
        <View style={styles.View_172_53} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5b14739-8203-4d8c-bbf7-7a993b374fa9"
          }}
          style={styles.ImageBackground_172_54}
        />
        <View style={styles.View_172_55}>
          <Text style={styles.Text_172_55}>Screen</Text>
        </View>
      </View>
      <View style={styles.View_172_296}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6408c62c-b5f2-4775-9822-2a689d391f77"
          }}
          style={styles.ImageBackground_172_253}
        />
        <View style={styles.View_172_260}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ddf5bff-8192-43e2-81d3-4a14863bd40d"
            }}
            style={styles.ImageBackground_172_261}
          />
          <View style={styles.View_172_266}>
            <View style={styles.View_172_262} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f738043f-c345-47f8-b19b-0eff19439bc6"
              }}
              style={styles.ImageBackground_172_263}
            />
            <View style={styles.View_172_264}>
              <Text style={styles.Text_172_264}>selected group Donor</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/770617c3-af93-4647-85f2-4977a263b85c"
            }}
            style={styles.ImageBackground_172_265}
          />
        </View>
        <View style={styles.View_172_267}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cfb46d9-0f28-497b-8897-862c339b9037"
            }}
            style={styles.ImageBackground_172_268}
          />
          <View style={styles.View_172_269}>
            <View style={styles.View_172_270} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6a5ef20-d4cd-4dec-90eb-c53c4e168608"
              }}
              style={styles.ImageBackground_172_271}
            />
            <View style={styles.View_172_272}>
              <Text style={styles.Text_172_272}>Donor guidelines</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1b0cca2-492f-4339-a5bb-f156ed97618d"
            }}
            style={styles.ImageBackground_172_273}
          />
        </View>
        <View style={styles.View_172_274}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeb38da6-4d9c-4d8e-af7d-7730377c7b85"
            }}
            style={styles.ImageBackground_172_275}
          />
          <View style={styles.View_172_276}>
            <View style={styles.View_172_277} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/156aa0a0-41bb-41bc-b1b5-79198aea4481"
              }}
              style={styles.ImageBackground_172_278}
            />
            <View style={styles.View_172_279}>
              <Text style={styles.Text_172_279}>Donor preference</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85be1b28-d540-4db3-be64-217c8a87785c"
            }}
            style={styles.ImageBackground_172_280}
          />
        </View>
        <View style={styles.View_172_281}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65b694b4-d836-46c8-9d3d-507e5f005cab"
            }}
            style={styles.ImageBackground_172_282}
          />
          <View style={styles.View_172_283}>
            <View style={styles.View_172_284} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e038427-be50-4ac7-b07e-8beb0b504ed5"
              }}
              style={styles.ImageBackground_172_285}
            />
            <View style={styles.View_172_286}>
              <Text style={styles.Text_172_286}>Donation Type</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b93d35a-ae1a-4236-8e7f-968c6a881b39"
            }}
            style={styles.ImageBackground_172_287}
          />
        </View>
        <View style={styles.View_172_288}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36c36e5f-0dd3-46fe-ba1a-4c93ec431806"
            }}
            style={styles.ImageBackground_172_289}
          />
          <View style={styles.View_172_290}>
            <View style={styles.View_172_291} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c197a798-1f65-46df-a47d-ef5e83c8408b"
              }}
              style={styles.ImageBackground_172_292}
            />
            <View style={styles.View_172_293}>
              <Text style={styles.Text_172_293}>Donor profile</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51459e82-ea78-4001-b3fa-6cb399d90a14"
            }}
            style={styles.ImageBackground_172_294}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51c2d41c-f27a-4dd0-9e87-661cc9d1f1d5"
          }}
          style={styles.ImageBackground_172_255}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f1f8988-68af-47c4-9861-d2dd70efe850"
          }}
          style={styles.ImageBackground_172_256}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb4b9fc4-69f8-4f58-a326-d073348d499f"
          }}
          style={styles.ImageBackground_172_258}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc090f57-0a6b-4aab-9ab4-b4d3ecc75bf3"
          }}
          style={styles.ImageBackground_172_259}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34421da9-748b-4b05-bf3a-d68fce1f0bcc"
          }}
          style={styles.ImageBackground_172_254}
        />
      </View>
      <View style={styles.View_225_3}>
        <Text style={styles.Text_225_3}>Mobile App &amp; Landing Page</Text>
      </View>
      <View style={styles.View_225_4}>
        <Text style={styles.Text_225_4}>
          An Online Blood Donate &amp; Collect App
        </Text>
      </View>
      <View style={styles.View_225_5}>
        <Text style={styles.Text_225_5}>Drop</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 248, 251, 1)" },
  View_2: { height: hp("275%") },
  View_172_57: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_172_57: {
    color: "rgba(250, 187, 17, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_0: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("7%")
  },
  ImageBackground_172_4: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_69: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("224%"),
    justifyContent: "center"
  },
  Text_172_69: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_70: {
    width: wp("112%"),
    minWidth: wp("112%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("217%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_172_71: {
    width: wp("135%"),
    height: hp("121%"),
    top: hp("-5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16%")
  },
  ImageBackground_172_149: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%")
  },
  ImageBackground_172_201: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("-8%")
  },
  ImageBackground_172_202: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("-2%")
  },
  ImageBackground_172_203: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("8%")
  },
  View_172_216: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("44%")
  },
  View_172_217: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_218: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I172_218_127_259: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I172_218_127_260: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I172_218_127_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.30415153503418,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I172_218_127_261: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_I172_218_127_263: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("7%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_I172_218_127_264: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I172_218_127_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.689272880554199,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_172_219: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_172_204: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("39%")
  },
  View_172_205: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_206: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_207: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I172_207_127_259: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I172_207_127_260: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I172_207_127_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.30415153503418,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I172_207_127_261: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_I172_207_127_263: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("7%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_I172_207_127_264: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I172_207_127_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.689272880554199,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_172_208: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%")
  },
  View_172_227: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("33%")
  },
  View_172_228: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_229: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I172_229_127_259: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I172_229_127_260: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I172_229_127_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.30415153503418,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I172_229_127_261: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_I172_229_127_263: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("7%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_I172_229_127_264: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I172_229_127_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.689272880554199,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_172_230: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%")
  },
  View_172_231: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("28%")
  },
  View_172_232: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_233: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I172_233_127_259: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_I172_233_127_260: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I172_233_127_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.30415153503418,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I172_233_127_261: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_I172_233_127_263: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("7%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_I172_233_127_264: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I172_233_127_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.689272880554199,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_172_234: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%")
  },
  ImageBackground_172_247: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("6%")
  },
  View_172_155: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("206%")
  },
  ImageBackground_172_156: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_163: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("21%")
  },
  View_172_164: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I172_164_136_16775: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I172_164_136_16202: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I172_164_136_16202: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I172_164_136_16206: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("1%")
  },
  View_I172_164_136_16207: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(130, 109, 238, 1)"
  },
  View_I172_164_136_16208: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I172_164_136_16208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.007132053375244,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I172_164_136_16209: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I172_164_136_16704: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_I172_164_136_16203: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I172_164_136_16203: {
    color: "rgba(149, 151, 161, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I172_164_136_16430: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_172_165: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%")
  },
  ImageBackground_172_166: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_172_167: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_172_168: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_172_169: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_172_169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.995009422302246,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_172_170: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_172_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.9966726303100586,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_172_171: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("29%")
  },
  View_172_172: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I172_172_136_16775: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I172_172_136_16202: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I172_172_136_16202: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I172_172_136_16206: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("1%")
  },
  View_I172_172_136_16207: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(130, 109, 238, 1)"
  },
  View_I172_172_136_16208: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I172_172_136_16208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.007132053375244,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I172_172_136_16209: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I172_172_136_16704: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_I172_172_136_16203: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I172_172_136_16203: {
    color: "rgba(149, 151, 161, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I172_172_136_16430: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_172_173: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%")
  },
  ImageBackground_172_174: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_172_175: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_172_176: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_172_177: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_172_177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.995009422302246,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_172_178: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_172_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.9966726303100586,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_172_19: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("199%"),
    justifyContent: "flex-start"
  },
  Text_172_19: {
    color: "rgba(250, 187, 17, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_31: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("199%"),
    justifyContent: "center"
  },
  Text_172_31: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1014: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("-23%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_171_1015: {
    width: wp("106%"),
    height: hp("94%"),
    top: hp("-4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13%")
  },
  View_171_1020: {
    width: wp("80%"),
    height: hp("82%"),
    top: hp("-3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7%")
  },
  ImageBackground_171_1021: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_171_1023: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_171_1025: {
    width: wp("1%"),
    height: hp("6%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_171_1027: {
    width: wp("1%"),
    height: hp("6%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_171_1029: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_171_1030: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_171_1031: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_171_1032: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_171_1033: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_171_1034: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_171_1038: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_171_1042: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_171_1045: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_171_1048: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_171_1051: {
    width: wp("2%"),
    height: hp("17%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_171_1072: {
    width: wp("2%"),
    height: hp("17%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_171_1093: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("11%")
  },
  ImageBackground_171_1094: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("23%")
  },
  ImageBackground_171_1097: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("17%")
  },
  ImageBackground_171_1098: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("66%")
  },
  ImageBackground_172_47: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  ImageBackground_172_48: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("24%"),
    resizeMode: "cover"
  },
  ImageBackground_172_49: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("43%"),
    resizeMode: "cover"
  },
  ImageBackground_172_50: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7%"),
    top: hp("54%"),
    resizeMode: "cover"
  },
  ImageBackground_172_51: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("49%"),
    resizeMode: "cover"
  },
  View_171_887: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("6%")
  },
  ImageBackground_171_888: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_295: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("173%")
  },
  View_172_22: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_172_22: {
    color: "rgba(250, 187, 17, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_23: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_172_23: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_25: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_172_25: {
    color: "rgba(250, 187, 17, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_26: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_172_26: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_28: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_172_28: {
    color: "rgba(250, 187, 17, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_29: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_172_29: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_18: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_172_18: {
    color: "rgba(250, 187, 17, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_30: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_172_30: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_20: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_172_20: {
    color: "rgba(250, 187, 17, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_32: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("23%"),
    justifyContent: "center"
  },
  Text_172_32: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_65: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_172_65: {
    color: "rgba(192, 192, 192, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_66: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_172_66: {
    color: "rgba(192, 192, 192, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_64: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_172_64: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_67: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("139%")
  },
  View_172_42: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_172_42: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_58: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_172_58: {
    color: "rgba(192, 192, 192, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_59: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_172_59: {
    color: "rgba(70, 74, 87, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_172_43: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  View_172_60: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("11%"),
    backgroundColor: "rgba(250, 187, 17, 1)"
  },
  View_172_61: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("11%"),
    backgroundColor: "rgba(81, 159, 232, 1)"
  },
  View_172_62: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("11%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_172_63: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("19%"),
    backgroundColor: "rgba(192, 192, 192, 1)"
  },
  View_172_52: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_172_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 25.111108779907227,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_56: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("21%")
  },
  View_172_53: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_172_54: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_172_55: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_172_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_296: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("60%")
  },
  ImageBackground_172_253: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_260: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  ImageBackground_172_261: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  View_172_266: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_262: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_172_263: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_172_264: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_172_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_172_265: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_172_267: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("10%")
  },
  ImageBackground_172_268: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  View_172_269: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_172_270: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_172_271: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_172_272: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_172_272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_172_273: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_172_274: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("18%")
  },
  ImageBackground_172_275: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("33%")
  },
  View_172_276: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%")
  },
  View_172_277: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_172_278: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_172_279: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_172_279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_172_280: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_172_281: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("24%")
  },
  ImageBackground_172_282: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("33%")
  },
  View_172_283: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%")
  },
  View_172_284: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_172_285: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_172_286: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_172_286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_172_287: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_172_288: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("29%")
  },
  ImageBackground_172_289: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("33%")
  },
  View_172_290: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%")
  },
  View_172_291: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 0, 1)"
  },
  ImageBackground_172_292: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_172_293: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_172_293: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_172_294: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_172_255: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("17%"),
    resizeMode: "cover"
  },
  ImageBackground_172_256: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("24%"),
    resizeMode: "cover"
  },
  ImageBackground_172_258: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_172_259: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    resizeMode: "cover"
  },
  ImageBackground_172_254: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("5%"),
    resizeMode: "cover"
  },
  View_225_3: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_225_3: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 16.18276023864746,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_225_4: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_225_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21.641178131103516,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_225_5: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_225_5: {
    color: "rgba(239, 71, 118, 1)",
    fontSize: 25.622407913208008,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
