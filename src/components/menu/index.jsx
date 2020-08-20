import React from 'react';
import { Menu as Me } from 'antd';
import { Link } from 'react-router-dom';
import defaultSettings from '../../defaultSettings';

const Menu = ({ selectedKeys, defaultOpenKeys, menu, setBreadcrumb, openKeys, onOpenChange }) => {
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
				<Me.SubMenu key={item.path} title={renderMenuItem(item)}>
					{renderMenu(item.children)}
				</Me.SubMenu>
			) : (
				<Me.Item key={item.path}>
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
			style={{ height: '100%' }}
			selectedKeys={selectedKeys}
			onClick={setBreadcrumb}
			defaultOpenKeys={defaultOpenKeys}
			openKeys={openKeys}
			onOpenChange={onOpenChange}
		>
			{renderMenu(menu)}
		</Me>
	);
};

export default Menu;
