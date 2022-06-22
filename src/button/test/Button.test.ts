import { render } from '@testing-library/vue'
import Button from '../src/button'

test('button is disabled', async () => {
  const { getByRole } = render(Button, {
    props: {
      disabled: true
    }
  })
  expect(getByRole('button').getAttribute('disabled')).toBe('true')
})
