import { Text, View, Image, StyleSheet, Pressable, Button } from "react-native";
import {useState} from 'react';


function Bed({onInvestigate}) {
  return(
    <Pressable onPress = {()=>onInvestigate('Bed')}>
      <Image
          source={require('@/assets/images/bed.png')}
          style={styles.bed}
        />
    </Pressable>
  );
}

function Mirror({onInvestigate}) {
  // const [message, setMessage] = useState(null);
  // const [displayOn, setDisplayOn] = useState(false);
  // function investigate(){
  //   if(displayOn){
  //     setMessage(null);
  //   }
  //   else{
  //     setMessage('This is a mirror');
  //   }
  //   setDisplayOn(!displayOn);
  // }
  return(
    <>
    <Pressable onPress = {()=>onInvestigate('Mirror')}>
       
      <Image
          source={require('@/assets/images/bed.png')}
          style={styles.mirror}
        />
    </Pressable>
    </>
  );

}

function Person({onInvestigate}) {
  return(
    <Pressable onPress = {()=>onInvestigate('Person')}>
      <Image
          source={require('@/assets/images/bed.png')}
          style={styles.person}
        />
    </Pressable>
  );
}

function Rug({onInvestigate}) {
  return(
    <Pressable onPress = {()=>onInvestigate('Rug')}>
      <Image
          source={require('@/assets/images/bed.png')}
          style={styles.rug}
        />
    </Pressable>
  );
}

function Computer({onInvestigate}) {
  return(
    <Pressable onPress = {()=>onInvestigate('Computer')}>
      <Image
          source={require('@/assets/images/bed.png')}
          style={styles.computer}
        />
    </Pressable>
  );
}

function Cabinet({onInvestigate}) {
  return(
    <Pressable onPress = {()=>onInvestigate('Cabinet')}>
      <Image
          source={require('@/assets/images/bed.png')}
          style={styles.cabinet}
        />
    </Pressable>
  );
}


export default function Room() {
  const [description, setDescription] = useState('hello');
  const [descriptionOn, setDescriptionOn] = useState(false);
  function handleInvestigate(item){
    setDescriptionOn(true);
    switch(item){
      case 'Bed':
        setDescription('This is a bed!');
        break;
      case 'Mirror':
        setDescription('This is a mirror!');
        break;
      case 'Person':
        setDescription('This is me!');
        break;
      case 'Rug':
        setDescription('This is a rug!');
        break;
      case 'Computer':
        setDescription('This is a computer!');
        break;
      case 'Cabinet':
        setDescription('This is a cabinet!');
        break;
      default:
        setDescription(null);
        setDescriptionOn(false);
        break;
    }
  }
  function handleBoxClose(){
    setDescriptionOn(false);
    setDescription(null);
  }
  return (
    <View 
      style={styles.container}
    >
      <div style={styles.bedContainer}>
        <Bed onInvestigate={handleInvestigate}/>
      </div>
      
      
      <div style={styles.mirrorContainer}>
        <Mirror onInvestigate={handleInvestigate}/>
      </div>

      <div style={styles.personContainer}>
        <Person onInvestigate={handleInvestigate}/>
      </div>

      <div style={styles.rugContainer}>
        <Rug onInvestigate={handleInvestigate}/>
      </div>

      <div style={styles.computerContainer}>
        <Computer onInvestigate={handleInvestigate}/>
      </div>

      <div style={styles.cabinetContainer}>
        <Cabinet onInvestigate={handleInvestigate}/>
      </div>

      {descriptionOn &&
        (
          <div style={styles.descriptionBackground}>
            <Text style={styles.descriptionText}>
              {description}
            </Text>
            <div style={styles.buttonContainer}>
              <button style={styles.closeButton} onClick={()=>handleBoxClose()}>
                Close
              </button>
            </div>
            
            {/* <Button title="Close" onPress={()=>handleBoxClose()}/> */}
          </div>
        )
      }
       
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundImage: "url(/assets/images/room.jpeg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  bed:{
    height: 200,
    width: 200,
  },
  bedContainer: {
    height: 200,
    width: 100,
    bottom: 150,
    right: 100,
    position: 'absolute',
  },
  mirror: {
    height: 178,
    width: 290,
    
  },
  mirrorContainer:{
    height: 200,
    width: 300,
    top: 30,
    right: 200,
    position: 'absolute',
  }
  ,
  person:{
    height: 150,
    width: 100,
  },
  personContainer:{
    height: 150,
    width: 100,
    bottom: 30,
    right: 300,
    position: 'absolute',
  },

  rug:{
    height: 200,
    width: 200,
    zIndex: 1,
  },
  rugContainer:{
    height: 200,
    width: 200,
    bottom: 100,
    right: 500,
    position: 'absolute',
    zIndex: 1,
  },

  computer:{
    height: 200,
    width: 200,
  },

  computerContainer:{
    height: 200,
    width: 200,
    top: 100,
    left: 300,
    position: 'absolute',
  },

  cabinet:{
    height: 200,
    width: 200,
  },

  cabinetContainer:{
    height: 200,
    width: 200,
    top: 300,
    left: 100,
    position: 'absolute',
  },

  descriptionBackground:{
    width: 600,
    height: 300,
    zIndex: 2,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'green',
    backgroundColor: 'black',
    bottom: 60,
    right:0,
  },

  descriptionText:{
    borderWidth: 2,
    backgroundColor: 'black',
    borderColor: 'red',
    color:'white' ,
    fontSize: 20,   
    fontFamily: 'Garamond, serif',
    marginBottom: 20,

  },


  buttonContainer: {    
    position: 'absolute',    
    bottom: 20, 
    right: 450,
  },

});