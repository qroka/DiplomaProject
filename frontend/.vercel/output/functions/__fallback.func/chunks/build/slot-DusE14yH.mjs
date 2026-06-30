import { v as vueExports } from './server.mjs';
import { f as flatUnwrap } from './ssrSlot-B9M8nGkC.mjs';

const renderSlot = (slots, name, props, ...rest) => {
  if (slots[name]) {
    return vueExports.renderSlot({ ...slots, [name]: () => flatUnwrap(slots[name](), props?.unwrap || props?.mdcUnwrap) }, name, props, ...rest);
  }
  return vueExports.renderSlot(slots, name, props, ...rest);
};

export { renderSlot as r };
//# sourceMappingURL=slot-DusE14yH.mjs.map
