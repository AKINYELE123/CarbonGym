
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from './constants/colors';
import Phone from "./assets/svgs/phone.svg"
import { loadFonts } from './constants/loadFonts';
import Ionicons from '@expo/vector-icons/Ionicons';
import ScrollableTabs from './components/ScrollableTabs';
import Services from './components/Services';
import Amenities from './components/Amenities';
import VirtualTour from './components/VirtualTour';
import Location from './components/Location';
import Transformations from './components/Transformations';
import Reviews from './components/Reviews';
import Trainers from './components/Trainers';
import Classes from './components/Classes';

const { width, height } = Dimensions.get('window');

const AppContent = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/images/image.png')}
            style={[
              styles.image,
              {
                marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : insets.top,
              },
            ]}
            resizeMode="cover"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Ionicons
                name="chevron-back"
                size={20}
                color="black"
              />
            </TouchableOpacity>
            <View style={{flexDirection: "row", gap: 10}}>
              <TouchableOpacity style={styles.button}>
                <Ionicons
                  name={'share-outline'}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Ionicons
                  name={'heart'}
                  size={20}
                  color={Colors.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular', }}>Wharehouse Gym</Text>
              <Text style={{ color: Colors.regularBlack, fontSize: 12, fontWeight: "500", fontFamily: 'Poppins-Regular', }}>Dubai, Jumeirah Lake Towers</Text>
            </View>
            <TouchableOpacity style={{ borderColor: Colors.textGrey, borderWidth: 0.6, borderRadius: 30, height: 40, width: 40, justifyContent: "center", alignItems: "center", }}>
              <Phone />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
              <Ionicons
                name={'star'}
                size={15}
                color={Colors.red}
                style={{ fontFamily: "Poppins-Regular" }}
              />
              <Text style={{ color: Colors.textBlack, fontSize: 12, fontWeight: "500", fontFamily: 'Poppins-Regular' }}>3.9</Text>
              <View style={{ backgroundColor: Colors.textGrey, borderRadius: 30, height: 7, width: 7, }} />
              <Text style={{ color: Colors.textBlack, fontSize: 12, fontWeight: "500", textDecorationLine: "underline", fontFamily: 'Poppins-Regular' }}>12 reviews</Text>
            </View>
            <Text style={{ color: Colors.green, fontSize: 12, fontWeight: "500", fontFamily: 'Poppins-Regular', }}>Open</Text>
          </View>


          <View style={{ paddingTop: 30 }}>
            <ScrollableTabs />
          </View>

          <View style={{ paddingTop: 30 }}>
            <Services />
          </View>

          <View style={{ paddingTop: 30 }}>
            <Amenities />
          </View>


          <View style={{ paddingTop: 30 }}>
            <VirtualTour />
          </View>


          <View style={{ paddingTop: 30 }}>
            <Location />
          </View>


          <View style={{ paddingTop: 30 }}>
            <Classes />
          </View>


          <View style={{}}>
            <Trainers />
          </View>

          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
              <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular', }}>Our Timing</Text>
              <TouchableOpacity>
                <Text style={{ color: Colors.textBlack, fontSize: 12, fontWeight: "500", textDecorationLine: "underline", fontFamily: 'Poppins-Regular' }}>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: Colors.green,
                    borderRadius: 30,
                    height: 15,
                    width: 15,
                    borderWidth: 2,
                    borderColor: "white",
                    marginRight: 2,
                    ...Platform.select({
                      ios: {
                        shadowColor: Colors.green,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                      },
                      android: {
                        elevation: 5,
                      }
                    })
                  }}
                />
                <Text style={{ color: Colors.green, fontSize: 12, fontWeight: "500", fontFamily: 'Poppins-Regular' }}>Open</Text>
              </View>
              <Text style={{ color: Colors.textBlack, fontSize: 14, fontWeight: "500", fontFamily: 'Poppins-Regular' }}>Mon — 8.00am to 9.00pm</Text>
            </View>
          </View>

          <View style={{ paddingTop: 30 }}>
            <Reviews />
          </View>



          <View style={{ marginTop: 18 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
              <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular', }}>Equipments</Text>
              <TouchableOpacity>
                <Text style={{ color: Colors.textBlack, fontSize: 15, fontWeight: "500", textDecorationLine: "underline", fontFamily: 'Poppins-Regular' }}>See All</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ marginTop: 2, color: Colors.textBlack, fontSize: 12, fontWeight: "500", }}>See all available Equipments</Text>
          </View>

          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
              <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular', }}>Awards</Text>
              <TouchableOpacity>
                <Text style={{ color: Colors.textBlack, fontSize: 15, fontWeight: "500", textDecorationLine: "underline", fontFamily: 'Poppins-Regular' }}>See All</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ marginTop: 2, color: Colors.textBlack, fontSize: 12, fontWeight: "500", }}>See the awards we own</Text>
          </View>

          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
              <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular', }}>FAQs</Text>
              <TouchableOpacity>
                <Text style={{ color: Colors.textBlack, fontSize: 15, fontWeight: "500", textDecorationLine: "underline", fontFamily: 'Poppins-Regular' }}>See All</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ marginTop: 2, color: Colors.textBlack, fontSize: 12, fontWeight: "500", }}>Most Asked Question from us</Text>
          </View>
          <View style={{ paddingTop: 30 }}>
            <Transformations />
          </View>
        </View>

      </ScrollView>

      <View style={styles.bottomContainer}>
        <Text style={{ color: Colors.textBlack, fontSize: 15, fontWeight: "500", fontFamily: 'Poppins-Regular', }}>From AED 500</Text>
        <TouchableOpacity style={{ backgroundColor: Colors.yellow, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 4 }}>
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500", fontFamily: 'Poppins-Regular', }}>Buy A Subscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    initializeApp();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.background
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width,
    height: height * 0.3,
  },
  buttonContainer: {
    position: 'absolute',
    top: 70,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.LightWhite,
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,
    ...Platform.select({
      ios: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      }
    })
  },
  bottomText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bottomButtonText: {
    color: '#000',
    fontSize: 16,
  },
});