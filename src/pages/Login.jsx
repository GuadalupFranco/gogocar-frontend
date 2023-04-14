import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native'
import { BASE_URL } from '@env'
import axios from 'axios';
import * as Device from 'expo-device';
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput.jsx';
import StyledText from '../components/StyledText.jsx'
import { loginValidationSchema } from '../validationSchemas/login.js'

export default function LogInPage() {
	const handleSubmit = (values) => {
		//Alert.alert('Success', `${values.email}, ${values.password}`)
		axios.post(`${BASE_URL}/api/login`, {
			deviceName: Device?.brand ?? 'Web',
			email: values.email,
			password: values.password
		}).then(response => {
			// Store the user token in your React Native app's state or AsyncStorage
			Alert.alert('Success', 'logged')
			console.log(response.data);
		}).catch(error => {
			console.log(error)
			Alert.alert('Error', 'Invalid email or password');
		});
	}
	return (
		<Formik
			validationSchema={loginValidationSchema}
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			{({ handleSubmit }) => {
				return (
					<View style={styles.form}>
						<FormikInputValue
							name='email'
							placeholder='E-mail'
						/>
						<FormikInputValue
							name='password'
							placeholder='Password'
							secureTextEntry
						/>
						<Button onPress={handleSubmit} title='Log In' />
					</View>
				)
			}}
		</Formik>
	)
}

// FUNCTIONALITY
const initialValues = {
	email: '',
	password: ''
}

const FormikInputValue = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name)
	return (
		<>
			<StyledTextInput
				error={meta.error}
				value={field.value}
				onChangeText={value => helpers.setValue(value)}
				{...props}
			/>
			{meta.error &&
				<StyledText style={styles.error}>{meta.error}</StyledText>
			}
		</>
	)
}

const styles = StyleSheet.create({
	form: {
		margin: 12
	},
	error: {
		fontSize: 12,
		color: 'red',
		marginBottom: 20,
		marginTop: -5,
		marginLeft: 2
	}
})