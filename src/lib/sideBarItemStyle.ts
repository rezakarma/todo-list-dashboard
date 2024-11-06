export const sidebarItemStyle = (
  routeIsActive: boolean,
  state: "expanded" | "collapsed"
) => {
  let buttonStyle = "";
  let iconStyle = "";
  if (routeIsActive && state === "expanded") {
    buttonStyle = "!bg-primary !text-secondary";
  } else if (routeIsActive && state === "collapsed") {
    buttonStyle = "text-primary";
  }
  if (routeIsActive && state === "expanded") {
    iconStyle = "!text-secondary";
  } else if (routeIsActive && state === "collapsed") {
    iconStyle = "bg-primary text-secondary p-1 rounded";
  } else if (!routeIsActive && state === "collapsed") {
    iconStyle = "!text-primary";
  } else if (!routeIsActive && state === "expanded") {
    iconStyle = "!text-primary";
  }
  return { buttonStyle, iconStyle };
};
