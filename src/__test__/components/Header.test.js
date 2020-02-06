import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/provider.mock';

import Header from '../../components/Header';

describe('<Header />', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );
  test('render of componente footer', () => {
    expect(header.length).toEqual(1);
  });
});
