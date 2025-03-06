const { Permissions, MessageEmbed } = require("discord.js");
const {admin} = require("../ayarlar.json");
module.exports = {
    name:"Yardım",
    description: 'Yardım Menüsü',
    type:'CHAT_INPUT',
    options:[],
    run: async (client, interaction) => {

        
          const embed = new MessageEmbed()
            .setAuthor({
                name: "Kagn Komutlar",
                iconURL: client.user.avatarURL({ dynamic: true, size: 1024 })
            })
            .setThumbnail(client.user.avatarURL({ dynamic: true, size: 1024 }))
            .addField("Kullanıcı Avatar", "`/avatar <kullanıcı>`", false)
            .addField("Kullanıcı Banner", "`/banner <kullanıcı>`", false)
            .addField("Kullanıcı Bilgi", "`/kullanıcıbilgi <kullanıcı>`", false)
            .addField("Sunucu Hakkında Bilgi", "`/sunucubilgi`", false)
            .addField("Geliştirici :", "`Kagn`", false)
            .addField("Bilgilendirme :", " Eğer Bu Bot Sunucu Sahibi Tarafından Yapılmış Gibi Gösteriliyorsa Lütfen `@kagn` İle İletişime Geçin.", false)
            .setColor("#2ACAEA");

        interaction.reply({ embeds: [embed] });
           
  }
};
