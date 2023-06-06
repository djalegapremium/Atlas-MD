module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1/2/3/4/5/6/7/8",
  react: "🎀",
  start: async (Miku, m, { text, prefix ,modStatus}) => {
    let txt = `       『  *Bot Character list*  』\n\n\n_0 - Atlas MD_\n\n_1 - Power MD_\n\n_2 - Makima MD_\n\n_3 - Rias Gremory_\n\n_4 - Zero Two_\n\n_5 - Chika MD_\n\n_6 - Miku MD_\n\n_7 - Marin Kitagawa_\n\n_8 - DjalegaXd_\n\nExample: *${prefix}setchar 0*\n`;

    let botLogos = [
      "https://c4.wallpaperflare.com/wallpaper/523/235/790/anime-anime-girls-red-eyes-wallpaper-preview.jpg",
      "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp11253602.jpg",
      "https://images5.alphacoders.com/126/1264439.jpg",
      "https://c4.wallpaperflare.com/wallpaper/280/659/612/highschool-dxd-gremory-rias-wallpaper-preview.jpg",
      "https://images3.alphacoders.com/949/949253.jpg",
      "https://images4.alphacoders.com/100/1002134.png",
      "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp10524620.jpg",
      "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp10472416.png",
      "https://wallpapercave.com/uwp/uwp3783901.jpeg",
    ];

    let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];
   
    let sections = [] 
    let chars = [`Atlas MD`, `Power MD`, `Makima MD`, `Rias Gremory`, `Zero Two`, `Chika MD`, `Miku MD`, `Marin Kitagawa`,`DjalegaXd`]
    let buttonDesc =[`Set bot character to Atlas MD`, `Set bot character to Power MD`, `Set bot character to Makima MD`, `Set bot character to Rias Gremory`, `Set bot character to Zero Two`, `Set bot character to Chika MD`, `Set bot character to Miku MD`, `Set bot character to Marin Kitagawa`]
    let buttonTexts = ['-setchar 0', '-setchar 1', '-setchar 2', '-setchar 3', '-setchar 4', '-setchar 5', '-setchar 6', '-setchar 7','-setchar 8']
    
    for (let i = 0; i < chars.length; i++) {
        const list = {title: `${prefix}setchar ${i}`,
        rows: [
        
                {
                 title: `${chars[i]}`, 
                 rowId: `${buttonTexts[i]}`,
                 description: `${buttonDesc[i]}`
                }
                ]
             }
                sections.push(list)
            }


    let buttonMessage = {
      //image: { url: randomimage },
      text: txt,
      footer: `*${botName}*`,
      buttonText: "Choose Character",
      sections,
    };

    Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
