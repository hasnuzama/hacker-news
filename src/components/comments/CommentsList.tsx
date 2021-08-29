import Comment from "./Comment";
import ItemBean from "../../models/ItemBean";
import Container from "../ui/Container";

const CommentsList: React.FC<{ items: ItemBean[] }> = (props) => {
  return (
    <Container className="vertical">
      {props.items &&
        props.items.map((x, i) => {
          return (
            <Comment
              key={x.id}
              item={x}
              isLastItem={i === props.items.length - 1}
            />
          );
        })}
    </Container>
  );
};

export default CommentsList;
