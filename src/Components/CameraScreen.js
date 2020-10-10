import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import CarModal from '../../modals/CarModal';
import button from '../../assets/photo.png';
import BrandScreen from '../../screens/Brand'

const host = "http://84.201.142.151:8000/";

export default function CartScreen({navigation}) {
	const [perm, setPerm] = useState(null);
	const [cameraRef, setCameraRef] = useState(null);
	const [item, setItem] = useState(null);

	useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setPerm(status === 'granted');
        })();
    }, []);     

	if(perm !== true) {
		return (
			<Text>Камера не работает!</Text>
		)
	}
	
	const setPhoto = async () => {
		const photo = await cameraRef.takePictureAsync();
		const localUri = photo.uri;
		const filename = localUri.split('/').pop();
		const match = /\.(\w+)$/.exec(filename);
		const type = match ? `image/${match[1]}` : `image`;
		const formData = new FormData();
  		formData.append('content', { uri: localUri, name: filename, type });
		const response = await fetch(host + 'api/post_cars', {
			method: 'post',
			body: formData,
			headers: {
				'content-type': 'multipart/form-data',
			},
		}
		
		);
		const text = await response.json();
		console.log(text);
		// console.log(text[0]);
		
		navigation.navigate('brand', {data: text})
	}

	const container = item === null ? (
		<TouchableOpacity style={styles.buttonContainer} onPress={setPhoto}>
			<Image source={button} resizeMode='contain' style={styles.photoButton} />
		</TouchableOpacity>
	) : null;
	
    return (
        <View style={{flex: 1}}>
			{
			item === null ?
            <Camera style={{flex: 1}} type={Camera.Constants.Type.back} ref={ref => {setCameraRef(ref);}}>
				<View style={{
					flex: 1,
					backgroundColor: 'transparent',
					flexDirection: 'row'
				}}></View>
				{container}
			</Camera>
			:
			<BrandScreen list = {item} />			
			}
        </View>
    );
}

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'center', 
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		paddingVertical: 25
	},
	photoButton: {
		width: 75,
		height: 75
	}
});