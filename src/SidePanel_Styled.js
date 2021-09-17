import styled from 'styled-components'

export const InputBox = styled.input`
	display: none;
`

export const LabelWrapper = styled.label`
	
	.btn, .cancel {
		position: absolute;
		cursor: pointer;
		background: #042331;
		border-radius: 3px;
	}

	.btn {
		left: 40px;
		top: 25px;
		font-size: 35px;
		color: white;
		padding: 6px 12px;
		transition: all .5s ease;
	}

	.cancel {
		z-index: 1111;
		left: ${props => props.show ? "195px" : "-250px"};
		top: 13px;
		font-size: 30px;
		color: #0a5275;
		padding: 4px 9px;
		transition: all .5s ease;
	}
`

export const SidePanelContainer = styled.div`
	position: fixed;
	left: ${props => props.show ? "0px" : "-250px"};
	width: 250px;
	height: 100%;
	background: #042331;
	transition: all .5s ease;

	header {
		font-size: 1.5em;
		color: wheat;
		text-align: center;
		line-height: 3rem;
		background-color: #063146;
		user-select: none;
	}

	.icon_parent {
		display: block;
		height: 100%;
		width: 100%;
		line-height: 3em;
		font-size: 1.2em;
		color: white;
		padding-left: 2em;
		box-sizing: border-box;
		border-top: 1px solid rgba(255, 255, 255, .1);
		border-bottom: 1px solid black;
		transition: 0.4s;
	}

	.icon_li {
		margin-right: 1em;
	}

	.icon_parent:hover {
		padding-left: 50px;
	}

`

/*
.sidebar {
		z-index: 2;
		position: fixed;
		left: -250px;
		width: 250px;
		height: 100%;
		background: var(--bg-sidebar);
		transition: all 0.5s ease;
	}

	.sidebar header {
		font-size: 22px;
		color: var(--text);
		text-align: center;
		line-height: 70px;
		background: var(--bg-siderbar-header);
		user-select: none;
	}

	.sidebar ul span {
		display: block;
		height: 100%;
		width: 100%;
		line-height: 65px;
		font-size: 20px;
		color: white;
		padding-left: 40px;
		box-sizing: border-box;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		border-bottom: 1px solid black;
		transition: 0.4s;
	}

	.sidebar ul li:hover span {
		padding-left: 50px;
	}

	.sidebar ul span i {
		margin-right: 16px;
	}

	#check {
		display: none;
	}

	label #btn,
	label #cancel {
		position: absolute;
		cursor: pointer;
		background: var(--bg-sidebar);
		border-radius: 3px;
	}

	label #btn {
		z-index: 1;
		position: fixed;
		left: 40px;
		top: 25px;
		font-size: 35px;
		color: white;
		padding: 6px 12px;
		transition: all 0.5s;
	}

	label #cancel {
		position: fixed;
		z-index: 1111;
		left: -195px;
		top: 17px;
		font-size: 30px;
		color: var(--label);
		padding: 4px 9px;
		transition: all 0.5s ease;
	}

	#check:checked ~ .sidebar {
		left: 0;
	}

	#check:checked ~ label #btn {
		left: 250px;
		opacity: 0;
		pointer-events: none;
	}

	#check:checked ~ label #cancel {
		left: 195px;
	}

	#check:checked ~ section {
		margin-left: 250px;
		transition: all 0.5s;
	}
*/
