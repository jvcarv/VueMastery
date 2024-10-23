import { mount } from '@vue/test-utils'
import NotificationToast from '../NotificationToast.vue'
import { describe, expect, test } from 'vitest'

describe('Notification Component', () => {
  test('renders the correct style for error', () => {
    const status = 'error'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders the correct style for success', () => {
    const status = 'success'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--success']))
  })

  test('renders the correct style for info', () => {
    const status = 'info'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--info']))
  })

  test('Checking if the message is empty before the slide goes up', () => {
    const message = ''
    const wrapper = mount(NotificationToast, {
      props: {
        message
      }
    })
    expect(wrapper.classes('notification--slide')).toBe(false)
  })

  test('Checking if the component emits an event when the close button is clicked', async () => {
    const wrapper = mount(NotificationToast, {
      data() {
        return {
          clicked: false
        }
      }
    })
    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('clear-notification')
  })

  test("Checking if it's rendering the correct message to the viewer", () => {
    const message = 'Something happened, try again'
    const wrapper = mount(NotificationToast, {
      props: { message }
    })
    expect(wrapper.find('p').text()).toBe(message)
  })
})
