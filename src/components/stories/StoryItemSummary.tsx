import classes from "./StoryItemSummary.module.css";
import Utils from "../../helpers/Utils";
import ItemBean from "../../models/ItemBean";
import Container from "../ui/Container";

const StoryItemSummary: React.FC<{ item: ItemBean }> = (props) => {
  return (
    <Container className="vertical">
      <div className={classes["story-item"]}>
        <div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/img${props.item.img}.jpg`}
              alt={props.item.title}
            />
            <a href={props.item.url} target="_blank" rel="noreferrer">
              {props.item.title}
            </a>
          </div>
          <div>
            <span>{props.item.score} points</span>
            <span> | </span>
            <span>
              by <a href={`/users/${props.item.by}`}>{props.item.by}</a>
            </span>
            <span> | </span>
            <span>{Utils.time2TimeAgo(props.item.time)}</span>
            <span> | </span>
            <span>{props.item.descendants} comments</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StoryItemSummary;
