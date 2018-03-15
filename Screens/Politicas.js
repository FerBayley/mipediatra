import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar, 
    Platform
} from "react-native";


class Politicas extends Component {

    static navigationOptions = {
        title: 'Bases y condiciones',
        headerBackTitle: 'Volver',
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#DB0A88',
          },
          headerTintColor: '#fff'
      };

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View>
                    <View>
                        <StatusBar
                            barStyle="light-content"
                        />
                        </View>
                        <Text style={styles.textBases}>
                        1.- Aceptación de Bases y Condiciones: Las presentes bases y condiciones de la Aplicación denominada “Mi Pediatra Trivias” es organizada por  Direct A-BTL SRL con domicilio en Varela 339 3° 15 -CABA.  
                            Las personas intervinientes en esta promoción por su sola participación aceptan de pleno derecho y de forma incondicional todas y cada una de las disposiciones descriptas en estas bases y condiciones (en adelante, las “Bases”).
                            2.- Participantes: Podrán participar de Mi Pediatra Trivias, todas las personas físicas que, al momento de la vigencia de participación, sean mayores de dieciocho (18) años, que tengan domicilio en el territorio de la República Argentina, y cumplan con el resto de los requisitos establecidos en estas Bases.
                            3.- Vigencia y Territorio: La presente Promoción tendrá vigencia en la República Argentina, a partir del 1 de Marzo de 2018.
                            4.- Productos: Promoción sin obligación de compra.
                            5.- Premios: El programa total de premios de la presente Promoción (en adelante, los “Premios”) en referencia de imagen referenciada en cada marca de Mi Pediatra Trivias , pueden variar sin previo aviso.
                            6.- Mecánica de Participación: Podrán participar de Mi Pediatra Trivias todas aquellas personas físicas que cumplan con los recaudos establecidos en la cláusula 2 (en adelante, los “Participantes”) que, durante el Plazo de Vigencia, descarguen la APP Mi Pediatra Trivias, acepte las Bases y Condiciones, se registren y participen respondiendo las opciones disponibles.  Los Premios indicados en el punto 5 de estas Bases se asignarán vía sorteo ante todo el equipo de Mi Pediatra Trivias. Los Participantes que hayan sido seleccionados serán considerados como “potencialmente favorecidos” hasta que cumplimenten todos los requisitos previstos en estas Bases.
                            Está prohibido y será anulado cualquier intento o método de participación en Mi Pediatra Trivias, que se realice por cualquier proceso, técnica o mecánica de participación distinta a la detallada en estas Bases. 
                            7.- Adjudicación de los Premios: En caso de que un Participante resulte potencialmente favorecido respecto de alguno de los Premios, se contactará al potencial ganador vía mail y teléfono. En caso que el Participante no se comunique a dicho teléfono dentro del Plazo de 10 días corridos,  o para el supuesto que la comunicación con el Participante fracase por razones ajenas al Organizador, el Participante perderá en forma automática su condición de Participante potencialmente favorecido. 
                            Será requisito de asignación de los Premios que los Participantes potencialmente favorecidos acrediten al momento de la entrega del Premio la veracidad de los datos ingresados al sistema receptor de ingresos y entreguen copia de su Documento Nacional de Identidad (D.N.I., L.C., L.E., o C.I.) si correspondiera. La confirmación de los datos ingresados al momento de participar, resulta una condición esencial de asignación de los Premios. 
                            8.- Entrega de los Premios: Los Participantes potencialmente favorecidos que cumplan con los requisitos establecidos en las presentes Bases, serán considerados potenciales ganadores y adjudicatarios del Premio correspondiente. 
                            Los Participantes potencialmente favorecidos con alguno de los Premios, que no concurran a validar los requisitos de asignación de los Premios provisoriamente determinados en el plazo de veinte (20) días corridos desde su adjudicación, perderán su derecho a poder convertirse en efectivos Ganadores, y no tendrán nada más que reclamar al Organizador. En este caso, los Premios serán considerados como no asignados y quedarán en poder del Organizador.
                            Todos los Premios son intransferibles y deben aceptarse tal cual son entregados, no siendo canjeables por dinero ni por otros bienes o servicios, estando prohibida cualquier sustitución. 
                            9.- Premios no asignados: La falta de reclamo de asignación de los Premios en las formas y dentro de los plazos establecidos precedentemente, la falta de entrega del envase del Producto Participante o el incumplimiento de cualquiera de los requisitos establecidos en estas Bases hará perder al Participante potencialmente favorecido, automáticamente, el derecho a la asignación de los Premios, considerándose en estos casos como no asignado. Todo Premio no asignado quedará en poder del Organizador. 
                            10.- Sin Obligación de Compra: Mi Pediatra Trivias no implica obligación de compra, ya que todos aquellos interesados en participar en la presente promoción podrán hacerlo de forma gratuita descargando la APP “Mi Pediatra Trivias” dentro del período de Vigencia anteriormente establecido. Una vez registrado con las características correspondientes el remitente comenzará a participar cumpliendo los requisitos de “Mecánica de Participación”.
                            11.- Responsabilidades: Mi Pediatra Trivias, es un juego de entretenimiento y no reemplaza ni invalida la consulta profesional o médica en ningún caso. El Organizador  no será responsable por los daños o perjuicios que pudiere sufrir el Participante, el Ganador, o los terceros, en sus personas o bienes, con motivo o en ocasión de la participación en la Promoción y/o retiro del Premio y/o utilización del mismo. El Organizador limita su responsabilidad a la organización integral de la presente Promoción y a la entrega de los Premios, conforme los términos de las presentes Bases. La responsabilidad del Organizador finalizará con la entrega del Premio a cada ganador. Ni el Organizador ni el Cliente, incurrirán en responsabilidad en caso de que existan dificultades, interrupciones, y/o malos funcionamientos en el Sitio Web y/o las aplicaciones, sin importar la causa, magnitud o tiempo. El Organizador no será responsable por caídas de la red/Internet, pérdidas de beneficios a consecuencia de dichas caídas, o cualquier otro tipo de daño directo o indirecto que pueda serle causado a los Participantes y/o sus bienes. Los Participantes aceptan que eventualmente el Sitio Web y/o las aplicaciones puedan sufrir fallas en su funcionamiento, según su disponibilidad. El Organizador no otorga garantía de ningún tipo, utilizando los Participantes el Sitio Web bajo su propio riesgo. Tampoco será el Cliente responsable del destino que los Ganadores le den a sus Premios, declinando todo tipo de responsabilidad contractual y/o extracontractual frente a los Ganadores y/o sus sucesores y/o familiares, lo que es aceptado incondicionalmente por cada Participante. 
                            12.- Modificación, cancelación o suspensión. Cuando circunstancias imprevistas lo justifiquen el Organizador podrá suspender, modificar o cancelar Mi Pediatra Trivias, notificando a la autoridad de aplicación con la mayor antelación posible a efectos de requerir su previa autorización. En tal caso, la cancelación, suspensión o modificación de las Bases se notificará por los mismos medios en que las Bases fueron comunicadas.
                            13.- Publicación del ganador y del resultado de la Promoción. Autorización: Los Participantes autorizan expresamente al Organizador a utilizar sus nombres, números de documentos, imágenes personales y/o voces de estos últimos para publicitar los productos y/o esta Promoción en cualquier medio, ya sea televisivo, cinematográfico, radial, gráfico, digital, etc., en la forma en que el Organizador considere más conveniente y sin que esto genere derecho a compensación de ninguna especie, por un plazo de veinticuatro (24) meses contados desde el vencimiento de la Promoción.
                            Los resultados de la asignación de Premios se publicarán en el Sitio Web y/o Fanpage F/MiPediatraArgentina a partir del cumplimiento del plazo Vigencia. 
                            14.- Datos personales: Los datos personales brindados por los Participantes para la participación en esta Promoción (en adelante, “Datos Personales”), serán objeto de tratamiento e incorporados a la base de datos de titularidad de Direct A-BTL SRL ., con domicilio en Varela 339 3° 15- CABA, y compartidos con las marcas anunciantes en las publicaciones “Mi Pediatra”. El Participante será responsable de toda la información enviada, incluyendo sus Datos Personales. La provisión de los Datos Personales por parte de los Participantes de la Promoción es voluntaria, sin perjuicio de ser un requisito necesario para participar en la Promoción. 
                            El Organizador podrá revelar los Datos Personales a terceros sin el consentimiento del Participante solamente (i) cuando sea requerido por ley o por resolución judicial que así lo autorice; (ii) para cooperar con autoridades gubernamentales en investigaciones judiciales; (iii) para hacer cumplir o proteger la propiedad intelectual o derechos del Organizador; (iv) para poder ejecutar alguna de las obligaciones y/o compromisos y/o prestaciones vinculadas directa o indirectamente con esta Promoción. 
                            Los Participantes tienen la facultad de ejercer el derecho de acceso a sus Datos Personales en forma gratuita a intervalos no inferiores a seis (6) meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326. A tal efecto, la Dirección Nacional de Protección de Datos Personales, órgano de control de la Ley Nº 25.326 tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales. 
                            Asimismo, los Participantes podrán requerir que sus Datos Personales les sean suministrados, actualizados, rectificados o removidos de la base de datos del Cliente a su pedido. A tales efectos deberán comunicarse a la siguiente dirección de correo electrónico hola@mipediatra.com.ar 
                            El otorgamiento por parte de los Participantes de sus Datos Personales al Organizador, implica la aceptación de ser contactados por cualquier medio de comunicación existente al presente o que pudiese implementarse en el futuro, incluyendo llamados telefónicos, y/o correo electrónico, ya sea por parte del Organizador, o de otras marcas anunciantes. Los Datos Personales de los Participantes serán utilizados en la forma que se establece en estas Bases.
                            15.- Gastos a cargo de los favorecidos: Todo impuesto actual o futuro que grave los Premios objeto de la presente Promoción y/o todo gasto en que por cualquier concepto incurran los favorecidos en la presente Promoción para el traslado, estadía y otros gastos para reclamar o retirar los Premios, en su caso, serán a exclusivo cargo de los adjudicatarios de los Premios. 
                            Los gastos no mencionados en las presentes Bases y/o todo otro gasto adicional en el que incurran los Participantes con motivo o en ocasión de su participación en la presente Promoción, serán a cargo de los Participantes. 
                            16.- Probabilidades: La probabilidad de ganar alguno de los Premios dependerá de la cantidad de participaciones válidas recibidas y la cantidad de respuestas correctas que el Participante consiga en Mi Pediatra Trivias. La asignación de 1 (una) chance en el sorteo corresponde a la respuesta correcta de 3 (tres) trivias consecutivas. 
                            17.- Consulta de Bases: En cumplimiento de la legislación vigente, las presentes Bases y Condiciones podrán ser consultadas en www.mipediatra.com.ar
                            18.- Jurisdicción: Para cualquier controversia judicial y/o extrajudicial derivada de la presente promoción los Participantes aceptan someterse voluntariamente a la jurisdicción de los tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de Buenos Aires con exclusión de todo otro fuero o jurisdicción que pudiere corresponderles. Serán de aplicación las leyes vigentes en la República Argentina.
                        </Text>
                    </View>
                </Content>

                <Footer style={styles.Pie}>
                    <FooterTab style={styles.Pie}>
                        <Button onPress={() => this.props.navigation.navigate('NoAcepto')}>
                            <Text style={styles.acepto}>NO ACEPTO</Text>
                        </Button>                       
                    </FooterTab>

                    <FooterTab style={styles.Pie}>
                        <Button onPress={() => this.props.navigation.navigate('Loading')}>
                            <Text style={styles.acepto}>ACEPTO</Text>
                        </Button>                       
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Pie: {
        ...Platform.select({
            ios: {
                backgroundColor: '#39AD45',
            },
            android: {
                backgroundColor: '#39AD45'
            }
        }),
    },
    colorBotones: {
        color: '#fff'
    },
    textBases: {
        color: 'grey',
        fontWeight: '400',
        textAlign: 'justify',
        lineHeight: 30,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        fontSize: 16
    },
    acepto: {
        color: '#fff',
        fontWeight: '800'
    }
});

export default Politicas;