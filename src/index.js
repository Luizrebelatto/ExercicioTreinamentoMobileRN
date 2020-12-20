import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import styles from './style'


export default function App(){

const[state,setState]=useState('firstState');

//dd/mm/yyyy
var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();

//h:min:s
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds= date.getSeconds();

//function to calculate leap years
function leapyear(year){
  var countDays=0
  for(let i=1970;i<=year;i++){
    if((i%400===0)||(i%4===0 && i%100!=0)){
      countDays+=1;
    }
  }
  return countDays;
}

//total days since 01/01/1970
function totalDays(day,month,year,leapDays){
  return ((year-1)-1970)*365 + leapDays + day + (month-1)*30;
}

//Calculate to Timestamp
function convertToTimestamp(seconds,minutes,hour,days){
  var timestamp = seconds+(minutes*60) + hour*3600 + days*86400;
  var str = timestamp.toString();
  var valor = str.split("  ")
  return valor;
}

var leapDays = leapyear(year)
var days = totalDays(day,month,year,leapDays) 
var valor = convertToTimestamp(seconds,minutes,hour,days)
var lastValue = valor[0].substr(valor[0].length-1,1)

//Check for background color
if(lastValue == 0){
  var ColorBackground='rgb(255,255,255)'
  var ColorText = 'rgb(0,0,0)'
}else if(lastValue==1){
  var ColorBackground='rgb(0,0,0)'
  var ColorText = 'rgb(255,255,255)'
}else if(lastValue==2){
  var ColorBackground='rgb(9,9,184)'
  var ColorText = 'rgb(0,0,0)'
}else if(lastValue==3){
  var ColorBackground='rgb(57,255,20)'
  var ColorText = 'rgb(0,0,0)'
}else if(lastValue==4){
  var ColorBackground='rgb(255,0,127)'
  var ColorText = 'rgb(0,0,0)'
}else if(lastValue==5){
  var ColorBackground='rgb(255,0,0)'
  var ColorText = 'rgb(0,0,0)'
}else if(lastValue==6){
  var ColorBackground='rgb(128,0,128)'
  var ColorText = 'rgb(0,0,0)'
}else if(lastValue==7){
  var ColorBackground='rgb(255,255,0)'
  var ColorText = 'rgb(0,0,0)'
}else if(lastValue==8){
  var ColorBackground='rgb(128,128,128)'
  var ColorText = 'rgb(0,0,0)'
}else if(lastValue==9){
  var ColorBackground='rgb(177,156,217)'
  var ColorText = 'rgb(0,0,0)'
}

//function to format numbers
function formatNumber(number){
  var finalNumber  = "";
   if(number < 10){
       finalNumber = "0"+number;
   }else{
     finalNumber = number;
   }
     return finalNumber;
}


if(state == 'firstState'){
  return (
    <View style={[styles.view,{backgroundColor:`${ColorBackground}`}]}>
      <StatusBar hidden/>
      <Text style={[styles.title,{color:`${ColorText}`}]}>Go 4all</Text>
      <TouchableOpacity onPress={()=>setState('iniciar')} style={styles.button}>
         <Text style={styles.textButton}>Change Color</Text>
      </TouchableOpacity>
      <Text style={[styles.date,{color:`${ColorText}`}]}>
       {`${formatNumber(day)}/${formatNumber(month)}/${year}` + 
       ` ${formatNumber(hour)}:${formatNumber(minutes)}`}
      </Text>   
  </View>
  );
}else if(state == 'secondState'){
  return (
    <View style={[styles.view,{backgroundColor:`${ColorBackground}`}]}>
      <StatusBar hidden/>
      <Text style={[styles.title,{color:`${ColorText}`}]}>Go 4all</Text>
      <TouchableOpacity onPress={()=>setState('selecionar')} style={styles.button}>
         <Text style={styles.textButton}>Change Color</Text>
      </TouchableOpacity>
      <Text style={[styles.date,{color:`${ColorText}`}]}>
       {`${formatNumber(day)}/${formatNumber(month)}/${year}` + 
       ` ${formatNumber(hour)}:${formatNumber(minutes)}`}
      </Text>     
  </View>
  );
} 
}
