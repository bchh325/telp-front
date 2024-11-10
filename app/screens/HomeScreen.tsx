import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view';
import { Dimensions } from 'react-native';
import Place from '@/components/Place';
import { businesses_0, businesses_1 } from '@/constants/SampleData';
import SearchBar from '@/components/SearchBar';


export default function HomeScreen() {
  const sampleData = businesses_1

  return (
    <View style={styles.container}>
      <SearchBar />
      <PagerView
        orientation={"vertical"}
        initialPage={0}
        style={{ height: Dimensions.get('window').height }}>

        {
          sampleData.businesses.map((value, index: number) => {
            return (
              <Place
                key={index}
                placeName={value.name}
                placeRating={value.rating}
                imageUrl={value.image_url}
                reviewCount={value.review_count}
              />
            )
          })
        }
      </PagerView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    borderColor: "red",
    borderWidth: 0
  }
})