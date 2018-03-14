import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation'

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import Politicas from './Screens/Politicas'
import BrandScreen from './Screens/BrandScreen'
import Ayuda from './Screens/Ayuda'
import AddGraco from './Screens/Graco/AddGraco'
import AddEwe from './Screens/Ewe/AddEwe'
import TriviaCarestino1 from './Screens/Carestino/TriviaCarestino1'
import TriviaCarestino2 from './Screens/Carestino/TriviaCarestino2'
import TriviaCarestino3 from './Screens/Carestino/TriviaCarestino3'
import PremioCarestino from './Screens/Carestino/PremioCarestino'
import PremioGraco from './Screens/Graco/PremioGraco'
import PremioSilfab from './Screens/Silfab/PremioSilfab'
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
import NoAcepto from './Screens/NoAcepto'

//CarestinoAdds
import CarestinoAdd1 from './Screens/Carestino/CarestinoAdd1'
import CarestinoAdd2 from './Screens/Carestino/CarestinoAdd2'
import CarestinoAdd3 from './Screens/Carestino/CarestinoAdd3'

import Succes from './Screens/Succes'

import ErrorBabyJoggeradd1 from './Screens/CarrilBabyJogger/ErrorBabyJoggeradd1'
import ErrorBabyJoggeradd2 from './Screens/CarrilBabyJogger/ErrorBabyJoggeradd2'
import ErrorBabyJoggeradd3 from './Screens/CarrilBabyJogger/ErrorBabyJoggeradd3'
import BabyjoggerMore1 from './Screens/CarrilBabyJogger/BabyjoggerMore1'
import BabyjoggerMore2 from './Screens/CarrilBabyJogger/BabyjoggerMore2'
import BabyjoggerMore3 from './Screens/CarrilBabyJogger/BabyjoggerMore3'

import EstrellaMore1 from './Screens/CarrilEstrella/EstrellaMore1'
import EstrellaMore2 from './Screens/CarrilEstrella/EstrellaMore2'
import EstrellaMore3 from './Screens/CarrilEstrella/EstrellaMore3'
import ErrorEstrellaAdd1 from './Screens/CarrilEstrella/ErrorEstrellaAdd1'
import ErrorEstrellaAdd2 from './Screens/CarrilEstrella/ErrorEstrellaAdd2'
import ErrorEstrellaAdd3 from './Screens/CarrilEstrella/ErrorEstrellaAdd3'

import EweMore1 from './Screens/CarrilEwe/EweMore1'
import EweMore2 from './Screens/CarrilEwe/EweMore2'
import EweMore3 from './Screens/CarrilEwe/EweMore3'
import ErrorEweAdd1 from './Screens/CarrilEwe/ErrorEweAdd1'
import ErrorEweAdd2 from './Screens/CarrilEwe/ErrorEweAdd2'
import ErrorEweAdd3 from './Screens/CarrilEwe/ErrorEweAdd3'

export default class App extends React.Component {
    render() {
        return (            
            <AppNavigator/>
        );
    }
}

const AppNavigator = StackNavigator({
    LoginScreen: { screen: LoginScreen },
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
    SuccesJogger: { screen: SuccesJogger },
    SuccesEwe: { screen: SuccesEwe },
    SuccesJogger: { screen: SuccesJogger },
    TriviaBabyJogger1: { screen: TriviaBabyJogger1 },
    TriviaBabyJogger3: { screen: TriviaBabyJogger3 },
    TriviaBabyJogger2: { screen: TriviaBabyJogger2 },
    BabyJoggeradd2: { screen: BabyJoggeradd2 },
    BabyJoggeradd3: { screen: BabyJoggeradd3 },
    Loading: { screen: Loading },
    Politicas: { screen: Politicas },
    HomeScreen: { screen: HomeScreen },
    Ayuda: { screen: Ayuda },
    AddGraco: { screen: AddGraco },
    Succes: { screen: Succes },
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
    Perdiste: { screen: Perdiste },
    NoAcepto: { screen: NoAcepto },
    CarestinoAdd1: { screen: CarestinoAdd1 },
    CarestinoAdd2: { screen: CarestinoAdd2 },
    CarestinoAdd3: { screen: CarestinoAdd3 },
    PremioCarestino: { screen: PremioCarestino },

    ErrorBabyJoggeradd1: { screen: ErrorBabyJoggeradd1 },
    ErrorBabyJoggeradd2: { screen: ErrorBabyJoggeradd2 },
    ErrorBabyJoggeradd3: { screen: ErrorBabyJoggeradd3 },
    BabyjoggerMore1: { screen: BabyjoggerMore1 },
    BabyjoggerMore2: { screen: BabyjoggerMore2 },
    BabyjoggerMore3: { screen: BabyjoggerMore3 },

    EstrellaMore1: { screen: EstrellaMore1 },
    EstrellaMore2: { screen: EstrellaMore2 },
    EstrellaMore3: { screen: EstrellaMore3 },
    ErrorEstrellaAdd1: { screen: ErrorEstrellaAdd1 },
    ErrorEstrellaAdd2: { screen: ErrorEstrellaAdd2 },
    ErrorEstrellaAdd3: { screen: ErrorEstrellaAdd3 },

    EweMore1: { screen: EweMore1 },
    EweMore2: { screen: EweMore2 },
    EweMore3: { screen: EweMore3 },
    ErrorEweAdd1: { screen: ErrorEweAdd1 },
    ErrorEweAdd2: { screen: ErrorEweAdd2 },
    ErrorEweAdd3: { screen: ErrorEweAdd3 },
})
