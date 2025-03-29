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

      {/* OTP Input Section */}
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
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    height: 283,
    width: 328,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 8,
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
    color: '#000',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  resendText: {
    color: '#666',
  },
  resendLink: {
    color: '#9C27B0',
    fontWeight: 'bold',
  },
  verifyButton: {
    backgroundColor: '#6A1B9A',
    paddingVertical: 14,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginTop: 100,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
