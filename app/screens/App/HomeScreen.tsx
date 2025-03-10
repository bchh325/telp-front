import PlaceInformation from '@/app/components/PlaceInformation';
import SearchBar from '@/app/components/SearchBar';
import { businesses_2 } from '@/constants/SampleData';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';



export default function HomeScreen() {
  const sampleData = businesses_2

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
              <View style={styles.container}>
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
})