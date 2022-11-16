import React, {ButtonHTMLAttributes, FC} from 'react';
import classes from './MyButton.module.css'

interface MyButtonProps {
	children: React.ReactNode
	className?: string
	onClick?: (e?: any) => void
}

const MyButton: FC<MyButtonProps> = ({children, ...props}) => {
	return (
		<button {...props} className={[classes.myBtn, props.className].join(' ')}>
			{children}
		</button>
	);
};

export default MyButton;