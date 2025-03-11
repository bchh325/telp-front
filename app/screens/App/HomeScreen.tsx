import PlaceInformation from '@/app/components/PlaceInformation';
import SearchBar from '@/app/components/SearchBar';
import { businesses_2 } from '@/constants/SampleData';
import React from 'react';
import { Image, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import PagerView from 'react-native-pager-view';
import classNames from '@/app/utils/classnames';


export default function HomeScreen() {
  const sampleData = businesses_2

  const classes = classNames([
    true && styles.other,
    true && styles.test
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
                <PlaceInformation
                  key={index}
                  placeName={value.name}
                  placeRating={value.rating}
                  reviewCount={value.review_count}
                />

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
    borderWidth: 0,
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
    borderColor: "red",
    borderWidth: 5
  }
})