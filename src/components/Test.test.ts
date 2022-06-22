import Test from './Test'
import { render } from '@testing-library/vue'

test('Test.tsx should work', () => {
  const { getByText } = render(Test)
  // asser output
  // 断言输出结果
  getByText('test: 0')
})
