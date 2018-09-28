import React from 'react';
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
import Fadd10 from './Screens/Farmx/Fadd10'
import Fadd11 from './Screens/Farmx/Fadd11'
import Fadd12 from './Screens/Farmx/Fadd12'
import Fadd13 from './Screens/Farmx/Fadd13'
import Fadd14 from './Screens/Farmx/Fadd14'
import Fadd15 from './Screens/Farmx/Fadd15'
import Fadd16 from './Screens/Farmx/Fadd16'
import Fadd17 from './Screens/Farmx/Fadd17'
import Fadd18 from './Screens/Farmx/Fadd18'
import Fadd19 from './Screens/Farmx/Fadd19'
import Fadd20 from './Screens/Farmx/Fadd20'
import Fadd21 from './Screens/Farmx/Fadd21'
import Fadd22 from './Screens/Farmx/Fadd22'
import Fadd23 from './Screens/Farmx/Fadd23'
import Fadd24 from './Screens/Farmx/Fadd24'
import Fadd25 from './Screens/Farmx/Fadd25'
import Fadd26 from './Screens/Farmx/Fadd26'
import Fadd27 from './Screens/Farmx/Fadd27'

import FaddError1 from './Screens/Farmx/FaddError1'
import FaddError2 from './Screens/Farmx/FaddError2'
import FaddError3 from './Screens/Farmx/FaddError3'
import FaddError4 from './Screens/Farmx/FaddError4'
import FaddError5 from './Screens/Farmx/FaddError5'
import FaddError6 from './Screens/Farmx/FaddError6'
import FaddError7 from './Screens/Farmx/FaddError7'
import FaddError8 from './Screens/Farmx/FaddError8'

import Fganaste4 from './Screens/Farmx/Fganaste4'
import Fganaste7 from './Screens/Farmx/Fganaste7'
import Fganaste10 from './Screens/Farmx/Fganaste10'
import Fganaste13 from './Screens/Farmx/Fganaste13'
import Fganaste16 from './Screens/Farmx/Fganaste16'
import Fganaste19 from './Screens/Farmx/Fganaste19'
import Fganaste22 from './Screens/Farmx/Fganaste22'
import Fganaste25 from './Screens/Farmx/Fganaste25'
import Fganaste27 from './Screens/Farmx/Fganaste27'

import PremioFarmx7 from './Screens/Farmx/PremioFarmx7'
import PremioFarmx10 from './Screens/Farmx/PremioFarmx10'
import PremioFarmx13 from './Screens/Farmx/PremioFarmx13'
import PremioFarmx16 from './Screens/Farmx/PremioFarmx16'
import PremioFarmx19 from './Screens/Farmx/PremioFarmx19'
import PremioFarmx22 from './Screens/Farmx/PremioFarmx22'
import PremioFarmx25 from './Screens/Farmx/PremioFarmx25'
import PremioFarmx27 from './Screens/Farmx/PremioFarmx27'

import FarmBrand4 from './Screens/Farmx/FarmBrand4'
import FarmBrand7 from './Screens/Farmx/FarmBrand7'
import FarmBrand10 from './Screens/Farmx/FarmBrand10'
import FarmBrand13 from './Screens/Farmx/FarmBrand13'
import FarmBrand16 from './Screens/Farmx/FarmBrand16'
import FarmBrand19 from './Screens/Farmx/FarmBrand19'
import FarmBrand22 from './Screens/Farmx/FarmBrand22'
import FarmBrand25 from './Screens/Farmx/FarmBrand25'
import FarmBrand27 from './Screens/Farmx/FarmBrand27'
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

import AuloBrand4 from './Screens/AuloGelio/AuloBrand4'
import AuloBrand7 from './Screens/AuloGelio/AuloBrand7'
import AuloBrand10 from './Screens/AuloGelio/AuloBrand10'
import AuloBrand13 from './Screens/AuloGelio/AuloBrand13'
import AuloBrand16 from './Screens/AuloGelio/AuloBrand16'
import AuloBrand19 from './Screens/AuloGelio/AuloBrand19'
import AuloBrand22 from './Screens/AuloGelio/AuloBrand22'
import AuloBrand25 from './Screens/AuloGelio/AuloBrand25'

import PremioAulo4 from './Screens/AuloGelio/PremioAulo4'
import PremioAulo7 from './Screens/AuloGelio/PremioAulo7'
import PremioAulo10 from './Screens/AuloGelio/PremioAulo10'
import PremioAulo13 from './Screens/AuloGelio/PremioAulo13'
import PremioAulo16 from './Screens/AuloGelio/PremioAulo16'
import PremioAulo19 from './Screens/AuloGelio/PremioAulo19'
import PremioAulo22 from './Screens/AuloGelio/PremioAulo22'
import PremioAulo25 from './Screens/AuloGelio/PremioAulo25'

import Aganaste7 from './Screens/AuloGelio/Aganaste7'
import Aganaste10 from './Screens/AuloGelio/Aganaste10'
import Aganaste13 from './Screens/AuloGelio/Aganaste13'
import Aganaste16 from './Screens/AuloGelio/Aganaste16'
import Aganaste19 from './Screens/AuloGelio/Aganaste19'
import Aganaste22 from './Screens/AuloGelio/Aganaste22'
import Aganaste25 from './Screens/AuloGelio/Aganaste25'
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

import Bganaste4 from './Screens/Bimbi/Bganaste4'
import Bganaste7 from './Screens/Bimbi/Bganaste7'
import Bganaste10 from './Screens/Bimbi/Bganaste10'
import Bganaste13 from './Screens/Bimbi/Bganaste13'
import Bganaste16 from './Screens/Bimbi/Bganaste16'
import Bganaste19 from './Screens/Bimbi/Bganaste19'
import Bganaste22 from './Screens/Bimbi/Bganaste22'
import Bganaste25 from './Screens/Bimbi/Bganaste25'
import Bganaste27 from './Screens/Bimbi/Bganaste27'

import BimbiBrand4 from './Screens/Bimbi/BimbiBrand4'
import BimbiBrand7 from './Screens/Bimbi/BimbiBrand7'
import BimbiBrand10 from './Screens/Bimbi/BimbiBrand10'
import BimbiBrand13 from './Screens/Bimbi/BimbiBrand13'
import BimbiBrand16 from './Screens/Bimbi/BimbiBrand16'
import BimbiBrand19 from './Screens/Bimbi/BimbiBrand19'
import BimbiBrand22 from './Screens/Bimbi/BimbiBrand22'
import BimbiBrand25 from './Screens/Bimbi/BimbiBrand25'
import BimbiBrand27 from './Screens/Bimbi/BimbiBrand27'

import PremioBimbi4 from './Screens/Bimbi/PremioBimbi4'
import PremioBimbi7 from './Screens/Bimbi/PremioBimbi7'
import PremioBimbi10 from './Screens/Bimbi/PremioBimbi10'
import PremioBimbi13 from './Screens/Bimbi/PremioBimbi13'
import PremioBimbi16 from './Screens/Bimbi/PremioBimbi16'
import PremioBimbi19 from './Screens/Bimbi/PremioBimbi19'
import PremioBimbi22 from './Screens/Bimbi/PremioBimbi22'
import PremioBimbi25 from './Screens/Bimbi/PremioBimbi25'
import PremioBimbi27 from './Screens/Bimbi/PremioBimbi27'
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
import NukAdd10 from './Screens/Nuk/NukAdd10'
import NukAdd11 from './Screens/Nuk/NukAdd11'
import NukAdd12 from './Screens/Nuk/NukAdd12'
import NukAdd13 from './Screens/Nuk/NukAdd13'
import NukAdd14 from './Screens/Nuk/NukAdd14'
import NukAdd15 from './Screens/Nuk/NukAdd15'
import NukAdd16 from './Screens/Nuk/NukAdd16'
import NukAdd17 from './Screens/Nuk/NukAdd17'
import NukAdd18 from './Screens/Nuk/NukAdd18'
import NukAdd19 from './Screens/Nuk/NukAdd19'
import NukAdd20 from './Screens/Nuk/NukAdd20'
import NukAdd21 from './Screens/Nuk/NukAdd21'
import NukAdd22 from './Screens/Nuk/NukAdd22'
import NukAdd23 from './Screens/Nuk/NukAdd23'
import NukAdd24 from './Screens/Nuk/NukAdd24'
import NukAdd25 from './Screens/Nuk/NukAdd25'
import NukAdd26 from './Screens/Nuk/NukAdd26'
import NukAdd27 from './Screens/Nuk/NukAdd27'


import NukAddError1 from './Screens/Nuk/NukAddError1'
import NukAddError2 from './Screens/Nuk/NukAddError2'
import NukAddError3 from './Screens/Nuk/NukAddError3'
import NukAddError4 from './Screens/Nuk/NukAddError4'
import NukAddError5 from './Screens/Nuk/NukAddError5'
import NukAddError6 from './Screens/Nuk/NukAddError6'
import NukAddError7 from './Screens/Nuk/NukAddError7'
import NukAddError8 from './Screens/Nuk/NukAddError8'

import Nganaste7 from './Screens/Nuk/Nganaste7'
import Nganaste10 from './Screens/Nuk/Nganaste10'
import Nganaste13 from './Screens/Nuk/Nganaste13'
import Nganaste16 from './Screens/Nuk/Nganaste16'
import Nganaste19 from './Screens/Nuk/Nganaste19'
import Nganaste22 from './Screens/Nuk/Nganaste22'
import Nganaste25 from './Screens/Nuk/Nganaste25'
import Nganaste27 from './Screens/Nuk/Nganaste27'

import PremioNuk4 from './Screens/Nuk/PremioNuk4'
import PremioNuk7 from './Screens/Nuk/PremioNuk7'
import PremioNuk10 from './Screens/Nuk/PremioNuk10'
import PremioNuk13 from './Screens/Nuk/PremioNuk13'
import PremioNuk16 from './Screens/Nuk/PremioNuk16'
import PremioNuk19 from './Screens/Nuk/PremioNuk19'
import PremioNuk22 from './Screens/Nuk/PremioNuk22'
import PremioNuk25 from './Screens/Nuk/PremioNuk25'
import PremioNuk27 from './Screens/Nuk/PremioNuk27'
import BrandNuk4 from './Screens/Nuk/BrandNuk4'
import BrandNuk7 from './Screens/Nuk/BrandNuk7'
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
import SilfabAdd10 from './Screens/Silfab/SilfabAdd10'
import SilfabAdd11 from './Screens/Silfab/SilfabAdd11'
import SilfabAdd12 from './Screens/Silfab/SilfabAdd12'
import SilfabAdd13 from './Screens/Silfab/SilfabAdd13'
import SilfabAdd14 from './Screens/Silfab/SilfabAdd14'
import SilfabAdd15 from './Screens/Silfab/SilfabAdd15'
import SilfabAdd16 from './Screens/Silfab/SilfabAdd16'
import SilfabAdd17 from './Screens/Silfab/SilfabAdd17'
import SilfabAdd18 from './Screens/Silfab/SilfabAdd18'
import SilfabAdd19 from './Screens/Silfab/SilfabAdd19'
import SilfabAdd20 from './Screens/Silfab/SilfabAdd20'
import SilfabAdd21 from './Screens/Silfab/SilfabAdd21'
import SilfabAdd22 from './Screens/Silfab/SilfabAdd22'
import SilfabAdd23 from './Screens/Silfab/SilfabAdd23'
import SilfabAdd24 from './Screens/Silfab/SilfabAdd24'
import SilfabAdd25 from './Screens/Silfab/SilfabAdd25'
import SilfabAdd26 from './Screens/Silfab/SilfabAdd26'
import SilfabAdd27 from './Screens/Silfab/SilfabAdd27'

import SilfabAddError1 from './Screens/Silfab/SilfabAddError1'
import SilfabAddError2 from './Screens/Silfab/SilfabAddError2'
import SilfabAddError3 from './Screens/Silfab/SilfabAddError3'
import SilfabAddError4 from './Screens/Silfab/SilfabAddError4'
import SilfabAddError5 from './Screens/Silfab/SilfabAddError5'
import SilfabAddError6 from './Screens/Silfab/SilfabAddError6'
import SilfabAddError7 from './Screens/Silfab/SilfabAddError7'
import SilfabAddError8 from './Screens/Silfab/SilfabAddError8'

import PremioSilfab4 from './Screens/Silfab/PremioSilfab4'
import PremioSilfab7 from './Screens/Silfab/PremioSilfab7'
import PremioSilfab10 from './Screens/Silfab/PremioSilfab10'
import PremioSilfab13 from './Screens/Silfab/PremioSilfab13'
import PremioSilfab16 from './Screens/Silfab/PremioSilfab16'
import PremioSilfab19 from './Screens/Silfab/PremioSilfab19'
import PremioSilfab22 from './Screens/Silfab/PremioSilfab22'
import PremioSilfab25 from './Screens/Silfab/PremioSilfab25'
import PremioSilfab27 from './Screens/Silfab/PremioSilfab27'

import Sganaste7 from './Screens/Silfab/Sganaste7'
import Sganaste10 from './Screens/Silfab/Sganaste10'
import Sganaste13 from './Screens/Silfab/Sganaste13'
import Sganaste16 from './Screens/Silfab/Sganaste16'
import Sganaste19 from './Screens/Silfab/Sganaste19'
import Sganaste22 from './Screens/Silfab/Sganaste22'
import Sganaste25 from './Screens/Silfab/Sganaste25'
import Sganaste27 from './Screens/Silfab/Sganaste27'

import BrandSilfab4 from './Screens/Silfab/BrandSilfab4'
import BrandSilfab7 from './Screens/Silfab/BrandSilfab7'
import BrandSilfab10 from './Screens/Silfab/BrandSilfab10'
import BrandSilfab13 from './Screens/Silfab/BrandSilfab13'
import BrandSilfab16 from './Screens/Silfab/BrandSilfab16'
import BrandSilfab19 from './Screens/Silfab/BrandSilfab19'
import BrandSilfab22 from './Screens/Silfab/BrandSilfab22'
import BrandSilfab25 from './Screens/Silfab/BrandSilfab25'
import BrandSilfab27 from './Screens/Silfab/BrandSilfab27'
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

import GracoAdd1 from './Screens/Graco/GracoAdd1'
import GracoAdd2 from './Screens/Graco/GracoAdd2'
import GracoAdd3 from './Screens/Graco/GracoAdd3'
import GracoAdd4 from './Screens/Graco/GracoAdd4'
import GracoAdd5 from './Screens/Graco/GracoAdd5'
import GracoAdd6 from './Screens/Graco/GracoAdd6'
import GracoAdd7 from './Screens/Graco/GracoAdd7'
import GracoAdd8 from './Screens/Graco/GracoAdd8'
import GracoAdd9 from './Screens/Graco/GracoAdd9'
import GracoAdd10 from './Screens/Graco/GracoAdd10'
import GracoAdd11 from './Screens/Graco/GracoAdd11'
import GracoAdd12 from './Screens/Graco/GracoAdd12'
import GracoAdd13 from './Screens/Graco/GracoAdd13'
import GracoAdd14 from './Screens/Graco/GracoAdd14'
import GracoAdd15 from './Screens/Graco/GracoAdd15'
import GracoAdd16 from './Screens/Graco/GracoAdd16'
import GracoAdd17 from './Screens/Graco/GracoAdd17'
import GracoAdd18 from './Screens/Graco/GracoAdd18'
import GracoAdd19 from './Screens/Graco/GracoAdd19'
import GracoAdd20 from './Screens/Graco/GracoAdd20'
import GracoAdd21 from './Screens/Graco/GracoAdd21'
import GracoAdd22 from './Screens/Graco/GracoAdd22'
import GracoAdd23 from './Screens/Graco/GracoAdd23'
import GracoAdd24 from './Screens/Graco/GracoAdd24'

import Gganaste from './Screens/Graco/Gganaste'

import GracoAddError1 from './Screens/Graco/GracoAddError1'
import GracoAddError2 from './Screens/Graco/GracoAddError2'
import GracoAddError3 from './Screens/Graco/GracoAddError3'
import GracoAddError4 from './Screens/Graco/GracoAddError4'
import GracoAddError5 from './Screens/Graco/GracoAddError5'
import GracoAddError6 from './Screens/Graco/GracoAddError6'
import GracoAddError7 from './Screens/Graco/GracoAddError7'

import Gganaste7 from './Screens/Graco/Gganaste7'
import Gganaste10 from './Screens/Graco/Gganaste10'
import Gganaste13 from './Screens/Graco/Gganaste13'
import Gganaste16 from './Screens/Graco/Gganaste16'
import Gganaste19 from './Screens/Graco/Gganaste19'
import Gganaste22 from './Screens/Graco/Gganaste22'

import PremioGraco4 from './Screens/Graco/PremioGraco4'
import PremioGraco7 from './Screens/Graco/PremioGraco7'
import PremioGraco10 from './Screens/Graco/PremioGraco10'
import PremioGraco13 from './Screens/Graco/PremioGraco13'
import PremioGraco16 from './Screens/Graco/PremioGraco16'
import PremioGraco19 from './Screens/Graco/PremioGraco19'
import PremioGraco22 from './Screens/Graco/PremioGraco22'

import BrandGraco4 from './Screens/Graco/BrandGraco4'
import BrandGraco7 from './Screens/Graco/BrandGraco7'
import BrandGraco10 from './Screens/Graco/BrandGraco10'
import BrandGraco13 from './Screens/Graco/BrandGraco13'
import BrandGraco22 from './Screens/Graco/BrandGraco22'
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
import EstrellaAdd10 from './Screens/EstrellaBaby/EstrellaAdd10'
import EstrellaAdd11 from './Screens/EstrellaBaby/EstrellaAdd11'
import EstrellaAdd12 from './Screens/EstrellaBaby/EstrellaAdd12'
import EstrellaAdd13 from './Screens/EstrellaBaby/EstrellaAdd13'
import EstrellaAdd14 from './Screens/EstrellaBaby/EstrellaAdd14'
import EstrellaAdd15 from './Screens/EstrellaBaby/EstrellaAdd15'
import EstrellaAdd16 from './Screens/EstrellaBaby/EstrellaAdd16'
import EstrellaAdd17 from './Screens/EstrellaBaby/EstrellaAdd17'
import EstrellaAdd18 from './Screens/EstrellaBaby/EstrellaAdd18'
import EstrellaAdd19 from './Screens/EstrellaBaby/EstrellaAdd19'
import EstrellaAdd20 from './Screens/EstrellaBaby/EstrellaAdd20'
import EstrellaAdd21 from './Screens/EstrellaBaby/EstrellaAdd21'
import EstrellaAdd22 from './Screens/EstrellaBaby/EstrellaAdd22'
import EstrellaAdd23 from './Screens/EstrellaBaby/EstrellaAdd23'
import EstrellaAdd24 from './Screens/EstrellaBaby/EstrellaAdd24'
import EstrellaAdd25 from './Screens/EstrellaBaby/EstrellaAdd25'
import EstrellaAdd26 from './Screens/EstrellaBaby/EstrellaAdd26'
import EstrellaAdd27 from './Screens/EstrellaBaby/EstrellaAdd27'

import EstrellaAddError1 from './Screens/EstrellaBaby/EstrellaAddError1'
import EstrellaAddError2 from './Screens/EstrellaBaby/EstrellaAddError2'
import EstrellaAddError3 from './Screens/EstrellaBaby/EstrellaAddError3'
import EstrellaAddError4 from './Screens/EstrellaBaby/EstrellaAddError4'
import EstrellaAddError5 from './Screens/EstrellaBaby/EstrellaAddError5'
import EstrellaAddError6 from './Screens/EstrellaBaby/EstrellaAddError6'
import EstrellaAddError7 from './Screens/EstrellaBaby/EstrellaAddError7'
import EstrellaAddError8 from './Screens/EstrellaBaby/EstrellaAddError8'

import Eganaste7 from './Screens/EstrellaBaby/Eganaste7'
import Eganaste10 from './Screens/EstrellaBaby/Eganaste10'
import Eganaste13 from './Screens/EstrellaBaby/Eganaste13'
import Eganaste16 from './Screens/EstrellaBaby/Eganaste16'
import Eganaste19 from './Screens/EstrellaBaby/Eganaste19'
import Eganaste22 from './Screens/EstrellaBaby/Eganaste22'
import Eganaste25 from './Screens/EstrellaBaby/Eganaste25'
import Eganaste27 from './Screens/EstrellaBaby/Eganaste27'

import PremioEstrella4 from './Screens/EstrellaBaby/PremioEstrella4'
import PremioEstrella7 from './Screens/EstrellaBaby/PremioEstrella7'
import PremioEstrella10 from './Screens/EstrellaBaby/PremioEstrella10'
import PremioEstrella13 from './Screens/EstrellaBaby/PremioEstrella13'
import PremioEstrella16 from './Screens/EstrellaBaby/PremioEstrella16'
import PremioEstrella19 from './Screens/EstrellaBaby/PremioEstrella19'
import PremioEstrella22 from './Screens/EstrellaBaby/PremioEstrella22'
import PremioEstrella25 from './Screens/EstrellaBaby/PremioEstrella25'
import PremioEstrella27 from './Screens/EstrellaBaby/PremioEstrella27'

import EstrellaBrand4 from './Screens/EstrellaBaby/EstrellaBrand4'
import EstrellaBrand7 from './Screens/EstrellaBaby/EstrellaBrand7'
import EstrellaBrand10 from './Screens/EstrellaBaby/EstrellaBrand10'
import EstrellaBrand13 from './Screens/EstrellaBaby/EstrellaBrand13'
import EstrellaBrand16 from './Screens/EstrellaBaby/EstrellaBrand16'
import EstrellaBrand19 from './Screens/EstrellaBaby/EstrellaBrand19'
import EstrellaBrand22 from './Screens/EstrellaBaby/EstrellaBrand22'
import EstrellaBrand25 from './Screens/EstrellaBaby/EstrellaBrand25'
import EstrellaBrand27 from './Screens/EstrellaBaby/EstrellaBrand27'

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
import AddEwe10 from './Screens/Ewe/AddEwe10'
import AddEwe11 from './Screens/Ewe/AddEwe11'
import AddEwe12 from './Screens/Ewe/AddEwe12'
import AddEwe13 from './Screens/Ewe/AddEwe13'
import AddEwe14 from './Screens/Ewe/AddEwe14'
import AddEwe15 from './Screens/Ewe/AddEwe15'
import AddEwe16 from './Screens/Ewe/AddEwe16'
import AddEwe17 from './Screens/Ewe/AddEwe17'
import AddEwe18 from './Screens/Ewe/AddEwe18'
import AddEwe19 from './Screens/Ewe/AddEwe19'
import AddEwe20 from './Screens/Ewe/AddEwe20'
import AddEwe21 from './Screens/Ewe/AddEwe21'
import AddEwe22 from './Screens/Ewe/AddEwe22'
import AddEwe23 from './Screens/Ewe/AddEwe23'
import AddEwe24 from './Screens/Ewe/AddEwe24'
import AddEwe25 from './Screens/Ewe/AddEwe25'
import AddEwe26 from './Screens/Ewe/AddEwe26'
import AddEwe27 from './Screens/Ewe/AddEwe27'

import AddEweError1 from './Screens/Ewe/AddEweError1'
import AddEweError2 from './Screens/Ewe/AddEweError2'
import AddEweError3 from './Screens/Ewe/AddEweError3'
import AddEweError4 from './Screens/Ewe/AddEweError4'
import AddEweError5 from './Screens/Ewe/AddEweError5'
import AddEweError6 from './Screens/Ewe/AddEweError6'
import AddEweError7 from './Screens/Ewe/AddEweError7'

import Eweganaste7 from './Screens/Ewe/Eweganaste7'
import Eweganaste10 from './Screens/Ewe/Eweganaste10'
import Eweganaste13 from './Screens/Ewe/Eweganaste13'
import Eweganaste16 from './Screens/Ewe/Eweganaste16'
import Eweganaste22 from './Screens/Ewe/Eweganaste22'
import Eweganaste25 from './Screens/Ewe/Eweganaste25'
import Eweganaste27 from './Screens/Ewe/Eweganaste27'

import PremioEwe4 from './Screens/Ewe/PremioEwe4'
import PremioEwe7 from './Screens/Ewe/PremioEwe7'
import PremioEwe10 from './Screens/Ewe/PremioEwe10'
import PremioEwe13 from './Screens/Ewe/PremioEwe13'
import PremioEwe16 from './Screens/Ewe/PremioEwe16'
import PremioEwe19 from './Screens/Ewe/PremioEwe19'
import PremioEwe22 from './Screens/Ewe/PremioEwe22'
import PremioEwe25 from './Screens/Ewe/PremioEwe25'
import PremioEwe27 from './Screens/Ewe/PremioEwe27'

import EweBrand4 from './Screens/Ewe/EweBrand4'
import EweBrand7 from './Screens/Ewe/EweBrand7'
import EweBrand10 from './Screens/Ewe/EweBrand10'
import EweBrand13 from './Screens/Ewe/EweBrand13'
import EweBrand16 from './Screens/Ewe/EweBrand16'
import EweBrand19 from './Screens/Ewe/EweBrand19'
import EweBrand22 from './Screens/Ewe/EweBrand22'
import EweBrand25 from './Screens/Ewe/EweBrand25'
import EweBrand27 from './Screens/Ewe/EweBrand27'
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
import LiliAdd10 from './Screens/Liliana/LiliAdd10'
import LiliAdd11 from './Screens/Liliana/LiliAdd11'
import LiliAdd12 from './Screens/Liliana/LiliAdd12'
import LiliAdd13 from './Screens/Liliana/LiliAdd13'
import LiliAdd14 from './Screens/Liliana/LiliAdd14'
import LiliAdd15 from './Screens/Liliana/LiliAdd15'
import LiliAdd16 from './Screens/Liliana/LiliAdd16'
import LiliAdd17 from './Screens/Liliana/LiliAdd17'
import LiliAdd18 from './Screens/Liliana/LiliAdd18'
import LiliAdd19 from './Screens/Liliana/LiliAdd19'
import LiliAdd20 from './Screens/Liliana/LiliAdd20'
import LiliAdd21 from './Screens/Liliana/LiliAdd21'
import LiliAdd22 from './Screens/Liliana/LiliAdd22'
import LiliAdd23 from './Screens/Liliana/LiliAdd23'
import LiliAdd24 from './Screens/Liliana/LiliAdd24'

import LiliError1 from './Screens/Liliana/LiliError1'
import LiliError2 from './Screens/Liliana/LiliError2'
import LiliError3 from './Screens/Liliana/LiliError3'
import LiliError4 from './Screens/Liliana/LiliError4'
import LiliError5 from './Screens/Liliana/LiliError5'
import LiliError6 from './Screens/Liliana/LiliError6'
import LiliError7 from './Screens/Liliana/LiliError7'

import LiliGanaste7 from './Screens/Liliana/LiliGanaste7'
import LiliGanaste10 from './Screens/Liliana/LiliGanaste10'
import LiliGanaste13 from './Screens/Liliana/LiliGanaste13'
import LiliGanaste16 from './Screens/Liliana/LiliGanaste16'
import LiliGanaste19 from './Screens/Liliana/LiliGanaste19'
import LiliGanaste22 from './Screens/Liliana/LiliGanaste22'

import PremioLiliana7 from './Screens/Liliana/PremioLiliana7'
import PremioLiliana10 from './Screens/Liliana/PremioLiliana10'
import PremioLiliana13 from './Screens/Liliana/PremioLiliana13'
import PremioLiliana16 from './Screens/Liliana/PremioLiliana16'
import PremioLiliana19 from './Screens/Liliana/PremioLiliana19'
import PremioLiliana22 from './Screens/Liliana/PremioLiliana22'

import BrandLiliana7 from './Screens/Liliana/BrandLiliana7'
import BrandLiliana10 from './Screens/Liliana/BrandLiliana10'
import BrandLiliana13 from './Screens/Liliana/BrandLiliana13'
import BrandLiliana16 from './Screens/Liliana/BrandLiliana16'
import BrandLiliana19 from './Screens/Liliana/BrandLiliana19'
import BrandLiliana22 from './Screens/Liliana/BrandLiliana22'

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


import TriviaPritt1 from './Screens/Pritt/TriviaPritt1'
import TriviaPritt2 from './Screens/Pritt/TriviaPritt2'
import TriviaPritt3 from './Screens/Pritt/TriviaPritt3'
import TriviaPritt4 from './Screens/Pritt/TriviaPritt4'
import TriviaPritt5 from './Screens/Pritt/TriviaPritt5'
import TriviaPritt6 from './Screens/Pritt/TriviaPritt6'
import TriviaPritt7 from './Screens/Pritt/TriviaPritt7'
import TriviaPritt8 from './Screens/Pritt/TriviaPritt8'
import TriviaPritt9 from './Screens/Pritt/TriviaPritt9'
import TriviaPritt10 from './Screens/Pritt/TriviaPritt10'
import TriviaPritt11 from './Screens/Pritt/TriviaPritt11'
import TriviaPritt12 from './Screens/Pritt/TriviaPritt12'
import TriviaPritt13 from './Screens/Pritt/TriviaPritt13'
import TriviaPritt14 from './Screens/Pritt/TriviaPritt14'
import TriviaPritt15 from './Screens/Pritt/TriviaPritt15'

import PrittAdd1 from './Screens/Pritt/PrittAdd1'
import PrittAdd2 from './Screens/Pritt/PrittAdd2'
import PrittAdd3 from './Screens/Pritt/PrittAdd3'
import PrittAdd4 from './Screens/Pritt/PrittAdd4'
import PrittAdd5 from './Screens/Pritt/PrittAdd5'
import PrittAdd6 from './Screens/Pritt/PrittAdd6'
import PrittAdd7 from './Screens/Pritt/PrittAdd7'
import PrittAdd8 from './Screens/Pritt/PrittAdd8'
import PrittAdd9 from './Screens/Pritt/PrittAdd9'
import PrittAdd10 from './Screens/Pritt/PrittAdd10'
import PrittAdd11 from './Screens/Pritt/PrittAdd11'
import PrittAdd12 from './Screens/Pritt/PrittAdd12'
import PrittAdd13 from './Screens/Pritt/PrittAdd13'
import PrittAdd14 from './Screens/Pritt/PrittAdd14'
import PrittAdd15 from './Screens/Pritt/PrittAdd15'

import PrittAddError1 from './Screens/Pritt/PrittAddError1'
import PrittAddError2 from './Screens/Pritt/PrittAddError2'
import PrittAddError3 from './Screens/Pritt/PrittAddError3'
import PrittAddError4 from './Screens/Pritt/PrittAddError4'
import PrittAddError5 from './Screens/Pritt/PrittAddError5'
import PrittAddError6 from './Screens/Pritt/PrittAddError6'
import PrittAddError7 from './Screens/Pritt/PrittAddError7'

import PremioPritt from './Screens/Pritt/PremioPritt'
import PremioPritt4 from './Screens/Pritt/PremioPritt4'
import PremioPritt7 from './Screens/Pritt/PremioPritt7'
import PremioPritt10 from './Screens/Pritt/PremioPritt10'
import PremioPritt13 from './Screens/Pritt/PremioPritt13'
import PremioPritt16 from './Screens/Pritt/PremioPritt16'
import PremioPritt19 from './Screens/Pritt/PremioPritt19'
import PremioPritt22 from './Screens/Pritt/PremioPritt22'

import Pganaste from './Screens/Pritt/Pganaste'
import Pganaste7 from './Screens/Pritt/Pganaste7'
import Pganaste10 from './Screens/Pritt/Pganaste10'
import Pganaste13 from './Screens/Pritt/Pganaste13'
import Pganaste16 from './Screens/Pritt/Pganaste16'
import Pganaste19 from './Screens/Pritt/Pganaste19'
import Pganaste22 from './Screens/Pritt/Pganaste22'

import BrandPritt4 from './Screens/Pritt/BrandPritt4'
import BrandPritt7 from './Screens/Pritt/BrandPritt7'
import BrandPritt10 from './Screens/Pritt/BrandPritt10'
import BrandPritt13 from './Screens/Pritt/BrandPritt13'
import BrandPritt16 from './Screens/Pritt/BrandPritt16'
import BrandPritt19 from './Screens/Pritt/BrandPritt19'
import BrandPritt22 from './Screens/Pritt/BrandPritt22'
//Pritt ==================================== //

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
    Fadd10: { screen: Fadd10 },
    Fadd11: { screen: Fadd11 },
    Fadd12: { screen: Fadd12 },
    Fadd13: { screen: Fadd13 },
    Fadd14: { screen: Fadd14 },
    Fadd15: { screen: Fadd15 },
    Fadd16: { screen: Fadd16 },
    Fadd17: { screen: Fadd17 },
    Fadd18: { screen: Fadd18 },
    Fadd19: { screen: Fadd19 },
    Fadd20: { screen: Fadd20 },
    Fadd21: { screen: Fadd21 },
    Fadd22: { screen: Fadd22 },
    Fadd23: { screen: Fadd23 },
    Fadd24: { screen: Fadd24 },
    Fadd25: { screen: Fadd25 },
    Fadd26: { screen: Fadd26 },
    Fadd27: { screen: Fadd27 },

    FaddError1: { screen: FaddError1 },
    FaddError2: { screen: FaddError2 },
    FaddError3: { screen: FaddError3 },
    FaddError4: { screen: FaddError4 },
    FaddError5: { screen: FaddError5 },
    FaddError6: { screen: FaddError6 },
    FaddError7: { screen: FaddError7 },
    FaddError8: { screen: FaddError8 },

    Fganaste4: { screen: Fganaste4 },
    Fganaste7: { screen: Fganaste7 },
    Fganaste10: { screen: Fganaste10 },
    Fganaste13: { screen: Fganaste13 },
    Fganaste16: { screen: Fganaste16 },
    Fganaste19: { screen: Fganaste19 },
    Fganaste22: { screen: Fganaste22 },
    Fganaste25: { screen: Fganaste25 },
    Fganaste27: { screen: Fganaste27 },

    PremioFarmx7: { screen: PremioFarmx7 },
    PremioFarmx10: { screen: PremioFarmx10 },
    PremioFarmx13: { screen: PremioFarmx13 },
    PremioFarmx16: { screen: PremioFarmx16 },
    PremioFarmx19: { screen: PremioFarmx19 },
    PremioFarmx22: { screen: PremioFarmx22 },
    PremioFarmx25: { screen: PremioFarmx25 },
    PremioFarmx27: { screen: PremioFarmx27 },

    FarmBrand4: { screen: FarmBrand4 },
    FarmBrand7: { screen: FarmBrand7 },
    FarmBrand10: { screen: FarmBrand10 },
    FarmBrand13: { screen: FarmBrand13 },
    FarmBrand16: { screen: FarmBrand16 },
    FarmBrand19: { screen: FarmBrand19 },
    FarmBrand22: { screen: FarmBrand22 },
    FarmBrand25: { screen: FarmBrand25 },
    FarmBrand27: { screen: FarmBrand27 },
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

    AuloBrand4: { screen: AuloBrand4 },
    AuloBrand7: { screen: AuloBrand7 },
    AuloBrand10: { screen: AuloBrand10 },
    AuloBrand13: { screen: AuloBrand13 },
    AuloBrand16: { screen: AuloBrand16 },
    AuloBrand19: { screen: AuloBrand19 },
    AuloBrand22: { screen: AuloBrand22 },
    AuloBrand25: { screen: AuloBrand25 },

    PremioAulo4: { screen: PremioAulo4 },
    PremioAulo47: { screen: PremioAulo7 },
    PremioAulo10: { screen: PremioAulo10 },
    PremioAulo13: { screen: PremioAulo13 },
    PremioAulo16: { screen: PremioAulo16 },
    PremioAul19: { screen: PremioAulo19 },
    PremioAulo22: { screen: PremioAulo22 },
    PremioAulo25: { screen: PremioAulo25 },

    Aganaste7: { screen: Aganaste7 },
    Aganaste10: { screen: Aganaste10 },
    Aganaste13: { screen: Aganaste13 },
    Aganaste16: { screen: Aganaste16 },
    Aganaste19: { screen: Aganaste19 },
    Aganaste22: { screen: Aganaste22 },
    Aganaste25: { screen: Aganaste25 },
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

    Bganaste4: { screen: Bganaste4 },
    Bganaste7: { screen: Bganaste7 },
    Bganaste10: { screen: Bganaste10 },
    Bganaste13: { screen: Bganaste13 },
    Bganaste16: { screen: Bganaste16 },
    Bganaste19: { screen: Bganaste19 },
    Bganaste22: { screen: Bganaste22 },
    Bganaste25: { screen: Bganaste25 },
    Bganaste27: { screen: Bganaste27 },

    BimbiBrand4: { screen: BimbiBrand4 },
    BimbiBrand7: { screen: BimbiBrand7 },
    BimbiBrand10: { screen: BimbiBrand10 },
    BimbiBrand13: { screen: BimbiBrand13 },
    BimbiBrand16: { screen: BimbiBrand16 },
    BimbiBrand19: { screen: BimbiBrand19 },
    BimbiBrand22: { screen: BimbiBrand22 },
    BimbiBrand25: { screen: BimbiBrand25 },
    BimbiBrand27: { screen: BimbiBrand27 },

    PremioBimbi4: { screen: PremioBimbi4 },
    PremioBimbi7: { screen: PremioBimbi7 },
    PremioBimbi10: { screen: PremioBimbi10 },
    PremioBimbi13: { screen: PremioBimbi13 },
    PremioBimbi16: { screen: PremioBimbi16 },
    PremioBimbi19: { screen: PremioBimbi19 },
    PremioBimbi22: { screen: PremioBimbi22 },
    PremioBimbi25: { screen: PremioBimbi25 },
    PremioBimbi27: { screen: PremioBimbi27 },
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
    NukAdd10: { screen: NukAdd10 },
    NukAdd11: { screen: NukAdd11 },
    NukAdd12: { screen: NukAdd12 },
    NukAdd13: { screen: NukAdd13 },
    NukAdd14: { screen: NukAdd14 },
    NukAdd15: { screen: NukAdd15 },
    NukAdd16: { screen: NukAdd16 },
    NukAdd17: { screen: NukAdd17 },
    NukAdd18: { screen: NukAdd18 },
    NukAdd19: { screen: NukAdd19 },
    NukAdd20: { screen: NukAdd20 },
    NukAdd21: { screen: NukAdd21 },
    NukAdd22: { screen: NukAdd22 },
    NukAdd23: { screen: NukAdd23 },
    NukAdd24: { screen: NukAdd24 },
    NukAdd25: { screen: NukAdd25 },
    NukAdd26: { screen: NukAdd26 },
    NukAdd27: { screen: NukAdd27 },

    NukAddError1: { screen: NukAddError1 },
    NukAddError2: { screen: NukAddError2 },
    NukAddError3: { screen: NukAddError3 },
    NukAddError4: { screen: NukAddError4 },
    NukAddError5: { screen: NukAddError5 },
    NukAddError6: { screen: NukAddError6 },
    NukAddError7: { screen: NukAddError7 },
    NukAddError8: { screen: NukAddError8 },

    Nganaste7: { screen: Nganaste7 },
    Nganaste10: { screen: Nganaste10 },
    Nganaste13: { screen: Nganaste13 },
    Nganaste16: { screen: Nganaste16 },
    Nganaste19: { screen: Nganaste19 },
    Nganaste22: { screen: Nganaste22 },
    Nganaste25: { screen: Nganaste25 },
    Nganaste27: { screen: Nganaste27 },

    PremioNuk4: { screen: PremioNuk4 },
    PremioNuk7: { screen: PremioNuk7 },
    PremioNuk10: { screen: PremioNuk10 },
    PremioNuk13: { screen: PremioNuk13 },
    PremioNuk16: { screen: PremioNuk16 },
    PremioNuk19: { screen: PremioNuk19 },
    PremioNuk22: { screen: PremioNuk22 },
    PremioNuk25: { screen: PremioNuk25 },
    PremioNuk27: { screen: PremioNuk27 },

    BrandNuk4: { screen: BrandNuk4 },
    BrandNuk7: { screen: BrandNuk7 },
    BrandNuk10: { screen: BrandNuk7 },
    BrandNuk13: { screen: BrandNuk7 },
    BrandNuk16: { screen: BrandNuk7 },
    BrandNuk19: { screen: BrandNuk7 },
    BrandNuk22: { screen: BrandNuk7 },
    BrandNuk25: { screen: BrandNuk7 },
    BrandNuk27: { screen: BrandNuk7 },

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

    SilfabAdd10: { screen: SilfabAdd10 },
    SilfabAdd11: { screen: SilfabAdd11 },
    SilfabAdd12: { screen: SilfabAdd12 },
    SilfabAdd13: { screen: SilfabAdd13 },
    SilfabAdd14: { screen: SilfabAdd14 },
    SilfabAdd15: { screen: SilfabAdd15 },
    SilfabAdd16: { screen: SilfabAdd16 },
    SilfabAdd17: { screen: SilfabAdd17 },
    SilfabAdd18: { screen: SilfabAdd18 },
    SilfabAdd19: { screen: SilfabAdd19 },
    SilfabAdd20: { screen: SilfabAdd20 },
    SilfabAdd21: { screen: SilfabAdd21 },
    SilfabAdd22: { screen: SilfabAdd22 },
    SilfabAdd23: { screen: SilfabAdd23 },
    SilfabAdd24: { screen: SilfabAdd24 },
    SilfabAdd25: { screen: SilfabAdd25 },
    SilfabAdd26: { screen: SilfabAdd26 },
    SilfabAdd27: { screen: SilfabAdd27 },
    
    SilfabAddError1: { screen: SilfabAddError1 },
    SilfabAddError2: { screen: SilfabAddError2 },
    SilfabAddError3: { screen: SilfabAddError3 },
    SilfabAddError4: { screen: SilfabAddError4 },
    SilfabAddError5: { screen: SilfabAddError5 },
    SilfabAddError6: { screen: SilfabAddError6 },
    SilfabAddError7: { screen: SilfabAddError7 },
    SilfabAddError8: { screen: SilfabAddError8 },

    PremioSilfab4: { screen: PremioSilfab4 },
    PremioSilfab7: { screen: PremioSilfab7 },
    PremioSilfab10: { screen: PremioSilfab10 },
    PremioSilfab13: { screen: PremioSilfab13 },
    PremioSilfab16: { screen: PremioSilfab16 },
    PremioSilfab19: { screen: PremioSilfab19 },
    PremioSilfab22: { screen: PremioSilfab22 },
    PremioSilfab25: { screen: PremioSilfab25 },
    PremioSilfab27: { screen: PremioSilfab27 },

    Sganaste7: { screen: Sganaste7 },
    Sganaste10: { screen: Sganaste10 },
    Sganaste13: { screen: Sganaste13 },
    Sganaste16: { screen: Sganaste16 },
    Sganaste19: { screen: Sganaste19 },
    Sganaste22: { screen: Sganaste22 },
    Sganaste25: { screen: Sganaste25 },
    Sganaste27: { screen: Sganaste27 },

    BrandSilfab4: { screen: BrandSilfab4 },
    BrandSilfab7: { screen: BrandSilfab7 },
    BrandSilfab10: { screen: BrandSilfab10 },
    BrandSilfab13: { screen: BrandSilfab13 },
    BrandSilfab16: { screen: BrandSilfab16 },
    BrandSilfab19: { screen: BrandSilfab19 },
    BrandSilfab22: { screen: BrandSilfab22 },
    BrandSilfab25: { screen: BrandSilfab25 },
    BrandSilfab27: { screen: BrandSilfab27 },
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

    GracoAdd1: { screen: GracoAdd1 },
    GracoAdd2: { screen: GracoAdd2 },
    GracoAdd3: { screen: GracoAdd3 },
    GracoAdd4: { screen: GracoAdd4 },
    GracoAdd5: { screen: GracoAdd5 },
    GracoAdd6: { screen: GracoAdd6 },
    GracoAdd7: { screen: GracoAdd7 },
    GracoAdd8: { screen: GracoAdd8 },
    GracoAdd9: { screen: GracoAdd9 },
    GracoAdd10: { screen: GracoAdd10 },
    GracoAdd11: { screen: GracoAdd11 },
    GracoAdd12: { screen: GracoAdd12 },
    GracoAdd13: { screen: GracoAdd13 },
    GracoAdd14: { screen: GracoAdd14 },
    GracoAdd15: { screen: GracoAdd15 },
    GracoAdd16: { screen: GracoAdd16 },
    GracoAdd17: { screen: GracoAdd17 },
    GracoAdd18: { screen: GracoAdd18 },
    GracoAdd19: { screen: GracoAdd19 },
    GracoAdd20: { screen: GracoAdd20 },
    GracoAdd21: { screen: GracoAdd21 },
    GracoAdd22: { screen: GracoAdd22 },
    GracoAdd23: { screen: GracoAdd23 },
    GracoAdd24: { screen: GracoAdd24 },

    GracoAddError1: { screen: GracoAddError1 },
    GracoAddError2: { screen: GracoAddError2 },
    GracoAddError3: { screen: GracoAddError3 },
    GracoAddError4: { screen: GracoAddError4 },
    GracoAddError5: { screen: GracoAddError5 },
    GracoAddError6: { screen: GracoAddError6 },
    GracoAddError7: { screen: GracoAddError7 },

    Gganaste7: { screen: Gganaste7 },
    Gganaste10: { screen: Gganaste10 },
    Gganaste13: { screen: Gganaste13 },
    Gganaste16: { screen: Gganaste16 },
    Gganaste19: { screen: Gganaste19 },
    Gganaste22: { screen: Gganaste22 },

    PremioGraco4: { screen: PremioGraco4 },
    PremioGraco7: { screen: PremioGraco7 },
    PremioGraco10: { screen: PremioGraco10 },
    PremioGraco13: { screen: PremioGraco13 },
    PremioGraco16: { screen: PremioGraco16 },
    PremioGraco19: { screen: PremioGraco19 },
    PremioGraco22: { screen: PremioGraco22 },

    BrandGraco4: { screen: BrandGraco4 },
    BrandGraco7: { screen: BrandGraco7 },
    BrandGraco10: { screen: BrandGraco10 },
    BrandGraco13: { screen: BrandGraco13 },
    BrandGraco16: { screen: PremioGraco16 },
    PremioGraco19: { screen: PremioGraco19 },
    BrandGraco22: { screen: BrandGraco22 },
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
    EstrellaAdd10: { screen: EstrellaAdd10 },
    EstrellaAdd11: { screen: EstrellaAdd11 },
    EstrellaAdd12: { screen: EstrellaAdd12 },
    EstrellaAdd13: { screen: EstrellaAdd13 },
    EstrellaAdd14: { screen: EstrellaAdd14 },
    EstrellaAdd15: { screen: EstrellaAdd15 },
    EstrellaAdd16: { screen: EstrellaAdd16 },
    EstrellaAdd17: { screen: EstrellaAdd17 },
    EstrellaAdd18: { screen: EstrellaAdd18 },
    EstrellaAdd19: { screen: EstrellaAdd19 },
    EstrellaAdd20: { screen: EstrellaAdd20 },
    EstrellaAdd21: { screen: EstrellaAdd21 },
    EstrellaAdd22: { screen: EstrellaAdd22 },
    EstrellaAdd23: { screen: EstrellaAdd23 },
    EstrellaAdd24: { screen: EstrellaAdd24 },
    EstrellaAdd25: { screen: EstrellaAdd25 },
    EstrellaAdd26: { screen: EstrellaAdd26 },
    EstrellaAdd27: { screen: EstrellaAdd27 },

    EstrellaAddError1: { screen: EstrellaAddError1 },
    EstrellaAddError2: { screen: EstrellaAddError2 },
    EstrellaAddError3: { screen: EstrellaAddError3 },
    EstrellaAddError4: { screen: EstrellaAddError4 },
    EstrellaAddError5: { screen: EstrellaAddError5 },
    EstrellaAddError6: { screen: EstrellaAddError6 },
    EstrellaAddError7: { screen: EstrellaAddError7 },
    EstrellaAddError8: { screen: EstrellaAddError8 },

    Eganaste7: { screen: Eganaste7 },
    Eganaste10: { screen: Eganaste10 },
    Eganaste13: { screen: Eganaste13 },
    Eganaste16: { screen: Eganaste16 },
    Eganaste19: { screen: Eganaste19 },
    Eganaste22: { screen: Eganaste22 },
    Eganaste25: { screen: Eganaste25 },
    Eganaste27: { screen: Eganaste27 },

    PremioEstrella4: { screen: PremioEstrella4 },
    PremioEstrella7: { screen: PremioEstrella7 },
    PremioEstrella10: { screen: PremioEstrella10 },
    PremioEstrella13: { screen: PremioEstrella13 },
    PremioEstrella16: { screen: PremioEstrella16 },
    PremioEstrella19: { screen: PremioEstrella19 },
    PremioEstrella22: { screen: PremioEstrella22 },
    PremioEstrella25: { screen: PremioEstrella25 },
    PremioEstrella27: { screen: PremioEstrella27 },

    EstrellaBrand4: { screen: EstrellaBrand4 },
    EstrellaBrand7: { screen: EstrellaBrand7 },
    EstrellaBrand10: { screen: EstrellaBrand10 },
    EstrellaBrand13: { screen: EstrellaBrand13 },
    EstrellaBrand16: { screen: EstrellaBrand16 },
    EstrellaBrand19: { screen: EstrellaBrand19 },
    EstrellaBrand22: { screen: EstrellaBrand22 },
    EstrellaBrand25: { screen: EstrellaBrand25 },
    EstrellaBrand27: { screen: EstrellaBrand27 },

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
    AddEwe10: { screen: AddEwe10 },
    AddEwe11: { screen: AddEwe11 },
    AddEwe12: { screen: AddEwe12 },
    AddEwe13: { screen: AddEwe13 },
    AddEwe14: { screen: AddEwe14 },
    AddEwe15: { screen: AddEwe15 },
    AddEwe16: { screen: AddEwe16 },
    AddEwe17: { screen: AddEwe17 },
    AddEwe18: { screen: AddEwe18 },
    AddEwe19: { screen: AddEwe19 },
    AddEwe20: { screen: AddEwe20 },
    AddEwe21: { screen: AddEwe21 },
    AddEwe22: { screen: AddEwe22 },
    AddEwe23: { screen: AddEwe23 },
    AddEwe24: { screen: AddEwe24 },
    AddEwe25: { screen: AddEwe25 },
    AddEwe26: { screen: AddEwe26 },
    AddEwe27: { screen: AddEwe27 },

    AddEweError1: { screen: AddEweError1 },
    AddEweError2: { screen: AddEweError2 },
    AddEweError3: { screen: AddEweError3 },
    AddEweError4: { screen: AddEweError4 },
    AddEweError5: { screen: AddEweError5 },
    AddEweError6: { screen: AddEweError6 },
    AddEweError7: { screen: AddEweError7 },

    Eweganaste7: { screen: Eweganaste7 },
    Eweganaste10: { screen: Eweganaste10 },
    Eweganaste13: { screen: Eweganaste13 },
    Eweganaste16: { screen: Eweganaste16 },
    Eweganaste22: { screen: Eweganaste22 },
    Eweganaste25: { screen: Eweganaste25 },
    Eweganaste27: { screen: Eweganaste27 },

    PremioEwe4: { screen: PremioEwe4 },
    PremioEwe7: { screen: PremioEwe7 },
    PremioEwe10: { screen: PremioEwe10 },
    PremioEwe13: { screen: PremioEwe13 },
    PremioEwe16: { screen: PremioEwe16 },
    PremioEwe19: { screen: PremioEwe19 },
    PremioEwe22: { screen: PremioEwe22 },
    PremioEwe25: { screen: PremioEwe25 },
    PremioEwe27: { screen: PremioEwe27 },

    EweBrand4: { screen: EweBrand4 },
    EweBrand7: { screen: EweBrand7 },
    EweBrand10: { screen: EweBrand10 },
    EweBrand13: { screen: EweBrand13 },
    EweBrand16: { screen: EweBrand16 },
    EweBrand19: { screen: EweBrand19 },
    EweBrand22: { screen: EweBrand22 },
    EweBrand25: { screen: EweBrand25 },
    EweBrand27: { screen: EweBrand27 },

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
    LiliAdd10: { screen: LiliAdd10 },
    LiliAdd11: { screen: LiliAdd11 },
    LiliAdd12: { screen: LiliAdd12 },
    LiliAdd13: { screen: LiliAdd13 },
    LiliAdd14: { screen: LiliAdd14 },
    LiliAdd15: { screen: LiliAdd15 },
    LiliAdd16: { screen: LiliAdd16 },
    LiliAdd17: { screen: LiliAdd17 },
    LiliAdd18: { screen: LiliAdd18 },
    LiliAdd19: { screen: LiliAdd19 },
    LiliAdd20: { screen: LiliAdd20 },
    LiliAdd21: { screen: LiliAdd21 },
    LiliAdd22: { screen: LiliAdd22 },
    LiliAdd23: { screen: LiliAdd23 },
    LiliAdd24: { screen: LiliAdd24 },

    LiliError1: { screen: LiliError1 },
    LiliError2: { screen: LiliError2 },
    LiliError3: { screen: LiliError3 },
    LiliError4: { screen: LiliError4 },
    LiliError5: { screen: LiliError5 },
    LiliError6: { screen: LiliError6 },
    LiliError7: { screen: LiliError7 },


    LiliGanaste7: { screen: LiliGanaste7 },
    LiliGanaste10: { screen: LiliGanaste10 },
    LiliGanaste13: { screen: LiliGanaste13 },
    LiliGanaste16: { screen: LiliGanaste16 },
    LiliGanaste19: { screen: LiliGanaste19 },
    LiliGanaste22: { screen: LiliGanaste22 },

    PremioLiliana7: { screen: PremioLiliana7 },
    PremioLiliana10: { screen: PremioLiliana10 },
    PremioLiliana13: { screen: PremioLiliana13 },
    PremioLiliana16: { screen: PremioLiliana16 },
    PremioLiliana19: { screen: PremioLiliana19 },
    PremioLiliana22: { screen: PremioLiliana22 },

    BrandLiliana7: { screen: BrandLiliana7 },
    BrandLiliana10: { screen: BrandLiliana10 },
    BrandLiliana13: { screen: BrandLiliana13 },
    BrandLiliana16: { screen: BrandLiliana16 },
    BrandLiliana19: { screen: BrandLiliana19 },
    BrandLiliana22: { screen: BrandLiliana22 },

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
    //Liliana ================================ //


    //Pritt  ================================ //
    TriviaPritt1: { screen: TriviaPritt1 },
    TriviaPritt2: { screen: TriviaPritt2 },
    TriviaPritt3: { screen: TriviaPritt3 },
    TriviaPritt4: { screen: TriviaPritt4 },
    TriviaPritt5: { screen: TriviaPritt5 },
    TriviaPritt6: { screen: TriviaPritt6 },
    TriviaPritt7: { screen: TriviaPritt7 },
    TriviaPritt8: { screen: TriviaPritt8 },
    TriviaPritt9: { screen: TriviaPritt9 },
    TriviaPritt10: { screen: TriviaPritt10 },
    TriviaPritt11: { screen: TriviaPritt11 },
    TriviaPritt12: { screen: TriviaPritt12 },
    TriviaPritt13: { screen: TriviaPritt13 },
    TriviaPritt14: { screen: TriviaPritt14 },
    TriviaPritt15: { screen: TriviaPritt15 },

    PrittAddError1: { screen: PrittAddError1 },
    PrittAddError2: { screen: PrittAddError2 },
    PrittAddError3: { screen: PrittAddError3 },
    PrittAddError4: { screen: PrittAddError4 },
    PrittAddError5: { screen: PrittAddError5 },
    PrittAddError6: { screen: PrittAddError6 },
    PrittAddError7: { screen: PrittAddError7 },

    PrittAdd1: { screen: PrittAdd1 },
    PrittAdd2: { screen: PrittAdd2 },
    PrittAdd3: { screen: PrittAdd3 },
    PrittAdd4: { screen: PrittAdd4 },
    PrittAdd5: { screen: PrittAdd5 },
    PrittAdd6: { screen: PrittAdd6 },
    PrittAdd7: { screen: PrittAdd7 },
    PrittAdd8: { screen: PrittAdd8 },
    PrittAdd9: { screen: PrittAdd9 },
    PrittAdd10: { screen: PrittAdd10 },
    PrittAdd11: { screen: PrittAdd11 },
    PrittAdd12: { screen: PrittAdd12 },
    PrittAdd13: { screen: PrittAdd13 },
    PrittAdd14: { screen: PrittAdd14 },
    PrittAdd15: { screen: PrittAdd15 },

    PremioPritt: { screen: PremioPritt },
    PremioPritt4: { screen: PremioPritt4 },
    PremioPritt7: { screen: PremioPritt7 },
    PremioPritt10: { screen: PremioPritt10 },
    PremioPritt13: { screen: PremioPritt13 },
    PremioPritt16: { screen: PremioPritt16 },
    PremioPritt19: { screen: PremioPritt19 },
    PremioPritt22: { screen: PremioPritt22 },

    Pganaste: { screen: Pganaste },
    Pganaste7: { screen: Pganaste7 },
    Pganaste10: { screen: Pganaste10 },
    Pganaste13: { screen: Pganaste13 },
    Pganaste16: { screen: Pganaste16 },
    Pganaste19: { screen: Pganaste19 },
    Pganaste22: { screen: Pganaste22 },

    BrandPritt4: { screen: BrandPritt4 },
    BrandPritt7: { screen: BrandPritt7 },
    BrandPritt10: { screen: BrandPritt10 },
    BrandPritt13: { screen: BrandPritt13 },
    BrandPritt16: { screen: BrandPritt16 },
    BrandPritt19: { screen: BrandPritt19 },
    BrandPritt22: { screen: BrandPritt22 },

    Loading: { screen: Loading },
    Sign: { screen: Sign },


})
