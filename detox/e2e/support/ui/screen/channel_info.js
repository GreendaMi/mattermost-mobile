// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {ChannelScreen} from '@support/ui/screen';
import {timeouts, wait} from '@support/utils';

class ChannelInfoScreen {
    testID = {
        channelInfoScreen: 'channel_info.screen',
        closeChannelInfoButton: 'close.channel_info.button',
        channelIconGMMemberCount: 'channel_icon.gm_member_count',
        favoritePreferenceAction: 'channel_info.favorite.action',
        favoriteSwitchFalse: 'channel_info.favorite.action.switch.false',
        favoriteSwitchTrue: 'channel_info.favorite.action.switch.true',
        mutePreferenceAction: 'channel_info.mute.action',
        muteSwitchFalse: 'channel_info.mute.action.switch.false',
        muteSwitchTrue: 'channel_info.mute.action.switch.true',
        ignoreMentionsPreferenceAction: 'channel_info.ignore_mentions.action',
        ignoreMentionsSwitchFalse: 'channel_info.ignore_mentions.switch.false',
        ignoreMentionsSwitchTrue: 'channel_info.ignore_mentions.switch.true',
        notificationPreferenceAction: 'channel_info.notification_preference.action',
        pinnedMessagesAction: 'channel_info.pinned_messages.action',
        manageMembersAction: 'channel_info.manage_members.action',
        addMembersAction: 'channel_info.add_members.action',
        convertPrivateAction: 'channel_info.convert_private.action',
        editChannelAction: 'channel_info.edit_channel.action',
    }

    channelInfoScreen = element(by.id(this.testID.channelInfoScreen));
    closeChannelInfoButton = element(by.id(this.testID.closeChannelInfoButton));
    channelIconGMMemberCount = element(by.id(this.testID.channelIconGMMemberCount));
    favoritePreferenceAction = element(by.id(this.testID.favoritePreferenceAction));
    favoriteSwitchFalse = element(by.id(this.testID.favoriteSwitchFalse));
    favoriteSwitchTrue = element(by.id(this.testID.favoriteSwitchTrue));
    mutePreferenceAction = element(by.id(this.testID.mutePreferenceAction));
    muteSwitchFalse = element(by.id(this.testID.muteSwitchFalse));
    muteSwitchTrue = element(by.id(this.testID.muteSwitchTrue));
    ignoreMentionsPreferenceAction = element(by.id(this.testID.ignoreMentionsPreferenceAction));
    ignoreMentionsSwitchTrue = element(by.id(this.testID.ignoreMentionsSwitchTrue));
    muteSwitchTrue = element(by.id(this.testID.muteSwitchTrue));
    notificationPreferenceAction = element(by.id(this.testID.notificationPreferenceAction));
    pinnedMessagesAction = element(by.id(this.testID.pinnedMessagesAction));
    manageMembersAction = element(by.id(this.testID.manageMembersAction));
    addMembersAction = element(by.id(this.testID.addMembersAction));
    convertPrivateAction = element(by.id(this.testID.convertPrivateAction));
    editChannelAction = element(by.id(this.testID.editChannelAction));

    toBeVisible = async () => {
        await wait(timeouts.TWO_SEC);
        await expect(this.channelInfoScreen).toBeVisible();

        return this.channelInfoScreen;
    }

    open = async () => {
        // # Open channel info screen
        await ChannelScreen.channelTitleButton.tap();

        return this.toBeVisible();
    }

    close = async () => {
        await wait(timeouts.TWO_SEC);
        await this.closeChannelInfoButton.tap();
        await expect(this.channelInfoScreen).not.toBeVisible();
    }
}

const channelInfoScreen = new ChannelInfoScreen();
export default channelInfoScreen;
