import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './Screens/LoginScreen'
import Politicas from './Screens/Politicas'
import PoliticasMuestra from './Screens/PoliticasMuestra'
import BrandScreen from './Screens/BrandScreen'
import Ayuda from './Screens/Ayuda'
import PremioGraco from './Screens/Graco/PremioGraco'
import NoAcepto from './Screens/NoAcepto'

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
import Ftrivia7 from './Screens/Farmx/Ftrivia7'
import Ftrivia8 from './Screens/Farmx/Ftrivia8'
import Ftrivia9 from './Screens/Farmx/Ftrivia9'
// Farmx Trivias//
// Farmx Add//
import Fadd1 from './Screens/Farmx/Fadd1'
import Fadd2 from './Screens/Farmx/Fadd2'
import Fadd3 from './Screens/Farmx/Fadd3'
import Fadd4 from './Screens/Farmx/Fadd4'
import Fadd5 from './Screens/Farmx/Fadd5'
import Fadd6 from './Screens/Farmx/Fadd6'
import Fadd7 from './Screens/Farmx/Fadd7'
import Fadd8 from './Screens/Farmx/Fadd8'
import Fadd9 from './Screens/Farmx/Fadd9'

import FaddError1 from './Screens/Farmx/FaddError1'
import FaddError2 from './Screens/Farmx/FaddError2'
import FaddError3 from './Screens/Farmx/FaddError3'
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
import Atrivia7 from './Screens/AuloGelio/Atrivia7'
import Atrivia8 from './Screens/AuloGelio/Atrivia8'
import Atrivia9 from './Screens/AuloGelio/Atrivia9'
// AuloGelio Trivias//
// AuloGelio Add//
import Aadd1 from './Screens/AuloGelio/Aadd1'
import Aadd2 from './Screens/AuloGelio/Aadd2'
import Aadd3 from './Screens/AuloGelio/Aadd3'
import Aadd4 from './Screens/AuloGelio/Aadd4'
import Aadd5 from './Screens/AuloGelio/Aadd5'
import Aadd6 from './Screens/AuloGelio/Aadd6'
import Aadd7 from './Screens/AuloGelio/Aadd7'
import Aadd8 from './Screens/AuloGelio/Aadd8'
import Aadd9 from './Screens/AuloGelio/Aadd9'

import AaddError1 from './Screens/AuloGelio/AaddError1'
import AaddError2 from './Screens/AuloGelio/AaddError2'
import AaddError3 from './Screens/AuloGelio/AaddError3'
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
import BimbiTrivia7 from './Screens/Bimbi/BimbiTrivia7'
import BimbiTrivia8 from './Screens/Bimbi/BimbiTrivia8'
import BimbiTrivia9 from './Screens/Bimbi/BimbiTrivia9'
// Bimbi Trivias//
// Bimbi Add//
import BimbiAdd1 from './Screens/Bimbi/BimbiAdd1'
import BimbiAdd2 from './Screens/Bimbi/BimbiAdd2'
import BimbiAdd3 from './Screens/Bimbi/BimbiAdd3'
import BimbiAdd4 from './Screens/Bimbi/BimbiAdd4'
import BimbiAdd5 from './Screens/Bimbi/BimbiAdd5'
import BimbiAdd6 from './Screens/Bimbi/BimbiAdd6'
import BimbiAdd7 from './Screens/Bimbi/BimbiAdd7'
import BimbiAdd8 from './Screens/Bimbi/BimbiAdd8'
import BimbiAdd9 from './Screens/Bimbi/BimbiAdd9'

import BimbiAddError1 from './Screens/Bimbi/BimbiAddError1'
import BimbiAddError2 from './Screens/Bimbi/BimbiAddError2'
import BimbiAddError3 from './Screens/Bimbi/BimbiAddError3'
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
import NukTrivia7 from './Screens/Nuk/NukTrivia7'
import NukTrivia8 from './Screens/Nuk/NukTrivia8'
import NukTrivia9 from './Screens/Nuk/NukTrivia9'
// Nuk Trivias //
// Nuk Add //
import NukAdd1 from './Screens/Nuk/NukAdd1'
import NukAdd2 from './Screens/Nuk/NukAdd2'
import NukAdd3 from './Screens/Nuk/NukAdd3'
import NukAdd4 from './Screens/Nuk/NukAdd4'
import NukAdd5 from './Screens/Nuk/NukAdd5'
import NukAdd6 from './Screens/Nuk/NukAdd6'
import NukAdd7 from './Screens/Nuk/NukAdd7'
import NukAdd8 from './Screens/Nuk/NukAdd8'
import NukAdd9 from './Screens/Nuk/NukAdd9'


import NukAddError1 from './Screens/Nuk/NukAddError1'
import NukAddError2 from './Screens/Nuk/NukAddError2'
import NukAddError3 from './Screens/Nuk/NukAddError3'
// Nuk Add //
// Nuk
// ================== Nuk ==================== //

//Silfab ===================================== //
import Sganaste from './Screens/Silfab/Sganaste'
import PremioSilfab from './Screens/Silfab/PremioSilfab'

import TriviaSilfab1 from './Screens/Silfab/TriviaSilfab1'
import TriviaSilfab2 from './Screens/Silfab/TriviaSilfab2'
import TriviaSilfab3 from './Screens/Silfab/TriviaSilfab3'
import TriviaSilfab4 from './Screens/Silfab/TriviaSilfab4'
import TriviaSilfab5 from './Screens/Silfab/TriviaSilfab5'
import TriviaSilfab6 from './Screens/Silfab/TriviaSilfab6'
import TriviaSilfab7 from './Screens/Silfab/TriviaSilfab7'
import TriviaSilfab8 from './Screens/Silfab/TriviaSilfab8'
import TriviaSilfab9 from './Screens/Silfab/TriviaSilfab9'

import SilfabAdd1 from './Screens/Silfab/SilfabAdd1'
import SilfabAdd2 from './Screens/Silfab/SilfabAdd2'
import SilfabAdd3 from './Screens/Silfab/SilfabAdd3'
import SilfabAdd4 from './Screens/Silfab/SilfabAdd4'
import SilfabAdd5 from './Screens/Silfab/SilfabAdd5'
import SilfabAdd6 from './Screens/Silfab/SilfabAdd6'
import SilfabAdd7 from './Screens/Silfab/SilfabAdd7'
import SilfabAdd8 from './Screens/Silfab/SilfabAdd8'
import SilfabAdd9 from './Screens/Silfab/SilfabAdd9'

import SilfabAddError1 from './Screens/Silfab/SilfabAddError1'
import SilfabAddError2 from './Screens/Silfab/SilfabAddError2'
import SilfabAddError3 from './Screens/Silfab/SilfabAddError3'
//Silfab ===================================== //


//Graco ===================================== //
import TriviaGraco1 from './Screens/Graco/TriviaGraco1'
import TriviaGraco2 from './Screens/Graco/TriviaGraco2'
import TriviaGraco3 from './Screens/Graco/TriviaGraco3'
import TriviaGraco4 from './Screens/Graco/TriviaGraco4'
import TriviaGraco5 from './Screens/Graco/TriviaGraco5'
import TriviaGraco6 from './Screens/Graco/TriviaGraco6'
import TriviaGraco7 from './Screens/Graco/TriviaGraco7'
import TriviaGraco8 from './Screens/Graco/TriviaGraco8'
import TriviaGraco9 from './Screens/Graco/TriviaGraco9'

import GracoAdd1 from './Screens/Graco/GracoAdd1'
import GracoAdd2 from './Screens/Graco/GracoAdd2'
import GracoAdd3 from './Screens/Graco/GracoAdd3'
import GracoAdd4 from './Screens/Graco/GracoAdd4'
import GracoAdd5 from './Screens/Graco/GracoAdd5'
import GracoAdd6 from './Screens/Graco/GracoAdd6'
import GracoAdd7 from './Screens/Graco/GracoAdd7'
import GracoAdd8 from './Screens/Graco/GracoAdd8'
import GracoAdd9 from './Screens/Graco/GracoAdd9'

import Gganaste from './Screens/Graco/Gganaste'

import GracoAddError1 from './Screens/Graco/GracoAddError1'
import GracoAddError2 from './Screens/Graco/GracoAddError2'
import GracoAddError3 from './Screens/Graco/GracoAddError3'
//Graco ==================================== //

//Estrella Baby =========================== //
import PremioEstrella from './Screens/EstrellaBaby/PremioEstrella'
import Eganaste from './Screens/EstrellaBaby/Eganaste'

import TriviaEstrella1 from './Screens/EstrellaBaby/TriviaEstrella1'
import TriviaEstrella2 from './Screens/EstrellaBaby/TriviaEstrella2'
import TriviaEstrella3 from './Screens/EstrellaBaby/TriviaEstrella3'
import TriviaEstrella4 from './Screens/EstrellaBaby/TriviaEstrella4'
import TriviaEstrella5 from './Screens/EstrellaBaby/TriviaEstrella5'
import TriviaEstrella6 from './Screens/EstrellaBaby/TriviaEstrella6'
import TriviaEstrella7 from './Screens/EstrellaBaby/TriviaEstrella7'
import TriviaEstrella8 from './Screens/EstrellaBaby/TriviaEstrella8'
import TriviaEstrella9 from './Screens/EstrellaBaby/TriviaEstrella9'

import EstrellaAdd1 from './Screens/EstrellaBaby/EstrellaAdd1'
import EstrellaAdd2 from './Screens/EstrellaBaby/EstrellaAdd2'
import EstrellaAdd3 from './Screens/EstrellaBaby/EstrellaAdd3'
import EstrellaAdd4 from './Screens/EstrellaBaby/EstrellaAdd4'
import EstrellaAdd5 from './Screens/EstrellaBaby/EstrellaAdd5'
import EstrellaAdd6 from './Screens/EstrellaBaby/EstrellaAdd6'
import EstrellaAdd7 from './Screens/EstrellaBaby/EstrellaAdd7'
import EstrellaAdd8 from './Screens/EstrellaBaby/EstrellaAdd8'
import EstrellaAdd9 from './Screens/EstrellaBaby/EstrellaAdd9'

import EstrellaAddError1 from './Screens/EstrellaBaby/EstrellaAddError1'
import EstrellaAddError2 from './Screens/EstrellaBaby/EstrellaAddError2'
import EstrellaAddError3 from './Screens/EstrellaBaby/EstrellaAddError3'
//Estrella Baby =========================== //

//Ewe ===================================== //
import PremioEwe from './Screens/Ewe/PremioEwe'
import Eweganaste from './Screens/Ewe/Eweganaste'

import EweTrivia1 from './Screens/Ewe/EweTrivia1'
import EweTrivia2 from './Screens/Ewe/EweTrivia2'
import EweTrivia3 from './Screens/Ewe/EweTrivia3'
import EweTrivia4 from './Screens/Ewe/EweTrivia4'
import EweTrivia5 from './Screens/Ewe/EweTrivia5'
import EweTrivia6 from './Screens/Ewe/EweTrivia6'
import EweTrivia7 from './Screens/Ewe/EweTrivia7'
import EweTrivia8 from './Screens/Ewe/EweTrivia8'
import EweTrivia9 from './Screens/Ewe/EweTrivia9'

import AddEwe1 from './Screens/Ewe/AddEwe1'
import AddEwe2 from './Screens/Ewe/AddEwe2'
import AddEwe3 from './Screens/Ewe/AddEwe3'
import AddEwe4 from './Screens/Ewe/AddEwe4'
import AddEwe5 from './Screens/Ewe/AddEwe5'
import AddEwe6 from './Screens/Ewe/AddEwe6'
import AddEwe7 from './Screens/Ewe/AddEwe7'
import AddEwe8 from './Screens/Ewe/AddEwe8'
import AddEwe9 from './Screens/Ewe/AddEwe9'

import AddEweError1 from './Screens/Ewe/AddEweError1'
import AddEweError2 from './Screens/Ewe/AddEweError2'
import AddEweError3 from './Screens/Ewe/AddEweError3'
//Ewe ==================================== //

import Loading from './Screens/Loading'
import Sign from './Screens/Sign'


export default class App extends React.Component {
    render() {
        return (            
            <AppNavigator/>
        );
    }
}

const AppNavigator = StackNavigator({

    //Ayuda: { screen: Ayuda },
    LoginScreen: { screen: LoginScreen },
    BrandScreen: { screen: BrandScreen },
    Politicas: { screen: Politicas },
    PoliticasMuestra: { screen: PoliticasMuestra },
    Ayuda: { screen: Ayuda },
    
    //Pantalla que anuncia que se gano el set de preguntas
    PremioGraco: { screen: PremioGraco },
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
    Ftrivia7: { screen: Ftrivia7 },
    Ftrivia8: { screen: Ftrivia8 },
    Ftrivia9: { screen: Ftrivia9 },
    //Farmx Trivia //
    //Farmx Add //
    Fadd1: { screen: Fadd1 },
    Fadd2: { screen: Fadd2 },
    Fadd3: { screen: Fadd3 },
    Fadd4: { screen: Fadd4 },
    Fadd5: { screen: Fadd5 },
    Fadd6: { screen: Fadd6 },
    Fadd7: { screen: Fadd7 },
    Fadd8: { screen: Fadd8 },
    Fadd9: { screen: Fadd9 },

    FaddError1: { screen: FaddError1 },
    FaddError2: { screen: FaddError2 },
    FaddError3: { screen: FaddError3 },
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
    Atrivia7: { screen: Atrivia7 },
    Atrivia8: { screen: Atrivia8 },
    Atrivia9: { screen: Atrivia9 },
    //AuloGelio Trivia //
    //AuloGelio Aad //
    Aadd1: { screen: Aadd1 },
    Aadd2: { screen: Aadd2 },
    Aadd3: { screen: Aadd3 },
    Aadd4: { screen: Aadd4 },
    Aadd5: { screen: Aadd5 },
    Aadd6: { screen: Aadd6 },
    Aadd7: { screen: Aadd7 },
    Aadd8: { screen: Aadd8 },
    Aadd9: { screen: Aadd9 },

    AaddError1: { screen: AaddError1 },
    AaddError2: { screen: AaddError2 },
    AaddError3: { screen: AaddError3 },
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
    BimbiTrivia7: { screen: BimbiTrivia7 },
    BimbiTrivia8: { screen: BimbiTrivia8 },
    BimbiTrivia9: { screen: BimbiTrivia9 },
    //Bimbi Trivia //
    //Bimbi Trivia //
    BimbiAdd1: { screen: BimbiAdd1 },
    BimbiAdd2: { screen: BimbiAdd2 },
    BimbiAdd3: { screen: BimbiAdd3 },
    BimbiAdd4: { screen: BimbiAdd4 },
    BimbiAdd5: { screen: BimbiAdd5 },
    BimbiAdd6: { screen: BimbiAdd6 },
    BimbiAdd7: { screen: BimbiAdd7 },
    BimbiAdd8: { screen: BimbiAdd8 },
    BimbiAdd9: { screen: BimbiAdd9 },

    BimbiAddError1: { screen: BimbiAddError1 },
    BimbiAddError2: { screen: BimbiAddError2 },
    BimbiAddError3: { screen: BimbiAddError3 },
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
    NukAdd4: { screen: NukAdd4 },
    NukAdd5: { screen: NukAdd5 },
    NukAdd6: { screen: NukAdd6 },
    NukAdd7: { screen: NukAdd7 },
    NukAdd8: { screen: NukAdd8 },
    NukAdd9: { screen: NukAdd9 },

    NukAddError1: { screen: NukAddError1 },
    NukAddError2: { screen: NukAddError2 },
    NukAddError3: { screen: NukAddError3 },
    //Nuk Add //
    //Nuk
    // ==================================== //

    //Silfab ============================= //
    Sganaste: { screen: Sganaste },
    PremioSilfab: { screen: PremioSilfab },

    TriviaSilfab1: { screen: TriviaSilfab1 },
    TriviaSilfab2: { screen: TriviaSilfab2 },
    TriviaSilfab3: { screen: TriviaSilfab3 },
    TriviaSilfab4: { screen: TriviaSilfab4 },
    TriviaSilfab5: { screen: TriviaSilfab5 },
    TriviaSilfab6: { screen: TriviaSilfab6 },
    TriviaSilfab7: { screen: TriviaSilfab7 },
    TriviaSilfab8: { screen: TriviaSilfab8 },
    TriviaSilfab9: { screen: TriviaSilfab9 },

    SilfabAdd1: { screen: SilfabAdd1 },
    SilfabAdd2: { screen: SilfabAdd2 },
    SilfabAdd3: { screen: SilfabAdd3 },
    SilfabAdd4: { screen: SilfabAdd4 },
    SilfabAdd5: { screen: SilfabAdd5 },
    SilfabAdd6: { screen: SilfabAdd6 },
    SilfabAdd7: { screen: SilfabAdd7 },
    SilfabAdd8: { screen: SilfabAdd8 },
    SilfabAdd9: { screen: SilfabAdd9 },

    SilfabAddError1: { screen: SilfabAddError1 },
    SilfabAddError2: { screen: SilfabAddError2 },
    SilfabAddError3: { screen: SilfabAddError3 },
    //Silfab ============================= //

    //Graco ============================== //
    Gganaste: { screen: Gganaste },
    
    TriviaGraco1: { screen: TriviaGraco1 },
    TriviaGraco2: { screen: TriviaGraco2 },
    TriviaGraco3: { screen: TriviaGraco3 },
    TriviaGraco4: { screen: TriviaGraco4 },
    TriviaGraco5: { screen: TriviaGraco5 },
    TriviaGraco6: { screen: TriviaGraco6 },
    TriviaGraco7: { screen: TriviaGraco7 },
    TriviaGraco8: { screen: TriviaGraco8 },
    TriviaGraco9: { screen: TriviaGraco9 },

    GracoAdd1: { screen: GracoAdd1 },
    GracoAdd2: { screen: GracoAdd2 },
    GracoAdd3: { screen: GracoAdd3 },
    GracoAdd4: { screen: GracoAdd4 },
    GracoAdd5: { screen: GracoAdd5 },
    GracoAdd6: { screen: GracoAdd6 },
    GracoAdd7: { screen: GracoAdd7 },
    GracoAdd8: { screen: GracoAdd8 },
    GracoAdd9: { screen: GracoAdd9 },

    GracoAddError1: { screen: GracoAddError1 },
    GracoAddError2: { screen: GracoAddError2 },
    GracoAddError3: { screen: GracoAddError3 },
    //Graco ============================== //

    //Estrella Baby ====================== //
    PremioEstrella: { screen: PremioEstrella },
    Eganaste: { screen: Eganaste },

    TriviaEstrella1: { screen: TriviaEstrella1 },
    TriviaEstrella2: { screen: TriviaEstrella2 },
    TriviaEstrella3: { screen: TriviaEstrella3 },
    TriviaEstrella4: { screen: TriviaEstrella4 },
    TriviaEstrella5: { screen: TriviaEstrella5 },
    TriviaEstrella6: { screen: TriviaEstrella6 },
    TriviaEstrella7: { screen: TriviaEstrella7 },
    TriviaEstrella8: { screen: TriviaEstrella8 },
    TriviaEstrella9: { screen: TriviaEstrella9 },

    EstrellaAdd1: { screen: EstrellaAdd1 },
    EstrellaAdd2: { screen: EstrellaAdd2 },
    EstrellaAdd3: { screen: EstrellaAdd3 },
    EstrellaAdd4: { screen: EstrellaAdd4 },
    EstrellaAdd5: { screen: EstrellaAdd5 },
    EstrellaAdd6: { screen: EstrellaAdd6 },
    EstrellaAdd7: { screen: EstrellaAdd7 },
    EstrellaAdd8: { screen: EstrellaAdd8 },
    EstrellaAdd9: { screen: EstrellaAdd9 },

    EstrellaAddError1: { screen: EstrellaAddError1 },
    EstrellaAddError2: { screen: EstrellaAddError2 },
    EstrellaAddError3: { screen: EstrellaAddError3 },
    //Estrella Baby ====================== //

    //Ewe ================================ //
    PremioEwe: { screen: PremioEwe },
    Eweganaste: { screen: Eweganaste },

    EweTrivia1: { screen: EweTrivia1 },
    EweTrivia2: { screen: EweTrivia2 },
    EweTrivia3: { screen: EweTrivia3 },
    EweTrivia4: { screen: EweTrivia4 },
    EweTrivia5: { screen: EweTrivia5 },
    EweTrivia6: { screen: EweTrivia6 },
    EweTrivia7: { screen: EweTrivia7 },
    EweTrivia8: { screen: EweTrivia8 },
    EweTrivia9: { screen: EweTrivia9 },

    AddEwe1: { screen: AddEwe1 },
    AddEwe2: { screen: AddEwe2 },
    AddEwe3: { screen: AddEwe3 },
    AddEwe4: { screen: AddEwe4 },
    AddEwe5: { screen: AddEwe5 },
    AddEwe6: { screen: AddEwe6 },
    AddEwe7: { screen: AddEwe7 },
    AddEwe8: { screen: AddEwe8 },
    AddEwe9: { screen: AddEwe9 },

    AddEweError1: { screen: AddEweError1 },
    AddEweError2: { screen: AddEweError2 },
    AddEweError3: { screen: AddEweError3 },
    //Ewe ================================ //

    Loading: { screen: Loading },
    Sign: { screen: Sign },


})
