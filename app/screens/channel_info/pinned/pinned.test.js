// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallowWithIntl} from 'test/intl-test-helper';

import Preferences from '@mm-redux/constants/preferences';

import Pinned from './pinned';

// Pinned expects to receive the pinIcon as a number
jest.mock('@assets/images/channel_info/pin.png', () => {
    return 1;
});

jest.mock('@utils/theme', () => {
    const original = jest.requireActual('../../../utils/theme');
    return {
        ...original,
        changeOpacity: jest.fn(),
    };
});

describe('ChannelInfo -> Pinned', () => {
    const baseProps = {
        channelId: '123',
        pinnedCount: 0,
        isLandscape: false,
        theme: Preferences.THEMES.default,
        userId: 'user-123',
    };

    test('should match snapshot', () => {
        const wrapper = shallowWithIntl(
            <Pinned
                {...baseProps}
            />,
        );
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});