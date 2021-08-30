import classes from "./StoriesPage.module.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StoryList from "../components/stories/StoryList";
import ItemService from "../services/ItemService";
import Constants from "../Constants";
import ItemBean from "../models/ItemBean";
import Loader from "../components/ui/Loader";
import ReactDOM from "react-dom";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

const StoriesPage = () => {
  const { type } = useParams<{ type: string }>();
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState<ItemBean[]>([]);
  const [storyIds, setStoryIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load story ids
  useEffect(() => {
    setIsLoading(true);
    ItemService.getItemIds(type).then((storyIds) => {
      setIsLoading(false);
      if (!storyIds || storyIds.length === 0) {
        return;
      }
      setPageNumber(0);
      setStoryIds(storyIds);
      setPageNumber(1);
    });
  }, [type]);

  // Load story data
  useEffect(() => {
    if (pageNumber === 0) {
      return;
    }
    setIsLoading(true);
    setData([]);
    let startIndex = (pageNumber - 1) * Constants.PAGE_SIZE;
    let endIndex = startIndex + Constants.PAGE_SIZE;
    ItemService.getMultipleItemDetails(
      storyIds.slice(startIndex, endIndex)
    ).then((resp) => {
      setData((previousState) => {
        return [...previousState, ...(resp as ItemBean[])].filter(
          (x) => x != null
        );
      });
      setIsLoading(false);
    });
  }, [pageNumber, storyIds]);

  // Handlers
  const nextClickHandler = () => {
    setPageNumber((previousState) => {
      return previousState + 1;
    });
  };

  const previousClickHandler = () => {
    setPageNumber((previousState) => {
      return previousState - 1;
    });
  };

  return (
    <div>
      {isLoading &&
        ReactDOM.createPortal(
          <Loader />,
          document.getElementById("overlay") as Element
        )}
      <StoryList items={data} />
      <Container className="horizontal">
        <div className={classes["button-container"]}>
          {pageNumber > 1 && !isLoading && (
            <Button onClick={previousClickHandler}>Previous</Button>
          )}

          {!isLoading && <Button onClick={nextClickHandler}>Next</Button>}
        </div>
      </Container>
    </div>
  );
};

export default StoriesPage;
