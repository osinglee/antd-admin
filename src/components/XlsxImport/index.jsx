import React, { useRef } from 'react';
import XLSX from 'xlsx';
import { useToggle } from 'react-use';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import css from './index.scss';

export default ({ excelClass, onSuccess, buttonText = 'Excel 导入' }) => {
	const [loading, toggle] = useToggle(false);
	const input = useRef(null);

	const getHeaderRow = (sheet) => {
		const headers = [];
		const range = XLSX.utils.decode_range(sheet['!ref']);
		const R = range.s.r;
		/* start in the first row */
		// eslint-disable-next-line no-plusplus
		for (let C = range.s.c; C <= range.e.c; ++C) {
			/* walk every column in the range */
			const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
			/* find the cell in the first row */
			let hdr = `UNKNOWN ${C}`; // <-- replace with your desired default
			if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
			headers.push(hdr);
		}
		return headers;
	};

	const onFileClick = () => {
		input.current.click();
	};

	const readerData = (rawFile) => {
		toggle(true);
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = e.target.result;
				const workbook = XLSX.read(data, { type: 'array' });
				const firstSheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[firstSheetName];
				const header = getHeaderRow(worksheet);
				const body = XLSX.utils.sheet_to_json(worksheet);
				onSuccess(header, body);
				toggle(false);
				resolve();
			};
			reader.readAsArrayBuffer(rawFile);
		});
	};

	const onFileChange = (e) => {
		const { files } = e.target;
		const rawFile = files[0]; // only use files[0]
		if (!rawFile) return;
		input.current.value = null;
		readerData(rawFile);
	};

	return (
		<span>
			<input ref={input} className={css.excel_upload_input} type="file" accept=".xlsx, .xls" onChange={onFileChange} />
			<Button className={excelClass} type="primary" onClick={onFileClick} loading={loading} icon={<UploadOutlined />}>
				{buttonText}
			</Button>
		</span>
	);
};
