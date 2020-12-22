---
to: "src/app/layouts/<%= name %>.spec.js"
---
<%
  const importName = h.changeCase.pascal(name) + 'Layout'
%>import <%= importName %> from './<%= name %>'

describe('@layouts/<%= name %>', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>'
    const { element } = shallowMount(<%= importName %>, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
