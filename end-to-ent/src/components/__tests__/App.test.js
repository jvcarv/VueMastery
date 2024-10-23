import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import App from './App.vue'
import { describe, test, vi } from 'vitest'

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
    await wrapper.find('[data-testid="vody-input"]').setValue(mockPost.value)
  })
})
