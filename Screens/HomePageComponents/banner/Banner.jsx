import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#58BF68',
          height: 145,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 5,
          padding: 15,
          overflow: 'hidden',
        }}>
        <View style={{width: '55%', justifyContent: 'center'}}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            Personalized Learning for Your Child!
          </Text>
          <Text style={{color: '#fff', fontSize: 14, marginTop: 5}}>
            Choose Their Age Group to Begin
          </Text>
        </View>
        <View
          style={{
            width: '45%',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 100, height: 100, borderRadius: 10}}
            source={require('../../../assets/baby.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
