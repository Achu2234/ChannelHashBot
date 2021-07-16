import { Composer } from 'telegraf';
import CustomContext from '../context';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';

const startMessage =
    'Hi, My Name is Channel Hash Traker I am Here to help you keep track of hashtags that are sent to your group by sending them to a channel. ' +
    'To learn my commands, send /help and for a step-by-step guide on how to set me up, send /setup.';

const helpMessage = `
<code>/watch [hashtags...]</code> - add hashtags to your watchlist
<code>/unwatch [hashtags...]</code> - remove tags from your watchlist
<code>/tags</code> - get a list of the hashtags in your watchlist and its destination
<code>/settings</code> - change your groups configuration
`;

const setupMessage = `
<b>To set up a channel:</b>
1. Add me to a channel
2. Send <code>@ChannelHashTraker_RoBot</code> to your channel

<b>To set up a group:</b>
1. Add me to a group
2. Send <code>/watch #hashtag1 #hashtag2 ...</code>
3. Choose a channel from the buttons
4. (Optional) send <code>/settings</code> to configure me
`;

const extra: ExtraReplyMessage = {
    parse_mode: 'HTML',
};

export const start = Composer.command<CustomContext>('start', Composer.privateChat(Composer.reply(startMessage)));
export const help = Composer.command<CustomContext>('help', Composer.privateChat(Composer.reply(helpMessage, extra)));
export const setup = Composer.command<CustomContext>(
    'setup',
    Composer.privateChat(Composer.reply(setupMessage, extra)),
);
