import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../constants/Colors";
import {Product} from '../types';

type ProductListItemProps ={
    product:Product;
}

export   const DefaultPizzaImage= 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

const ProductListItem = ({  product }:ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image ||  DefaultPizzaImage}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    // height:100
    aspectRatio: 1,
  },
});
