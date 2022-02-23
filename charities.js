const charities = [
  {
    "Charity": "live action",
    "Homepage Link": "https://liveaction.org",
    "Donation Link": "https://give.liveaction.org/",
    "Country": "usa"
  },
  {
    "Charity": "life legal defense foundation",
    "Homepage Link": "https://lifelegaldefensefoundation.org/",
    "Donation Link": "https://lifelegaldefensefoundation.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "american life league",
    "Homepage Link": "https://www.all.org/",
    "Donation Link": "https://americanlifeleague.revv.co/donate?utm_source=website&utm_campaign=all",
    "Country": "usa"
  },
  {
    "Charity": "national right to life",
    "Homepage Link": "https://www.nrlc.org/",
    "Donation Link": "https://www.nrlc.org/donate",
    "Country": "usa"
  },
  {
    "Charity": "march for life",
    "Homepage Link": "https://marchforlife.org/",
    "Donation Link": "https://marchforlife.org/give-today/",
    "Country": "usa"
  },
  {
    "Charity": "students for life",
    "Homepage Link": "https://studentsforlife.org",
    "Donation Link": "https://studentsforlifeofamerica.givingfuel.com/supporters",
    "Country": "usa"
  },
  {
    "Charity": "susan b. anthony list",
    "Homepage Link": "https://www.sba-list.org/",
    "Donation Link": "https://secure.anedot.com/sba/donate",
    "Country": "usa"
  },
  {
    "Charity": "let them live",
    "Homepage Link": "https://www.letthemlive.org/",
    "Donation Link": "https://donate.letthemlive.org/",
    "Country": "usa"
  },
  {
    "Charity": "concerned women for america",
    "Homepage Link": "https://concernedwomen.org",
    "Donation Link": "https://concernedwomen.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "human life international",
    "Homepage Link": "https://www.hli.org/about-us/",
    "Donation Link": "https://www.hli.org/donations/",
    "Country": "usa"
  },
  {
    "Charity": "save the storks",
    "Homepage Link": "https://www.savethestorks.com",
    "Donation Link": "https://donate.savethestorks.com/donate",
    "Country": "usa"
  },
  {
    "Charity": "prolife across america",
    "Homepage Link": "https://prolifeacrossamerica.org/",
    "Donation Link": "https://prolifeacrossamerica.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "rachel's vineyard",
    "Homepage Link": "https://www.rachelsvineyard.org/",
    "Donation Link": "https://www.rachelsvineyard.org/donate/index.aspx",
    "Country": "usa"
  },
  {
    "Charity": "mercy multiplied",
    "Homepage Link": "https://mercymultiplied.com/",
    "Donation Link": "https://mercymultiplied.com/donate",
    "Country": "usa"
  },
  {
    "Charity": "sisters of life",
    "Homepage Link": "https://sistersoflife.org/",
    "Donation Link": "https://sistersoflife.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "anglicans for life",
    "Homepage Link": "https://anglicansforlife.org/",
    "Donation Link": "https://www.myegiving.com/App/Form/3c2cedbe-2d1e-4db4-b8ee-adb08d727d8a",
    "Country": "usa"
  },
  {
    "Charity": "american family association",
    "Homepage Link": "https://afa.net/",
    "Donation Link": "https://afa.net/support-us/make-a-donation/",
    "Country": "usa"
  },
  {
    "Charity": "heartbeat international",
    "Homepage Link": "https://heartbeatinternational.org",
    "Donation Link": "https://heartbeatinternational.org/donate",
    "Country": "usa"
  },
  {
    "Charity": "care net",
    "Homepage Link": "https://www.care-net.org/",
    "Donation Link": "https://www.care-net.org/donate",
    "Country": "usa"
  },
  {
    "Charity": "operation save america",
    "Homepage Link": "https://www.operationsaveamerica.org/",
    "Donation Link": "https://store.operationsaveamerica.org/donate.asp",
    "Country": "usa"
  },
  {
    "Charity": "american center for law & justice",
    "Homepage Link": "https://aclj.org/",
    "Donation Link": "https://aclj.org/donate",
    "Country": "usa"
  },
  {
    "Charity": "the american tfp",
    "Homepage Link": "https://www.tfp.org/",
    "Donation Link": "https://www.tfp.org/act/donate/",
    "Country": "usa"
  },
  {
    "Charity": "americans united for life",
    "Homepage Link": "https://aul.org/",
    "Donation Link": "https://aul.org/give/",
    "Country": "usa"
  },
  {
    "Charity": "bound4life",
    "Homepage Link": "https://www.bound4life.com/",
    "Donation Link": "https://www.bound4life.com/give-now",
    "Country": "usa"
  },
  {
    "Charity": "virginia society for human life",
    "Homepage Link": "https://vshl.org/",
    "Donation Link": "https://vshl.org/ways-to-donate",
    "Country": "usa"
  },
  {
    "Charity": "the family foundation of virginia",
    "Homepage Link": "https://www.familyfoundation.org/",
    "Donation Link": "https://www.familyfoundation.org/contribute",
    "Country": "usa"
  },
  {
    "Charity": "secular pro-life",
    "Homepage Link": "https://secularprolife.org/",
    "Donation Link": "https://secularprolife.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "population research institute",
    "Homepage Link": "https://www.pop.org/",
    "Donation Link": "https://www.pop.org/donate/standard/",
    "Country": "usa"
  },
  {
    "Charity": "priests for life",
    "Homepage Link": "https://www.priestsforlife.org/",
    "Donation Link": "https://www.priestsforlife.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "democrats for life of america",
    "Homepage Link": "https://www.democratsforlife.org/",
    "Donation Link": "https://support.democratsforlife.org/donate",
    "Country": "usa"
  },
  {
    "Charity": "pro-life alliance of gays and lesbians",
    "Homepage Link": "https://www.plagal.org/",
    "Donation Link": "https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=04-3274668&vlrStratCode=L4OcY5oTJtFLvM46rCZzBvHPCCx1wf5dBLkxh5Jpar5OBk%2bsvLbjG1vQGefDRZuE",
    "Country": "usa"
  },
  {
    "Charity": "american solidarity party",
    "Homepage Link": "https://www.solidarity-party.org/",
    "Donation Link": "https://www.solidarity-party.org/support",
    "Country": "usa"
  },
  {
    "Charity": "republican party",
    "Homepage Link": "https://www.gop.com/",
    "Donation Link": "https://secure.winred.com/rnc/contribute",
    "Country": "usa"
  },
  {
    "Charity": "40 days for life",
    "Homepage Link": "https://www.40daysforlife.com/en/",
    "Donation Link": "https://www.40daysforlife.com/en/donate.aspx",
    "Country": "usa"
  },
  {
    "Charity": "national institute of family and life advocates",
    "Homepage Link": "https://nifla.org/",
    "Donation Link": "https://nifla.org/donate-now/",
    "Country": "usa"
  },
  {
    "Charity": "pro-life action league",
    "Homepage Link": "https://prolifeaction.org/",
    "Donation Link": "https://prolifeaction.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "united families international",
    "Homepage Link": "https://www.unitedfamilies.org/",
    "Donation Link": "https://www.unitedfamilies.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "national pro-life religious council",
    "Homepage Link": "https://www.nprcouncil.org/",
    "Donation Link": "http://www.nprcouncil.org/join.htm",
    "Country": "usa"
  },
  {
    "Charity": "justice house of prayer",
    "Homepage Link": "https://www.jhopdc.com/",
    "Donation Link": "https://www.jhopdc.com/donate",
    "Country": "usa"
  },
  {
    "Charity": "focus on the family",
    "Homepage Link": "https://www.focusonthefamily.com/",
    "Donation Link": "https://www.focusonthefamily.com/donate",
    "Country": "usa"
  },
  {
    "Charity": "texas alliance for life",
    "Homepage Link": "https://www.texasallianceforlife.org/",
    "Donation Link": "https://www.texasallianceforlife.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "georgia right to life",
    "Homepage Link": "https://grtl.org/",
    "Donation Link": "http://www.grtl.org/donate/",
    "Country": "usa"
  },
  {
    "Charity": "family research council",
    "Homepage Link": "https://www.frc.org/",
    "Donation Link": "https://www.frc.org/donate",
    "Country": "usa"
  },
  {
    "Charity": "feminists for life",
    "Homepage Link": "https://www.feministsforlife.org/",
    "Donation Link": "https://www.feministsforlife.org/support/",
    "Country": "usa"
  },
  {
    "Charity": "silent no more",
    "Homepage Link": "https://www.silentnomoreawareness.org/",
    "Donation Link": "https://www.silentnomoreawareness.org/join/",
    "Country": "usa"
  },
  {
    "Charity": "survivors of the abortion holocaust",
    "Homepage Link": "https://www.survivors.la/",
    "Donation Link": "https://www.survivors.la/donate",
    "Country": "usa"
  },
  {
    "Charity": "marche pour la vie",
    "Homepage Link": "https://enmarchepourlavie.fr/",
    "Donation Link": "https://enmarchepourlavie.fr/faire-un-don/",
    "Country": "france"
  },
  {
    "Charity": "marsz dla zycia i rodziny",
    "Homepage Link": "https://marsz.org/",
    "Donation Link": "https://marsz.org/wspieram/",
    "Country": "poland"
  },
  {
    "Charity": "prolife europe",
    "Homepage Link": "https://prolifeeurope.org/",
    "Donation Link": "https://prolifeeurope.org/,
    "Country": "transnational",
  }
]
