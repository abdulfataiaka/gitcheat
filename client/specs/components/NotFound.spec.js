import { notFound } from './renders';

describe('NotFound Component', () => {
  it('should match snapshot', () => {
    const wrapper = notFound();
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
