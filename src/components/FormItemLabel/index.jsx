import React from 'react';
import './index.less';

const FormItemLabel = ({ label, require = false, children }) => {
	return (
		<span>
			{label}
			<em className="form-basic-form-style-optional">
				{`（${require ? '必填' : '选填'}）`}
				{children}
			</em>
		</span>
	);
};

export default FormItemLabel;
