import styled from "styled-components";

export const StyledComment = styled.div`

	.comment-author-info {
		font-size: 12px;
		font-weight: bold;
		color: #666;
		margin-bottom: 12px;
	}

	.comment-author-info span {
		display: inline-block;
		width: 20px;
	}

	.link {
		cursor: pointer;
		color: #b92b27;
		margin-left: 3px;
		text-decoration: none;
	}

	.link:hover {
		text-decoration: underline;
	}

	.comment-content {
		font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
		margin-left: 25px;
	}

	.child-comments {
		margin-left: 40px;
	}
`