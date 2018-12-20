import { homeBanner, homeBase } from './renders';

let defaultProps = null;

describe('Home Banner Component', () => {
  it('should match snapshot', () => {
    const wrapper = homeBanner();
    expect(wrapper.length).toEqual(1);
  });
});

describe('Home Base Component', () => {
  it('should match snapshot', () => {
    const { wrapper, props } = homeBase();

    defaultProps = { ...props };
    expect(wrapper.length).toEqual(1);
  });

  it('should render loading status', () => {
    const { wrapper } = homeBase({
      ...defaultProps,
      loading: true,
      error: false
    });

    expect(wrapper.find('Status').prop('imageType')).toEqual('loading');
  });

  it('should render error status', () => {
    const { wrapper } = homeBase({
      ...defaultProps,
      error: true,
      loading: false
    });

    expect(wrapper.find('Status').prop('imageType')).toEqual('error');
  });

  it('should render categories', () => {
    const { wrapper } = homeBase({
      ...defaultProps,
      categories: []
    });

    expect(wrapper.find('Status').prop('imageType')).toEqual('empty');
  });
});
