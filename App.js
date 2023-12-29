import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'react-native';
import {useState, useEffect} from 'react';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/monarch-beach.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Button
          title="Go to Golf Course List"
          onPress={() => navigation.navigate('Golf')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

function GolfScreen({ navigation }) {
  const golfCourses = [
    { name: 'Golf Course 1', city: 'Glasgow', coordinates: { latitude: 37.7749, longitude: -122.4194 } },
    { name: 'Golf Course 2', city: 'Edinburgh', coordinates: { latitude: 40.7128, longitude: -74.0060 } },
    { name: 'Golf Course 1', city: 'Aberdeen', coordinates: { latitude: 37.7749, longitude: -122.4194 } },
    { name: 'Golf Course 2', city: 'Dundee', coordinates: { latitude: 40.7128, longitude: -74.0060 } },
    { name: 'Golf Course 1', city: 'Newcastle', coordinates: { latitude: 37.7749, longitude: -122.4194 } },
    { name: 'Golf Course 2', city: 'Liverpool', coordinates: { latitude: 40.7128, longitude: -74.0060 } },
    { name: 'Golf Course 1', city: 'Manchester', coordinates: { latitude: 37.7749, longitude: -122.4194 } },
    { name: 'Golf Course 2', city: 'Hatfield', coordinates: { latitude: 40.7128, longitude: -74.0060 } },
  ];

  const navigateToWeather = (golfCourse) => {
    navigation.navigate('Weather', {city: golfCourse.city, golfCourses});
  };
  return (
    <ImageBackground
      source={require('./assets/Clays-Golf.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {golfCourses.map((item, index) => (
          <View key={item.name} style={styles.courseContainer}>
            <Text>{item.name}</Text>
            <Text>{item.city}</Text>
            <Button
              title="Check Weather"
              onPress={() => navigateToWeather(item)}
            />
          </View>
        ))}
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </ImageBackground>
  );
}

const stylez = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

function TodayWeatherScreen({ navigation, route }) {
  const {city, golfCourses} = route.params;
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '7f5d12b890f5e84f11332b7c79e15724';

  useEffect(() => {
    fetchWeatherData();
  });
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Failed to fetch weather data');
      }
    } catch (error) {
        console.error('Error fetching weather data: ', error);
    }
  };

  const navigateToMap = () => {
    navigation.navigate('Map', {city, golfCourses});
  };

  return (
 <ImageBackground
      source={require('./assets/weather_.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text>Weather for {city}:</Text>
        {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
          <View>
            <Text>Weather: {weatherData.weather[0].main}</Text>
            <Text>Temperature: {weatherData.main.temp}°C</Text>
            <Text>Pressure: {weatherData.main.pressure} hPa</Text>
          </View>
        )}
      </View>
      <Button title="Go to Map Screen" onPress= {navigateToMap} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
  </ImageBackground>
  );

}

function MyTravelMap({ navigation, route }) {
  const {city, golfCourses} = route.params;
  const openGoogleMaps = () => {
    const latitude = 55.856597;
    const longitude = -4.236788;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url)
      .catch(() => alert('Could not open Google Maps. Please check your connection.'));
  };
  return (
    <ImageBackground
      source={require('./assets/earth.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Button
          title={`Go to ${city}`}
          onPress={() => {
           
            const { coordinates } = golfCourses.find((course) => course.city === city);
            const url = `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`;
            Linking.openURL(url)
              .catch(() => alert('Could not open Google Maps. Please check your connection.'));
          }}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ImageBackground>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Golf" component={GolfScreen} />
        <Stack.Screen name="Weather" component={TodayWeatherScreen} />
        <Stack.Screen name="Map" component={MyTravelMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

