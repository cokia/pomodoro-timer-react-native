import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onpress }) {
    return (
        <TouchableOpacity>
            <FontAwesome name={iconName} size={80} color="white" />
        </TouchableOpacity>
    );
}

export default Button;