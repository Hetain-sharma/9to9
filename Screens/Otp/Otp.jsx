import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Otp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Otpimage.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Enter Verification Code</Text>
        <Text style={styles.subtitle}>
          We have sent an OTP to your mobile. Please fill it in here.
        </Text>
      </View>

      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpBox}
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.otpBox}
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.otpBox}
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.otpBox}
          maxLength={1}
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Don’t Receive OTP? </Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}>Resend OTP</Text>
        </TouchableOpacity>
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => navigation.navigate('Homepage')}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    height: 283,
    width: 328,
    color: '#222222',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginTop: 8,
    padding: 1,
    fontFamily: 'Poppins-Regular',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '80%',
  },
  otpBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: 50,
    height: 50,
    textAlign: 'center',
    backgroundColor: '#fdf1ff',
    fontSize: 18,
    color: '#8A4ODD',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  resendText: {
    color: '#696969',
    fontFamily: 'Poppins-Regular',
  },
  resendLink: {
    color: '#8A40DD',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  verifyButton: {
    backgroundColor: '#571D99',
    height: 50,
    width: 300,
    borderRadius: 5,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
});
