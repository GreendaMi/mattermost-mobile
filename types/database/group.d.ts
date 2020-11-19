import Model, { Associations } from '@nozbe/watermelondb/Model';
import GroupsInChannel from '@typings/database/groups_in_channel';
import GroupsInTeam from '@typings/database/groups_in_team';
import GroupMembership from '@typings/database/group_membership';
export default class Group extends Model {
    static table: string;
    static associations: Associations;
    displayName: string;
    groupId: string;
    name: string;
    groupsInChannel: GroupsInChannel;
    groupsInTeam: GroupsInTeam;
    groupMembership: GroupMembership;
}
