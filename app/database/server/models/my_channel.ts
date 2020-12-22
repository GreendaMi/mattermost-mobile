// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Relation} from '@nozbe/watermelondb';
import Model, {Associations} from '@nozbe/watermelondb/Model';
import {field, relation} from '@nozbe/watermelondb/decorators';

import {MM_TABLES} from '@constants/database';
import Channel from '@typings/database/channel';

const {CHANNEL, MY_CHANNEL} = MM_TABLES.SERVER;

/**
 * MyChannel is an extension of the Channel model but it lists only the Channels the app's user belongs to
 */
export default class MyChannel extends Model {
    /** table (entity name) : MyChannel */
    static table = MY_CHANNEL;

    /** associations : Describes every relationship to this entity. */
    static associations: Associations = {

        /** A CHANNEL can be associated to only one record from entity MY_CHANNEL (relationship is 1:1) */
        [CHANNEL]: {type: 'belongs_to', key: 'channel_id'},
    };

    constructor() {
        super();
        this.channel = {} as Relation<Channel>;
        this.channelId = '';
        this.lastPostAt = 0;
        this.lastViewedAt = 0;
        this.mentionsCount = 0;
        this.messageCount = 0;
        this.roles = '';
    }

    /** channel_id : The foreign key to the related Channel record  */
    @field('channel_id') channelId: string;

    /** last_post_at : The timestamp for any last post on this channel */
    @field('last_post_at') lastPostAt: number;

    /** last_viewed_at : The timestamp showing the user's last viewed post on this channel */
    @field('last_viewed_at') lastViewedAt: number;

    /** mentionsCount : The number of mentions on this channel */
    @field('mentions_count') mentionsCount: number;

    /** messageCount : The derived number of unread messages on this channel */
    @field('message_count') messageCount: number;

    /** roles : The user's privileges on this channel */
    @field('roles') roles: string;

    /** channel : The relation pointing to entity CHANNEL */
    @relation(CHANNEL, 'channel_id') channel : Relation<Channel>
}