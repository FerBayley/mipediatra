import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import Politicas from './Screens/Politicas'
import PoliticasMuestra from './Screens/PoliticasMuestra'
import BrandScreen from './Screens/BrandScreen'
import Ayuda from './Screens/Ayuda'
import AddGraco from './Screens/Graco/AddGraco'
import AddEwe from './Screens/Ewe/AddEwe'
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


//Carril Estrella Baby
import TriviaEstrella1 from './Screens/CarrilEstrella1/TriviaEstrella1'
import TriviaEstrella2 from './Screens/CarrilEstrella1/TriviaEstrella2'
import TriviaEstrella3 from './Screens/CarrilEstrella1/TriviaEstrella3'

import EstrellaAdd1 from './Screens/EstrellaAds/EstrellaAdd1'
import EstrellaAdd2 from './Screens/EstrellaAds/EstrellaAdd2'
import EstrellaAdd3 from './Screens/EstrellaAds/EstrellaAdd3'
import EstrellaAdd4 from './Screens/EstrellaAds/EstrellaAdd4'
import EstrellaAdd5 from './Screens/EstrellaAds/EstrellaAdd5'
import EstrellaAdd6 from './Screens/EstrellaAds/EstrellaAdd6'
import EstrellaAdd7 from './Screens/EstrellaAds/EstrellaAdd7'
import EstrellaAdd8 from './Screens/EstrellaAds/EstrellaAdd8'
import EstrellaAdd9 from './Screens/EstrellaAds/EstrellaAdd9'

import A from './Screens/EstrellaAds/A'
import B from './Screens/EstrellaAds/B'
import C from './Screens/EstrellaAds/C'

import TriviaEstrella4 from './Screens/CarrilEstrella2/TriviaEstrella4'
import TriviaEstrella5 from './Screens/CarrilEstrella2/TriviaEstrella5'
import TriviaEstrella6 from './Screens/CarrilEstrella2/TriviaEstrella6'


import PremioEstrella from './Screens/EstrellaBaby/PremioEstrella'
import SuccesEstrella from './Screens/EstrellaBaby/SuccesEstrella'
//Estrella Baby

import Perdiste from './Screens/Perdiste'
import NoAcepto from './Screens/NoAcepto'


import Succes from './Screens/Succes'

import ErrorBabyJoggeradd1 from './Screens/CarrilBabyJogger/ErrorBabyJoggeradd1'
import ErrorBabyJoggeradd2 from './Screens/CarrilBabyJogger/ErrorBabyJoggeradd2'
import ErrorBabyJoggeradd3 from './Screens/CarrilBabyJogger/ErrorBabyJoggeradd3'
import BabyjoggerMore1 from './Screens/CarrilBabyJogger/BabyjoggerMore1'
import BabyjoggerMore2 from './Screens/CarrilBabyJogger/BabyjoggerMore2'
import BabyjoggerMore3 from './Screens/CarrilBabyJogger/BabyjoggerMore3'

import EweMore1 from './Screens/CarrilEwe/EweMore1'
import EweMore2 from './Screens/CarrilEwe/EweMore2'
import EweMore3 from './Screens/CarrilEwe/EweMore3'
import ErrorEweAdd1 from './Screens/CarrilEwe/ErrorEweAdd1'
import ErrorEweAdd2 from './Screens/CarrilEwe/ErrorEweAdd2'
import ErrorEweAdd3 from './Screens/CarrilEwe/ErrorEweAdd3'

import TriviaEstrella7 from './Screens/CarrilEstrella3/TriviaEstrella7'
import TriviaEstrella8 from './Screens/CarrilEstrella3/TriviaEstrella8'
import TriviaEstrella9 from './Screens/CarrilEstrella3/TriviaEstrella9'

//Farmx
import PremioFarmx from './Screens/Farmx/PremioFarmx'
//Farmx

//AuloGelio
import PremioAuloGelio from './Screens/AuloGelio/PremioAuloGelio'
//AuloGelio


//Bimbi
import PremioBimbi from './Screens/Bimbi/PremioBimbi'
//Bimbi

//Nuk
import PremioNuk from './Screens/Nuk/PremioNuk'
//Nuk


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
    EstrellaAdd4: { screen: EstrellaAdd4 },
    EstrellaAdd5: { screen: EstrellaAdd5 },
    EstrellaAdd6: { screen: EstrellaAdd6 },
    EstrellaAdd7: { screen: EstrellaAdd7 },
    TriviaEstrella1: { screen: TriviaEstrella1 },
    TriviaEstrella2: { screen: TriviaEstrella2 },
    TriviaEstrella3: { screen: TriviaEstrella3 },
    TriviaEstrella4: { screen: TriviaEstrella4 },
    TriviaEstrella5: { screen: TriviaEstrella5 },
    TriviaEstrella6: { screen: TriviaEstrella6 },

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
    PoliticasMuestra: { screen: PoliticasMuestra },
    HomeScreen: { screen: HomeScreen },
    Ayuda: { screen: Ayuda },
    AddGraco: { screen: AddGraco },
    Succes: { screen: Succes },
    
    //Pantalla que anuncia que se gano el set de preguntas
    PremioGraco: { screen: PremioGraco },
    PremioSilfab: { screen: PremioSilfab },
    PremioJogger: { screen: PremioJogger },
    Perdiste: { screen: Perdiste },
    NoAcepto: { screen: NoAcepto },

    ErrorBabyJoggeradd1: { screen: ErrorBabyJoggeradd1 },
    ErrorBabyJoggeradd2: { screen: ErrorBabyJoggeradd2 },
    ErrorBabyJoggeradd3: { screen: ErrorBabyJoggeradd3 },
    BabyjoggerMore1: { screen: BabyjoggerMore1 },
    BabyjoggerMore2: { screen: BabyjoggerMore2 },
    BabyjoggerMore3: { screen: BabyjoggerMore3 },

    EweMore1: { screen: EweMore1 },
    EweMore2: { screen: EweMore2 },
    EweMore3: { screen: EweMore3 },
    ErrorEweAdd1: { screen: ErrorEweAdd1 },
    ErrorEweAdd2: { screen: ErrorEweAdd2 },
    ErrorEweAdd3: { screen: ErrorEweAdd3 },

    A: { screen: A },
    B: { screen: B },
    C: { screen: C },

    TriviaEstrella7: { screen: TriviaEstrella7 },
    TriviaEstrella8: { screen: TriviaEstrella8 },
    TriviaEstrella9: { screen: TriviaEstrella9 },

    //Farmx
    PremioFarmx: { screen: PremioFarmx },
    //Farmx

    //AuloGelio
    PremioAuloGelio: { screen: PremioAuloGelio },
    //AuloGelio

    //AuloGelio
    PremioBimbi: { screen: PremioBimbi },
    //AuloGelio

    //Nuk
    PremioNuk: { screen: PremioNuk },
    //Nik

})
