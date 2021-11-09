import moment from "moment";
export const dateConveter = (date) => {
  const d = moment(date).fromNow().split(" ");
  let time = d[0] === "a" ? 1 : d[0];
  let period = d[1].substring(0, 1);
  return time + period;
};
