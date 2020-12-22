---
to: "src/app/views/<%= name %>.spec.js"
---
<%
  const importName = h.changeCase.pascal(name)
%>import <%= importName %> from './<%= name %>'

describe('@views/<%= name %>', () => {
  it('is a valid view', () => {
    expect(<%= importName %>).toBeAViewComponent()
  })
})
