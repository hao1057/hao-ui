import { emit } from "process";
import { defineComponent, withModifiers, ref } from "vue";

// 1.函数式组件
// export default () => <div>test</div>;

// 2.defineComponent
// export default defineComponent({
//   render() {
//     return <div>test</div>;
//   }
// });

// 3.defineComponent({setup(){})
// 摒弃this，对于ts支持最好
// 借助babel-plugin-jsx
// vue独特概念：修饰符，slot， directive，emit
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      }
    }
  },
  emits: ["confirm"],
  setup(_props, { slots, emit }) {
    const count = ref(0);

    const add = () => {
      count.value++;
      emit("confirm", count.value);
    };

    const list = ref<string[]>(["1", "2", "3"]);

    return () => {
      // v-if
      const span = count.value > 10 ? <span>A</span> : <span>B</span>;
      return (
        <div onClick={withModifiers(add, ["self"])}>
          test：{count.value}
          <input type="text" v-model={count.value} v-focus />
          <div>{span}</div>
          <ul>
            {list.value.map(item => (
              <li>{item}</li>
            ))}
          </ul>
          <div>{slots.default?.()}</div>
          <div>{slots.title?.("title1111")}</div>
          {/* jsx组件写法 */}
          {/* <Text v-slots={{ title: () => <h3>title1111 </h3> }}>1111111</Text> */}
        </div>
      );
    };
  }
});
