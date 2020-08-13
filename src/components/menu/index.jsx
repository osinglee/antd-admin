import React from 'react';
import { Menu as Me } from 'antd';
import { Link } from 'react-router-dom';

const Menu = ({ selectedKeys, defaultOpenKeys, menu, setBreadcrumb }) => {
	const renderMenu = (menu) => {
		return menu.map((item) => {
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

	const renderMenuItem = (item) => (
		<div>
			{item.icon}
			<span>{item.label}</span>
		</div>
	);

	return (
		<Me
			theme="light"
			mode="inline"
			selectedKeys={selectedKeys}
			style={{ backgroundColor: '#f3f5f9' }}
			onClick={setBreadcrumb}
			defaultOpenKeys={defaultOpenKeys}
		>
			{renderMenu(menu)}
		</Me>
	);
};

export default Menu;
