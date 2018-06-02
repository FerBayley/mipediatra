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
import Ftrivia10 from './Screens/Farmx/Ftrivia10'
import Ftrivia11 from './Screens/Farmx/Ftrivia11'
import Ftrivia12 from './Screens/Farmx/Ftrivia12'
import Ftrivia13 from './Screens/Farmx/Ftrivia13'
import Ftrivia14 from './Screens/Farmx/Ftrivia14'
import Ftrivia15 from './Screens/Farmx/Ftrivia15'
import Ftrivia16 from './Screens/Farmx/Ftrivia16'
import Ftrivia17 from './Screens/Farmx/Ftrivia17'
import Ftrivia18 from './Screens/Farmx/Ftrivia18'
import Ftrivia19 from './Screens/Farmx/Ftrivia19'
import Ftrivia20 from './Screens/Farmx/Ftrivia20'
import Ftrivia21 from './Screens/Farmx/Ftrivia21'
import Ftrivia22 from './Screens/Farmx/Ftrivia22'
import Ftrivia23 from './Screens/Farmx/Ftrivia23'
import Ftrivia24 from './Screens/Farmx/Ftrivia24'
import Ftrivia25 from './Screens/Farmx/Ftrivia25'
import Ftrivia26 from './Screens/Farmx/Ftrivia9'
import Ftrivia27 from './Screens/Farmx/Ftrivia27'
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
import Atrivia10 from './Screens/AuloGelio/Atrivia10'
import Atrivia11 from './Screens/AuloGelio/Atrivia11'
import Atrivia12 from './Screens/AuloGelio/Atrivia12'
import Atrivia13 from './Screens/AuloGelio/Atrivia13'
import Atrivia14 from './Screens/AuloGelio/Atrivia14'
import Atrivia15 from './Screens/AuloGelio/Atrivia15'
import Atrivia16 from './Screens/AuloGelio/Atrivia16'
import Atrivia17 from './Screens/AuloGelio/Atrivia17'
import Atrivia18 from './Screens/AuloGelio/Atrivia18'
import Atrivia19 from './Screens/AuloGelio/Atrivia19'
import Atrivia20 from './Screens/AuloGelio/Atrivia20'
import Atrivia21 from './Screens/AuloGelio/Atrivia21'
import Atrivia22 from './Screens/AuloGelio/Atrivia22'
import Atrivia23 from './Screens/AuloGelio/Atrivia23'
import Atrivia24 from './Screens/AuloGelio/Atrivia24'
import Atrivia25 from './Screens/AuloGelio/Atrivia25'
import Atrivia26 from './Screens/AuloGelio/Atrivia26'
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
import Aadd10 from './Screens/AuloGelio/Aadd10'
import Aadd11 from './Screens/AuloGelio/Aadd11'
import Aadd12 from './Screens/AuloGelio/Aadd12'
import Aadd13 from './Screens/AuloGelio/Aadd13'
import Aadd14 from './Screens/AuloGelio/Aadd14'
import Aadd15 from './Screens/AuloGelio/Aadd15'
import Aadd16 from './Screens/AuloGelio/Aadd16'
import Aadd17 from './Screens/AuloGelio/Aadd17'
import Aadd18 from './Screens/AuloGelio/Aadd18'
import Aadd19 from './Screens/AuloGelio/Aadd19'
import Aadd20 from './Screens/AuloGelio/Aadd20'
import Aadd21 from './Screens/AuloGelio/Aadd21'
import Aadd22 from './Screens/AuloGelio/Aadd22'
import Aadd23 from './Screens/AuloGelio/Aadd23'
import Aadd24 from './Screens/AuloGelio/Aadd24'

import AaddError1 from './Screens/AuloGelio/AaddError1'
import AaddError2 from './Screens/AuloGelio/AaddError2'
import AaddError3 from './Screens/AuloGelio/AaddError3'
import AaddError4 from './Screens/AuloGelio/AaddError4'
import AaddError5 from './Screens/AuloGelio/AaddError5'
import AaddError6 from './Screens/AuloGelio/AaddError6'
import AaddError7 from './Screens/AuloGelio/AaddError7'
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
import BimbiTrivia10 from './Screens/Bimbi/BimbiTrivia10'
import BimbiTrivia11 from './Screens/Bimbi/BimbiTrivia11'
import BimbiTrivia12 from './Screens/Bimbi/BimbiTrivia12'
import BimbiTrivia13 from './Screens/Bimbi/BimbiTrivia13'
import BimbiTrivia14 from './Screens/Bimbi/BimbiTrivia14'
import BimbiTrivia15 from './Screens/Bimbi/BimbiTrivia15'
import BimbiTrivia16 from './Screens/Bimbi/BimbiTrivia16'
import BimbiTrivia17 from './Screens/Bimbi/BimbiTrivia17'
import BimbiTrivia18 from './Screens/Bimbi/BimbiTrivia18'
import BimbiTrivia19 from './Screens/Bimbi/BimbiTrivia19'
import BimbiTrivia20 from './Screens/Bimbi/BimbiTrivia20'
import BimbiTrivia21 from './Screens/Bimbi/BimbiTrivia21'
import BimbiTrivia22 from './Screens/Bimbi/BimbiTrivia22'
import BimbiTrivia23 from './Screens/Bimbi/BimbiTrivia23'
import BimbiTrivia24 from './Screens/Bimbi/BimbiTrivia24'
import BimbiTrivia25 from './Screens/Bimbi/BimbiTrivia25'
import BimbiTrivia26 from './Screens/Bimbi/BimbiTrivia26'
import BimbiTrivia27 from './Screens/Bimbi/BimbiTrivia27'
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
import BimbiAdd10 from './Screens/Bimbi/BimbiAdd10'
import BimbiAdd11 from './Screens/Bimbi/BimbiAdd11'
import BimbiAdd12 from './Screens/Bimbi/BimbiAdd12'
import BimbiAdd13 from './Screens/Bimbi/BimbiAdd13'
import BimbiAdd14 from './Screens/Bimbi/BimbiAdd14'
import BimbiAdd15 from './Screens/Bimbi/BimbiAdd15'
import BimbiAdd16 from './Screens/Bimbi/BimbiAdd16'
import BimbiAdd17 from './Screens/Bimbi/BimbiAdd17'
import BimbiAdd18 from './Screens/Bimbi/BimbiAdd18'
import BimbiAdd19 from './Screens/Bimbi/BimbiAdd19'
import BimbiAdd20 from './Screens/Bimbi/BimbiAdd20'
import BimbiAdd21 from './Screens/Bimbi/BimbiAdd21'
import BimbiAdd22 from './Screens/Bimbi/BimbiAdd22'
import BimbiAdd23 from './Screens/Bimbi/BimbiAdd23'
import BimbiAdd24 from './Screens/Bimbi/BimbiAdd24'
import BimbiAdd25 from './Screens/Bimbi/BimbiAdd25'
import BimbiAdd26 from './Screens/Bimbi/BimbiAdd26'
import BimbiAdd27 from './Screens/Bimbi/BimbiAdd27'

import BimbiAddError1 from './Screens/Bimbi/BimbiAddError1'
import BimbiAddError2 from './Screens/Bimbi/BimbiAddError2'
import BimbiAddError3 from './Screens/Bimbi/BimbiAddError3'
import BimbiAddError4 from './Screens/Bimbi/BimbiAddError4'
import BimbiAddError5 from './Screens/Bimbi/BimbiAddError5'
import BimbiAddError6 from './Screens/Bimbi/BimbiAddError6'
import BimbiAddError7 from './Screens/Bimbi/BimbiAddError7'
import BimbiAddError8 from './Screens/Bimbi/BimbiAddError8'
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
import NukTrivia10 from './Screens/Nuk/NukTrivia10'
import NukTrivia11 from './Screens/Nuk/NukTrivia11'
import NukTrivia12 from './Screens/Nuk/NukTrivia12'
import NukTrivia13 from './Screens/Nuk/NukTrivia13'
import NukTrivia14 from './Screens/Nuk/NukTrivia14'
import NukTrivia15 from './Screens/Nuk/NukTrivia15'
import NukTrivia16 from './Screens/Nuk/NukTrivia16'
import NukTrivia17 from './Screens/Nuk/NukTrivia17'
import NukTrivia18 from './Screens/Nuk/NukTrivia18'
import NukTrivia19 from './Screens/Nuk/NukTrivia19'
import NukTrivia20 from './Screens/Nuk/NukTrivia20'
import NukTrivia21 from './Screens/Nuk/NukTrivia21'
import NukTrivia22 from './Screens/Nuk/NukTrivia22'
import NukTrivia23 from './Screens/Nuk/NukTrivia23'
import NukTrivia24 from './Screens/Nuk/NukTrivia24'
import NukTrivia25 from './Screens/Nuk/NukTrivia25'
import NukTrivia26 from './Screens/Nuk/NukTrivia26'
import NukTrivia27 from './Screens/Nuk/NukTrivia27'
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
import TriviaSilfab10 from './Screens/Silfab/TriviaSilfab10'
import TriviaSilfab11 from './Screens/Silfab/TriviaSilfab11'
import TriviaSilfab12 from './Screens/Silfab/TriviaSilfab12'
import TriviaSilfab13 from './Screens/Silfab/TriviaSilfab13'
import TriviaSilfab14 from './Screens/Silfab/TriviaSilfab14'
import TriviaSilfab15 from './Screens/Silfab/TriviaSilfab15'
import TriviaSilfab16 from './Screens/Silfab/TriviaSilfab16'
import TriviaSilfab17 from './Screens/Silfab/TriviaSilfab17'
import TriviaSilfab18 from './Screens/Silfab/TriviaSilfab18'
import TriviaSilfab19 from './Screens/Silfab/TriviaSilfab19'
import TriviaSilfab20 from './Screens/Silfab/TriviaSilfab20'
import TriviaSilfab21 from './Screens/Silfab/TriviaSilfab21'
import TriviaSilfab22 from './Screens/Silfab/TriviaSilfab22'
import TriviaSilfab23 from './Screens/Silfab/TriviaSilfab23'
import TriviaSilfab24 from './Screens/Silfab/TriviaSilfab24'
import TriviaSilfab25 from './Screens/Silfab/TriviaSilfab25'
import TriviaSilfab26 from './Screens/Silfab/TriviaSilfab26'
import TriviaSilfab27 from './Screens/Silfab/TriviaSilfab27'


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
import TriviaGraco10 from './Screens/Graco/TriviaGraco10'
import TriviaGraco11 from './Screens/Graco/TriviaGraco11'
import TriviaGraco12 from './Screens/Graco/TriviaGraco12'
import TriviaGraco13 from './Screens/Graco/TriviaGraco13'
import TriviaGraco14 from './Screens/Graco/TriviaGraco14'
import TriviaGraco15 from './Screens/Graco/TriviaGraco15'
import TriviaGraco16 from './Screens/Graco/TriviaGraco16'
import TriviaGraco17 from './Screens/Graco/TriviaGraco17'
import TriviaGraco18 from './Screens/Graco/TriviaGraco18'
import TriviaGraco19 from './Screens/Graco/TriviaGraco19'
import TriviaGraco20 from './Screens/Graco/TriviaGraco20'
import TriviaGraco21 from './Screens/Graco/TriviaGraco21'
import TriviaGraco22 from './Screens/Graco/TriviaGraco22'
import TriviaGraco23 from './Screens/Graco/TriviaGraco23'
import TriviaGraco24 from './Screens/Graco/TriviaGraco24'
import TriviaGraco25 from './Screens/Graco/TriviaGraco25'
import TriviaGraco26 from './Screens/Graco/TriviaGraco26'

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

import TriviaEstrella10 from './Screens/EstrellaBaby/TriviaEstrella10'
import TriviaEstrella11 from './Screens/EstrellaBaby/TriviaEstrella11'
import TriviaEstrella12 from './Screens/EstrellaBaby/TriviaEstrella12'
import TriviaEstrella13 from './Screens/EstrellaBaby/TriviaEstrella13'
import TriviaEstrella14 from './Screens/EstrellaBaby/TriviaEstrella14'
import TriviaEstrella15 from './Screens/EstrellaBaby/TriviaEstrella15'
import TriviaEstrella16 from './Screens/EstrellaBaby/TriviaEstrella16'
import TriviaEstrella17 from './Screens/EstrellaBaby/TriviaEstrella17'
import TriviaEstrella18 from './Screens/EstrellaBaby/TriviaEstrella18'
import TriviaEstrella19 from './Screens/EstrellaBaby/TriviaEstrella19'
import TriviaEstrella20 from './Screens/EstrellaBaby/TriviaEstrella20'
import TriviaEstrella21 from './Screens/EstrellaBaby/TriviaEstrella21'
import TriviaEstrella22 from './Screens/EstrellaBaby/TriviaEstrella22'
import TriviaEstrella23 from './Screens/EstrellaBaby/TriviaEstrella23'
import TriviaEstrella24 from './Screens/EstrellaBaby/TriviaEstrella24'
import TriviaEstrella25 from './Screens/EstrellaBaby/TriviaEstrella25'
import TriviaEstrella26 from './Screens/EstrellaBaby/TriviaEstrella26'
import TriviaEstrella27 from './Screens/EstrellaBaby/TriviaEstrella27'


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
import EweTrivia10 from './Screens/Ewe/EweTrivia10'
import EweTrivia11 from './Screens/Ewe/EweTrivia11'
import EweTrivia12 from './Screens/Ewe/EweTrivia12'
import EweTrivia13 from './Screens/Ewe/EweTrivia13'
import EweTrivia14 from './Screens/Ewe/EweTrivia14'
import EweTrivia15 from './Screens/Ewe/EweTrivia15'
import EweTrivia16 from './Screens/Ewe/EweTrivia16'
import EweTrivia17 from './Screens/Ewe/EweTrivia17'
import EweTrivia18 from './Screens/Ewe/EweTrivia18'
import EweTrivia19 from './Screens/Ewe/EweTrivia9'
import EweTrivia20 from './Screens/Ewe/EweTrivia20'
import EweTrivia21 from './Screens/Ewe/EweTrivia21'
import EweTrivia22 from './Screens/Ewe/EweTrivia22'
import EweTrivia23 from './Screens/Ewe/EweTrivia23'
import EweTrivia24 from './Screens/Ewe/EweTrivia24'
import EweTrivia25 from './Screens/Ewe/EweTrivia25'
import EweTrivia26 from './Screens/Ewe/EweTrivia26'
import EweTrivia27 from './Screens/Ewe/EweTrivia27'


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

//Liliana ==================================== //
import LiliAdd1 from './Screens/Liliana/LiliAdd1'
import LiliAdd2 from './Screens/Liliana/LiliAdd2'
import LiliAdd3 from './Screens/Liliana/LiliAdd3'
import LiliAdd4 from './Screens/Liliana/LiliAdd4'
import LiliAdd5 from './Screens/Liliana/LiliAdd5'
import LiliAdd6 from './Screens/Liliana/LiliAdd6'
import LiliAdd7 from './Screens/Liliana/LiliAdd7'
import LiliAdd8 from './Screens/Liliana/LiliAdd8'
import LiliAdd9 from './Screens/Liliana/LiliAdd9'

import LiliError1 from './Screens/Liliana/LiliError1'
import LiliError2 from './Screens/Liliana/LiliError2'
import LiliError3 from './Screens/Liliana/LiliError3'

import LiliGanaste from './Screens/Liliana/LiliGanaste'

import PremioLiliana from './Screens/Liliana/PremioLiliana'

import LiliTrivia1 from './Screens/Liliana/LiliTrivia1'
import LiliTrivia2 from './Screens/Liliana/LiliTrivia2'
import LiliTrivia3 from './Screens/Liliana/LiliTrivia3'
import LiliTrivia4 from './Screens/Liliana/LiliTrivia4'
import LiliTrivia5 from './Screens/Liliana/LiliTrivia5'
import LiliTrivia6 from './Screens/Liliana/LiliTrivia6'
import LiliTrivia7 from './Screens/Liliana/LiliTrivia7'
import LiliTrivia8 from './Screens/Liliana/LiliTrivia8'
import LiliTrivia9 from './Screens/Liliana/LiliTrivia9'
import LiliTrivia10 from './Screens/Liliana/LiliTrivia10'
import LiliTrivia11 from './Screens/Liliana/LiliTrivia11'
import LiliTrivia12 from './Screens/Liliana/LiliTrivia12'
import LiliTrivia13 from './Screens/Liliana/LiliTrivia13'
import LiliTrivia14 from './Screens/Liliana/LiliTrivia14'
import LiliTrivia15 from './Screens/Liliana/LiliTrivia15'
import LiliTrivia16 from './Screens/Liliana/LiliTrivia16'
import LiliTrivia17 from './Screens/Liliana/LiliTrivia17'
import LiliTrivia18 from './Screens/Liliana/LiliTrivia18'
import LiliTrivia19 from './Screens/Liliana/LiliTrivia19'
import LiliTrivia20 from './Screens/Liliana/LiliTrivia20'
import LiliTrivia21 from './Screens/Liliana/LiliTrivia21'
import LiliTrivia22 from './Screens/Liliana/LiliTrivia22'
import LiliTrivia23 from './Screens/Liliana/LiliTrivia23'
import LiliTrivia24 from './Screens/Liliana/LiliTrivia24'
import LiliTrivia25 from './Screens/Liliana/LiliTrivia25'
import LiliTrivia26 from './Screens/Liliana/LiliTrivia26'
//Liliana ==================================== //

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
    Ftrivia10: { screen: Ftrivia10 },
    Ftrivia11: { screen: Ftrivia11 },
    Ftrivia12: { screen: Ftrivia12 },
    Ftrivia13: { screen: Ftrivia13 },
    Ftrivia14: { screen: Ftrivia14 },
    Ftrivia15: { screen: Ftrivia15 },
    Ftrivia16: { screen: Ftrivia16 },
    Ftrivia17: { screen: Ftrivia17 },
    Ftrivia18: { screen: Ftrivia18 },
    Ftrivia19: { screen: Ftrivia19 },
    Ftrivia20: { screen: Ftrivia20 },
    Ftrivia21: { screen: Ftrivia21 },
    Ftrivia22: { screen: Ftrivia22 },
    Ftrivia23: { screen: Ftrivia23 },
    Ftrivia24: { screen: Ftrivia24 },
    Ftrivia25: { screen: Ftrivia25 },
    Ftrivia26: { screen: Ftrivia26 },
    Ftrivia27: { screen: Ftrivia27 },
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
    Atrivia10: { screen: Atrivia10 },
    Atrivia11: { screen: Atrivia11 },
    Atrivia12: { screen: Atrivia12 },
    Atrivia13: { screen: Atrivia13 },
    Atrivia14: { screen: Atrivia14 },
    Atrivia15: { screen: Atrivia15 },
    Atrivia16: { screen: Atrivia16 },
    Atrivia17: { screen: Atrivia17 },
    Atrivia18: { screen: Atrivia18 },
    Atrivia19: { screen: Atrivia19 },
    Atrivia20: { screen: Atrivia20 },
    Atrivia21: { screen: Atrivia21 },
    Atrivia22: { screen: Atrivia22 },
    Atrivia23: { screen: Atrivia23 },
    Atrivia24: { screen: Atrivia24 },
    Atrivia25: { screen: Atrivia25 },
    Atrivia26: { screen: Atrivia26 },
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
    Aadd10: { screen: Aadd10 },
    Aadd11: { screen: Aadd11 },
    Aadd12: { screen: Aadd12 },
    Aadd13: { screen: Aadd13 },
    Aadd14: { screen: Aadd14 },
    Aadd15: { screen: Aadd15 },
    Aadd16: { screen: Aadd16 },
    Aadd17: { screen: Aadd17 },
    Aadd18: { screen: Aadd18 },
    Aadd19: { screen: Aadd19 },
    Aadd20: { screen: Aadd20 },
    Aadd21: { screen: Aadd21 },
    Aadd22: { screen: Aadd22 },
    Aadd23: { screen: Aadd23 },
    Aadd24: { screen: Aadd24 },

    AaddError1: { screen: AaddError1 },
    AaddError2: { screen: AaddError2 },
    AaddError3: { screen: AaddError3 },
    AaddError4: { screen: AaddError4 },
    AaddError5: { screen: AaddError5 },
    AaddError6: { screen: AaddError6 },
    AaddError7: { screen: AaddError7 },
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

    BimbiTrivia10: { screen: BimbiTrivia10 },
    BimbiTrivia11: { screen: BimbiTrivia11 },
    BimbiTrivia12: { screen: BimbiTrivia12 },
    BimbiTrivia13: { screen: BimbiTrivia13 },
    BimbiTrivia14: { screen: BimbiTrivia14 },
    BimbiTrivia15: { screen: BimbiTrivia15 },
    BimbiTrivia16: { screen: BimbiTrivia16 },
    BimbiTrivia17: { screen: BimbiTrivia17 },
    BimbiTrivia18: { screen: BimbiTrivia18 },
    BimbiTrivia19: { screen: BimbiTrivia19 },
    BimbiTrivia20: { screen: BimbiTrivia20 },
    BimbiTrivia21: { screen: BimbiTrivia21 },
    BimbiTrivia22: { screen: BimbiTrivia22 },
    BimbiTrivia23: { screen: BimbiTrivia23 },
    BimbiTrivia24: { screen: BimbiTrivia24 },
    BimbiTrivia25: { screen: BimbiTrivia25 },
    BimbiTrivia26: { screen: BimbiTrivia26 },
    BimbiTrivia27: { screen: BimbiTrivia27 },
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
    BimbiAdd10: { screen: BimbiAdd10 },
    BimbiAdd11: { screen: BimbiAdd11 },
    BimbiAdd12: { screen: BimbiAdd12 },
    BimbiAdd13: { screen: BimbiAdd13 },
    BimbiAdd14: { screen: BimbiAdd14 },
    BimbiAdd15: { screen: BimbiAdd15 },
    BimbiAdd16: { screen: BimbiAdd16 },
    BimbiAdd17: { screen: BimbiAdd17 },
    BimbiAdd18: { screen: BimbiAdd18 },
    BimbiAdd19: { screen: BimbiAdd19 },
    BimbiAdd20: { screen: BimbiAdd20 },
    BimbiAdd21: { screen: BimbiAdd21 },
    BimbiAdd22: { screen: BimbiAdd22 },
    BimbiAdd23: { screen: BimbiAdd23 },
    BimbiAdd24: { screen: BimbiAdd24 },
    BimbiAdd25: { screen: BimbiAdd25 },
    BimbiAdd26: { screen: BimbiAdd26 },
    BimbiAdd27: { screen: BimbiAdd27 },

    BimbiAddError1: { screen: BimbiAddError1 },
    BimbiAddError2: { screen: BimbiAddError2 },
    BimbiAddError3: { screen: BimbiAddError3 },
    BimbiAddError4: { screen: BimbiAddError4 },
    BimbiAddError5: { screen: BimbiAddError5 },
    BimbiAddError6: { screen: BimbiAddError6 },
    BimbiAddError7: { screen: BimbiAddError7 },
    BimbiAddError8: { screen: BimbiAddError8 },
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
    NukTrivia7: { screen: NukTrivia7 },
    NukTrivia8: { screen: NukTrivia8 },
    NukTrivia9: { screen: NukTrivia9 },
    NukTrivia10: { screen: NukTrivia10 },
    NukTrivia11: { screen: NukTrivia11 },
    NukTrivia12: { screen: NukTrivia12 },
    NukTrivia13: { screen: NukTrivia13 },
    NukTrivia14: { screen: NukTrivia14 },
    NukTrivia15: { screen: NukTrivia15 },
    NukTrivia16: { screen: NukTrivia16 },
    NukTrivia17: { screen: NukTrivia17 },
    NukTrivia18: { screen: NukTrivia18 },
    NukTrivia19: { screen: NukTrivia19 },
    NukTrivia20: { screen: NukTrivia20 },
    NukTrivia21: { screen: NukTrivia21 },
    NukTrivia22: { screen: NukTrivia22 },
    NukTrivia23: { screen: NukTrivia23 },
    NukTrivia24: { screen: NukTrivia24 },
    NukTrivia25: { screen: NukTrivia25 },
    NukTrivia26: { screen: NukTrivia26 },
    NukTrivia27: { screen: NukTrivia27 },
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
    TriviaSilfab10: { screen: TriviaSilfab10 },
    TriviaSilfab11: { screen: TriviaSilfab11 },
    TriviaSilfab12: { screen: TriviaSilfab12 },
    TriviaSilfab13: { screen: TriviaSilfab13 },
    TriviaSilfab14: { screen: TriviaSilfab14 },
    TriviaSilfab15: { screen: TriviaSilfab15 },
    TriviaSilfab16: { screen: TriviaSilfab16 },
    TriviaSilfab17: { screen: TriviaSilfab17 },
    TriviaSilfab18: { screen: TriviaSilfab18 },
    TriviaSilfab19: { screen: TriviaSilfab19 },
    TriviaSilfab20: { screen: TriviaSilfab20 },
    TriviaSilfab21: { screen: TriviaSilfab21 },
    TriviaSilfab22: { screen: TriviaSilfab22 },
    TriviaSilfab23: { screen: TriviaSilfab23 },
    TriviaSilfab24: { screen: TriviaSilfab24 },
    TriviaSilfab25: { screen: TriviaSilfab25 },
    TriviaSilfab26: { screen: TriviaSilfab26 },
    TriviaSilfab27: { screen: TriviaSilfab27 },

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
    TriviaGraco10: { screen: TriviaGraco10 },
    TriviaGraco11: { screen: TriviaGraco11 },
    TriviaGraco12: { screen: TriviaGraco12 },
    TriviaGraco13: { screen: TriviaGraco13 },
    TriviaGraco14: { screen: TriviaGraco14 },
    TriviaGraco15: { screen: TriviaGraco15 },
    TriviaGraco16: { screen: TriviaGraco16 },
    TriviaGraco17: { screen: TriviaGraco17 },
    TriviaGraco18: { screen: TriviaGraco18 },
    TriviaGraco19: { screen: TriviaGraco19 },
    TriviaGraco20: { screen: TriviaGraco20 },
    TriviaGraco21: { screen: TriviaGraco21 },
    TriviaGraco22: { screen: TriviaGraco22 },
    TriviaGraco23: { screen: TriviaGraco23 },
    TriviaGraco24: { screen: TriviaGraco24 },
    TriviaGraco25: { screen: TriviaGraco25 },
    TriviaGraco26: { screen: TriviaGraco26 },

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
    TriviaEstrella10: { screen: TriviaEstrella10 },
    TriviaEstrella11: { screen: TriviaEstrella11 },
    TriviaEstrella12: { screen: TriviaEstrella12 },
    TriviaEstrella13: { screen: TriviaEstrella13 },
    TriviaEstrella14: { screen: TriviaEstrella14 },
    TriviaEstrella15: { screen: TriviaEstrella15 },
    TriviaEstrella16: { screen: TriviaEstrella16 },
    TriviaEstrella17: { screen: TriviaEstrella17 },
    TriviaEstrella18: { screen: TriviaEstrella18 },
    TriviaEstrella19: { screen: TriviaEstrella19 },
    TriviaEstrella20: { screen: TriviaEstrella20 },
    TriviaEstrella21: { screen: TriviaEstrella21 },
    TriviaEstrella22: { screen: TriviaEstrella22 },
    TriviaEstrella23: { screen: TriviaEstrella23 },
    TriviaEstrella24: { screen: TriviaEstrella24 },
    TriviaEstrella25: { screen: TriviaEstrella25 },
    TriviaEstrella26: { screen: TriviaEstrella26 },
    TriviaEstrella27: { screen: TriviaEstrella27 },

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
    EweTrivia10: { screen: EweTrivia10 },
    EweTrivia11: { screen: EweTrivia11 },
    EweTrivia12: { screen: EweTrivia12 },
    EweTrivia13: { screen: EweTrivia13 },
    EweTrivia14: { screen: EweTrivia14 },
    EweTrivia15: { screen: EweTrivia15 },
    EweTrivia16: { screen: EweTrivia16 },
    EweTrivia17: { screen: EweTrivia17 },
    EweTrivia18: { screen: EweTrivia18 },
    EweTrivia19: { screen: EweTrivia19 },
    EweTrivia20: { screen: EweTrivia20 },
    EweTrivia21: { screen: EweTrivia21 },
    EweTrivia22: { screen: EweTrivia22 },
    EweTrivia23: { screen: EweTrivia23 },
    EweTrivia24: { screen: EweTrivia24 },
    EweTrivia25: { screen: EweTrivia25 },
    EweTrivia26: { screen: EweTrivia26 },
    EweTrivia27: { screen: EweTrivia27 },

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

    //Liliana ================================ //
    LiliAdd1: { screen: LiliAdd1 },
    LiliAdd2: { screen: LiliAdd2 },
    LiliAdd3: { screen: LiliAdd3 },
    LiliAdd4: { screen: LiliAdd4 },
    LiliAdd5: { screen: LiliAdd5 },
    LiliAdd6: { screen: LiliAdd6 },
    LiliAdd7: { screen: LiliAdd7 },
    LiliAdd8: { screen: LiliAdd8 },
    LiliAdd9: { screen: LiliAdd9 },

    LiliError1: { screen: LiliError1 },
    LiliError2: { screen: LiliError2 },
    LiliError3: { screen: LiliError3 },

    LiliGanaste: { screen: LiliGanaste },

    PremioLiliana: { screen: PremioLiliana },

    LiliTrivia1: { screen: LiliTrivia1 },
    LiliTrivia2: { screen: LiliTrivia2 },
    LiliTrivia3: { screen: LiliTrivia3 },
    LiliTrivia4: { screen: LiliTrivia4 },
    LiliTrivia5: { screen: LiliTrivia5 },
    LiliTrivia6: { screen: LiliTrivia6 },
    LiliTrivia7: { screen: LiliTrivia7 },
    LiliTrivia8: { screen: LiliTrivia8 },
    LiliTrivia9: { screen: LiliTrivia9 },
    LiliTrivia10: { screen: LiliTrivia10 },
    LiliTrivia11: { screen: LiliTrivia11 },
    LiliTrivia12: { screen: LiliTrivia12 },
    LiliTrivia13: { screen: LiliTrivia13 },
    LiliTrivia14: { screen: LiliTrivia14 },
    LiliTrivia15: { screen: LiliTrivia15 },
    LiliTrivia16: { screen: LiliTrivia16 },
    LiliTrivia17: { screen: LiliTrivia17 },
    LiliTrivia18: { screen: LiliTrivia18 },
    LiliTrivia19: { screen: LiliTrivia19 },
    LiliTrivia20: { screen: LiliTrivia20 },
    LiliTrivia21: { screen: LiliTrivia21 },
    LiliTrivia22: { screen: LiliTrivia22 },
    LiliTrivia23: { screen: LiliTrivia23 },
    LiliTrivia24: { screen: LiliTrivia24 },
    LiliTrivia25: { screen: LiliTrivia25 },
    LiliTrivia26: { screen: LiliTrivia26 },
    //Liliana ================================ //

    Loading: { screen: Loading },
    Sign: { screen: Sign },


})
