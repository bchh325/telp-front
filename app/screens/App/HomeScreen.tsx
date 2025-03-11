import PlaceDetails from '@/app/components/PlaceDetails';
import SearchBar from '@/app/components/SearchBar';
import { businesses_2 } from '@/constants/SampleData';
import React, { useState } from 'react';
import { Button, Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import PagerView from 'react-native-pager-view';
import classNames from '@/app/utils/classnames';
import ActionBar from '@/app/components/ActionBar';


export default function HomeScreen() {
  const [toggleColor, setToggleColor] = useState(false)
  const sampleData = businesses_2

  const classes = classNames([
    true && styles.container,
    toggleColor && styles.test
  ])

  console.debug(classes)
  return (
    <>
      <SearchBar />
      <PagerView
        orientation={"vertical"}
        initialPage={0}
        style={{ flex: 1 }}>
        {
          sampleData.businesses.map((value, index: number) => {
            return (
              <View style={classes}>
                <Image style={styles.image} source={{ uri: value.image_url }} />
                <PlaceDetails
                  key={index}
                  placeName={value.name}
                  placeRating={value.rating}
                  reviewCount={value.review_count}
                />
                <ActionBar />
              </View>
            )
          })
        }
      </PagerView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,1)',
    borderColor: "red",
    borderWidth: 10,
    position: "relative",
    height: "100%",
    width: "100%",
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
    opacity: 0.3
  },
  other: {
    backgroundColor: "black"
  },
  test: {
    borderColor: "green",
  }
})