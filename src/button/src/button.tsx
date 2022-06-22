import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'HButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled,block } = toRefs(props)
    const blockClass = block.value ? 's-btn--block' : ''
    return () => {
      const defaultSlot = slots.default ? slots.default() : 'button'
      return (
        <button class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockClass}`} disabled={disabled.value}>
          {defaultSlot}
        </button>
      )
    }
  }
})
