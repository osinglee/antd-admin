import React, { useImperativeHandle, useState } from 'react';
import BE from 'braft-editor';
import 'braft-editor/dist/index.css';

export default React.forwardRef((props, ref) => {
	const [editorState, setEditorState] = useState(BE.createEditorState(''));

	useImperativeHandle(ref, () => ({
		getHtml: () => editorState.toHTML(),
		setContent: (content) => setEditorState(BE.createEditorState(content)),
	}));

	const handleChange = (editorState) => {
		setEditorState(editorState);
	};

	return <BE value={editorState} onChange={handleChange} />;
});
