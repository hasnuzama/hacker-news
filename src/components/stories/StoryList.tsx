import StoryItem from "./StoryItem";
import Utils from "../../helpers/Utils";
import ItemBean from "../../models/ItemBean";
import Container from "../ui/Container";

const StoryList: React.FC<{ items: ItemBean[] }> = (props) => {
  // TODO: Remove this image hardcoding when we implement url meta
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  Utils.shuffle(arr);
  return (
    <Container className="vertical">
      {props.items.map((x, i) => {
        x.img = arr[i];
        return <StoryItem item={x} key={x.id} />;
      })}
    </Container>
  );
};

export default StoryList;
