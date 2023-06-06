require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "hidetag",
  alias: ["htag", "ping"],
  desc: "Tag all group member without @ mention",
  category: "Group",
  usage: "htag <your message>",
  react: "🍁",
  start: async (
    Miku,
    m,
    { text, prefix, isAdmin, participants, args }
  ) => {
    if (!isAdmin)
      return Miku.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

      var message = "*『 À votre attention svp : 』*";

    if(m.quoted){
        message = "*『 À votre Attention svp 』*";
      }
    else if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ''}`;
    }
    else if(args[0]){
      message = args.join(' ');
    }
    else if(text ===''){
      message = "*『 À votre Attention svp 』*";
    }
   
    else{
      message = "*『 À votre Attention svp 』*";
    }
    await Miku.sendMessage(
      m.from,
      { text: message, mentions: participants.map((a) => a.id) },
      { quoted: m }
    );
  },
};
