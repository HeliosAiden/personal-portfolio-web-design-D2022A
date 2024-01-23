import action from "./injectElements.js";
import el from "/constants/components.js";
el.map((i) => {
  action(i);
});
