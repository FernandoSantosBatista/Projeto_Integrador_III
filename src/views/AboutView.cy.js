import AboutView from './AboutView.vue'

describe('<AboutView />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(AboutView)
  })
})