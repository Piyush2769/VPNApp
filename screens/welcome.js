import React, { Component } from 'react';
import {StyleSheet,Image,ScrollView} from "react-native";
import {Block,Text,Button,Utils} from "expo-ui-kit";

import {background} from "../constants/images"

const {theme} =Utils;
const {SIZES} =theme;

const backgrounds = [
    {
      title: "Secured, forever.",
      description:
        "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
      img: background.welcome
    },
    {
      title: "Encrypted, forever.",
      description:
        "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
      img: background.encrypted
    },
    {
      title: "Privacy, forever.",
      description:
        "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
      img: background.privacy
    }
];

class welcome extends Component {
    render() {
        return (
            <Block safe>
                <Block center middle>
                    <ScrollView 
                        horizontal 
                        pagingEnabled 
                        scrollEnabled 
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        decelerationRate={0}
                        showsHorizontalScrollIndicator={false}>
                            {backgrounds.map((item, index) => (
                            <Block
                                center
                                bottom
                                key={`img-${index}`}
                                style={{ width: SIZES.width }}>
                               
                                <Image
                                source={item.img}
                                resizeMode="center"
                                style={{
                                    width: SIZES.width / 1.5,
                                    height: "100%"
                                }}
                                />
                            </Block>
                            ))}
                    </ScrollView>
                </Block>
                <Block center bottom flex={false} margin={60}>
                    <Text h3 semibold>Secured, forever. </Text>
                    <Text center caption gray margin={[10,0]}>
                        Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
                        Quisque volutpat augue enim, pulvinar lobortis.
                    </Text>
                    <Button primary>
                        <Text center white caption bold margin={[6 ,26]}>GET STARTED</Text> 
                    </Button>
                </Block>
            </Block>
        );
    }
}

export default welcome;