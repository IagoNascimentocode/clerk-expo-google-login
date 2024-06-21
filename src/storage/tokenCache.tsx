import * as SecureStore from 'expo-secure-store';

async function getToken(key: string) {
  try {
    return SecureStore.getItem(key);
  } catch (error) {
    console.log(error)
  }
}

async function saveToken(key: string, value: string) {
  try {
    return SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log(error)
  }
}

export const tokenCache = { getToken, saveToken }
