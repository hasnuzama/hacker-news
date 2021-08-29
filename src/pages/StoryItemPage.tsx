import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import CommentsList from "../components/comments/CommentsList";
import StoryItemSummary from "../components/stories/StoryItemSummary";
import Container from "../components/ui/Container";
import ItemBean from "../models/ItemBean";
import ItemService from "../services/ItemService";
import Loader from "../components/ui/Loader";

const StoryItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [storyObj, setStoryObj] = useState<ItemBean>();
  const [commentIds, setCommentIds] = useState<number[]>();
  const [comments, setComments] = useState<ItemBean[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Get story details
  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true);
    ItemService.getItemDetails(parseInt(id)).then((storyData) => {
      if (!storyData) {
        return;
      }
      setIsLoading(false);
      storyData.img = Math.floor(Math.random() * 9) + 0;
      setStoryObj(storyData as ItemBean);
      if (storyData.kids) {
        storyData.kids = storyData.kids.sort((a, b) => b - a);
      }
      setCommentIds(storyData.kids);
    });
  }, [id]);

  // Get comments
  useEffect(() => {
    if (!commentIds) {
      return;
    }
    setIsLoading(true);
    ItemService.getMultipleItemDetails(commentIds as number[]).then(
      (results) => {
        results = results.filter((x) => x?.by && x.text);
        setComments(results as ItemBean[]);
        setIsLoading(false);
      }
    );
  }, [commentIds]);

  return (
    <Container className="vertical">
      {isLoading &&
        ReactDOM.createPortal(
          <Loader />,
          document.getElementById("overlay") as Element
        )}
      {storyObj && <StoryItemSummary item={storyObj as ItemBean} />}
      {comments && <CommentsList items={comments} />}
    </Container>
  );
};

export default StoryItemPage;
