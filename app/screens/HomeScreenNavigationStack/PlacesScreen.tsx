import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view';
import { Dimensions } from 'react-native';
import Place from '@/app/components/Place';
import { businesses_0, businesses_1, businesses_2 } from '@/constants/SampleData';
import SearchBar from '@/app/components/SearchBar';


export default function PlacesScreen() {
  const sampleData = businesses_2

  return (
    <>
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
    </>
  )
}


