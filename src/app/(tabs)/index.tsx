import {  View, } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import products from '../../../assets/data/products';

import ProductListItem from '../../components/ProductListItem';
  



 
export default function MenuScreen() {
  return (
    <View>

      <ProductListItem product= {products[0]}/>

    </View>
  );
}

