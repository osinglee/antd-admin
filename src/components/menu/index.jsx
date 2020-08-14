import React from 'react';
import { Menu as Me } from 'antd';
import { Link } from 'react-router-dom';
import defaultSettings from '../../defaultSettings';

const Menu = ({ selectedKeys, defaultOpenKeys, menu, setBreadcrumb }) => {
	const renderMenuItem = (item) => (
		<div>
			{item.icon}
			<span>{item.label}</span>
		</div>
	);

	const renderMenu = (menus) => {
		return menus.map((item) => {
			if (item.hidden) {
				return null;
			}
			return item && item.children ? (
				<Me.SubMenu key={item.path || item.label} title={renderMenuItem(item)}>
					{renderMenu(item.children)}
				</Me.SubMenu>
			) : (
				<Me.Item key={item.path || item.label}>
					<Link to={item.path} replace>
						{renderMenuItem(item)}
					</Link>
				</Me.Item>
			);
		});
	};

	return (
		<Me
			theme={defaultSettings.siderTheme}
			mode="inline"
			selectedKeys={selectedKeys}
			onClick={setBreadcrumb}
			defaultOpenKeys={defaultOpenKeys}
		>
			{renderMenu(menu)}
		</Me>
	);
};

export default Menu;
