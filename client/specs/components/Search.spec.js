import { searchView } from './renders';
import { helps } from '../__mocks__/global';

describe('NotFound Component', () => {
  it('should render search component', () => {
    const { wrapper } = searchView();
    expect(wrapper.length).toEqual(1);
  });

  it('should render empty helps', () => {
    const { wrapper } = searchView();
    expect(wrapper.find('Status').prop('imageType')).toEqual('empty');
  });

  it('should render helps', () => {
    const { wrapper } = searchView({
      helps: [helps[0]]
    });
    expect(wrapper.find('HelpItem').length).toEqual(1);
  });
});
