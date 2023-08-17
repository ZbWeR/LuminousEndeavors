import { useStore, mapState, mapMutations, mapGetters, mapActions } from "vuex";
import { computed } from "vue";

// 创建一个包含原生vuex辅助函数的对象以便后续使用.
const methods = { mapState, mapMutations, mapGetters, mapActions };

/**
 * 手动绑定store实例,以便在 setup 中调用辅助函数
 * @param {*} methodName - 要使用的方法名称,例如: 'mapState'
 * @param {*} keys - 需要导出的键名
 * @returns {Object} - 导出后的对象
 */
function injectStore(methodName, keys) {
  const store = useStore(); // 获取 vuex 实例
  const resObj = {};  // 存放导出结果
  let keyToFuncs = methods[methodName](keys); // 调用对应方法获得初步返回结果,返回值是一个包含了许多函数的对象.

  // 枚举对象中的函数
  Object.keys(keyToFuncs).forEach((item) => {
    // 将函数绑定到 store 实例上下文
    const fn = keyToFuncs[item].bind({ $store: store });
    if (methodName === 'mapState' || methodName === 'mapGetters')
      resObj[item] = computed(fn);  // 导出的是属性则需要由 computed 计算得到
    else
      resObj[item] = fn;            // 导出的是函数直接返回即可.
  })
  return resObj;
}

export const useMapState = (keys) => {
  return injectStore('mapState', keys);
}

export const useMapMutations = (keys) => {
  return injectStore('mapMutations', keys);
}

export const useMapGetters = (keys) => {
  return injectStore('mapGetters', keys);
}

export const useMapActions = (keys) => {
  return injectStore('mapActions', keys);
}