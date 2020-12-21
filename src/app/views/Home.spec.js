import Home from './Home.vue'
import PageTitle from '@/app/components/PageTitle/PageTitle.vue'

describe('@views/home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })

  it('renders an element', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.findComponent(PageTitle).exists()).toBe(true)
  })
})
