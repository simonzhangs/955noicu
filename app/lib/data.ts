const companylist: string = `Afterpay - 上海
Airbnb - 北京
Amazon - 北京/上海
AMD - 上海
Apple - 北京/上海
ArcSoft - 杭州
ARM - 上海
Autodesk - 北京/上海
Booking - 上海
Calix - 南京
Canva - 北京/武汉
Cisco - 北京/上海/杭州/苏州
Citrix - 南京
Coolapk (酷安) - 北京/深圳
Coupang - 北京/上海
CSTC (花旗金融) - 上海
Dell - 上海
Douban (豆瓣) - 北京
Duolingo - 北京
eBay - 上海
eHealth - 厦门
Electronic Arts - 上海
EMC - 上海
EPAM Systems - 上海/深圳/苏州/成都
Ericsson - 上海
Flexport - 上海/深圳
FreeWheel - 北京
GE - 上海
Google - 北京/上海
Grab - 北京
Honeywell - 上海
HP - 上海
HSBC - 上海/广州/西安
Hulu - 北京
IBM (GBS除外) - 北京/上海
iHerb - 上海
Intel - 北京/上海/深圳
LeetCode - 上海
LEGO Group - 上海
Linkedin - 北京
Micro Focus - 上海
Microsoft - 北京/上海/苏州
MicroStrategy - 杭州
Morgan Stanley (IT) - 上海
National Instruments - 上海
Nike - 上海
Nokia - 上海/南京/杭州
Nomura - 上海
NVIDIA - 北京/上海
Optiver - 上海
Oracle - 上海
PayPal - 上海
Philips - 上海/苏州
Pivotal - 北京/上海
Qualcomm - 北京/上海
Rakuten - 上海/大连
Red Hat - 北京/上海/深圳/西安/remote
RingCentral - 厦门/杭州/香港
Rippling - 北京/上海
SanDisk - 上海
SAP - 上海
SmartNews - 北京/上海
Snap - 北京/深圳
State Street - 杭州
SUSE - 北京/上海/深圳
The Trade Desk - 上海/深圳
ThoughtWorks - 西安/北京/深圳/成都/武汉/上海/香港
Trend Micro - 南京
Tubi - 北京
TuSimple - 北京/上海
Two Sigma - 上海
Ubisoft - 上海
Unity - 上海
Vipshop (唯品会) - 上海
VMware - 北京/上海
WeWork - 上海
Wish - 上海
Works Applications - 上海
XMind - 深圳
Zhihu (知乎) - 北京
Zoom - 合肥/杭州/苏州`

interface Company {
    name: string;
    location: string[];
}

export const companies: Company[] = companylist.split('\n').map(line => {
    const [name, location] = line.split(' - ');
    return { name: name.trim(), location: location.trim().split('/') };
});