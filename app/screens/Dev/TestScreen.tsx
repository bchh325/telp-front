import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '@/app/components/SearchBar'
import PagerView from 'react-native-pager-view'
import { businesses_2 } from '@/constants/SampleData'
import classNames from '@/app/utils/classnames'
import PlaceDetails from '@/app/components/PlaceDetails'
import ActionBar from '@/app/components/ActionBar'
import { useNavigation } from '@react-navigation/native'

export default function TestScreen() {

    const sampleData = businesses_2

    const classes = classNames([
        true && styles.container,
      ])

    const navigator = useNavigation()

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
                                <ActionBar navigator={navigator}/>
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