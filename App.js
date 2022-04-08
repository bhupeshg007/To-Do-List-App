import  React, {useState} from 'react';
import {View, Text,  StyleSheet,KeyboardAvoidingView,Platform,TextInput,TouchableOpacity,Keyboard,ScrollView} from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task,setTask] = useState(''); 
  const [taskItems,setTaskItems] = useState([]);


  const handleAddTask=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask('');
  }

  const completetask = (index)=>{
    let itemscopy = [...taskItems];
    itemscopy.splice(index,1);
    setTaskItems(itemscopy);
    setTask('');
    Keyboard.dismiss();

  }

  return (
   
    <View style={styles.container}>
    
     <View style={styles.taskwraper}>
        <Text style={styles.sectionTitle}> To Do List </Text>
        </View>
      <ScrollView style={styles.items}>
      {taskItems.map((item,index)=>{
       return <Task key = {index} value = {index} text={item} delet = {()=>completetask(index)}/>
      })
      }
    
      
     </ScrollView>
       <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writetaskwrapper}
    >
    <TextInput style = {styles.input} placeholder = "Write a task" value={task} onChangeText        = {text => setTask(text)} />
    
     <TouchableOpacity onPress = {()=>handleAddTask()}>
        <View style = {styles.addwrapper} >
          <Text style = {styles.addtext}>+</Text> 
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#B4CFB0',
    marginTop:20,
    

  },
 taskwraper: {
   paddingTop:30,
   paddingBottom:20,
   alignItems:'center',
   justifyContent:"center",
   backgroundColor:'#66806A',

  },
  sectionTitle:{
   fontSize:24,
   fontWeight:'bold',
   color:"white",
  },
  items:{
   marginTop:30,
  },
  writetaskwrapper:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#E5E3C9',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  addwrapper:{
    width:55,
    height:55,
    borderRadius :60,
    backgroundColor:'#E5E3C9',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,

  },
 addtext :{},
});
