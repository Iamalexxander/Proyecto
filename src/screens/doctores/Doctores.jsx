import React from 'react';
import {
    Box,
    Text,
    VStack,
    HStack,
    Heading,
    NativeBaseProvider,
    ScrollView,
    Avatar,
    Pressable,
    Badge,
} from "native-base";
import { Ionicons } from '@expo/vector-icons';

const Doctores = () => {
    const doctores = [
        {
            id: 1,
            nombre: "Dr. González",
            especialidad: "Cardiología",
            experiencia: "15 años",
            disponible: true,
            horario: "Lun-Vie: 9:00-17:00"
        },
        {
            id: 2,
            nombre: "Dra. Rodríguez",
            especialidad: "Pediatría",
            experiencia: "12 años",
            disponible: true,
            horario: "Lun-Vie: 8:00-16:00"
        },
        {
            id: 3,
            nombre: "Dr. Sánchez",
            especialidad: "Oftalmología",
            experiencia: "10 años",
            disponible: false,
            horario: "Mar-Sab: 10:00-18:00"
        },
        {
            id: 4,
            nombre: "Dr. Pérez",
            especialidad: "Neurología",
            experiencia: "20 años",
            disponible: true,
            horario: "Lun-Vie: 10:00-18:00"
        },
        {
            id: 5,
            nombre: "Dra. Martínez",
            especialidad: "Dermatología",
            experiencia: "18 años",
            disponible: true,
            horario: "Lun-Vie: 9:00-17:00"
        },
        {
            id: 6,
            nombre: "Dr. López",
            especialidad: "Ortopedia",
            experiencia: "22 años",
            disponible: true,
            horario: "Lun-Vie: 8:00-16:00"
        },
        {
            id: 7,
            nombre: "Dra. Fernández",
            especialidad: "Psiquiatría",
            experiencia: "14 años",
            disponible: false,
            horario: "Lun-Vie: 10:00-18:00"
        },
        {
            id: 8,
            nombre: "Dr. Martínez",
            especialidad: "Ginecología",
            experiencia: "25 años",
            disponible: true,
            horario: "Lun-Vie: 9:00-17:00"
        },
        {
            id: 9,
            nombre: "Dra. García",
            especialidad: "Endocrinología",
            experiencia: "11 años",
            disponible: false,
            horario: "Lun-Vie: 8:00-16:00"
        },
        {
            id: 10,
            nombre: "Dr. González",
            especialidad: "Infectología",
            experiencia: "30 años",
            disponible: true,
            horario: "Lun-Vie: 9:00-18:00"
        },
        {
            id: 11,
            nombre: "Dra. López",
            especialidad: "Oftalmología",
            experiencia: "8 años",
            disponible: true,
            horario: "Lun-Vie: 9:00-17:00"
        },
        {
            id: 12,
            nombre: "Dr. Rodríguez",
            especialidad: "Cardiología",
            experiencia: "17 años",
            disponible: false,
            horario: "Lun-Vie: 10:00-18:00"
        },
        {
            id: 13,
            nombre: "Dr. Sánchez",
            especialidad: "Urología",
            experiencia: "12 años",
            disponible: true,
            horario: "Lun-Vie: 9:00-16:00"
        },
        {
            id: 14,
            nombre: "Dra. García",
            especialidad: "Ginecología",
            experiencia: "19 años",
            disponible: true,
            horario: "Lun-Vie: 10:00-18:00"
        },
        {
            id: 15,
            nombre: "Dr. Pérez",
            especialidad: "Oftalmología",
            experiencia: "14 años",
            disponible: false,
            horario: "Lun-Vie: 9:00-17:00"
        },
        {
            id: 16,
            nombre: "Dra. Fernández",
            especialidad: "Neurocirugía",
            experiencia: "21 años",
            disponible: true,
            horario: "Lun-Vie: 8:00-16:00"
        },
        {
            id: 17,
            nombre: "Dr. Martínez",
            especialidad: "Pediatría",
            experiencia: "10 años",
            disponible: true,
            horario: "Lun-Vie: 9:00-17:00"
        },
        {
            id: 18,
            nombre: "Dra. Rodríguez",
            especialidad: "Cirugía General",
            experiencia: "13 años",
            disponible: false,
            horario: "Lun-Vie: 10:00-18:00"
        },
        {
            id: 19,
            nombre: "Dr. Sánchez",
            especialidad: "Dermatología",
            experiencia: "22 años",
            disponible: true,
            horario: "Lun-Vie: 9:00-16:00"
        },
        {
            id: 20,
            nombre: "Dra. Pérez",
            especialidad: "Psiquiatría",
            experiencia: "15 años",
            disponible: true,
            horario: "Lun-Vie: 9:00-17:00"
        }
    ];

    const DoctorCard = ({ doctor }) => (
        <Pressable>
            {({ isPressed }) => (
                <Box 
                    bg="white" 
                    p="4" 
                    rounded="lg" 
                    shadow={2} 
                    mb="3"
                    style={{
                        transform: [{ scale: isPressed ? 0.98 : 1 }]
                    }}
                >
                    <HStack space={4} alignItems="center">
                        <Avatar 
                            bg="cyan.500" 
                            size="lg"
                        >
                            {doctor.nombre.substr(4, 2)}
                        </Avatar>
                        <VStack flex={1}>
                            <HStack justifyContent="space-between" alignItems="center">
                                <Text bold fontSize="md" color="cyan.600">
                                    {doctor.nombre}
                                </Text>
                                <Badge 
                                    colorScheme={doctor.disponible ? "success" : "danger"}
                                    variant="subtle"
                                    rounded="full"
                                >
                                    {doctor.disponible ? "Disponible" : "No Disponible"}
                                </Badge>
                            </HStack>
                            <Text color="gray.500">{doctor.especialidad}</Text>
                            <HStack space={4} mt="2">
                                <HStack space={1} alignItems="center">
                                    <Ionicons name="time-outline" size={16} color="#666" />
                                    <Text fontSize="xs" color="gray.500">{doctor.experiencia}</Text>
                                </HStack>
                                <HStack space={1} alignItems="center">
                                    <Ionicons name="calendar-outline" size={16} color="#666" />
                                    <Text fontSize="xs" color="gray.500">{doctor.horario}</Text>
                                </HStack>
                            </HStack>
                        </VStack>
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
                        <Heading color="cyan.600" size="lg">Nuestros Especialistas</Heading>
                        
                        <Box bg="cyan.50" p="4" rounded="lg">
                            <HStack space={2} alignItems="center">
                                <Ionicons name="information-circle" size={24} color="#0891b2" />
                                <Text color="cyan.600" flex={1}>
                                    Seleccione un doctor para ver más detalles o agendar una cita
                                </Text>
                            </HStack>
                        </Box>

                        {doctores.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                        ))}
                    </VStack>
                </ScrollView>
            </Box>
        </NativeBaseProvider>
    );
};

export default Doctores;