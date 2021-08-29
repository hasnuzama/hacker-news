import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <img
        src={`${process.env.PUBLIC_URL}/images/ajax-loader.gif`}
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
