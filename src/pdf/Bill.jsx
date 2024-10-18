import React from 'react'; 
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import fontBold from './assets/fonts/MYRIADPRO-BOLD.OTF';
import fontRegular from './assets/fonts/MYRIADPRO-REGULAR.OTF';
import skills from '../data/Skills'; // Import your skills data

Font.register({
    family: 'fontBold',
    fonts: [{ src: fontBold, fontStyle: 'normal', fontWeight: 'bold' }],
});

Font.register({
    family: 'fontRegular',
    fonts: [{ src: fontRegular, fontStyle: 'normal', fontWeight: 'normal' }],
});

const styles = StyleSheet.create({
    page: { flexDirection: 'column', backgroundColor: '#fff', padding: 0, position: 'relative' },
    section: { margin: 15, flexGrow: 1, border: 1 },
    row: { flexDirection: "row" },
    bold: { fontFamily: 'fontBold' },
    regular: { fontFamily: 'fontRegular' },
    fs22: { fontSize: 22 },
    fs12: { fontSize: 12 },
    borderBottom: { borderBottom: 1 },
    pad10: { padding: 10 },
});

// Helper function to get skill names from skill IDs
const getSkillNames = (skillIds) => {
    return skillIds.map(skillId => {
        const skill = skills.find(s => s.id === skillId);
        return skill ? skill.name : '';
    }).filter(name => name).join(', '); // Filter out any undefined values
};

const Bill = ({ applicationList }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={[styles.row, styles.borderBottom]}>
                        <Text style={[styles.bold, styles.fs22, styles.pad10]}>Applications:</Text>
                    </View>
                    {/* Application Listing Start */}
                    {applicationList.map((application, index) => (
                        <View key={index} style={[styles.row, styles.fs12, styles.pad10]}>
                            <Text style={styles.regular}>
                                <Text>First Name :{application.firstName}  Last Name:{application.lastName}</Text>
                                {'\n'}Email: {application.email}
                                {'\n'}Key Skills: {getSkillNames(application.skills)} {/* Get skill names */}
                                {'\n'}About: {application.aboutSelf}
                            </Text>
                        </View>
                    ))}
                    {/* Application Listing End */}
                </View>
            </Page>
        </Document>
    );
};

export default Bill;
