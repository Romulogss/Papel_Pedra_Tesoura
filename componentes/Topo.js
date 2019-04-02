import React from 'react';
import {View,Image} from 'react-native';

const imagemJokenpo = require('../jokenpo.png');

const Topo = props =>(
        <View>
            <Image source ={ imagemJokenpo }  />
        </View>
      );

export default Topo; 