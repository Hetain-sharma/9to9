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

// import {SchoolTypeSection} from './schoolTypeSection/SchoolTypeSection';
// import {FeaturedServices} from './featuredServices/FeaturedServices';
// import AgeSection from './ageSection/AgeSection';
// import EventsCard from './EventsAndActivities/EventsCard';
// import QuizCard from '../Quiz/QuizCard';
// import SkillCard from './Learning/SkillCard';
// import SkillPage from '../LifeSkills/skillPage';
// import Banner from './banner/Banner';
// import UpSkilling from './upSkills/UpSkilling';
// import YourChild from './YourChild/YourChild';
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
