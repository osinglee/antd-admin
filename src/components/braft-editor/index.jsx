import React, { useImperativeHandle, useState } from 'react';
import * as BE from 'braft-editor';
import 'braft-editor/dist/index.css';

export default React.forwardRef((props, ref) => {
	const [editorState, setEditorState] = useState(BE.default.createEditorState(''));

	useImperativeHandle(ref, () => ({
		getHtml: () => editorState.toHTML(),
		setContent: (content) => setEditorState(BE.default.createEditorState(content)),
	}));

	const handleChange = (editorState) => {
		setEditorState(editorState);
	};

	return <BE.default value={editorState} onChange={handleChange} />;
});
