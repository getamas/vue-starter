---
to: "src/app/components/<%= name %>.spec.js"
---

<%
const importName = h.changeCase.pascal(name)
%>import <%= importName %> from './<%= name %>'

describe('@components/<%= name %>', () => {
  it('exports a valid component', () => {
    expect(<%= importName %>).toBeAComponent()
  })
})
