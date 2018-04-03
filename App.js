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
import PremioGraco from './Screens/Graco/PremioGraco'
import Loading from './Screens/Loading'

import Perdiste from './Screens/Perdiste'
import NoAcepto from './Screens/NoAcepto'

import Succes from './Screens/Succes'

//Farmx
import PremioFarmx from './Screens/Farmx/PremioFarmx'
import Fganaste from './Screens/Farmx/Fganaste'
// Farmx Trivias//
import Ftrivia1 from './Screens/Farmx/Ftrivia1'
import Ftrivia2 from './Screens/Farmx/Ftrivia2'
import Ftrivia3 from './Screens/Farmx/Ftrivia3'
import Ftrivia4 from './Screens/Farmx/Ftrivia4'
import Ftrivia5 from './Screens/Farmx/Ftrivia5'
import Ftrivia6 from './Screens/Farmx/Ftrivia6'
// Farmx Trivias//
// Farmx Add//
import Fadd1 from './Screens/Farmx/Fadd1'
import Fadd2 from './Screens/Farmx/Fadd2'
import Fadd3 from './Screens/Farmx/Fadd3'
// Farmx Add//
//Farmx

//AuloGelio
import PremioAuloGelio from './Screens/AuloGelio/PremioAuloGelio'
import Aganaste from './Screens/AuloGelio/Aganaste'
// AuloGelio Trivias//
import Atrivia1 from './Screens/AuloGelio/Atrivia1'
import Atrivia2 from './Screens/AuloGelio/Atrivia2'
import Atrivia3 from './Screens/AuloGelio/Atrivia3'
import Atrivia4 from './Screens/AuloGelio/Atrivia4'
import Atrivia5 from './Screens/AuloGelio/Atrivia5'
import Atrivia6 from './Screens/AuloGelio/Atrivia6'
// AuloGelio Trivias//
// AuloGelio Add//
import Aadd1 from './Screens/AuloGelio/Aadd1'
import Aadd2 from './Screens/AuloGelio/Aadd2'
import Aadd3 from './Screens/AuloGelio/Aadd3'
// AuloGelio Add//
//AuloGelio

// ======================================= //

// Bimbi
import PremioBimbi from './Screens/Bimbi/PremioBimbi'
import Bganaste from './Screens/Bimbi/Bganaste'
// Bimbi Trivias//
import BimbiTrivia1 from './Screens/Bimbi/BimbiTrivia1'
import BimbiTrivia2 from './Screens/Bimbi/BimbiTrivia2'
import BimbiTrivia3 from './Screens/Bimbi/BimbiTrivia3'
import BimbiTrivia4 from './Screens/Bimbi/BimbiTrivia4'
import BimbiTrivia5 from './Screens/Bimbi/BimbiTrivia5'
import BimbiTrivia6 from './Screens/Bimbi/BimbiTrivia6'
// Bimbi Trivias//
// Bimbi Add//
import BimbiAdd1 from './Screens/Bimbi/BimbiAdd1'
import BimbiAdd2 from './Screens/Bimbi/BimbiAdd2'
import BimbiAdd3 from './Screens/Bimbi/BimbiAdd3'
// Bimbi Add //
// Bimbi


// ================= NUK ====================== //
// Nuk
import PremioNuk from './Screens/Nuk/PremioNuk'
import Nganaste from './Screens/Nuk/Nganaste'
// Nuk Trivias //
import NukTrivia1 from './Screens/Nuk/NukTrivia1'
import NukTrivia2 from './Screens/Nuk/NukTrivia2'
import NukTrivia3 from './Screens/Nuk/NukTrivia3'
import NukTrivia4 from './Screens/Nuk/NukTrivia4'
import NukTrivia5 from './Screens/Nuk/NukTrivia5'
import NukTrivia6 from './Screens/Nuk/NukTrivia6'
// Nuk Trivias //
// Nuk Add //
import NukAdd1 from './Screens/Nuk/NukAdd1'
import NukAdd2 from './Screens/Nuk/NukAdd2'
import NukAdd3 from './Screens/Nuk/NukAdd3'
// Nuk Add //
// Nuk
// ================== Nuk ==================== //

//Silfab ===================================== //
import TriviaSilfab1 from './Screens/Silfab/TriviaSilfab1'
import TriviaSilfab2 from './Screens/Silfab/TriviaSilfab2'
import TriviaSilfab3 from './Screens/Silfab/TriviaSilfab3'
import TriviaSilfab4 from './Screens/Silfab/TriviaSilfab4'
import TriviaSilfab5 from './Screens/Silfab/TriviaSilfab5'
import TriviaSilfab6 from './Screens/Silfab/TriviaSilfab6'

import Sganaste from './Screens/Silfab/Sganaste'
import PremioSilfab from './Screens/Silfab/PremioSilfab'

import SilfabAdd1 from './Screens/Silfab/SilfabAdd1'
import SilfabAdd2 from './Screens/Silfab/SilfabAdd2'
import SilfabAdd3 from './Screens/Silfab/SilfabAdd3'
//Silfab ===================================== //


//Graco ===================================== //
import TriviaGraco1 from './Screens/Graco/TriviaGraco1'
import TriviaGraco2 from './Screens/Graco/TriviaGraco2'
import TriviaGraco3 from './Screens/Graco/TriviaGraco3'
import TriviaGraco4 from './Screens/Graco/TriviaGraco4'
import TriviaGraco5 from './Screens/Graco/TriviaGraco5'
import TriviaGraco6 from './Screens/Graco/TriviaGraco6'

import GracoAdd1 from './Screens/Graco/GracoAdd1'
import GracoAdd2 from './Screens/Graco/GracoAdd2'
import GracoAdd3 from './Screens/Graco/GracoAdd3'

import Gganaste from './Screens/Graco/Gganaste'
//Graco ==================================== //

//BabyJogger =============================== //
import PremioJogger from './Screens/BabyJogger/PremioJogger'
import Jganaste from './Screens/BabyJogger/Jganaste'

import TriviaJogger1 from './Screens/BabyJogger/TriviaJogger1'
import TriviaJogger2 from './Screens/BabyJogger/TriviaJogger2'
import TriviaJogger3 from './Screens/BabyJogger/TriviaJogger3'
import TriviaJogger4 from './Screens/BabyJogger/TriviaJogger4'
import TriviaJogger5 from './Screens/BabyJogger/TriviaJogger5'
import TriviaJogger6 from './Screens/BabyJogger/TriviaJogger6'

import JoggerAdd1 from './Screens/BabyJogger/JoggerAdd1'
import JoggerAdd2 from './Screens/BabyJogger/JoggerAdd2'
import JoggerAdd3 from './Screens/BabyJogger/JoggerAdd3'
//BabyJogger ============================== //

//Estrella Baby =========================== //
import PremioEstrella from './Screens/EstrellaBaby/PremioEstrella'
import Eganaste from './Screens/EstrellaBaby/Eganaste'

import TriviaEstrella1 from './Screens/EstrellaBaby/TriviaEstrella1'
import TriviaEstrella2 from './Screens/EstrellaBaby/TriviaEstrella2'
import TriviaEstrella3 from './Screens/EstrellaBaby/TriviaEstrella3'
import TriviaEstrella4 from './Screens/EstrellaBaby/TriviaEstrella4'
import TriviaEstrella5 from './Screens/EstrellaBaby/TriviaEstrella5'
import TriviaEstrella6 from './Screens/EstrellaBaby/TriviaEstrella6'

import EstrellaAdd1 from './Screens/EstrellaBaby/EstrellaAdd1'
import EstrellaAdd2 from './Screens/EstrellaBaby/EstrellaAdd2'
import EstrellaAdd3 from './Screens/EstrellaBaby/EstrellaAdd3'
//Estrella Baby =========================== //

//Ewe ===================================== //
import PremioEwe from './Screens/Ewe/PremioEwe'
import Eweganaste from './Screens/Ewe/Eweganaste'

import AddEwe1 from './Screens/Ewe/AddEwe1'
import AddEwe2 from './Screens/Ewe/AddEwe2'
import AddEwe3 from './Screens/Ewe/AddEwe3'

import EweTrivia1 from './Screens/Ewe/EweTrivia1'
import EweTrivia2 from './Screens/Ewe/EweTrivia2'
import EweTrivia3 from './Screens/Ewe/EweTrivia3'
import EweTrivia4 from './Screens/Ewe/EweTrivia4'
import EweTrivia5 from './Screens/Ewe/EweTrivia5'
import EweTrivia6 from './Screens/Ewe/EweTrivia6'
//Ewe ==================================== //


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

    Loading: { screen: Loading },
    Politicas: { screen: Politicas },
    PoliticasMuestra: { screen: PoliticasMuestra },
    HomeScreen: { screen: HomeScreen },
    Ayuda: { screen: Ayuda },
    Succes: { screen: Succes },
    
    //Pantalla que anuncia que se gano el set de preguntas
    PremioGraco: { screen: PremioGraco },
    Perdiste: { screen: Perdiste },
    NoAcepto: { screen: NoAcepto },

    // ======================================== //
    //Farmx
    PremioFarmx: { screen: PremioFarmx },
    Fganaste: { screen: Fganaste },
    //Farmx Trivia //
    Ftrivia1: { screen: Ftrivia1 },
    Ftrivia2: { screen: Ftrivia2 },
    Ftrivia3: { screen: Ftrivia3 },
    Ftrivia4: { screen: Ftrivia4 },
    Ftrivia5: { screen: Ftrivia5 },
    Ftrivia6: { screen: Ftrivia6 },
    //Farmx Trivia //
    //Farmx Add //
    Fadd1: { screen: Fadd1 },
    Fadd2: { screen: Fadd2 },
    Fadd3: { screen: Fadd3 },
    //Farmx Add //
    //Farmx

    //AuloGelio
    PremioAuloGelio: { screen: PremioAuloGelio },
    Aganaste: { screen: Aganaste },
    //AuloGelio Trivia //
    Atrivia1: { screen: Atrivia1 },
    Atrivia2: { screen: Atrivia2 },
    Atrivia3: { screen: Atrivia3 },
    Atrivia4: { screen: Atrivia4 },
    Atrivia5: { screen: Atrivia5 },
    Atrivia6: { screen: Atrivia6 },
    //AuloGelio Trivia //
    //AuloGelio Aad //
    Aadd1: { screen: Aadd1 },
    Aadd2: { screen: Aadd2 },
    Aadd3: { screen: Aadd3 },
    //AuloGelio Aad //
    //AuloGelio


    // ======================================== //
    //Bimbi
    PremioBimbi: { screen: PremioBimbi },
    Bganaste: { screen: Bganaste },
    //Bimbi Trivia //
    BimbiTrivia1: { screen: BimbiTrivia1 },
    BimbiTrivia2: { screen: BimbiTrivia2 },
    BimbiTrivia3: { screen: BimbiTrivia3 },
    BimbiTrivia4: { screen: BimbiTrivia4 },
    BimbiTrivia5: { screen: BimbiTrivia5 },
    BimbiTrivia6: { screen: BimbiTrivia6 },
    //Bimbi Trivia //
    //Bimbi Trivia //
    BimbiAdd1: { screen: BimbiAdd1 },
    BimbiAdd2: { screen: BimbiAdd2 },
    BimbiAdd3: { screen: BimbiAdd3 },
    //Bimbi Trivia //
    //Bimbi

    // ======================================= //
    //Nuk
    PremioNuk: { screen: PremioNuk },
    Nganaste: { screen: Nganaste },
    //Nuk Trivia //
    NukTrivia1: { screen: NukTrivia1 },
    NukTrivia2: { screen: NukTrivia2 },
    NukTrivia3: { screen: NukTrivia3 },
    NukTrivia4: { screen: NukTrivia4 },
    NukTrivia5: { screen: NukTrivia5 },
    NukTrivia6: { screen: NukTrivia6 },
    //Nuk Trivia //

    //Nuk Add //
    NukAdd1: { screen: NukAdd1 },
    NukAdd2: { screen: NukAdd2 },
    NukAdd3: { screen: NukAdd3 },
    //Nuk Add //
    //Nuk
    // ==================================== //

    //Silfab ============================= //
    TriviaSilfab1: { screen: TriviaSilfab1 },
    TriviaSilfab2: { screen: TriviaSilfab2 },
    TriviaSilfab3: { screen: TriviaSilfab3 },
    TriviaSilfab4: { screen: TriviaSilfab4 },
    TriviaSilfab5: { screen: TriviaSilfab5 },
    TriviaSilfab6: { screen: TriviaSilfab6 },

    Sganaste: { screen: Sganaste },
    PremioSilfab: { screen: PremioSilfab },
    SilfabAdd1: { screen: SilfabAdd1 },
    SilfabAdd2: { screen: SilfabAdd2 },
    SilfabAdd3: { screen: SilfabAdd3 },
    //Silfab ============================= //

    //Graco ============================== //
    TriviaGraco1: { screen: TriviaGraco1 },
    TriviaGraco2: { screen: TriviaGraco2 },
    TriviaGraco3: { screen: TriviaGraco3 },
    TriviaGraco4: { screen: TriviaGraco4 },
    TriviaGraco5: { screen: TriviaGraco5 },
    TriviaGraco6: { screen: TriviaGraco6 },

    Gganaste: { screen: Gganaste },

    GracoAdd1: { screen: GracoAdd1 },
    GracoAdd2: { screen: GracoAdd2 },
    GracoAdd3: { screen: GracoAdd3 },
    //Graco ============================== //

    //BabyJogger ========================= //
    PremioJogger: { screen: PremioJogger },
    Jganaste: { screen: Jganaste },

    TriviaJogger1: { screen: TriviaJogger1 },
    TriviaJogger2: { screen: TriviaJogger2 },
    TriviaJogger3: { screen: TriviaJogger3 },
    TriviaJogger4: { screen: TriviaJogger4 },
    TriviaJogger5: { screen: TriviaJogger5 },
    TriviaJogger6: { screen: TriviaJogger6 },

    JoggerAdd1: { screen: JoggerAdd1 },
    JoggerAdd2: { screen: JoggerAdd2 },
    JoggerAdd3: { screen: JoggerAdd3 },
    //BabyJogger ========================= //

    //Estrella Baby ====================== //
    PremioEstrella: { screen: PremioEstrella },
    Eganaste: { screen: Eganaste },

    TriviaEstrella1: { screen: TriviaEstrella1 },
    TriviaEstrella2: { screen: TriviaEstrella2 },
    TriviaEstrella3: { screen: TriviaEstrella3 },
    TriviaEstrella4: { screen: TriviaEstrella4 },
    TriviaEstrella5: { screen: TriviaEstrella5 },
    TriviaEstrella6: { screen: TriviaEstrella6 },

    EstrellaAdd1: { screen: EstrellaAdd1 },
    EstrellaAdd2: { screen: EstrellaAdd2 },
    EstrellaAdd3: { screen: EstrellaAdd3 },
    //Estrella Baby ====================== //

    //Ewe ================================ //
    PremioEwe: { screen: PremioEwe },
    Eweganaste: { screen: Eweganaste },

    AddEwe1: { screen: AddEwe1 },
    AddEwe2: { screen: AddEwe2 },
    AddEwe3: { screen: AddEwe3 },

    EweTrivia1: { screen: EweTrivia1 },
    EweTrivia2: { screen: EweTrivia2 },
    EweTrivia3: { screen: EweTrivia3 },
    EweTrivia4: { screen: EweTrivia4 },
    EweTrivia5: { screen: EweTrivia5 },
    EweTrivia6: { screen: EweTrivia6 },
    //Ewe ================================ //

})
