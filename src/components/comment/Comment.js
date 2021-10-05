import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledComment } from "./Comment.styled";

export default function Comment({ commentInfo }) {
	const [commentExpanded, setCommentExpanded] = useState(true);

	return (
		<StyledComment>
			{/* TODO: fina a cleaner way to implement this */}
			<div className="comment-author-info">
				<span onClick={() => setCommentExpanded(prev => !prev)}>
					[{commentExpanded ? "-" : "+"}]
				</span>
				{/* TODO: check how to reuse the links */}
				<Link className="link" to={`/user/${commentInfo.user}`}>{commentInfo.user}</Link> {commentInfo.time_ago}
			</div>
			{commentExpanded && <>
				<div className="comment-content" dangerouslySetInnerHTML={{ __html: commentInfo.content }}></div>
				<div className="child-comments">
					{
						commentInfo.comments?.map(comment => {
							return <Comment key={comment.id} commentInfo={comment}></Comment>
						})
					}
				</div>
			</>}
		</StyledComment>
	)
}