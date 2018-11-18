const discord = require('discord.js')
const gPrefix = '!'
const bToken = process.env.TOKEN
const bId = '513224333884391445'

const bot = new discord.Client()

//---------------------------------------------
const sColor = "#77B255"
const fColor = "#DD2E44"
var rColor = "no"



//---------------------------------------------

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`)
  bot.user.setActivity(`with settings...`)
})

bot.on("message", async message =>{
  let noUser = new discord.RichEmbed()
  .setColor(fColor)
  .setTitle(`Error`)
  .setDescription(`Either you didn't specify a member or I couldn't find that member.`)

  let noQuestion = new discord.RichEmbed()
  .setColor(fColor)
  .setTitle(`Error`)
  .setDescription(`You didn't specify a question.`)

  let notNSFW = new discord.RichEmbed()
  .setColor(fColor)
  .setTitle(`Error`)
  .setDescription(`That command can only be used in an NSFW channel.`)

  if(message.author.bot) return
  if(message.channel.type === "dm") return
  var rColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  let prefix = gPrefix
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1)
  let pingEmoji = ""
  let bPing = bot.ping
  //
  if(cmd === `${prefix}help`){
    let hEmbed = new discord.RichEmbed()
    .setTitle(`Help`)
    .setDescription(`Help, information, and links for ${bot.user.username}.`)
    .addField(`Proudly Created by`,`Mist#3296 with the ID 506645322139697153`)
    .addField(`prefix`,`The prefix is **${prefix}**`)
    .addField(`ping`,`Pong, ${bPing} is the bot's ping :ping_pong:`)
    .setColor(rColor)
    .addField(`--Server Commands--`,`Server Commands you can use`)
    .addField(`help`,`Brings this nifty message up`)
    .addField(`ping`,`Tells you how fast the bot's connection is`)
    .addField(`gay [user]`,`Tells you how gay [user] is`)
    .addField(`8ball [question]`,`Answers [question] with an 8ball answer`)
    .addField(`cf`,`Does a coinflip`)
    .addField(`slap [user]`,`Slaps [user] and shows a funny gif`)
    .addField(`kiss [user]`,`Kisses [user] and shows a cute gif`)
    .addField(`color`,`Generates a random hex color`)
    .addField(`nsfwhelp`,`Shows you the help message for NSFW commands`)

    //.setThumbnail(`https://picsum.photos/200/300/?random`)
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator} with the ID of ${message.author.id}`)

    return message.channel.send(hEmbed)
  }
//
  if(cmd === `${prefix}8ball`){
    var answers = ["uncertain","yes","no","probably","surely","surely not","probably not"]

    var rA = answers[Math.floor(Math.random() * answers.length)];

    let q8Embed = new discord.RichEmbed()
    .setColor(sColor)
    .setDescription(`Magic 8Ball says: ${rA}`)

    message.channel.send(q8Embed)
  }
//
  if(cmd === `${prefix}ping`){
    let pEmbed = new discord.RichEmbed()
    .setTitle("Ping")
    .setColor(rColor)
    .setDescription(`Pong, ${bPing} is the bot's ping :ping_pong:`)
    message.channel.send(pEmbed)
  }
//
  if(cmd === `${prefix}color`){
    let rcEmbed = new discord.RichEmbed()
    .addField(`Random Color`, `${rColor} is your color`)
    .setColor(rColor)
    message.channel.send(rcEmbed)
  }
//
  if(cmd === `${prefix}gay`){
  let gUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!gUser) return message.channel.send(noUser)
  let gPercent = Math.floor(Math.random() * 101);
  let gEmbed = new discord.RichEmbed()
  gEmbed.setColor(sColor)
  gEmbed.setDescription(`${gUser} has ${gPercent}% gay!`)
  return message.channel.send(gEmbed)
  }
//
  if(cmd === `${prefix}cf`){
    var answers = ["heads","tails"]

    var cfA = answers[Math.floor(Math.random() * answers.length)];

    let cfEmbed = new discord.RichEmbed()
    .setColor(sColor)
    .setDescription(`It landed on: ${cfA}`)

    message.channel.send(cfEmbed)
  }
//
  if(cmd === `${prefix}slap`){
    let slUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if(!slUser) return message.channel.send(noUser)
    if(slUser.id === message.author.id) return
    if(slUser.bot) return
    var gifs = [
    "https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif",
    "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
    "https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif",
    "https://media.giphy.com/media/yfrwZqRvJ5WFy/giphy.gif",
    'https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif',
    'https://media.giphy.com/media/3ohc172gBGYWvP0gNi/giphy.gif',
    'https://media.giphy.com/media/10Am8idu3qBYRy/giphy.gif',
    'https://media.giphy.com/media/iUgoB9zOO0QkU/giphy.gif',
    'https://media.giphy.com/media/fseRXWw5ScmxsEOwlM/giphy.gif',
    'https://media.giphy.com/media/1wr1JM28YV5JvsLTtP/giphy.gif',
  ]
    var sA = gifs[Math.floor(Math.random() * gifs.length)];
    let slEmbed = new discord.RichEmbed()
      .setColor(sColor)
      .setDescription(`${slUser} just got slapped by ${message.author}`)
      .setImage(sA)
      return message.channel.send(slEmbed)
  }
//

if(cmd === `${prefix}kiss`){
  let slUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!slUser) return message.channel.send(noUser)
  if(slUser.id === message.author.id) return
  if(slUser.bot) return
  var gifs = [
  "https://media.giphy.com/media/j98SQB5Y7WqnC/giphy.gif",
  "https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif",
  "https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif",
  "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
  'https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif',
  'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
  'https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif',
  'https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif',
]
  var sA = gifs[Math.floor(Math.random() * gifs.length)];
  let slEmbed = new discord.RichEmbed()
    .setColor(sColor)
    .setDescription(`${slUser} just got kissed by ${message.author}`)
    .setImage(sA)
    return message.channel.send(slEmbed)
}
//
if(cmd === `${prefix}nsfwhelp`){
  let nsfwhelpEmbed = new discord.RichEmbed()
  .setTitle(`NSFW Help`)
  .setColor(rColor)
  .addField(`ass`,`self explanatory`)
  .addField(`lesbian`,`self explanatory`)
  .addField(`gayp`,`self explanatory`)
  .addField(`boobs`,`self explanatory`)
  .addField(`pussy`,`self explanatory`)
  .addField(`hentai`,`self explanatory`)
  .addField(`coming soon`,`self explanatory`)
  .addField(`coming soon`,`self explanatory`)

  //.setThumbnail(`https://picsum.photos/200/300/?random`)
  .setFooter(`Requested by ${message.author.username}#${message.author.discriminator} with the ID of ${message.author.id}`)

  return message.channel.send(nsfwhelpEmbed)
}
//
if(cmd === `${prefix}ass`){
  if(!message.channel.nsfw) return message.channel.send(notNSFW)
  var assImgs = [
  "https://i.ebayimg.com/images/g/FAsAAOSwI8laNNYA/s-l300.jpg",
  "https://imagesyoulike.com/images/00000/32x24/09433.jpg",
  "https://i.etsystatic.com/9090182/r/il/507ec2/643884450/il_fullxfull.643884450_fixw.jpg",
  "https://steamuserimages-a.akamaihd.net/ugc/386541041114892682/6BE95151C5F67705EAA9DD14DF71B2ED9E7894C5/",
  'https://i.pinimg.com/originals/2d/e7/9a/2de79aefdc5192f2a4e43234fa3e34d3.jpg',
  'https://images-cdn.9gag.com/photo/arOMO9p_700b.jpg',
  'https://i.ebayimg.com/images/g/NY0AAOSwZjJU6ifa/s-l300.jpg',
  'https://media.giphy.com/media/tAK06DtFH4KWc/giphy.gif',
  'http://picture-cdn.wheretoget.it/xag0mr-l-610x610-pants-sexy-skin+tight-ass.jpg',
  'https://image.dhgate.com/0x0s/f2-albu-g7-M00-D5-A7-rBVaSlq_fvOAJHZTAAKb0XdS9RU113.jpg/sexy-ass-carry-buttock-jeans-female-fitness.jpg',
  'https://imagesyoulike.com/images/00000/32x24/12310.jpg',
  'https://ae01.alicdn.com/kf/HTB1igjLLpXXXXcRXpXXq6xXFXXXB/sexy-hot-ass-girl-model-nice-hip-beauty-fabric-poster-HD-Wallpaper-36-24-inches-20.jpg_640x640.jpg',
  'https://i.pinimg.com/originals/3d/36/5c/3d365c36b11f7c63586f3010e9683624.jpg',
  'https://i.pinimg.com/originals/1a/db/7f/1adb7f101ca4a4f35c25686a3f597336.jpg',
  'https://i.pinimg.com/originals/02/cc/42/02cc428d109b4369468192b7e30d9bd4.jpg',
  'https://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/1/sexy-ass-butt-biker-girl-rock-grunge-serious-music-style-fashion-love-amazing-funny-pretty-twentyfirst-centuryart.jpg',
]
  var aA = assImgs[Math.floor(Math.random() * assImgs.length)];
  let aEmbed = new discord.RichEmbed()
    .setColor(sColor)
    .setImage(aA)
    return message.channel.send(aEmbed)
}
//
if(cmd === `${prefix}lesbian`){
  if(!message.channel.nsfw) return message.channel.send(notNSFW)
  var lesImgs = [
  'http://g.udn.com.tw/upfiles/B_HS/hsr123/PSN_PHOTO/884/f_12332884_1.jpg',
  'https://cdn-pics.pornhd.com/pornhd/header/category/34_phd_category_big_lesbian-porn.jpg',
  'https://cdnhw.private.com/content/contentthumbs/485334.jpg',
  'http://freelesbianporn.xxx/images/large/784.jpg',
  'https://img.joysporn.com/contents/videos_screenshots/14000/14394/600x338/13.jpg',
  'https://cdnhw.private.com/content/contentthumbs/485269.jpg',
  'http://ikissgirls.com/images/content/taylor-vixen-sexy-lesbian-porn-emily-addison.jpg'
]
  var lA = lesImgs[Math.floor(Math.random() * lesImgs.length)];
  let lesEmbed = new discord.RichEmbed()
    .setColor(sColor)
    .setImage(lA)
    return message.channel.send(lesEmbed)
}
//
if(cmd === `${prefix}gayp`){
  if(!message.channel.nsfw) return message.channel.send(notNSFW)
  var gayImgs = [
  'http://men720p.com/uploads/thumbs/98498498tt.jpg',
  'http://men720p.com/uploads/thumbs/1288801628_nicky-marcelo2.jpg',
  'https://www.queermenow.net/blog/wp-content/uploads/2016/11/Andy-Star-Marcelo-Mastro-Hugo-Gay-Porn-BangBangBoys-Bareback-Train-Fuck.jpg',
  'http://putinho.net/wp-content/uploads/2015/03/image067.jpg',
  'https://t.boyfriendtv.com/thumbs/bftv-320x240/2018-11/db/aab4f88dbb21953d911f7b8b2ddbf0fc7.mp4-320x240-4.jpg',
  'https://ci.phncdn.com/videos/201612/21/99780092/original/(m=eaf8Ggaaaa)(mh=2qlmFdL9YmTB_Xxt)8.jpg',
  'https://www.hdgayporn.xxx/images/videos/0471/1106/main.jpg',
  'http://gaymanporn.org/uploads/posts/2017-12/1513584522_1731_gaymanporn_org.jpg'

]
  var gA = gayImgs[Math.floor(Math.random() * gayImgs.length)];
  let gayEmbed = new discord.RichEmbed()
    .setColor(sColor)
    .setImage(gA)
    return message.channel.send(gayEmbed)
  }
//
if(cmd === `${prefix}boobs`){
  if(!message.channel.nsfw) return message.channel.send(notNSFW)
  var bbImgs = [
  'http://cdn.hdpornpictures.com/2014-12-25/286377_12.jpg',
  'http://thefappening.so/wp-content/uploads/2016/08/boobs-july.jpg',
  'http://cdn02.nakedgirlsax.com/5120/98-world-best-nude-big-boobs-hd-wallpaper.jpg',
  'http://cdn09.nakedgirlsax.com/5120/93-mundo-mejor-chicas-hermosas-pic-desnuda.jpg',
  'http://i.imgur.com/n3e68.jpg',
  'http://zoomgirls.net/download/amber-sym-3-1600x900.jpg',
  'https://ftopx.com/images/201212/ftop.ru_43089.jpg',
  'https://ftopx.com/large/201212/43090.jpg'
]
  var bbA = bbImgs[Math.floor(Math.random() * bbImgs.length)];
  let bbEmbed = new discord.RichEmbed()
    .setColor(sColor)
    .setImage(bbA)
    return message.channel.send(bbEmbed)
  }
//
// if(cmd === `${prefix}porn`){
//   if(!message.channel.nsfw) return message.channel.send(notNSFW)
//   var pornImgs = [
//   'https://www.pornhub.com/view_video.php?viewkey=ph5bc2c858c6364'
// ]
//   var pornA = pornImgs[Math.floor(Math.random() * pornImgs.length)];
//   let pornEmbed = new discord.RichEmbed()
//     .setColor(sColor)
//     .setImage("https://vgy.me/Oq22Cy.png")
//     .setURL(pornA)
//     .setTitle("Click here for the video")
//     return message.channel.send(pornEmbed)
//   }

})



bot.login(bToken)