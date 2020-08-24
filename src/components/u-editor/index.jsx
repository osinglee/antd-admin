import React, { useImperativeHandle, useRef, useState } from 'react';
import { useMount } from 'ahooks';

export default React.forwardRef((props, ref) => {
	const id = `${Math.random().toString(16).substring(2)}ueditorId`;
	const eRef = useRef(null);
	const [editor, setEditor] = useState();
	useMount(async () => {
		window.UMEDITOR_CONFIG = {
			...window.UMEDITOR_CONFIG,
			imageUrl: `${process.env.BASE_API}/WebArticleHelpManage/Upload`,
		};
		eRef.current.id = id;
		const editor = window.UM.getEditor(id);
		setEditor(editor);
	});

	useImperativeHandle(ref, () => ({
		getHtml: () => editor.getContent(),
		setContent: (content) => editor.setContent(content),
	}));

	return <div style={{ width: props.width || '100%' }} ref={eRef} />;
});
