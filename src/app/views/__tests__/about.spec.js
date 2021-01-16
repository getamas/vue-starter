import About from '@/app/views/about.vue'

describe('@views/about', () => {
  it('is a valid view', () => {
    expect(About).toBeAViewComponent()
  })
})
