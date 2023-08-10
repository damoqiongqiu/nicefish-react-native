import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

const ImageViewer = props => {
  const { placeholderImageSource, selectedImage } = props;
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
}

export default ImageViewer; 