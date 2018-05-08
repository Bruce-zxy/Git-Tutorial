import styled from 'react-emotion';

const ActionPartStyleWrapper = styled('div')`
	width: 100%;
	height: 100%;
	padding: 0 20px;
	box-sizing: border-box;
	position: relative;
	.top {
		height: 50vh;
		overflow: auto;
	    padding: 10px;
		>div {
			display: inline-block;
		}
		.ant-row {
			border-radius: 5px;
			border: 1px solid #ccc;
			box-shadow: 2px 4px 6px #aaa;
			transition: all .15s ease-in-out;
			:hover {
				box-shadow: 4px 8px 12px #aaa;
				transform: translate(-3px, -3px);
				transition: all .15s ease-in-out;
			}
		}
		.work-area {

		}
		.version-repo {
			.stage {

			}
			.master {

			}
		}
	}
	.bottom {
		height: 50vh;
		overflow: auto;
	    padding: 10px;
		.ant-row {
			border-radius: 5px;
			border: 1px solid #ccc;
			box-shadow: 2px 4px 6px #aaa;
			transition: all .15s ease-in-out;
			:hover {
				box-shadow: 4px 8px 12px #aaa;
				transform: translate(-3px, -3px);
				transition: all .15s ease-in-out;
			}
		}
	}


	// 属性控件过渡动画
	.ant-tree li {
		position: relative;
		border-radius: 5px;
		transition: all .35s ease-in-out;
		animation: highLight 2s ease-in-out;
	}
	@keyframes highLight {
		0% {
			background: #f9f516;
		}
		100% {
			background: transparent;
		}
	}
`;

export default ActionPartStyleWrapper;