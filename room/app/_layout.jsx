import { Stack } from "expo-router";

import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Index" 
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        ),
      }}
      
      />
    </Stack>
  );
}
