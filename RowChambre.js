import React, { Component } from 'react';
import {
  Image,              // Renders background image
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles row presses
  View                // Container component
} from 'react-native';
import Dimensions from 'Dimensions';

// Detect screen size to calculate row height
const screen = Dimensions.get('window');

export default class RowChambre extends Component {


  render({ event, onPress } = this.props) {

    const { title, image } = event;
    return (
      // Row press handler
      <TouchableOpacity
        // Pass row style
        style={styles.row}
        // Call onPress function passed from List component when pressed
        onPress={onPress}
        // Dim row a little bit when pressed
        activeOpacity={0.7}
      >
        {/* Background image */}
        <Image source={{uri: image}} style={styles.imageBackground}>
          {/* Title */}
          <Text style={[styles.text, styles.title]}>{title.toUpperCase()}</Text>
          {/* Rating */}

        </Image>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  // Row
  row: {
    paddingBottom: 4,                   // Add padding at the bottom
  },
  // Background image
  imageBackground: {
    height: screen.height / 3,          // Divide screen height by 3
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
  },
  // Shared text style
  text: {
    color: '#fff',                      // White text color
    backgroundColor: 'transparent',     // No background
    fontFamily: 'Avenir',               // Change default font
    fontWeight: 'bold',                 // Bold font
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  //  title
  title: {
    fontSize: 22,
                       // Bigger font size
  },

});
