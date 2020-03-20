import React, { Component } from 'react';
import {StyleSheet,Image,ScrollView, Animated} from "react-native";
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

export default class welcome extends Component {
    scrollX = new Animated.Value(0);

    state = {
      slideIndex: 0
    };
  
    componentDidMount() {
      this.scrollX.addListener(({ value }) => {
        this.setState({ slideIndex: Math.floor(value / SIZES.width) });
      });
    }

    renderImages(){
        return(
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
   
        )
    }

    renderDots() {
        const dotPosition = Animated.divide(this.scrollX, SIZES.width);

        return (
        <Block
            flex={false}
            row
            center
            middle
            margin={[SIZES.padding, 0, SIZES.padding * 2, 0]}
        >
            {backgrounds.map((item, index) => {
            const opacity = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp"
            });

            return (
                <Block
                gray
                animated
                flex={false}
                key={`dot-${index}`}
                radius={SIZES.small}
                margin={[0, SIZES.small / 2]}
                style={[styles.dot, { opacity }]}
                />
            );
            })}
        </Block>
        );
    }

    render() {
        return (
            <Block safe>
                <Block center middle>
                    {this.renderImages()}
                </Block>
                <Block center bottom flex={false} margin={60}>
                    <Text h3 semibold>Secured, forever. </Text>
                    <Text center caption gray margin={[10,0]}>
                        Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
                        Quisque volutpat augue enim, pulvinar lobortis.
                    </Text>
                    {this.renderDots()}
                    <Button primary>
                        <Text center white caption bold margin={[6 ,26]}>GET STARTED</Text> 
                    </Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    dot: { width: SIZES.base, height: SIZES.base }
  });
