import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import { PageType } from "./PageHandler";
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import Question from "./Question";
// import styles from "./styles";

console.log(
  "+++++++++++++FactSwiper.tsx refreshed+++++++++++++" + new Date().toString()
);
//child of PageHandler.tsx

const windowWidth = Dimensions.get("window").width;

export interface FactSwiperProps {
  page: PageType;
  pageUpdater: (direction: number) => void;
}

const FactSwiper: React.FC<FactSwiperProps> = ({ page, pageUpdater }) => {
  const [index, setIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const factList = page.facts;
  //   const data = ["Element 1", "Element 2", "Element 3", "Element 4"];

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX } = event.nativeEvent;
      const direction = translationX > 0 ? "right" : "left";
      let newTranslateXValue = 0;
      let newTranslateXStart = 0;
      if (direction === "right" && index > 0) {
        newTranslateXValue = windowWidth; // Assuming windowWidth is the width of your screen
        newTranslateXStart = -windowWidth;
        console.log(
          `direction of swipe is right and index is ${index}, so decrementing by 1 `
        );
        setIndex(index - 1);
      } else if (direction === "left" && index < factList.length - 1) {
        newTranslateXValue = -windowWidth;
        newTranslateXStart = windowWidth;
        console.log(
          `direction of swipe is left and index is ${index}, so incrementing by 1 `
        );
        setIndex(index + 1);
      }
      // Animate the element sliding off
      Animated.timing(translateX, {
        toValue: newTranslateXValue,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        if (direction === "right" && index > 0) {
          setIndex(index - 1);
        } else if (direction === "left") {
          setIndex(index + 1);
        } else if (direction === "right") {
          // && index <= 0
          pageUpdater(-1);
        }
        // else if (direction === "left") {
        //   // && index >= data.length - 1}
        //   pageUpdater(1);
        // }
        // Immediately set translateX to opposite side
        translateX.setValue(newTranslateXStart);

        // // Animate sliding into view from the opposite side
        // Animated.timing(translateX, {
        //   toValue: 0, // Back to original position in view
        //   duration: 300,
        //   useNativeDriver: true,
        // }).start();
      });
    }
  };

  useEffect(() => {
    // Animate sliding into view from the opposite side
    Animated.timing(translateX, {
      toValue: 0, // Back to original position in view
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [index]);

  console.log("index is", index);
  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View
        style={{
          transform: [{ translateX: translateX }],
        }}
      >
        {/* <Text style={styles.text}>{data[index]}</Text> */}
        {index >= factList.length ? (
          <Question page={page} />
        ) : (
          //   <Text>{page.question}</Text>
          <Text>{factList[index]}</Text>
        )}
        {/* <Text>{factList[index]}</Text> */}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default FactSwiper;
