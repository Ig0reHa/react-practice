import React, {FC} from 'react';
import classes from './MyInput.module.css'

interface MyInputProps {
	value: any
	onChange: (event: any) => void
	placeholder: string
}

const MyInput: FC<MyInputProps> = (props) => {
	return (
		<input className={classes.myInput} {...props}/>
	);
};

export default MyInput;