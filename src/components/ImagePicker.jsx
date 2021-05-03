import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker';

export default function MyImagePicker() {
  const pickImage = () => new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(pickerOptions, (response) => {
      if (response.didCancel) return;

      if (response.error) {
        const message = `An error was occurred: ${response.error}`;
        reject(new Error(message));
        return;
      }

      const { path: uri } = response;
      resolve(uri);
    });
  });
}
