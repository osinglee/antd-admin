import React from 'react';
import { Menu as Me } from 'antd';
import { Link } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import defaultSettings from '../../defaultSettings';
import css from './index.scss';

const Menu = ({
	selectedKeys,
	defaultOpenKeys,
	menu,
	setBreadcrumb,
	openKeys,
	onOpenChange,
	collapsed,
	toggleCollapsed,
}) => {
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

	const menuCollapsed = () => {
		toggleCollapsed();
	};

	return (
		<div className={css.menu_content}>
			<Me
				theme={defaultSettings.siderTheme}
				mode="inline"
				style={{ flex: 1 }}
				selectedKeys={selectedKeys}
				onClick={setBreadcrumb}
				defaultOpenKeys={defaultOpenKeys}
				openKeys={openKeys}
				onOpenChange={onOpenChange}
				inlineIndent={16}
			>
				{renderMenu(menu)}
			</Me>
			<Me theme={defaultSettings.siderTheme} inlineIndent={16} selectedKeys="sub_item" onClick={menuCollapsed}>
				<Me.Item key="icon_1" icon={React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)} />
			</Me>
		</div>
	);
};

export default Menu;
