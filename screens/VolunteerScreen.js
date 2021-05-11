import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import {ListItem} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase'; 
import DonorScreen from './DonorScreen';


export default class VolunteerScreen extends React.Component{
    constructor(){
        super();
        this.state={
           donationList:[],

        }
        this.requestRef=null
    }
   getDonationsList=()=>{
       this.requestRef = db.collection("donations")
.onSnapshot((snapshot)=>{
    
    var donation_list = snapshot.forEach((document) => document.data());
    this.setState({
        donationList:donation_list
    })
})  }
    componentDidMount(){
        this.getDonationsList()
    }
   
    keyExtractor = (item, index)=>index.toString()
    renderItem=({item,i})=>{
        return(
            <ListItem key={i} title={item.item_name} subtitle={item.cost} titleStyle={{color:'black',fontWeight:'bold'}} rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text>View</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />

           
        )
    }
    render(){
     return(
         <View>
             
             <View>
                 {
                     this.state.donationList==0?(
                         <View style={styles.subContainer}>
                             <Text>List of all Donors</Text>
                         </View>
                     )
                     :(
                         <FlatList
                         keyExtractor={this.keyExtractor}
                         data={this.state.donationList}
                         renderItem={this.renderItem}
                         />
                     )
                 }
             </View>
         </View>
     )
    }
}
const styles=StyleSheet.create({
    inputButton:{
      
            width:"90%",
            height:50,
            alignSelf:'center',
            borderColor:'#ffa3a9',
            borderRadius:10,
            borderWidth:1,
            marginTop:20,
            padding:10,
          },
    button:{
        width:"90%",
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    margin:10,
    padding:10,
    backgroundColor:"#bfebff",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
   
},
subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
})
