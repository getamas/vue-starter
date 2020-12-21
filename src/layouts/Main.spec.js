import MainLayout from './Main.vue'

describe('@layouts/Main.vue', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>'
    const { element } = shallowMount(MainLayout, {
      slots: {
        default: slotContent
      }
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
