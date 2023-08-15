import { ScrollView, StyleSheet, Text, View ,Image} from "react-native";
import React, { useEffect, useState } from "react";

const HomeCountry = ({ navigation }) => {
  const [countryDetails, setCountryDetails] = useState([]);
  useEffect(() => {
    const handleIntialRequest = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountryDetails(data);
      } catch (err) {
        console.log(`ohh shit we got an error ${err}`);
        return;
      }
    };
    handleIntialRequest();
  }, []);
  return (
    <View style={styles.container}>
        <View style={styles.countryContainer}>

      <ScrollView>
        {countryDetails.map((data) => (
          <View key={data.cca3} style={styles.miniContainer}>
            <Image 
            source={{uri:data.flags.png}}
            style={styles.contryImage}

            />
            <View >
            <Text style={styles.countryName}>{data.name.common}</Text>
            <Text>{`Population: ${data.population}`}</Text>
            <Text>{`Region: ${data.continents[0]}`}</Text>
            <Text>{`Capital: ${data.capital}`}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
                  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  contryImage:{
height:180,
width:280,
  },countryContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  miniContainer:{
    backgroundColor:"#ffffff",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:280,
    marginVertical:14,
  },countryName:{
    fontSize:24,
    // fontStyle:"italic",
    fontWeight:"500"
  }
});

export default HomeCountry;
