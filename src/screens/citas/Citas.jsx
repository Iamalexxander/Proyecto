import React, { useState } from 'react';
import {Box,Text,VStack,HStack,Heading,NativeBaseProvider,ScrollView,Pressable,Button,Modal,FormControl,Select,Input,} from "native-base";
import { Ionicons } from '@expo/vector-icons';

const Citas = () => {    const [showModal, setShowModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const citasEjemplo = [
        {
            id: 1,
            doctor: "Dr. González",
            especialidad: "Cardiología",
            fecha: "2025-02-20",
            hora: "09:00",
            estado: "Pendiente"
        },
        {
            id: 2,
            doctor: "Dra. Rodríguez",
            especialidad: "Pediatría",
            fecha: "2025-02-22",
            hora: "10:30",
            estado: "Confirmada"
        },
        {
            id: 3,
            doctor: "Dr. Sánchez",
            especialidad: "Oftalmología",
            fecha: "2025-02-23",
            hora: "11:00",
            estado: "Pendiente"
        },
        {
            id: 4,
            doctor: "Dr. Pérez",
            especialidad: "Neurología",
            fecha: "2025-02-24",
            hora: "15:00",
            estado: "Confirmada"
        },
        {
            id: 5,
            doctor: "Dra. Martínez",
            especialidad: "Dermatología",
            fecha: "2025-02-25",
            hora: "14:30",
            estado: "Pendiente"
        },
        {
            id: 6,
            doctor: "Dr. López",
            especialidad: "Ortopedia",
            fecha: "2025-02-26",
            hora: "10:00",
            estado: "Confirmada"
        },
        {
            id: 7,
            doctor: "Dra. Fernández",
            especialidad: "Psiquiatría",
            fecha: "2025-02-27",
            hora: "16:00",
            estado: "Pendiente"
        },
        {
            id: 8,
            doctor: "Dr. Martínez",
            especialidad: "Ginecología",
            fecha: "2025-02-28",
            hora: "11:30",
            estado: "Confirmada"
        },
        {
            id: 9,
            doctor: "Dra. García",
            especialidad: "Endocrinología",
            fecha: "2025-03-01",
            hora: "09:30",
            estado: "Pendiente"
        },
        {
            id: 10,
            doctor: "Dr. González",
            especialidad: "Infectología",
            fecha: "2025-03-02",
            hora: "12:00",
            estado: "Confirmada"
        },
        {
            id: 11,
            doctor: "Dra. López",
            especialidad: "Oftalmología",
            fecha: "2025-03-03",
            hora: "13:30",
            estado: "Pendiente"
        },
        {
            id: 12,
            doctor: "Dr. Rodríguez",
            especialidad: "Cardiología",
            fecha: "2025-03-04",
            hora: "15:30",
            estado: "Confirmada"
        },
        {
            id: 13,
            doctor: "Dr. Sánchez",
            especialidad: "Urología",
            fecha: "2025-03-05",
            hora: "10:30",
            estado: "Pendiente"
        },
        {
            id: 14,
            doctor: "Dra. García",
            especialidad: "Ginecología",
            fecha: "2025-03-06",
            hora: "14:00",
            estado: "Confirmada"
        },
        {
            id: 15,
            doctor: "Dr. Pérez",
            especialidad: "Oftalmología",
            fecha: "2025-03-07",
            hora: "11:00",
            estado: "Pendiente"
        },
        {
            id: 16,
            doctor: "Dra. Fernández",
            especialidad: "Neurocirugía",
            fecha: "2025-03-08",
            hora: "09:00",
            estado: "Confirmada"
        },
        {
            id: 17,
            doctor: "Dr. Martínez",
            especialidad: "Pediatría",
            fecha: "2025-03-09",
            hora: "16:30",
            estado: "Pendiente"
        },
        {
            id: 18,
            doctor: "Dra. Rodríguez",
            especialidad: "Cirugía General",
            fecha: "2025-03-10",
            hora: "13:00",
            estado: "Confirmada"
        },
        {
            id: 19,
            doctor: "Dr. Sánchez",
            especialidad: "Dermatología",
            fecha: "2025-03-11",
            hora: "12:30",
            estado: "Pendiente"
        },
        {
            id: 20,
            doctor: "Dra. Pérez",
            especialidad: "Psiquiatría",
            fecha: "2025-03-12",
            hora: "15:00",
            estado: "Confirmada"
        }
    ];

    const CitaCard = ({ cita }) => (
        <Box bg="white" p="4" rounded="lg" shadow={2} mb="3">
            <HStack justifyContent="space-between" alignItems="center" mb="2">
                <VStack>
                    <Text color="cyan.600" bold fontSize="md">{cita.doctor}</Text>
                    <Text color="gray.500">{cita.especialidad}</Text>
                </VStack>
                <Box bg={cita.estado === "Confirmada" ? "green.100" : "yellow.100"} px="2" py="1" rounded="full">
                    <Text color={cita.estado === "Confirmada" ? "green.600" : "yellow.600"} fontSize="xs">{cita.estado}</Text>
                </Box>
            </HStack>
            <HStack space={4} mt="2">
                <HStack space={2} alignItems="center">
                    <Ionicons name="calendar-outline" size={20} color="#0891b2" />
                    <Text color="gray.600">{cita.fecha}</Text>
                </HStack>
                <HStack space={2} alignItems="center">
                    <Ionicons name="time-outline" size={20} color="#0891b2" />
                    <Text color="gray.600">{cita.hora}</Text>
                </HStack>
            </HStack>
        </Box>
    );

    return (
        <NativeBaseProvider>
            <Box flex={1} bg="gray.100" safeArea>
                <ScrollView p="4">
                    <VStack space={4}>
                        <HStack justifyContent="space-between" alignItems="center">
                            <Heading color="cyan.600" size="lg">Mis Citas</Heading>
                            <Button
                                leftIcon={<Ionicons name="add" size={20} color="white" />}
                                bg="cyan.500"
                                onPress={() => setShowModal(true)}
                            >
                                Nueva Cita
                            </Button>
                        </HStack>

                        {citasEjemplo.map((cita) => (
                            <CitaCard key={cita.id} cita={cita} />
                        ))}
                    </VStack>
                </ScrollView>

                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content>
                        <Modal.Header>Agendar Nueva Cita</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>Especialidad y Doctor</FormControl.Label>
                                <Select
                                    placeholder="Seleccione un doctor"
                                    value={selectedDoctor}
                                    onValueChange={setSelectedDoctor}
                                >
                                    <Select.Item label="Dr. González - Cardiología" value="gonzalez" />
                                    <Select.Item label="Dra. Rodríguez - Pediatría" value="rodriguez" />
                                </Select>
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Fecha</FormControl.Label>
                                <Input 
                                    type="date"
                                    value={selectedDate}
                                    onChangeText={setSelectedDate}
                                />
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Hora</FormControl.Label>
                                <Select
                                    placeholder="Seleccione una hora"
                                    value={selectedTime}
                                    onValueChange={setSelectedTime}
                                >
                                    <Select.Item label="09:00" value="09:00" />
                                    <Select.Item label="10:00" value="10:00" />
                                    <Select.Item label="11:00" value="11:00" />
                                </Select>
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button 
                                    variant="ghost" 
                                    colorScheme="blueGray" 
                                    onPress={() => setShowModal(false)}
                                >
                                    Cancelar
                                </Button>
                                <Button 
                                    bg="cyan.500"
                                    onPress={() => {
                                        setShowModal(false);
                                        // Aquí iría la lógica para guardar la cita
                                    }}
                                >
                                    Agendar
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Box>
        </NativeBaseProvider>
    );
};

export default Citas;