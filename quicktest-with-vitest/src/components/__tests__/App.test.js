import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import App from '@/App.vue'
import { describe, expect, test, vi } from 'vitest'

const mockPost = {
  uderId: 1,
  id: 1,
  title: 'Test Post',
  body: 'Test body'
}

describe('Posts app', () => {
  test('user can create a new post', async () => {
    vi.spyOn(axios, 'post').mockResolvedValueOnce({ data: mockPost })

    const wrapper = mount(App)

    //fill in the input fields
    await wrapper.find('[data-testid="title-input"]').setValue(mockPost.value)
    await wrapper.find('[data-testid="body-input"]').setValue(mockPost.value)

    //submit the form
    await wrapper.find('[data-testid="post-form"]').trigger('submit')

    expect(wrapper.find('[type="submit"]').html()).toContain('Creating...')

    await flushPromises()

    //assert that the created post is displayed on screen
    expect(wrapper.html()).toContain(mockPost.title)
    expect(wrapper.html()).toContain(mockPost.body)
  })

  //second group of tests
  describe('user gets notified', () => {
    test('when attempting to create a post with incomplete fields', async () => {
      const wrapper = mount(App)

      expect(wrapper.exists()).toBe(true)

      await wrapper.find('[data-testid="post-form"]').trigger('submit')

      expect(wrapper.html()).toContain('Please input post title')

      //click the close button
      await wrapper.find('[data-testid="close-notification"]').trigger('click')

      //assert that the error message is no longer on screen
      expect(wrapper.html()).not.toContain('Please input post title')

      await wrapper.find('[data-testid="title-input"]').setValue(mockPost.title)

      await wrapper.find('[data-testid="post-form"]').trigger('submit')

      //asset that a new error prompting user for post body is displayed

      expect(wrapper.html()).toContain('Please input post body')
    })

    test('when creating a new post fails', async () => {
      vi.spyOn(axios, 'post').mockRejectedValueOnce(new Error('Error occurred'))

      const wrapper = mount(App)

      await wrapper.find('[data-testid="title-input"]').setValue(mockPost.title)
      await wrapper.find('[data-testid="body-input"]').setValue(mockPost.body)

      await wrapper.find('[data-testid="post-form"]').trigger('submit')

      expect(wrapper.find('[type="submit"]').html()).toContain('Creating...')

      await flushPromises()

      expect(wrapper.html()).toContain('Error occurred')
    })
  })
})
