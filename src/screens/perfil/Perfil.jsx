import React from 'react';
import {Box,Text,VStack,HStack,Heading,NativeBaseProvider,ScrollView,Avatar,Divider,Pressable,} from "native-base";
import { Ionicons } from '@expo/vector-icons';

const Perfil = () => {
    const perfilInfo = {
        nombre: "Juan Pérez",
        email: "juan.perez@email.com",
        telefono: "+593 98 765 4321",
        fechaNacimiento: "15/05/1985",
        direccion: "Av. Principal 123, Quito"
    };

    const MenuOption = ({ icon, title, subtitle, action }) => (
        <Pressable>
            {({ isPressed }) => (
                <Box 
                    bg="white" 
                    p="4" 
                    rounded="lg"
                    style={{
                        transform: [{ scale: isPressed ? 0.98 : 1 }]
                    }}
                >
                    <HStack space={4} alignItems="center">
                        <Box bg="cyan.100" p="2" rounded="full">
                            <Ionicons name={icon} size={24} color="#0891b2" />
                        </Box>
                        <VStack flex={1}>
                            <Text color="gray.700" bold>{title}</Text>
                            <Text color="gray.500" fontSize="sm">{subtitle}</Text>
                        </VStack>
                        <Ionicons name="chevron-forward" size={24} color="#666" />
                    </HStack>
                </Box>
            )}
        </Pressable>
    );

    return (
        <NativeBaseProvider>
            <Box flex={1} bg="gray.100" safeArea>
                <ScrollView p="4">
                    <VStack space={4}>
                        <Box bg="white" p="4" rounded="lg" shadow={2}>
                            <VStack space={4} alignItems="center">
                                <Avatar 
                                    bg="cyan.500" 
                                    size="2xl"
                                >
                                    JP
                                </Avatar>
                                <VStack alignItems="center">
                                    <Heading size="md" color="gray.700">{perfilInfo.nombre}</Heading>
                                    <Text color="gray.500">{perfilInfo.email}</Text>
                                </VStack>
                            </VStack>
                        </Box>

                        <Heading size="md" color="gray.700" mt="4">Información Personal</Heading>
                        <VStack space={3}>
                            <MenuOption 
                                icon="call-outline"
                                title="Teléfono"
                                subtitle={perfilInfo.telefono}
                            />
                            <MenuOption 
                                icon="calendar-outline"
                                title="Fecha de Nacimiento"
                                subtitle={perfilInfo.fechaNacimiento}
                            />
                            <MenuOption 
                                icon="location-outline"
                                title="Dirección"
                                subtitle={perfilInfo.direccion}
                            />
                        </VStack>

                        <Divider my="2" />

                        <Heading size="md" color="gray.700">Configuración</Heading>
                        <VStack space={3}>
                            <MenuOption 
                                icon="notifications-outline"
                                title="Notificaciones"
                                subtitle="Gestionar notificaciones"
                            />
                            <MenuOption 
                                icon="lock-closed-outline"
                                title="Privacidad y Seguridad"
                                subtitle="Cambiar contraseña y seguridad"
                            />
                            <MenuOption 
                                icon="help-circle-outline"
                                title="Ayuda y Soporte"
                                subtitle="Preguntas frecuentes y contacto"
                            />
                        </VStack>
                    </VStack>
                </ScrollView>
            </Box>
        </NativeBaseProvider>
    );
};

export default Perfil;