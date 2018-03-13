import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation'

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import Politicas from './Screens/Politicas'
import BrandScreen from './Screens/BrandScreen'
import Add from './Screens/Add'
import Ayuda from './Screens/Ayuda'
import AddCarestino from './Screens/Carestino/AddCarestino'
import AddEstrella from './Screens/AddEstrella'
import AddGraco from './Screens/AddGraco'
import AddEwe from './Screens/Ewe/AddEwe'
import TriviaCarestino1 from './Screens/Carestino/TriviaCarestino1'
import TriviaCarestino2 from './Screens/Carestino/TriviaCarestino2'
import TriviaCarestino3 from './Screens/Carestino/TriviaCarestino3'
import PremioCarestino from './Screens/Carestino/PremioCarestino'
import PremioGraco from './Screens/PremioGraco'
import PremioSilfab from './Screens/PremioSilfab'
import Loading from './Screens/Loading'
import BabyJoggeradd1 from './Screens/BabyJogger/BabyJoggeradd1'
import BabyJoggeradd2 from './Screens/BabyJogger/BabyJoggeradd2'
import BabyJoggeradd3 from './Screens/BabyJogger/BabyJoggeradd3'
import TriviaBabyJogger1 from './Screens/BabyJogger/TriviaBabyJogger1'
import TriviaBabyJogger2 from './Screens/BabyJogger/TriviaBabyJogger2'
import TriviaBabyJogger3 from './Screens/BabyJogger/TriviaBabyJogger3'
import PremioJogger from './Screens/BabyJogger/PremioJogger'
import SuccesJogger from './Screens/BabyJogger/SuccesJogger'
//Ewe//
import PremioEwe from './Screens/Ewe/PremioEwe'
import Eweadd1 from './Screens/Ewe/Eweadd1'
import Eweadd2 from './Screens/Ewe/Eweadd2'
import Eweadd3 from './Screens/Ewe/Eweadd3'
import TriviaEwe1 from './Screens/Ewe/TriviaEwe1'
import TriviaEwe2 from './Screens/Ewe/TriviaEwe2'
import TriviaEwe3 from './Screens/Ewe/TriviaEwe3'
import SuccesEwe from './Screens/Ewe/SuccesEwe'


//Estrella Baby
import EstrellaAdd1 from './Screens/EstrellaBaby/EstrellaAdd1'
import EstrellaAdd2 from './Screens/EstrellaBaby/EstrellaAdd2'
import EstrellaAdd3 from './Screens/EstrellaBaby/EstrellaAdd3'
import TriviaEstrella1 from './Screens/EstrellaBaby/TriviaEstrella1'
import TriviaEstrella2 from './Screens/EstrellaBaby/TriviaEstrella2'
import TriviaEstrella3 from './Screens/EstrellaBaby/TriviaEstrella3'
import PremioEstrella from './Screens/EstrellaBaby/PremioEstrella'
import SuccesEstrella from './Screens/EstrellaBaby/SuccesEstrella'
//Estrella Baby

import Perdiste from './Screens/Perdiste'


export default class App extends React.Component {
    render() {
        return (            
            <AppNavigator/>
        );
    }
}

const AppNavigator = StackNavigator({
    BrandScreen: { screen: BrandScreen },
    //Estrella Baby//
    EstrellaAdd1: { screen: EstrellaAdd1 },
    EstrellaAdd2: { screen: EstrellaAdd2 },
    EstrellaAdd3: { screen: EstrellaAdd3 },
    TriviaEstrella1: { screen: TriviaEstrella1 },
    TriviaEstrella2: { screen: TriviaEstrella2 },
    TriviaEstrella3: { screen: TriviaEstrella3 },
    PremioEstrella: { screen: PremioEstrella },
    SuccesEstrella: { screen: SuccesEstrella },
    //Estrella Baby//
    TriviaBabyJogger1: { screen: TriviaBabyJogger1 },
    BabyJoggeradd1: { screen: BabyJoggeradd1 },
    TriviaEwe1: { screen: TriviaEwe1 },
    TriviaEwe2: { screen: TriviaEwe2 },
    TriviaEwe3: { screen: TriviaEwe3 },
    Eweadd3: { screen: Eweadd3 },
    Eweadd2: { screen: Eweadd2 },
    Eweadd1: { screen: Eweadd1 },
    PremioEwe: { screen: PremioEwe },
    AddEwe: { screen: AddEwe },
    PremioCarestino: { screen: PremioCarestino },
    SuccesJogger: { screen: SuccesJogger },
    SuccesEwe: { screen: SuccesEwe },
    LoginScreen: { screen: LoginScreen },
    TriviaBabyJogger1: { screen: TriviaBabyJogger1 },
    TriviaBabyJogger3: { screen: TriviaBabyJogger3 },
    TriviaBabyJogger2: { screen: TriviaBabyJogger2 },
    BabyJoggeradd2: { screen: BabyJoggeradd2 },
    BabyJoggeradd3: { screen: BabyJoggeradd3 },
    Add: { screen: Add },
    Loading: { screen: Loading },
    Politicas: { screen: Politicas },
    HomeScreen: { screen: HomeScreen },
    Ayuda: { screen: Ayuda },
    AddCarestino: { screen: AddCarestino },
    AddEstrella: { screen: AddEstrella },
    AddGraco: { screen: AddGraco },
    //Trivias de Carestino
    TriviaCarestino1: { screen: TriviaCarestino1 },
    TriviaCarestino2: { screen: TriviaCarestino2 },
    TriviaCarestino3: { screen: TriviaCarestino3 },
    TriviaCarestino3: { screen: TriviaCarestino3 },
    //Pantalla que anuncia que se gano el set de preguntas
    PremioCarestino: { screen: PremioCarestino },
    PremioGraco: { screen: PremioGraco },
    PremioSilfab: { screen: PremioSilfab },
    PremioJogger: { screen: PremioJogger },
    Perdiste: { screen: Perdiste }
})
