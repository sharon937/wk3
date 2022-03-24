import React from 'react';
import { Center, Text, NativeBaseProvider } from "native-base";

const Mybookscreen = () => {
    return (
        <NativeBaseProvider>
    <Center bg="emerald.100" flex={1}>
        <Text fontSize={30}>
            This is a My book Page
        </Text>              
    </Center>
    </NativeBaseProvider>
    );
}

export default Mybookscreen;