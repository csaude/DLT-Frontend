

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {AuthProvider} from './src/contexts/auth';

import Routes from './src/routes';

const App: React.FC = () => {
    const [signed, setSigned] = useState(false);

    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </NavigationContainer>
    )
}

export default App;
