import React from 'react';
import styled from 'styled-components';

const Toc = () => <TocTemplate>목차 영역</TocTemplate>;

const TocTemplate = styled.aside`
	position: fixed;
	right: 30px;
	top: 54px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 100%;
	border-left: 1px solid #ccc;
`;

export default Toc;
