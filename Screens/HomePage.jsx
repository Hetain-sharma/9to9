import {View, ScrollView} from 'react-native';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Header';
import Banner from './HomePageComponents/banner/Banner';
import {SchoolTypeSection} from './HomePageComponents/schoolTypeSection/SchoolTypeSection';
import AgeSection from './HomePageComponents/ageSection/AgeSection';
import {FeaturedServices} from './HomePageComponents/featuredServices/FeaturedServices';
import SkillCard from './HomePageComponents/Learning/SkillCard';
import SkillPage from './HomePageComponents/LifeSkills/skillPage';
import QuizCard from './HomePageComponents/Quiz/QuizCard';
import UpSkilling from './HomePageComponents/upSkills/UpSkilling';
import YourChild from './HomePageComponents/YourChild/YourChild';
import EventsCard from './HomePageComponents/EventsAndActivities/EventsCard';

const HomePage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <Header />
        <ScrollView style={{padding: 10}}>
          <Banner />
          <SchoolTypeSection />
          <AgeSection />
          <FeaturedServices />
          <SkillCard />
          <EventsCard />
          <SkillPage />
          <QuizCard />
          <UpSkilling />
          <YourChild />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
