import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation'

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import Politicas from './Screens/Politicas'
import BrandScreen from './Screens/BrandScreen'
import Ayuda from './Screens/Ayuda'
import AddEstrella from './Screens/EstrellaBaby/AddEstrella'
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

import EweMore1 from './Screens/MoreTrivias/EweMore1'
import EweMore2 from './Screens/MoreTrivias/EweMore2'
import EweMore3 from './Screens/MoreTrivias/EweMore3'
import EweMore4 from './Screens/MoreTrivias/EweMore4'
import EweMore5 from './Screens/MoreTrivias/EweMore5'
import EweMore6 from './Screens/MoreTrivias/EweMore6'

import BabyjoggerMore1 from './Screens/MoreTrivias/BabyjoggerMore1'
import BabyjoggerMore2 from './Screens/MoreTrivias/BabyjoggerMore2'
import BabyjoggerMore3 from './Screens/MoreTrivias/BabyjoggerMore3'
import BabyjoggerMore4 from './Screens/MoreTrivias/BabyjoggerMore4'
import BabyjoggerMore5 from './Screens/MoreTrivias/BabyjoggerMore5'
import BabyjoggerMore6 from './Screens/MoreTrivias/BabyjoggerMore6'

import EstrellaMore1 from './Screens/MoreTrivias/EstrellaMore1'
import EstrellaMore2 from './Screens/MoreTrivias/EstrellaMore2'
import EstrellaMore3 from './Screens/MoreTrivias/EstrellaMore3'
import EstrellaMore4 from './Screens/MoreTrivias/EstrellaMore4'
import EstrellaMore5 from './Screens/MoreTrivias/EstrellaMore5'
import EstrellaMore6 from './Screens/MoreTrivias/EstrellaMore6'

import ErrorBabyJoggeradd1 from './Screens/ErrorAds/ErrorBabyJoggeradd1'
import ErrorBabyJoggeradd2 from './Screens/ErrorAds/ErrorBabyJoggeradd2'
import ErrorBabyJoggeradd3 from './Screens/ErrorAds/ErrorBabyJoggeradd3'

import Succes from './Screens/Succes'


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
    AddEstrella: { screen: AddEstrella },
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

    //More EWE
    EweMore1: { screen: EweMore1 },
    EweMore2: { screen: EweMore2 },
    EweMore3: { screen: EweMore3 },
    EweMore4: { screen: EweMore4 },
    EweMore5: { screen: EweMore5 },
    EweMore6: { screen: EweMore6 },
    //More EWE

    //More BABYJOGGER
    BabyjoggerMore1: { screen: BabyjoggerMore1 },
    BabyjoggerMore2: { screen: BabyjoggerMore2 },
    BabyjoggerMore3: { screen: BabyjoggerMore3 },
    BabyjoggerMore4: { screen: BabyjoggerMore4 },
    BabyjoggerMore5: { screen: BabyjoggerMore5 },
    BabyjoggerMore6: { screen: BabyjoggerMore6 },
    //More BABYJOGGER

    //More ESTRELLABABY
    EstrellaMore1: { screen: EstrellaMore1 },
    EstrellaMore2: { screen: EstrellaMore2 },
    EstrellaMore3: { screen: EstrellaMore3 },
    EstrellaMore4: { screen: EstrellaMore4 },
    EstrellaMore5: { screen: EstrellaMore5 },
    EstrellaMore6: { screen: EstrellaMore6 },
    //More ESTRELLABABY

     //More ESTRELLABABY
     ErrorBabyJoggeradd1: { screen: ErrorBabyJoggeradd1 },
     ErrorBabyJoggeradd2: { screen: ErrorBabyJoggeradd2 },
     ErrorBabyJoggeradd3: { screen: ErrorBabyJoggeradd3 },
     //More ESTRELLABABY
})
