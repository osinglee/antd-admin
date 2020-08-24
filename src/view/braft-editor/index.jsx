import React, { useRef } from 'react';
import { Button, Modal, Space } from 'antd';
import BraftEditor from '../../components/u-editor';

export default () => {
	const editorRef = useRef(null);

	const setEditorContent = () => {
		editorRef.current.setContent('<i>hello world</i>');
	};
	const getEditorContent = () => {
		Modal.confirm({
			title: '编辑器内容为',
			content: editorRef.current.getHtml(),
		});
	};
	return (
		<div>
			<Space>
				<Button onClick={setEditorContent}>设置内容</Button>
				<Button onClick={getEditorContent}>获取内容</Button>
			</Space>
			<br />
			<br />
			<div className="editor-wrapper">
				<BraftEditor ref={editorRef} />
			</div>
		</div>
	);
};
