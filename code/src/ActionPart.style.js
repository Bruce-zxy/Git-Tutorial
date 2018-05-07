import styled from 'react-emotion';

const ActionPartStyleWrapper = styled('div')`
	width: 100%;
	height: 100%;
	padding: 5px 20px;
	box-sizing: border-box;
	position: relative;
	.top {
		>div {
			display: inline-block;
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






	// 属性控件过渡动画
	.ant-tree.ant-tree-show-line li {
		transition: all .35s ease-in-out;
	}
`;

export default ActionPartStyleWrapper;