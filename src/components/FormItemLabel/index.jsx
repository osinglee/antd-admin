import React from 'react';
import css from './index.scss';

const FormItemLabel = ({ label, require = false, children }) => {
	return (
		<span>
			{label}
			<em className={css.form_basic_form_style_optional}>
				{`（${require ? '必填' : '选填'}）`}
				{children}
			</em>
		</span>
	);
};

export default FormItemLabel;
