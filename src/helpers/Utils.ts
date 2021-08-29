class Utils {
  static time2TimeAgo = (ts: number) => {
    // This function computes the delta between the
    // provided timestamp and the current time, then test
    // the delta for predefined ranges.
    // Ref: https://stackoverflow.com/questions/19540077/converting-unix-time-to-minutes-ago-in-javascript/19540505

    var d = new Date(); // Gets the current time
    var nowTs = Math.floor(d.getTime() / 1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
    var seconds = nowTs - ts;

    // more that two days
    if (seconds > 2 * 24 * 3600) {
      return `${Math.floor(seconds / (24 * 3600))} days ago`;
    }
    // a day
    if (seconds > 24 * 3600) {
      return "1 day ago";
    }
    // more than two hours
    if (seconds > 2 * 3600) {
      return `${Math.floor(seconds / 3600)} hours ago`;
    }
    if (seconds > 3600) {
      return `1 hour ago`;
    }
    if (seconds > 120) {
      return Math.floor(seconds / 60) + " minutes ago";
    }
    if (seconds > 60) {
      return "1 minute ago";
    } else {
      return "few seconds ago";
    }
  };

  // Ref link: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  // Used to shuffle given array
  static shuffle = (array: number[]) => {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
}

export default Utils;
