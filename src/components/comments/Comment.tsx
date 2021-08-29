import classes from "./Comment.module.css";
import React from "react";
import Utils from "../../helpers/Utils";
import ItemBean from "../../models/ItemBean";

const Comment: React.FC<{ item: ItemBean; isLastItem: boolean }> = (props) => {
  // Ref link for html parser : https://stackoverflow.com/questions/39758136/render-html-string-as-real-html-in-a-react-component
  return (
    <div className={classes["story-item"]}>
      <div>
        <span>{Utils.time2TimeAgo(props.item.time)}</span>
        <span> | </span>
        <span>
          by <a href={`/users/${props.item.by}`}>{props.item.by}</a>
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.item.text }}></div>
      <div>
        <span>{props.item.kids ? props.item.kids.length : 0} replies</span>
      </div>
      {!props.isLastItem && <hr />}
    </div>
  );
};

export default Comment;
