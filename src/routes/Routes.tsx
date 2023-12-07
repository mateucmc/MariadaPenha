import Welcome from '../pages/Welcome';
import Signin from '../pages/Signin';
import Home from '../pages/Home';
import { Stack } from '.';


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="SignIn"
                component={Signin}
                options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: '#FFEAF4',
                        
                    },
                    headerShadowVisible: false
                }} />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: '#FFEAF4',
                        
                    },
                    headerShadowVisible: false
                }} />

        </Stack.Navigator>
    );
}
