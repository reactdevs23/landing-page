import clsx from "clsx";
import classes from "./Tabs.module.css";
import { NavLink } from "react-router-dom";

const Tabs = ({
  uniqueKey,
  activeTab,
  className,
  items,
  onTabChange,
  type2,
  ...rest
}) => {
  return (
    <div className={clsx(className, classes.tabs)} {...rest}>
      {items.map((el, idx) => {
        return type2 ? (
          <NavLink
            to={el.to}
            key={uniqueKey + "-" + idx}
            className={({ isActive }) =>
              isActive ? clsx(classes.tab, classes.active) : classes.tab
            }
          >
            {el.item}
          </NavLink>
        ) : (
          <button
            key={uniqueKey + "-" + idx}
            className={clsx(classes.tab, activeTab === el && classes.active)}
            onClick={() => {
              onTabChange(el);
            }}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
