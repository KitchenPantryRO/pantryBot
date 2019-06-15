const axios = require('axios');
const cheerio = require('cheerio');
const getETemoji = boss => {
  switch (boss) {
    case 'angeling':
      return '<:angeling:586531884738281472>';
    case 'arcangeling':
      return '<:arcangeling:589358833789435904>';
    case 'bloodyknight':
      return '<:bloodyknight:589368508261859328>';
    case 'stormyknight':
      return '<:stormyknight:589369068776063006>';
    case 'firelord':
      return '<:kaho:589366737133109248>';
    case 'hatii':
      return '<:garm:589367184527196191>';
    case 'atroce':
      return '<:atroce:586532100065460224>';
    case 'baphomet':
      return '<:bapho:586532137440903188>';
    case 'darklord':
      return '<:darklord:586551249357504522>';
    case 'detale':
      return '<:detard:586532293833654283>';
    case 'deviling':
      return '<:develing:586532393108635658>';
    case 'doppelganger':
      return '<:doppel:586532412020883456>';
    case 'drake':
      return '<:drake:586532453842157568>';
    case 'eddga':
      return '<:eddga:586532484842389515>';
    case 'goblinleader':
      return '<:goblinleader:586532536801427461>';
    case 'gtb':
      return '<:gtb:586532560297787411>';
    case 'koboldleader':
      return '<:koboldleader:586532617864740885>';
    case 'maya':
      return '<:maya:586532749519618048>';
    case 'mistress':
      return '<:mistress:586532774786105345>';
    case 'moonlightflower':
      return '<:moonlightflower:586532797200597012>';
    case 'orchero':
      return '<:orchero:586532954696843285>';
    case 'orclord':
      return '<:orclord:586532954793181184>';
    case 'osiris':
      return '<:osiris:586532954675871754>';
    case 'owlbaron':
      return '<:owlbaron:586532954940112902>';
    case 'phreeoni':
      return '<:phreeoni:586532955179188264>';
    case 'spashire':
      return '<:spashire:586532955040514048>';
    case 'strouf':
      return '<:strouf:586532955221000192>';
    case 'timeholder':
      return '<:timeholdere:586532955128856578>';
    case 'noicon':
      return '<:noicon:586532889487867915>';
    default:
      return '<:noicon:586532889487867915>';
  }
};

const getET = async (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'et' && argTokens.length == 0) {
    const response = await axios.get(`${process.env.ET_SRC}`);
    const html = response.data;
    const $ = cheerio.load(html);
    const UPDATE_DATE_HTML = $('.period').html();
    const UPDATE_DATE = UPDATE_DATE_HTML.split(' ');
    const NUM_CHANNELS = 10;
    let pages = [];
    const ORDER_OF_CH = [10, 9, 8, 7, 6, 5, 4, 3, 2, 11];
    for (let index = 0; index < NUM_CHANNELS; index++) {
      let currIndex = ORDER_OF_CH[index];
      const ROW_X_COL_ONE = $(`.column-1`, `.row-${currIndex}`).html();
      const ROW_X_COL_TWO = $(`.column-2`, `.row-${currIndex}`).html();
      const ROW_X_COL_THREE = $(`.column-3`, `.row-${currIndex}`).html();
      const ROW_X_COL_FOUR = $(`.column-4`, `.row-${currIndex}`).html();
      const ROW_X_COL_FIVE = $(`.column-5`, `.row-${currIndex}`).html();
      const ROW_X_COL_SIX = $(`.column-6`, `.row-${currIndex}`).html();
      const ROW_X_COL_SEVEN = $(`.column-7`, `.row-${currIndex}`).html();
      const ROW_X_COL_EIGHT = $(`.column-8`, `.row-${currIndex}`).html();
      const ROW_X_COL_NINE = $(`.column-9`, `.row-${currIndex}`).html();
      const ROW_X_COL_TEN = $(`.column-10`, `.row-${currIndex}`).html();
      const ROW_X_COL_ELEVEN = $(`.column-11`, `.row-${currIndex}`).html();

      const CH_CH = ROW_X_COL_ONE.split(' ');
      const CH_1 = ROW_X_COL_TWO.split(' ');
      const CH_2 = ROW_X_COL_THREE.split(' ');
      const CH_3 = ROW_X_COL_FOUR.split(' ');
      const CH_4 = ROW_X_COL_FIVE.split(' ');
      const CH_5 = ROW_X_COL_SIX.split(' ');
      const CH_6 = ROW_X_COL_SEVEN.split(' ');
      const CH_7 = ROW_X_COL_EIGHT.split(' ');
      const CH_8 = ROW_X_COL_NINE.split(' ');
      const CH_9 = ROW_X_COL_TEN.split(' ');
      const CH_0 = ROW_X_COL_ELEVEN.split(' ');

      const BOSS_PTRN = /\w*(?=\.)/g;
      const FL_10_BOSS_ONE = CH_1[1].match(BOSS_PTRN);
      const FL_20_BOSS_ONE = CH_2[1].match(BOSS_PTRN);
      const FL_30_BOSS_ONE = CH_3[1].match(BOSS_PTRN);
      const FL_40_BOSS_ONE = CH_4[1].match(BOSS_PTRN);
      const FL_50_BOSS_ONE = CH_5[1].match(BOSS_PTRN);
      const FL_50_BOSS_TWO = CH_5[8].match(BOSS_PTRN);
      const FL_60_BOSS_ONE = CH_6[1].match(BOSS_PTRN);
      const FL_60_BOSS_TWO = CH_6[8].match(BOSS_PTRN);
      const FL_70_BOSS_ONE = CH_7[1].match(BOSS_PTRN);
      const FL_70_BOSS_TWO = CH_7[8].match(BOSS_PTRN);
      const FL_80_BOSS_ONE = CH_8[1].match(BOSS_PTRN);
      const FL_80_BOSS_TWO = CH_8[8].match(BOSS_PTRN);
      const FL_90_BOSS_ONE = CH_9[1].match(BOSS_PTRN);
      const FL_90_BOSS_TWO = CH_9[8].match(BOSS_PTRN);
      const FL_100_BOSS_ONE = CH_0[1].match(BOSS_PTRN);
      const FL_100_BOSS_TWO = CH_0[8].match(BOSS_PTRN);
      const FL_100_BOSS_THREE = CH_0[15].match(BOSS_PTRN);

      const FL_10_ONE_EMOJI = getETemoji(FL_10_BOSS_ONE[0]);
      const FL_20_ONE_EMOJI = getETemoji(FL_20_BOSS_ONE[0]);
      const FL_30_ONE_EMOJI = getETemoji(FL_30_BOSS_ONE[0]);
      const FL_40_ONE_EMOJI = getETemoji(FL_40_BOSS_ONE[0]);
      const FL_50_ONE_EMOJI = getETemoji(FL_50_BOSS_ONE[0]);
      const FL_50_TWO_EMOJI = getETemoji(FL_50_BOSS_TWO[0]);
      const FL_60_ONE_EMOJI = getETemoji(FL_60_BOSS_ONE[0]);
      const FL_60_TWO_EMOJI = getETemoji(FL_60_BOSS_TWO[0]);
      const FL_70_ONE_EMOJI = getETemoji(FL_70_BOSS_ONE[0]);
      const FL_70_TWO_EMOJI = getETemoji(FL_70_BOSS_TWO[0]);
      const FL_80_ONE_EMOJI = getETemoji(FL_80_BOSS_ONE[0]);
      const FL_80_TWO_EMOJI = getETemoji(FL_80_BOSS_TWO[0]);
      const FL_90_ONE_EMOJI = getETemoji(FL_90_BOSS_ONE[0]);
      const FL_90_TWO_EMOJI = getETemoji(FL_90_BOSS_TWO[0]);
      const FL_100_ONE_EMOJI = getETemoji(FL_100_BOSS_ONE[0]);
      const FL_100_TWO_EMOJI = getETemoji(FL_100_BOSS_TWO[0]);
      const FL_100_THREE_EMOJI = getETemoji(FL_100_BOSS_THREE[0]);
      `${UPDATE_DATE[0]}${UPDATE_DATE[1]}${UPDATE_DATE[2]}${UPDATE_DATE[3]} - ${
        UPDATE_DATE[5]
      }${UPDATE_DATE[6]}`;

      pages.push([
        [`\nChannel ${CH_CH}`],
        [
          `**FL10**: ${FL_10_ONE_EMOJI}\n\n**FL20**: ${FL_20_ONE_EMOJI}\n\n**FL30**: ${FL_30_ONE_EMOJI}\n\n**FL40**: ${FL_40_ONE_EMOJI}\n\n**FL50**: ${FL_50_ONE_EMOJI} ${FL_50_TWO_EMOJI}\n\n**FL60**: ${FL_60_ONE_EMOJI} ${FL_60_TWO_EMOJI}\n\n**FL70**: ${FL_70_ONE_EMOJI} ${FL_70_TWO_EMOJI}\n\n**FL80**: ${FL_80_ONE_EMOJI} ${FL_80_TWO_EMOJI}\n\n**FL90**: ${FL_90_ONE_EMOJI} ${FL_90_TWO_EMOJI}\n\n**FL100**: ${FL_100_ONE_EMOJI} ${FL_100_TWO_EMOJI} ${FL_100_THREE_EMOJI}\n\n${
            UPDATE_DATE[0]
          } ${UPDATE_DATE[1]} ${UPDATE_DATE[2]} ${UPDATE_DATE[3]} - ${UPDATE_DATE[5]} ${
            UPDATE_DATE[6]
          }\n\n*powered by:🦋${process.env.SRC}*`
        ]
      ]);
    }
    let page = 1;
    const mobileEmbed = `**${pages[page - 1][0]}**\n\n${pages[page - 1][1]}`;
    message.channel.send(mobileEmbed).then(async msg => {
      try {
        await msg.react('⏪');
        await msg.react('⏩');
        await msg.react('🗑');
        const prevFilter = (reaction, user) => {
          return reaction.emoji.name === '⏪' && user.id === message.author.id;
        };
        const nextFilter = (reaction, user) => {
          return reaction.emoji.name === '⏩' && user.id === message.author.id;
        };
        const deleteFilter = (reaction, user) => {
          return reaction.emoji.name === '🗑' && user.id === message.author.id;
        };
        const prev = msg.createReactionCollector(prevFilter, {
          time: 60000
        });
        const next = msg.createReactionCollector(nextFilter, {
          time: 60000
        });
        const del = msg.createReactionCollector(deleteFilter, {
          time: 60000
        });
        del.on('collect', r => {
          msg.delete();
          message.delete();
        });
        prev.on('collect', r => {
          if (page === 1) return;
          page--;
          let mobileEmbed = `**${pages[page - 1][0]}**\n\n${pages[page - 1][1]}`;
          msg.edit(mobileEmbed);
        });
        next.on('collect', r => {
          if (page === pages.length) return;
          page++;
          let mobileEmbed = `**${pages[page - 1][0]}**\n\n${pages[page - 1][1]}`;
          msg.edit(mobileEmbed);
        });
      } catch (e) {
        console.log(e);
      }
    });
  } else if (cmdToken === 'et' && argTokens.length > 0) {
    message.reply(
      'Hello~ I can only provide ET information between floors 1-100 on the GLOBAL servers. Try typing the following command instead ```$et```'
    );
  }
};

module.exports = {
  getET: getET,
  getETemoji: getETemoji
};
