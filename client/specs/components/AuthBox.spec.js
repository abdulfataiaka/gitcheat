import { authBoxView } from './renders';

const updateProps = [
  { loginInProgress: true },
  { error: 'An error occured' },
  { show: false }
];

describe('AuthBox View Component', () => {
  it('should match snapshot', () => {
    const { wrapper } = authBoxView();
    expect(wrapper).toMatchSnapshot();
  });

  it('should close the authbox', () => {
    const { wrapper, props } = authBoxView();
    const closeBtn = wrapper.find('.close-btn');
    closeBtn.simulate('click');

    expect(props.closeDrawer.mock.calls.length).toEqual(1);
  });

  it('should show loading image', () => {
    const { wrapper } = authBoxView(updateProps[0]);
    expect(wrapper.find('[alt="loading"]').length).toEqual(1);
  });

  it('should show authentication error', () => {
    const { wrapper } = authBoxView(updateProps[1]);
    expect(wrapper.prop('error')).toEqual(updateProps[1].error);
  });

  it('should hide authbox', () => {
    const { wrapper } = authBoxView(updateProps[2]);
    expect(wrapper.find('#auth-box').prop('style')).toEqual({ display: 'none' });
  });
});
