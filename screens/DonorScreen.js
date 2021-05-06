import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase'; 

export default class DonorScreen extends React.Component{
    constructor(){
        super();
        this.state={
           userId:firebase.auth().currentUser.email,
            itemName:'',
           cost:'',
           costForVolunteer:''
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7);
      }
    addItem=(name,cost)=>{
        var amount = 25/100*cost;
        this.setState({
            costForVolunteer:amount
        })
       var userId = this.state.userId;
       var randomRequestId = this.createUniqueId();
       db.collection("donations").add({
           "item_name":name,
           "cost":this.state.costForVolunteer,
           "request_id":randomRequestId,
           "user_id":userId
       })
       this.setState({
           itemName:'',
           cost:'',
           costForVolunteer:''
       })
       alert("Item ready to be donated")
    }
    render(){
        return(
            <View>
            <TextInput style={styles.inputButton} placeholder={"Item name"} onChangeText={(text)=>{this.setState({
                bookName:text
            })}}></TextInput>
            <TextInput style={styles.inputButton} placeholder={"Cost of the item you wish to donate (in rupees)"} keyboardType={'numeric'} maxLength={5} onChangeText={(text)=>{this.setState({
                cost:text
            })}}></TextInput>
            <TouchableOpacity style={styles.button} onPress={()=>{this.addItem(this.state.itemName,this.state.cost)}}>
                <Text>Add Item</Text>
            </TouchableOpacity>
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
    }
}
})