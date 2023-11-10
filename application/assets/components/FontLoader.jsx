import * as Font from 'expo-font';

export const mainFont = async () => {
    await Font.loadAsync({
        'lexend-deca': { uri: 'https://example.com/fonts/LexendDeca-Regular.ttf' },
    });
};
