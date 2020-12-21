import { shallowMount } from '@vue/test-utils'
import PageTitle from '@/app/components/PageTitle/PageTitle.vue'

describe('@components/PageTitle.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Example title'

    const wrapper = shallowMount(PageTitle, {
      propsData: { title }
    })

    expect(wrapper.text()).toMatch(title)
  })
})
