import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";

// Importaciones de componentes desde las rutas correctas
import Home from "./src/screens/home/Home";  
import Citas from "./src/screens/citas/Citas";
import Doctores from "./src/screens/doctores/Doctores";
import Perfil from "./src/screens/perfil/Perfil";
import Login from "./src/screens/login/Login";
import Register from "./src/screens/register/Register";
import RecoverPassword from "./src/screens/recoverpassword/RecoverPassword";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Citas") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Doctores") {
            iconName = focused ? "medical" : "medical-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "log-in" : "log-in-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0891b2",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="Citas"
        component={Citas}
        options={{ title: "Mis Citas" }}
      />
      <Tab.Screen
        name="Doctores"
        component={Doctores}
        options={{ title: "Doctores" }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ title: "Mi Perfil" }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ title: "Iniciar Sesión" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainTabs />  {/* Aquí se inserta el MainTabs dentro del NavigationContainer */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
