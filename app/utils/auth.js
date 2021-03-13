import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAuth = async (authData) => {
  try {
    await AsyncStorage.setItem('auth', JSON.stringify(authData));
  } catch (error) {
    console.log(error);
  }
};

export const getAuth = async () => {
  try {
    let auth = null;
    await AsyncStorage.getItem('auth').then((res) => {
      auth = res;
    });
    return auth;
  } catch (error) {
    console.log('Errorrrrrrrrrrrrrrrrrrr!', error);
    return null;
  }
};
