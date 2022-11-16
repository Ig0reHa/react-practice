import React, {FC} from 'react';

interface MySelectProps {
	option: Array<{value: any, name: any}>,
	defaultValue: any
	value: any
	onChange: (value: any) => void
}

const MySelect: FC<MySelectProps> = ({option, defaultValue, value, onChange}) => {
	return (
		<select
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			<option disabled value="">{defaultValue}</option>
			{option.map(option =>
				<option
					key={option.value}
					value={option.value}>
					{option.name}
				</option>
			)}
		</select>
	);
};

export default MySelect;