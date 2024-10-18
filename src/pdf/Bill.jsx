import React from 'react' 
import { Document, Page,Text, View, StyleSheet,Image,Font} from '@react-pdf/renderer';
import Logo from './assets/logo.png'
import fontBold from './assets/fonts/MYRIADPRO-BOLD.OTF';
import fontRegular from './assets/fonts/MYRIADPRO-REGULAR.OTF';
Font.register({
    family: 'fontBold',
    fonts: [
      { src: fontBold, fontStyle: 'normal', fontWeight: 'bold' },
    ],
  });
  Font.register({
    family: 'fontRegular',
    fonts: [
      { src: fontRegular, fontStyle: 'normal', fontWeight: 'normal' },
    ],
  });
  
const styles = StyleSheet.create({
    // page default start
    page: {
      flexDirection: 'column',
      backgroundColor: '#fff', 
      padding:0,
      position: 'relative',
    },
    section:{
        margin:15,
        flexGrow:1,
        border:1
    },
    row:{
        flexDirection:"row"
    },

    // fonts start
    bold:{
        fontFamily: 'fontBold',
    },
    regular:{
        fontFamily: 'fontRegular',
    },
    fwBold:{fontWeight:800},
    fs22:{
        fontSize: 22,
    },
    fs13:{
        fontSize: 13
    },
    fs12:{
        fontSize: 12
    },
    fs11:{
        fontSize: 11,
    },
    fs8:{
        fontSize: 8,
    },
    fs9:{
        fontSize: 9,
    },
    // fonts end

    // border start
    borderRight:{
        borderRight:1,
    },
    borderLeft:{
        borderLeft:1,
        },
    borderBottom:{
        borderBottom:1,
    },
    borderTop:{
        borderTop:1
    },
     // border start

      // width start
    w25:{
    width:"25%"
    },
    w33:{
        width:"33.33%"
    },
    w50:{  width:"50%"},
    w66:{
        width:"66.66%"
        },
    w75:{width:"75%"},
    w100:{  width:"100%"},
    // width end 

     // padding start
    pad5:{
        padding:5
    },
    pad10:{padding:10},

    vp:{
        paddingVertical:3.5
    },
    vp2:{
        paddingVertical:6
    },

    hp:{
        paddingHorizontal:10  
    },
     // padding end

    // text position start
    textend:{
        textAlign: 'right',
    },
    textCenter:{
        textAlign:'center'
    },
    // text position end

    // page style start
      head:{
        borderBottom:1,
        textAlign:'center',
        padding:8,
        textTransform:'uppercase',
        fontWeight: 800
      },

    //   company details
      logo:{
        width:"180px",
        paddingLeft:0,margin: 0, // Remove any margins
        padding: 0,
        
      },
       h130:{
        height:'120px'
        },
        tableCell: {
        margin: 5,
        fontSize: 11.5,
        textAlign: 'center',
        fontFamily: "fontRegular",

        },
    bullet: {
        fontSize: 22,
        marginRight: 3,
    },
    lists:{
        fontSize: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:20
    }

});

const Bill = () => {
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* <Image style={styles.watermark} src={Logo} /> */}
        <View style={styles.section}>
            <View style={[styles.head]}>
                <Text style={[styles.bold,styles.fs22]}>Performa Invoice</Text>
            </View>
            {/* company details start*/}
            <View style={[styles.row,styles.fs12, styles.borderBottom]}>
                <View style={[styles.innerDetails,styles.w50,styles.borderRight,styles.pad10 ]}>
                    <View>
                        <Image style={styles.logo} src={Logo} /> 
                    </View>
                    <View style={styles.regular}>
                        <Text style={[styles.vp, styles.bold]}>Kisslead Technologies</Text> 
                        <Text style={[styles.vp, styles.bold]}>GSTIN 33BTTPD4772M1Z4</Text> 
                        <Text style={styles.vp}>No 71, NG Narayanasamy Street, New Siddhapudur,</Text> 
                        <Text style={styles.vp}>Coimbatore, Tamil Nadu, 641044.</Text>
                        <Text style={styles.vp}>Ph: +91 83445 34996 | Email: hello@kisslead.com </Text> 
                        <Text style={styles.vp}>Website: www.kisslead.com</Text>
                    </View>
                </View>
                  {/* company details end */}

                {/* customer details start */}
                <View style={[styles.companyDetails,styles.w50]}>
                    <View style={[styles.innerDetails]}>
                        <View style={[styles.performaNo, styles.borderBottom,styles.pad10 ,styles.row]}>
                            <Text style={styles.bold}> Performa Invoice No:</Text> 
                            <Text></Text> 
                        </View>
                        <View style={[styles.row,styles.w100,styles.borderBottom,styles.pad10,styles.row]}>
                            <View style={[styles.w50]}>
                                <Text style={styles.bold}> Invoice Date :</Text>
                                <Text></Text>  
                            </View>
                            <View style={[styles.w50,styles.row]}> 
                                <Text style={styles.bold}>Due Date:</Text> 
                                <Text></Text> 
                            </View>
                        </View>
                        <View style={[styles.CustomerDetails,styles.pad10,styles.row]}>
                            <Text style={styles.bold}>Customer Details:</Text> 
                            <Text> </Text> 
                         </View>
                    </View> 
                </View>
                 {/* customer details end */}
            </View>

            {/* product table start*/}
            <View style={styles.productTable}>
                <View style={[styles.row,styles.w100,styles.borderBottom]}>
                    <View style={[styles.w50,styles.row]}>
                        <View style={[styles.borderRight,styles.pad5]}>
                            <Text style={[styles.tableCell,styles.bold]}># </Text>
                        </View>
                        <View style={[styles.borderRight,styles.w100,styles.pad5]}>
                            <Text style={[styles.tableCell,styles.bold]}>Service Subscription</Text>
                        </View>
                    </View>
                    <View style={[styles.w50,styles.row]}>
                        <View style={[styles.w33,styles.borderRight,styles.pad5]}>
                            <Text style={[styles.tableCell,styles.bold]}>Quantity</Text>
                        </View>
                        <View style={[styles.w33,styles.borderRight,styles.pad5]}>
                            <Text style={[styles.tableCell,styles.bold]}>Unit Price</Text>
                        </View>
                        <View style={[styles.w33,styles.pad5]}>
                            <Text style={[styles.tableCell,styles.bold]}>SubTotal</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.row,styles.h130,styles.w100,styles.borderBottom]}>
                    <View style={[styles.w50,styles.row,styles.borderRight]}>
                        <View style={[styles.pad5,styles.borderRight]}>
                            <Text style={[styles.tableCell]}>    </Text>
                        </View>
                        <View style={[styles.w100,styles.pad10]}>
                            <Text style={[styles.tableCell]}></Text>
                            <View style={[styles.totals]}>
                                <Text style={[styles.tableCell,styles.vp,styles.hp,styles.textend,styles.bold]}>Taxable Amount</Text>
                                <Text style={[styles.tableCell,styles.vp,styles.hp,styles.textend,styles.bold]}>CGST 9.0%</Text>
                                <Text style={[styles.tableCell,styles.vp,styles.hp,styles.textend ,styles.bold]}>SGST 9.0%</Text>
                            </View> 
                        </View>
                    </View>
                    <View style={[styles.w50,styles.row]}>
                        <View style={[styles.w33,styles.borderRight]}>
                            <Text style={[styles.tableCell]}></Text>
                        </View>
                        <View style={[styles.w33,styles.borderRight]}>
                            <Text style={[styles.tableCell]}></Text>
                        </View>
                        <View style={[styles.w33]}>
                            <Text style={[styles.tableCell]}></Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.row,styles.w100,styles.borderBottom]}>
                    <View style={[styles.w50,styles.row]}>
                        <View style={[styles.borderRight,styles.pad5]}>
                            <Text style={[styles.tableCell]}>    </Text>
                        </View>
                        <View style={[styles.borderRight,styles.w100,styles.pad5]}>
                            <Text style={[styles.tableCell,styles.textend,styles.hp,styles.bold]}>Total</Text>
                        </View>
                    </View>
                    <View style={[styles.w50,styles.row]}>
                        <View style={[styles.w33,styles.borderRight,styles.pad5]}>
                            <Text style={[styles.tableCell]}></Text>
                        </View>
                        <View style={[styles.w33]}>
                            <Text style={[styles.tableCell]}></Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.pad10,styles.borderBottom,styles.row]}>
                <Text style={[styles.bold,styles.fs13]}> Amount Chargeable</Text>
                <Text style={[styles.regular ,styles.fs13]}>(In Words):</Text>
                <Text style={[styles.regular,styles.fs13]}>Nine Thousand Nine Hundred Fifty Five </Text>
            </View>
            <View style={[styles.row, styles.w100,styles.borderBottom,]}>
                <View style={[styles.w66]}></View>
                <View style={[styles.pad10]}>
                    <Text style={[styles.bold,styles.fs13, styles.hp]}>Amount Payable :     </Text>
                </View>
            </View>
                {/* product table end*/}


            {/* Payment Terms */}
            <View style={styles.vp2}>
                <Text style={[styles.bold,styles.fs13, styles.hp]}> Payment Terms :</Text>
                <View style={styles.lists}>
                    <Text style={styles.bullet}>•</Text>
                    <Text>Payment is due within 10 days from the date of the proforma invoice</Text>
                </View>
                <View style={styles.lists}>
                    <Text style={styles.bullet}>•</Text>
                    <Text>Payment is to be made via bank transfer to the account details provided below.</Text>
                </View>
            </View>
            {/* Payment Terms */}
            {/* Bank Details */}
            <View style={[styles.vp2,styles.regular]}>
                <Text style={[styles.bold,styles.fs13, styles.hp,styles.vp]}> Bank Details :</Text>
                <View style={styles.lists}>
                    <Text style={styles.bold}>Account Holder : </Text>
                    <Text> KISSLEAD TECHNOLOGIES</Text>
                </View>
                <View style={styles.lists}>
                    <Text style={styles.bold}>Account Number : </Text>
                    <Text> 50200087782076</Text>
                </View>
                <View style={styles.lists}>
                    <Text style={styles.bold}>IFSC : </Text>
                    <Text> HDFC0004142</Text>
                </View>
                <View style={styles.lists}>
                    <Text style={styles.bold}>Branch : </Text>
                    <Text> SIDDHAPUDUR</Text>
                </View>
                <View style={styles.lists}>
                    <Text style={styles.bold}>Account Type : </Text>
                    <Text> CURRENT</Text>
                </View>
            </View>
            {/* Payment Terms */}
            {/* notes start */}
                <View style={[styles.regular,styles.vp]}>
                    <Text style={[styles.bold,styles.fs13, styles.hp]}> Notes :</Text>
                    <View style={[styles.lists,styles.fs11]}>
                        <Text style={[styles.fs11,styles.bold]}>1 .</Text>
                        <Text>This is a proforma invoice and not a tax invoice. A formal tax invoice will be issued upon receipt of payment</Text>
                    </View>
                    <View style={[styles.lists,styles.fs11]}>
                        <Text style={[styles.fs11,styles.bold]}>2. </Text>
                        <Text>The services will commence upon the payment confirmation.</Text>
                    </View>
                    <Text style={[styles.lists,styles.fs11,styles.vp]}>For any queries, feel free to contact us at hello@kisslead.com or call us at +91 83445 34996</Text>
                </View>
            {/* notes start */}

            {/* thankyou content start */}
                <View style={[styles.borderTop,styles.w100,styles.row,styles.pad10, styles.regular,{ alignItems: 'center',}]}>
                    <View style={styles.w25}></View>
                    <View style={[styles.w50, styles.textCenter,styles.fs11,]}>
                        <Text style={styles.vp}>Thank you for your business!</Text>
                        <Text>Empowering your brand with digital excellence!</Text>
                    </View>
                    <View style={[styles.w25,styles.textCenter]}>
                        <Text style={styles.fs8}>Powered By </Text>
                        <Text style={[styles.fs9,styles.bold]}>Kisslead Technologies </Text>
                    </View>
                </View>

            {/* thankyou content end */}
        </View>
      </Page>
     
    </Document>
  );
};

export default Bill;