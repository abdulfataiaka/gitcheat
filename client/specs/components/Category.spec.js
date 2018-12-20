import { categoryView, categoryList } from './renders';
import { helps } from '../__mocks__/global';

let defaultProps = {};

const helpsFetch = (loading, error) => ({
  ...defaultProps,
  helpsFetch: {
    loading,
    error
  }
});

const updateProps = [
  helpsFetch(true, false),
  helpsFetch(false, true),
  {
    ...helpsFetch(false, false),
    helps: [...helps]
  }
];

describe('Category View Component', () => {
  it('should render the CategoryView Component', () => {
    const { wrapper: mainWrapper, props } = categoryView();
    const wrapper = mainWrapper.find('CategoryView');

    defaultProps = { ...props };

    expect(wrapper.length).toEqual(1);
  });
});


describe('Category List Component', () => {
  it('should render the CategoryView Component', () => {
    const { wrapper } = categoryList();

    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render loading conponent', () => {
    const { wrapper } = categoryList(updateProps[0]);

    expect(wrapper.find('Status').prop('imageType')).toEqual('loading');
  });

  it('should render error conponent', () => {
    const { wrapper } = categoryList(updateProps[1]);

    expect(wrapper.find('Status').prop('imageType')).toEqual('error');
  });

  it('should render all helps', () => {
    const { wrapper } = categoryList(updateProps[2]);

    expect(wrapper.find('HelpItem').length).toEqual(3);
  });
});
