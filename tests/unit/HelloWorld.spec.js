// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import HelloWorld from "@/components/HelloWorld";
describe('HelloWorld component', () => {

    const msg = "hello"

    const wrapper = mount(HelloWorld, {
        propsData: {
            msg: msg
        }
    })

    it('renders the hello message', () => {
        expect(wrapper.html()).toContain(msg);
    })
});