import Home from './Home.vue'
import PageTitle from '@/components/PageTitle/PageTitle.vue'

describe('@views/home', () => {
  it('renders an element', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.contains(PageTitle)).toBe(true)
  })
})
