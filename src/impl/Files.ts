const CONFIG_FILE = `
{
  "dev": false,
  "download.concurrent.timeout": 10000,
  "download.concurrent.tries-per-chunk": 5,
  "download.concurrent.max-tasks": 32,
  "download.pff.timeout": 300000,
  "download.skip-validate": true,
  "download.mirror-tries": 1,
  "show-downloading-item": false,
  "cmc.disable-log4j-config": true,
  "user.name": "",
  "java.simple-search": false,
  "java.search-depth": 5,
  "pff.page-size": 10,
  "pff.cache-root": "",
  "download.mirror": "alicorn-mcbbs-nonfree",
  "interactive.i-have-a-crush-on-al": false,
  "startup-page.name": "Welcome",
  "startup-page.url": "/Welcome",
  "gw-size": "960x540",
  "features.echo": true,
  "memory": 0,
  "main-gc": "g1",
  "para-gc": "pure",
  "launch.fast-reboot": true,
  "assistant": "",
  "hardware-acc": false,
  "goto.animate": true,
  "dev.experimental": false,
  "features.saying": true,
  "features.miniwiki": true,
  "first-run?": true,
  "theme": "Default",
  "theme.background": "Disabled",
  "theme.background.opacity": 20,
  "theme.background.custom": "",
  "features.skin-view-3d": true,
  "alicorn-ping": true,
  "readyboom": true,
  "readyboom.cores": 3,
  "jvm.extra-args": "-Dfile.encoding=UTF-8 -showversion -XX:+IgnoreUnrecognizedVMOptions -XX:+UnlockExperimentalVMOptions",
  "pff.upgrade-mode": "Override",
  "cx.shared-root": ""
}`;

const PONY_CN_LANG = `


# Avatar

https://attachment.mcbbs.net/uc_server/data/avatar/003/28/10/25_avatar_big.jpg

# PrefTheme

Twikie

# LaunchPad

启动游戏

# InstallCore

安装核心

# ContainerManager

管理容器

# ReadyToLaunch

出发吧!

# Version

启动器信息

# AccountManager

帐户管理器

# JavaSelector

Java 选择器

# Statistics

Alicorn 回忆录

# Options

选项

# CrashReportDisplay

启动疑难解答

# PffFront

Pff 软件安装器

# Welcome

欢迎回来

# ServerList

服务器列表

# UtilitiesIndex

实用工具

# TheEndingOfTheEnd

终末之末

# System.EPERM

Alicorn 无法读/写 {Target}，请检查此目录的权限，相关操作已经中止。

# System.Offline

似乎已断开与互联网的连接……

# System.DnDProcessing

处理这些文件中……请稍候，我将尽快完成。

# System.WakeUp

嗨！你叫我吗？

# System.JumpPageWarn.Title

要离开当前页面吗？

# System.JumpPageWarn.Description

你不应该在此时切换页面，这可能导致操作中断或丢失你的修改。\\n仍要切换吗？

# System.JumpPageWarn.Yes

仍然切换

# System.JumpPageWarn.No

留在当前页面

# System.HasUpdate

发现了一个新版本，请稍等，我们正在更新……

# System.UpdateOK

耶！我现在已经是全新的我了！

# System.UpdateFailed

更新失败……不过别担心！你的文件丝毫不受影响。

# System.DevToolsWarn1

等一下！

# System.DevToolsWarn2

如果有人告诉你要在这里输入一些东西，110% 你被骗了。

# System.DevToolsWarn3

在这里输入任何内容都将使你的电脑面临严重风险！

# Beta

实验特性

# MainMenu.UtilitiesIndex

打开实用工具

# MainMenu.GoBack

上一页

# MainMenu.Reload

重新加载

# MainMenu.QuickManageAccount

管理帐户

# MainMenu.Exit

退出

# MainMenu.OpenDevToolsFormal

调试页面

# MainMenu.QuickInstallCore

安装核心

# MainMenu.QuickLaunchPad

启动游戏

# MainMenu.QuickManageContainer

管理容器

# Operating.ClickToDebug

如果希望向他人寻求帮助，请单击我（如果你会用 Devtools 的话）。

# Operating.PleaseWait

请稍等

# Operating.Failed

操作失败……

# Operating.FailedConfirm

好

# Operating.FailedInfo

别担心！你的文件应该没有受到影响。\\n问题的原因如下：\\n{Reason}

# Operating.FailedSayings

为什么会变成这样呢？

嗯……你能给我半分钟吗？让我冷静下……谢谢！

幸亏我们在出现重大事故前阻止了操作。

就差了那么一点点……

别慌，只是一点小麻烦……唔？

问题不大！嗯……但愿如此。

对不起对不起！我刚刚睡着了……

没有哪只小马是完美无缺的，你……能理解吗？

再试试？或许这只是一场噩梦而已……

['{Platform}'==='win32'||'{Platform}'==='darwin']（跺蹄蹄）这就是使用专有软件带来的后果！

['{Platform}'==='win32'||'{Platform}'==='darwin']为什么不试试使用 GNU/Linux 呢？Alicorn 的功能在那里都进行过测试！

# Operating.PleaseWaitDetail

正在进行操作……这可能需要几分钟。

# CoreInfo.Isolated

已检测到版本隔离

# CoreInfo.Sorting.HL

按版本从高到低

# CoreInfo.Sorting.LH

按版本从低到高

# CoreInfo.Sorting.USE

按使用次数

# CoreInfo.Sorting.TIME

按最后访问时间

# CoreInfo.IgnoreCorrupted

不显示损坏核心

# CoreInfo.CannotDestroy

还有其它核心需要此核心，不能摧毁它。

# CoreInfo.StillLoading

加载尚不完全时结果可能不完整或顺序不正确。

# CoreInfo.Used

此核心被你访问过 {Count} 次

# CoreInfo.Introduction.Forge

此核心可以加载 Forge Mod

# CoreInfo.Introduction.Fabric

此核心可以加载 Fabric Mod

# CoreInfo.Introduction.Installer

这不是核心，这是一个整合包安装器

# CoreInfo.CorruptedWarning

无法读取 - 启动引导文件若非遗失，即为无效

# CoreInfo.Reload

重新加载

# CoreInfo.Destroy

摧毁档案

# CoreInfo.Destroy.Yes

是的，摧毁它

# CoreInfo.Destroy.No

不，不要这样做

# CoreInfo.Destroy.Title

要摧毁核心档案 {Name} 吗？

# CoreInfo.Destroy.Content

@HTML摧毁 {Name} 会删除对应的档案，统计信息也会一并移除，<b>该操作不可撤销</b>！\\n要摧毁该核心档案吗？

# CoreInfo.ClearUse

清除访问统计

# CoreInfo.At

核心 {ID} 位于容器 {Container} 上

# CoreInfo.Pff

查看或安装 Mod

# ReadyToLaunch.IsLoginOK

你是否遇到了问题？

# ReadyToLaunch.LoginInstruction

你的登录过程用时过长，你遇到什么问题了吗？\\n\\n如果无法登录，你可以单击「帮助我登录！」来通过其它的方式登录 Microsoft 帐号。

# ReadyToLaunch.ContinueLogin

没有问题，让我继续

# ReadyToLaunch.HelpMeLogin

帮助我登录！

# ReadyToLaunch.LoginStepTitle

继续完成你的登录

# ReadyToLaunch.LoginStep

我们已经在你的浏览器中打开了登录链接，请：\\n\\n1. 在浏览器中完成登录，然后……\\n2. 待登录完成，页面显示空白时，复制地址栏的 URL，并粘贴到这里。

# ReadyToLaunch.AcceptLogin

好

# ReadyToLaunch.URLEnter

输入登录完成后浏览器地址栏的 URL……

# ReadyToLaunch.CPU

{Load}/{Total} CPU

# ReadyToLaunch.RAM

{InUse}/{Total} GiB

# ReadyToLaunch.NoJava

没有设置 Java 运行时（JRE）！游戏将无法启动！

# ReadyToLaunch.InvalidJava

无法读取此 JRE 的信息，无法启动游戏。请尝试重新设置。

# ReadyToLaunch.CouldNotLoad

无法加载 - 该核心可能已经被移动或损毁\\n如果你是通过除启动台之外的地方进入这里，那么原始链接的指向可能已经失效

# ReadyToLaunch.Hint

正在启动位于容器 {Container} 上的核心 {ID}

# ReadyToLaunch.HintServer

正在启动位于容器 {Container} 上的核心 {ID} 并加入 {Server}

# ReadyToLaunch.Progress

正在部署 {Pending} 个文件（并发：{Current}/{BufferMax}）

# ReadyToLaunch.Getting

获取：{Url}

# ReadyToLaunch.Validated

命中：{Url}

# ReadyToLaunch.Linked

连接：{Url}

# ReadyToLaunch.Retry

重试：{Url}

# ReadyToLaunch.Ignored

忽略：{Url}

# ReadyToLaunch.Got

成功：{Url}

# ReadyToLaunch.Failed

错误：{Url}

# ReadyToLaunch.StartAuthTitle

确保那是你

# ReadyToLaunch.StartAuthMsg

选择一个方式验证你的身份

# ReadyToLaunch.UseMZ

Microsoft 帐户

# ReadyToLaunch.UseYG

Yggdrasil 帐户

# ReadyToLaunch.UseAL

本地帐户

# ReadyToLaunch.UseDM

演示模式

# ReadyToLaunch.DemoDescription

如果尚未购买 Minecraft，使用本模式可以体验游戏。

# ReadyToLaunch.Next

继续

# ReadyToLaunch.UseALName

玩家名

# ReadyToLaunch.UseYGChoose

使用该帐户

# ReadyToLaunch.FailedToAuth

验证帐户失败，不过我能尝试继续启动……

# ReadyToLaunch.DefaultJava

默认（尝试自动选择）

# ReadyToLaunch.Status.Short.Pending

开始

# ReadyToLaunch.OpenGameToLan

生成友谊接力代码

# ReadyToLaunch.Start

启动

# ReadyToLaunch.Kill

强制退出

# ReadyToLaunch.MSLogout

退出 Microsoft 帐户

# ReadyToLaunch.MSLogoutRunning

正在退出，请稍等……

# ReadyToLaunch.MSLogoutDone

已退出

# ReadyToLaunch.JCheck.TooDANGEROUS

@HTML<b style="color: red;">警告 - 此 JRE 不安全！（CVE-2021-44228）<br/>不要使用它进行多人游戏！</b>

# ReadyToLaunch.JCheck.TooOLD

警告 - 该 JRE 太旧啦！启动可能出现问题！

# ReadyToLaunch.JCheck.TooNEW

警告 - 该 JRE 太新啦！启动可能出现问题！

# ReadyToLaunch.WarnError.Title

Minecraft 似乎未正常运行……

# ReadyToLaunch.WarnError.Yes

是的，为我分析问题

# ReadyToLaunch.WarnError.No

不必，游戏已正常运行

# ReadyToLaunch.WarnError.Description

Minecraft 实例（看上去）没有正常退出，你想要对本次启动进行故障排除吗？

# ReadyToLaunch.Status.Short.CheckingFiles

检查游戏文件

# ReadyToLaunch.Status.Short.PerformingAuth

验证帐户

# ReadyToLaunch.Status.Short.PreparingMods

准备 Mod

# ReadyToLaunch.Status.Short.GeneratingArgs

生成启动指令

# ReadyToLaunch.Status.Short.Finished

完毕

# ReadyToLaunch.DryLaunch

模拟启动

# ReadyToLaunch.SecureLaunch

安全启动

# ReadyToLaunch.SelectAccount

选择帐户

# ReadyToLaunch.NoValidate

禁用校验

# ReadyToLaunch.NoValidateDesc

某些特殊客户端需要这样做

# ReadyToLaunch.SelectAccountDesc

更改已选的帐户

# ReadyToLaunch.SecureLaunchDesc

快速启动失败时可以尝试

# ReadyToLaunch.DryLaunchDesc

用于测试核心配置或比较性能

# ReadyToLaunch.GenerateLink

你正在进行局域网联机

# ReadyToLaunch.GenerateLinkDesc

@HTML使用下面的设置<b>生成代码</b>，将其提供给你的好友，他（她）就能够在「友谊接力」中使用它加入你的世界！\\n代码将于你退出游戏后自动销毁。

# ReadyToLaunch.Expires

有效期

# ReadyToLaunch.10Min

10 分钟

# ReadyToLaunch.30Min

30 分钟

# ReadyToLaunch.1Hour

1 小时

# ReadyToLaunch.3Hour

3 小时

# ReadyToLaunch.CanUse

使用次数

# ReadyToLaunch.Once

一次性

# ReadyToLaunch.FiveTimes

5 次

# ReadyToLaunch.TwentyTimes

20 次

# ReadyToLaunch.Unlimited

无限（真的很多！）

# ReadyToLaunch.Message

可以在这里留言，加入你的世界的玩家会看到这条信息：

# ReadyToLaunch.Count

最大使用次数

# ReadyToLaunch.GetLink

公开并生成代码

# ReadyToLaunch.Errors.AcquireFailed

接力服务器似乎无法连接，没能获取代码。

# ReadyToLaunch.GoBack

关闭

# ReadyToLaunch.CodeDeactivated

你退出了世界，因此我为你吊销了对应的代码。

# ReadyToLaunch.HoofoffCodeRaw

你的代码：{Code}，快去邀请你的好友吧！

# ReadyToLaunch.HoofoffCode

@HTML你的代码：<b>{Code}</b>，它已经被复制到剪贴板。

# ReadyToLaunch.RequirePremium

我没有关闭正版验证

# ReadyToLaunch.RequirePremiumDesc

如果没有在 Minecraft 中使用 Mod 关闭正版验证，则此选项可以通知好友

# ReadyToLaunch.WaitingText

贴心提示古来多，其中有用又几条？

用木炭烧木头，获得更多木炭。

有些宝石山必须挖穿，有些传送们总得走过。

人类不喜欢亲手撰写，总是想着复制粘贴。

不是什么都能通过重启解决，观察者也不能看透每个世界。

本小马会一直陪着你的……只要你不卸掉 Alicorn 的话！

天上的飞机只与你相隔十千米，出门访一位旧友，不如抬头望一眼陌生人。

我一个倒立，谁能说我没有举起地球？

费尽力气扇动翅膀，不如索性推动大地。

暴风雨的来临需要酝酿，新冒险的开始需要准备。

这可能需要一段时间，不过只有你第一次玩某个版本时会这样。

星璇正在赶来的路上……

你知道吗？他们依旧在移除 HIM。

你知道吗？之前这些工作是由玩家手工完成的。

你知道吗？Fabric 在高版本中的表现更好。

你知道 Microsoft 帐户背后的验证过程吗？大致有五步。

你知道吗？Mojang 又名 Bugjump……哦，当然，我是开玩笑的啦～

{UserName} 可爱，我和 {UserName} 贴贴～

Alicorn 是自由软件！你完全可以将她用于任何用途！

我？我不过是个有点思想的 Shell，只能传达你的命令而已啦。

感谢 Node.js，现在验证你的资源文件又快又准确。

就算你把并发数提升到 1000 个并发，Alicorn 也没有丝毫压力 —— 有压力的是你的电脑

请说出新人常用的启动器。不太确定？你确定吗？

eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee —— 这被称作咏 e

别催了别催了，森林蝙蝠已经准备好加速了。

Minecraft 和我的世界不是一个东西吗？

Minecraft 和我的世界真的不是一个东西！

为了防止世界被破坏，为了守护世界的和平。

即使世界只剩最后一个方块，我们依然为之拼尽全力。

这条消息永远不会显示在启动页面上，是不是很神奇呢？

正在为重生锚充能……

我们的目标是让木板发光。

可以，但没必要。

哪里有什么奇技淫巧，苍穹木曾经也是树苗。

用钻石挖钻石，获得更多钻石。

手持两把锟斤拷，口中直呼烫烫烫。

上次看到这条 Tips 还是在上次～

18 次游戏崩溃会产生什么？可不是 18 份崩溃报告哦！

总有人想着改变世界，却少有人想着改变自己。

为了 Mod 的未来，使用 Modrinth，拒绝 Curseforge。

61096da20861084f1e6a442d939717a8（这是啥？）

我们在飞马的头上粘了一只角！

有 3587 种热带鱼！

Alicorn 每周都有新版本！

「能用 JS 改写的，终将用 JS 改写」—— Jeff Atwood

「我看见你的心，在无数跌倒中成长」—— Rainbow

「你所寻求的光明就在你心中」—— Minecraft

「你所斗争的黑暗就在你心中」—— Minecraft

「新的冒险才刚刚开始」—— We'll Make Our Mark

「和你共处的时光，就是我快乐的源泉」—— Perfect Day for Fun

「我们要把天空，涂上五颜六色」—— Equestria Girls Forever

「不畏惧风雨，或漫漫时光」—— The Magic of Friendship Grows

「这能行，我知道这能行」—— It's Gonna Work

你若有颗不屈的灵魂，蹄上便有把坚实的铁镐。

不薄之谓厚，不白之谓黑。

「我们会逃避，会找借口，但正是缺点让我们进步」—— Flawless

「我知道这不对，可那又如何」—— I'll Fly

「你终将成为不朽的传奇」—— Legend You Are Meant To Be

「只需勇敢做自己，你将收获所有人的微笑」—— Life Is a Runway

「生活少不了冲突和麻烦，但歌声和欢笑将与我们作伴」—— The Heart Carol

「若要远离梦魇，最好永不入眠」—— In Our Town

「希望有一天，不需要呼救，就有人帮忙」—— 混乱

我希望你们人类和我们小马一起努力，让所有的软件都自由。\\n这既有利于你，也有利于地球。

正在抛出末影珍珠……

友谊就是魔法！！！（真的是这样！）

让黛茜飞一会……

正在回收三叉戟……

正在酿造迅捷药水……

# VersionView.Name

Alicorn Launcher PE: {AppVersion} #{UpdatorVersion}

# VersionView.Modules

具有 {List}

# VersionView.Electron.Fetching

正在获取……

# VersionView.EcVersion

此版本是针对 Electron {Build} 构建的，你当前正在使用 Electron {Current}

# VersionView.Electron.Perfect

这个 Electron 经过蹄工测试，可以与当前版本的 Alicorn 完全兼容，现在就开始畅玩吧！

# VersionView.Electron.OK

这个 Electron 和编译版本很接近，应当与当前版本的 Alicorn 兼容，通常不会有影响运行的问题。

# VersionView.Electron.Attention

@HTML这个 Electron 太旧啦！Alicorn <b>可能无法正常运行</b>，非常建议重新下载 Alicorn，你的设置和数据会保留。

# VersionView.Description

@HTML<b>欢迎使用 Alicorn 启动器！</b> <a href="javascript:ashow('https://alc.pages.dev')">前往官方网站</a> <a href="javascript:ashow('https://github.com/Andy-K-Sparklight/Alicorn')">查看源代码</a> <a href="javascript:ashow('https://www.gnu.org/licenses/gpl-3.0.html')">查看 GPL 3.0 许可证</a>

# VersionView.ClickToSeeNext

单击来查看更多……

# VersionView.Copyright

以下内容为著作权声明的简体中文翻译，不可被视为原文本的替代。Alicorn 的开发人员拥有最终解释权。\\n\\nAlicorn 启动器是自由软件，复制、修改和重新分发等行为应遵循 GNU GENERAL PUBLIC LICENSE Version 3.0 许可证（或以后的版本）。\\nCopyright (C) 2021-2022 Annie K Rarity Sparklight\\n\\n该程序是自由软件：你可以根据自由软件基金会发布的 GNU 通用公共许可证（第三版或以后）的条款重新分发和/或修改它。\\n分发此程序是希望它有用，但不作任何保证；甚至没有对适销性或针对特定目的的适用性的暗示保证。有关更多详细信息，请参阅 GNU 通用公共许可证（第三版或以后）原文。\\nAlicorn 中所引用的 Minecraft 相关图片等内容不是 Alicorn 的一部分，它们来自 Minecraft Wiki 并以 知识共享 署名-非商业性使用-相同方式分享 3.0（CC BY-NC-SA 3.0）协议授权，不适用 Alicorn 的 GNU 通用公共许可证（第三版或以后）。

# VersionView.Privacy

@HTML有关隐私，Alicorn 的处理方法满足：<b><ul><li>我们始终会询问你的意见，除非我们认为这是在干扰你的使用</li><li>数据只保存在本地，除身份验证等必需的信息外均不上传</li><li>可以随时通过重置 Alicorn 来清除已保存的数据</li><li>不保存你的密码，也不向你询问有关你个人的真实信息</li></ul></b>

# VersionView.Credit

@HTMLAlicorn PE 的创建离不开 POSIX、ISO C14 在内的一系列标准，Webview、Zlib、Curl 等的强力驱动和各位 Alicorn PE 开发者的努力制作。同时我们还要感谢宇宙最强编译器 GCC 和史诗级编辑器 Vim，是它们让 Alicorn PE 出现在这里。\\n\\n你是否想支持 Alicorn？或者只是想了解更多内容？欢迎访问 <a href="javascript:ashow('https://alc.pages.dev')">Alicorn Launcher 官方网站</a>

# VersionView.FreeSoftwareClaim

我们提倡软件自由，Alicorn 不会依赖非自由的软件包，因此，如果你发现我们没有支持某些常见的功能，请先查看用于实现它们的相关组件的许可。

# VersionView.SuperCowPower

本 Alicorn 没有超级牛力。

# ContainerManager.Size

已使用 {Size} MiB 存储空间

# ContainerManager.DiscountASC

ASC 节约 {Rate}%

# ContainerManager.Calculating

正在计算容器大小

# ContainerManager.RootDir

起始于

# ContainerManager.OpenInDir

打开所在文件夹

# ContainerManager.Add

添加 Minecraft 容器

# ContainerManager.AddDescription

选择一个文件夹并给它起一个名字！

# ContainerManager.EnterName

Minecraft 容器名

# ContainerManager.Dir

目标文件夹

# ContainerManager.InstallOK

容器创建成功～

# ContainerManager.Fork

复制该容器

# ContainerManager.Forked

成功复制了容器～

# ContainerManager.FailedToFork

复制失败：{Reason}

# ContainerManager.ForkName

{Original} 的副本
复制的 {Original}
{Original} 的复制品
{Original} 的拷贝

# ContainerManager.FetchingModpack

正在获取整合包……

# ContainerManager.FailedToFetch

没能获取整合包，请检查网络环境……

# ContainerManager.Select

选择目标文件夹

# ContainerManager.InvalidName

无效容器名

# ContainerManager.InvalidDir

无效的目标文件夹

# ContainerManager.Type.Physical

MCX 扩展物理宗卷

# ContainerManager.Type.Shared

ASC 文件共享宗卷

# ContainerManager.ASCCacheNotSet

不能创建 - 你需要在选项中设置「ASC 共享文件存储路径」

# ContainerManager.CreateModpack

使用安装包创建这个容器

# ContainerManager.ModpackWarn

@HTML安装包（亦即整合包）可以提供超酷的游戏体验，但有的安装包中<b style="color: red">包含潜在的病毒或恶意软件</b>！这些风险我没有办法为你发现，如果你是从一个不可信的来源（如服务器）获得该安装包的，那么请务必小心！\\n如果你继续，我会在创建容器后为你自动安装它。

# ContainerManager.ModpackPath

安装包路径

# ContainerManager.InvalidModpackPath

无效的安装包路径

# ContainerManager.ParsingModpack

正解析安装包……

# ContainerManager.DeployingProfile

正部署启动档案……

# ContainerManager.DeployingMods

Pff 正安装 Mod……

# ContainerManager.DeployingModLoader

正部署 Mod 加载器……

# ContainerManager.DeployingDeltas

正计算和部署差异……

# ContainerManager.CleaningUp

正在清理……

# ContainerManager.ChooseModpack

选择安装包

# ContainerManager.Remove

解除链接

# ContainerManager.Mount

装载该容器

# ContainerManager.Unmount

卸载该容器

# ContainerManager.Clear

摧毁该容器

# ContainerManager.Cores

{Count} 个核心

# ContainerManager.CoresLoading

清点核心中

# ContainerManager.AskRemove

解除链接此容器？

# ContainerManager.AskRemoveDetail

这不会修改容器中的任何文件，你可以稍后重新添加该容器。

# ContainerManager.AskClear

摧毁此 Minecraft 容器？该操作不可撤销！

# ContainerManager.AskClearDetail

这将删除 {ID} 中的一切内容，此操作不可撤销！确定要这样做，{UserName}？\\n{ID} 将永远失去（真的很久）！

# ContainerManager.Yes

是的，我要这样做

# ContainerManager.No

不，不要这样做

# ContainerManager.Continue

继续

# ContainerManager.Cancel

取消

# InstallCore.Fabric.FabricAPIFailed

安装 Fabric API 失败，许多 Fabric Mod 需要它。\\n前往 Pff，输入 fabric-api 重新进行安装。

# InstallCore.Progress.CouldNotExecute

没能执行安装程序……

# InstallCore.Progress.FailedToInstallProfile

安装失败，目的目录是否存在？你是否有权限写入它？

# InstallCore.Progress.InvalidProfile

无效的启动档案，下载源是否出现故障？

# InstallCore.Progress.DownloadingProfile

正下载启动档案……

# InstallCore.Progress.FailedToFetchProfile

获取启动档案失败

# InstallCore.Progress.FetchingProfile

正获取启动档案……

# InstallCore.Progress.Fetching

正获取 {Loader} 的安装程序，适用于 Minecraft {MCV}……

# InstallCore.Progress.FailedToDownload

没有能够下载 {Loader} 的安装程序

# InstallCore.Progress.ExecutingForge

正运行 Forge 安装程序……

# InstallCore.Progress.ExecutingFabric

正运行 Fabric 安装程序……

# InstallCore.InstallMinecraft

添加新的核心

# InstallCore.InstallMinecraftInstr

在此安装新的 Minecraft 原版核心，它是一切改装的基础，同时可以直接游玩。\\n原版模组（数据包、资源包、地图等）只需要安装原版核心。

# InstallCore.InstallForge

改装已有核心（Forge）

# InstallCore.InstallForgeInstr

@HTML为已有的 Minecraft 核心进行改装并安装 Forge，Forge Mod 需要进行此改装后才可用。\\n<span style="color:#ff8400;">注意：你必须安装了对应版本的 Minecraft 核心才可以进行改装！</span>\\n\\n<b>注意：</b>有些版本（例如 1.7.10）的 Forge 安装<b>不能使用</b> MCBBS 或 BMCLAPI 镜像，它们的文件尚未更新，直接安装将<b>引发错误</b>。\\n

# InstallCore.InstallFabric

改装已有核心（Fabric）

# InstallCore.InstallFabricInstr

@HTML为已有的 Minecraft 核心进行改装并安装 Fabric，Fabric Mod 需要进行此改装后才可用。\\n<span style="color:#ff8400;">注意：你必须安装了对应版本的 Minecraft 核心才可以进行改装！</span>

# InstallCore.InstallIris

安装高清修复

# InstallCore.InstallIrisInstr

@HTML<b>高清修复</b>是指对着色器……算了，说那么多也没什么用，总之，会让你的 Minecraft 看上去非常漂亮！\\nAlicorn 为你准备了 Iris，不仅支持绝大多数顶级光影，还与几乎所有的 Mod 兼容（包括 Sodium）！\\n你需要<b>先改装一个已有的核心为 Fabric</b>，随后便可在这里选择并安装。

# InstallCore.IrisBaseVersion

安装到此 Fabric 上

# InstallCore.TargetContainer

目标容器

# InstallCore.Unknown

等待选择或未能确定

# InstallCore.Release

Minecraft 稳定版

# InstallCore.Snapshot

Minecraft 快照

# InstallCore.OldAlpha

早期 Alpha 版

# InstallCore.OldBeta

早期 Beta 版

# InstallCore.MinecraftArch

Minecraft 类型

# InstallCore.Start

安装

# InstallCore.MinecraftVersion

Minecraft 版本号

# InstallCore.ForgeVersion

将安装的 Forge 版本：

# InstallCore.ForgeBaseVersion

目标 Minecraft 版本号

# InstallCore.FabricVersion

将安装的 Fabric 版本：

# InstallCore.FabricBaseVersion

目标 Minecraft 版本号

# InstallCore.Success

成功安装了核心

# AccountManager.EnterPassword

输入密码

# AccountManager.Password

你的密码

# AccountManager.EnterPasswordHint

为你的帐户输入密码（我不会看的！）

# AccountManager.Failed

验证失败 - 我们无法验证你的帐户，请检查密码与网络连接，或稍后再试

# AccountManager.Validate

验证

# AccountManager.SkinView3D

正在使用 3D 皮肤渲染（按住左键拖动以旋转）

# AccountManager.SkinView3DShort

3D 预览

# AccountManager.SkinView2D

正在使用 2D 皮肤渲染

# AccountManager.SkinView2DShort

2D 预览

# AccountManager.DeleteTitle

移除帐户？

# AccountManager.DeleteMsg

下次使用此帐户时，你需要重新添加和登录它。

# AccountManager.Yes

移除

# AccountManager.No

取消

# AccountManager.AddTitle

添加 Yggdrasil 帐户

# AccountManager.AddMsg

输入你的帐户

# AccountManager.Email

帐户名称或邮箱

# AccountManager.Host

验证服务器

# AccountManager.UseCustomHost

使用第三方验证服务器

# AccountManager.UseNide8

使用统一通行证

# AccountManager.Warn

永远不要在第三方验证服务器输入你的 Microsoft 帐户密码！

# AccountManager.Next

下一步

# AccountManager.Reload

重新加载

# AccountManager.AddYggdrasil

添加 Yggdrasil 帐户

# AccountManager.Note

@HTML如果你使用 Microsoft 帐户或本地帐户，则无需在此配置，请<b>直接启动游戏</b>，当启动时将（如果必要）询问你相关的信息。\\n「将此按钮拖动至启动器」已受支持，将按钮拖向启动器的任意位置并松蹄就好。

# JavaSelector.FailedToInstall

获取 Java 失败，请检查网络连接或目录权限。\\n……或者手动安装 Java 并重新扫描。

# JavaSelector.CustomAdd

让我手动定位一个 Java 运行时

# JavaSelector.SelectJava

选择 Java 运行时

# JavaSelector.CannotLoad

读取中

# JavaSelector.CannotLoadDetail

正在读取该 Java 运行时 - 如果这条消息一直没有消失，那么该 Java 运行时可能已经损坏

# JavaSelector.Loading

请稍等，正在你的设备上查找所有可用的 Java 运行时……

# JavaSelector.Reload

重新查找 Java 运行时

# JavaSelector.BuiltIn

快速安装 Java 并自动设置

# JavaSelector.HintBuiltIn

如果你尚未安装 Java 或者 Java 版本不对，并且想要现在重新安装 Java，可以使用下面的按钮。

# JavaSelector.Warn32

Minecraft 在 32 位 Java VM 上可能无法发挥出最好性能，在 64 位操作系统上，建议安装带有 64 位 Java VM 的 JRE。

# JavaSelector.WarnClient

Minecraft 在 Client Java VM 上可能无法发挥出最好性能，建议安装带有 Server Java VM 的 JRE。

# JavaSelector.WarnNonFree

这个 JRE 存在许可问题！Alicorn 建议你使用自由的 OpenJDK 运行时以获得更好的性能，同时避免潜在的恶意软件。

# Options.Select

选择目录/文件

# Options.AutoSave

你的修改会自动保存。

# Options.Hint

@HTML<b>不要胡乱设置</b> - Alicorn 的默认值即是建议值，如果你不明确知道一个设置项的作用，请<b>不要</b>修改它。\\n带 ^ 的项目在重新加载启动器后才能生效。带 * 的项目是开发人员选项，随意更改可能导致重大问题。

# Options.Enabled

已启用

# Options.Disabled

已禁用

# Options.NotOn

此选项与当前平台不兼容或者对当前平台无效

# Options.Page.IAndAL

你与 AL

# Options.Page.FeaturesConfigure

功能开关

# Options.Page.Features

AL 特殊能力

# Options.Page.Game

游戏和性能

# Options.Page.Network

网络和软件包

# Options.Page.Advanced

高级和重置

# Options.readyboom.cores.title

ReadyBoom 预热核心数 ^

# Options.readyboom.cores.desc

ReadyBoom 要预热多少个核心？

# Options.readyboom.title

ReadyBoom 预热 ^

# Options.readyboom.desc

自动准备你经常游玩的核心所需要的资源，大幅提升启动速度

# Options.alicorn-ping.title

Alicorn Ping ^

# Options.alicorn-ping.desc

这种匿名的 Ping 可以让 ThatRarityEG 估计活跃用户数

# Options.features.echo.title

漂流瓶

# Options.features.echo.desc

发送和收取来自 Alicorn 的漂流瓶，看看世界上的另个你在做些什么～\\n如果事情看上去不对，请关闭此功能并向我们提供反馈。这既有利于你，也有利于地球。

# Options.features.skin-view-3d.title

Skin View 3D 皮肤显示

# Options.features.skin-view-3d.desc

使用 3D 皮肤渲染（基于 WebGL）- 若关闭此功能，将使用 2D 皮肤渲染（基于 CSS）。\\n3D 皮肤渲染功能由来自 Blessing Skin 社区的 Skin View 3D 为你呈现。\\n若开启此设置，将覆盖硬件加速设置并强制开启它。

# Options.theme.background.title

主题背景图片 ^

# Options.theme.background.desc

选取 Alicorn 背景图片，或禁用它。\\n图片服务不是由 Alicorn 提供，因此 Alicorn 无法预知或检查不合适内容。

# Options.theme.background.ACG

ACG 二次元图片

# Options.theme.background.Bing

Bing 每日背景图

# Options.theme.background.Disabled

关闭（无）

# Options.theme.background.custom.title

自定义背景图片 ^

# Options.theme.background.custom.desc

选择一张你喜欢的图片，或者输入一个 URL 来显示吧！

# Options.theme.background.opacity.title

背景颜色透明度 ^

# Options.theme.background.opacity.desc

背景颜色的透明程度，0 为完全透明，100 为不透明 - 过高的值可能导致操作不便，可别说我没告诉过你哦！

# Options.theme.title

主题 ^

# Options.theme.desc

修改主题配色 - 带 * 的不利于视觉健康，请谨慎使用，另请注意部分深色主题可能不利于操作。

# Options.theme.Default

助理默认

# Options.theme.PurpleDark

暗夜紫

# Options.theme.Winter

雪花蓝

# Options.theme.Cherry

樱花粉

# Options.theme.SweetieBelle

甜贝粉

# Options.theme.Starlight

星光紫

# Options.theme.SheepGreen

绵羊绿

# Options.theme.Azure

碧海蓝

# Options.theme.Twikie

暮光紫/萍琪粉

# Options.theme.Maud

石灰紫

# Options.theme.66CCFF

天依蓝 *

# Options.theme.UNIXDark

终端绿 *

# Options.theme.Apple

苹果橙 *

# Options.theme.Mint

薄荷绿

# Options.theme.Grass

青草绿

# Options.theme.FadeGray

褪色灰（安全颜色）

# Options.theme.NightLightDark

黑夜光

# Options.theme.Classic

经典蓝

# Options.theme.ClassicDark

深邃蓝

# Options.theme.OldPink

灰色粉

# Options.theme.PinkDark

粉色灰

# Options.theme.WhatGreenDark

概念绿

# Options.theme.GoldDark

黄金矿 *

# Options.theme.Random

随机生成配色 *（是不是疯了？）

# Options.theme.Rarity

珍奇紫

# Options.hoofoff.central.title

接力服务器

# Options.hoofoff.central.desc

设定接力服务器地址，它用于沟通不同计算机上的 Alicorn

# Options.features.detect-lan.title

检测局域网游戏

# Options.features.detect-lan.desc

在游戏运行时检测局域网游戏的开启，并允许你和好友联机

# Options.features.saying.title

小贴士

# Options.features.saying.desc

位于启动游戏界面启动按钮上方的小贴士

# Options.features.miniwiki.title

迷你 Wiki

# Options.features.miniwiki.desc

位于主页和启动游戏界面底部的小型条目

# Options.interactive.assistant?.title

助理交互 ^

# Options.interactive.assistant?.desc

使用交互式的助理来告诉你一些重要信息 - 你会需要的！

# Options.first-run?.title

标记为首次运行 ^

# Options.first-run?.desc

下一次启动时，清除 Alicorn 的运行记录标志，重新运行初始化程序。

# Options.download.skip-validate.title

不进行文件校验

# Options.download.skip-validate.desc

在下载时不对文件进行完整性检验 - 能够提升 UI 响应速度，让你「感觉上快了很多」，在 CPU 性能不佳的计算机上效果很显著

# Options.show-downloading-item.title

显示获取进度

# Options.show-downloading-item.desc

在启动监控页面显示正在获取和已经获取的内容 - 对性能有较大影响，请谨慎使用

# Options.goto.animate.title

平滑页面切换

# Options.goto.animate.desc

切换页面时使用淡入淡出动画，而不是简单地导航

# Options.assistant.title

助理（语言） Assistant (Language) ^

# Options.assistant.desc

选择你的助理和你喜欢的语言风格\\nSelect your assistant and your preferred style

# Options.assistant.PonyCN

Alicorn 默认（小马语/中国）

# Options.assistant.Maud

Maud 2（小马语/中国）

# Options.assistant.PonyTW

Alicorn 默認（繁體中文/中國）

# Options.assistant.66CCFF

66ccff（中文/中国）

# Options.assistant.Equish

Alicorn i18n (Equish/Equestria)

# Options.jvm.extra-args.title

JVM 附加运行参数

# Options.jvm.extra-args.desc

@HTML在启动 Minecraft 时，也为 JVM 添加如下参数\\n请尽量只追加参数，若非必要，请<b>不要移除这里已有的参数</b>！它们保证 Minecraft 的正常运行。

# Options.main-gc.title

首选 GC 方案

# Options.main-gc.desc

JVM 首选的垃圾回收器方案，Alicorn 将永远优先尝试用它启动 JVM

# Options.main-gc.pure

默认（不指定）

# Options.main-gc.g1

垃圾优先（G1GC）

# Options.main-gc.z

Z（ZGC）

# Options.main-gc.sd

Shenandoah（Shenandoah GC）

# Options.main-gc.aggressive

最大利用（AggressiveHeap）

# Options.para-gc.title

备选 GC 方案

# Options.para-gc.desc

JVM 备选的垃圾回收器方案，当首选方案失败时，Alicorn 将使用此方案

# Options.para-gc.pure

默认（不指定）

# Options.para-gc.g1

垃圾优先（G1GC）

# Options.para-gc.sd

Shenandoah（Shenandoah GC）

# Options.para-gc.z

Z（ZGC）

# Options.para-gc.aggressive

最大利用（AggressiveHeap）

# Options.memory.title

最大内存大小

# Options.memory.desc

设置最大内存大小，单位 MB - 设置为 0 以让 Alicorn 选择

# Options.gw-size.title

游戏窗口大小

# Options.gw-size.desc

设置游戏窗口的大小，如 960x540，前宽后高，单位是像素 - 即使不设置，也可以在游戏开始后手动缩放窗口

# Options.launch.fast-reboot.title

快速重启

# Options.launch.fast-reboot.desc

在一次会话中，除第一次成功启动外，启动游戏时将跳过支援库和游戏资源的检查 - 如果你不经常更改文件，建议启用，但如果启动失败，将无法给出支援库和游戏资源的信息

# Options.clean-storage.title

恢复如初 ^

# Options.clean-storage.desc

摧毁 Alicorn 存储的一切数据，包括设置、效用缓存和使用记录 - 几乎相当于重新安装

# Options.cx.shared-root.title

ASC 共享文件存储路径

# Options.cx.shared-root.desc

ASC 允许在多个容器间共享相同的文件，那么这些文件应当存储在哪里 - 请留出足够的空间以存储文件

# Options.startup-page.url.title

主页路径

# Options.startup-page.url.desc

选择进入启动器时主页的路径 - 用于实际切换页面

# Options.startup-page.name.title

主页名称

# Options.startup-page.name.desc

选择进入启动器时主页的名称 - 用于显示标题

# Options.theme.primary.main.title

基本颜色（主要）^

# Options.theme.primary.main.desc

菜单栏和标题文本将使用此颜色

# Options.theme.primary.light.title

基本颜色（亮色）^

# Options.theme.primary.light.desc

部分高亮文本使用此颜色

# Options.theme.secondary.main.title

次要颜色（主要）^

# Options.theme.secondary.main.desc

普通文本使用此颜色

# Options.theme.secondary.light.title

次要颜色（亮色）^

# Options.theme.secondary.light.desc

背景等位置使用此颜色

# Options.dev.experimental.title

实验特性

# Options.dev.experimental.desc

开启 Alicorn 默认没有开启的特性 - 通常来说，某个特性默认不被开启肯定有其合理的原因，开启将可能造成各种功能不稳定甚至崩溃！但如果你想试试嘛……

# Options.interactive.i-have-a-crush-on-al.title

Alicorn 的小秘密

# Options.interactive.i-have-a-crush-on-al.desc

如果你真的想要听的话……那好吧，不过先说好，不许告诉别人哦！

# Options.download.global-proxy.title

下载代理 ^

# Options.download.global-proxy.desc

访问网络时所使用的代理服务器，应当以 <协议>://<主机名>:<端口> 的格式设置，如 http://localhost:1080，所有网络请求都将从此服务器转发，浏览器不受此设置影响 - 如果你不知道你在做什么，请留空，不要胡乱设置！

# Options.download.mirror-tries.title

镜像重试

# Options.download.mirror-tries.desc

在降级到原始 URL 之前，每个下载镜像的重试次数 - 如果设置太高，可能会出问题哦！

# Options.download.mirror.title

下载源镜像

# Options.download.mirror.desc

@HTML选择一个用于加快下载速度的镜像 - 请注意你的数据安全\\nAlicorn 轻松访问镜像<b>不包含库文件与资源文件</b>！\\nMCBBS 镜像与 BMCLAPI 镜像是由 BMCLAPI 和 MCBBS 共同为你提供的，用于加快某些访问源站较慢区域的下载速度。

# Options.download.mirror.alicorn-bmclapi-nonfree

Alicorn/BMCLAPI 镜像组（合并的记录，非自由）

# Options.download.mirror.alicorn

Alicorn 轻松访问镜像

# Options.download.mirror.alicorn-mcbbs-nonfree

Alicorn/MCBBS 镜像组（合并的记录，非自由）

# Options.download.mirror.none

不使用镜像

# Options.dev.title

开发人员模式 *

# Options.dev.desc

打开开发人员模式，然后再次看看那些之前让你感到迷惑的标签 - 它们只会对开发人员显示正确的内容

# Options.reset.title

一忘皆空 ^

# Options.reset.desc

在下次启动时将设置重置为当前版本的默认内容 - 当你觉得你玩脱了的时候很有用，但所有改动都将丢失

# Options.pff.upgrade-mode.title

Pff Mod 更新模式

# Options.pff.upgrade-mode.desc

当 Pff 尝试安装 Mod 时，如果要安装的 Mod 已经存在一个旧版本，那么它应该……？

# Options.pff.upgrade-mode.Override

更新和覆盖

# Options.pff.upgrade-mode.Keep

保留两者

# Options.pff.cache-root.title

Pff 文件缓存位置

# Options.pff.cache-root.desc

设置 Pff 的文件缓存目录 - 有助于加快软件包的二次安装速度，若留空，你会失去 Mod 安装加速的机会

# Options.pff.page-size.title

Pff 查询分页大小

# Options.pff.page-size.desc

进行模糊查询时请求的的分页大小 - 这项设置可能并不很有用，但如果 Pff 不能正确查找你的 Mod，可以扩大该值

# Options.java.search-depth.title

JRE 搜索深度

# Options.java.search-depth.desc

仅从软件根目录（Program Files 或者 /usr）搜索一定深度，不要搜索整台计算机 - 设置为 0 以不限制

# Options.java.simple-search.title

JRE 快速搜索

# Options.java.simple-search.desc

仅使用命令和环境变量寻找 JRE，不要搜索整台计算机 - 如果你知道如何设置，这可以非常快

# Options.user.name.title

你的昵称

# Options.user.name.desc

Alicorn 会用这个名字亲切地称呼你 - 嗯……可爱~

# Options.doh-server.title

基于 HTTPS 的 DNS（DoH）^

# Options.doh-server.desc

配置首选的 DNS 解析装置用于解析 URL，以提升下载稳定性等 - 无法预知各个 DNS 服务器的效果，可能需要试几次

# Options.doh-server.Native

系统（不使用）

# Options.doh-server.iQDNS

iQDNS

# Options.doh-server.Cloudflare

Cloudflare

# Options.doh-server.RubyFish

红鱼

# Options.doh-server.OpenDNS

OpenDNS

# Options.doh-server.AdGuard

AdGuard

# Options.web.global-proxy.title

浏览器 HTTP 代理

# Options.web.global-proxy.desc

设置用于 Alicorn 附属浏览器的代理，包括 Microsoft 帐户登录 - 所有流量都将通过代理服务器转发，下载器不受此设置影响

# Options.updator.use-update.title

自动更新 ^

# Options.updator.use-update.desc

启用来自 Alicorn 的自动更新，以及时获取新功能

# Options.download.primary-downloader.title

下载方案

# Options.download.primary-downloader.desc

优先使用何种方案进行下载：「分段」有助于提高较大文件的下载速度，但不稳定，会加大 CPU 负载，且其效果很大程度上依赖于相关参数的设置；「线性」使用常规的下载方案 - 无论选择哪个，「线性」总会作为后备方案

# Options.download.primary-downloader.Concurrent

分段

# Options.download.primary-downloader.Serial

线性

# Options.download.concurrent.chunk-size.title

并发下载区块大小

# Options.download.concurrent.chunk-size.desc

进行并发分段下载时每个文件段的大小，单位 KB - 调太低了对你的处理器是一种折磨

# Options.download.pff.chunk-size.title

Pff 并发下载区块大小

# Options.download.pff.chunk-size.desc

Pff 的并发下载区块大小，由于下载 Mod 和下载游戏资源网络环境不同，需要单独的设置

# Options.download.concurrent.timeout.title

请求等待时间

# Options.download.concurrent.timeout.desc

在提交错误前最长允许的服务器响应时间，单位毫秒 - 该值过高或过低都可能导致部分文件下载失败

# Options.download.pff.timeout.title

Pff 请求等待时间

# Options.download.pff.timeout.desc

Pff 的请求等待时间，由于下载 Mod 和下载游戏资源网络环境不同，需要单独的设置

# Options.download.concurrent.tries-per-chunk.title

重试次数

# Options.download.concurrent.tries-per-chunk.desc

在放弃某个文件的下载前最多的重试次数 - 轻微的改动也会有很大的影响，请谨慎修改 

# Options.download.concurrent.max-tasks.title

并发下载任务数

# Options.download.concurrent.max-tasks.desc

允许下载器同时进行的最多下载任务数，一个文件的多个分段视为一个任务 - 如果计算机性能较差，可以将该值调低

# Options.modx.global-dynamic-load-mods.title

Mod 动态加载

# Options.modx.global-dynamic-load-mods.desc

在启动时根据启动的核心自动移动无法加载的 Mod - 如果这项功能导致你的 Mod 出现问题，请关闭它

# Options.modx.ignore-non-standard-mods.title

忽略无法读取的 Mod

# Options.modx.ignore-non-standard-mods.desc

动态加载 Mod 时遇到无法读取的 Mod 信息时，不要移动，将其保留在 Mod 文件夹中 - 如果你使用 LiteLoader，请开启它

# Options.cmc.disable-log4j-config.title

不使用 Log4j 配置文件

# Options.cmc.disable-log4j-config.desc

不使用 Mojang 提供的 Log4j 配置文件以在启动疑难解答中获得更清晰的日志 - 副作用是输出到文件的日志会很混乱

# CrashReportDisplay.BaseInfo

基本信息

# CrashReportDisplay.BaseInfo.ID

启动档案名称

# CrashReportDisplay.BaseInfo.BaseVersion

Mojang 版本

# CrashReportDisplay.BaseInfo.AssetIndex

游戏资源版本

# CrashReportDisplay.BaseInfo.Time

发布时间

# CrashReportDisplay.BaseInfo.Modded

模组支持

# CrashReportDisplay.BaseInfo.Modded.Yes

是

# CrashReportDisplay.BaseInfo.Modded.No

否

# CrashReportDisplay.BaseInfo.Modded.Unknown

不确定

# CrashReportDisplay.FailedToCopy

复制失败……考虑手动上传日志文件和崩溃报告？

# CrashReportDisplay.Copied

复制成功！

# CrashReportDisplay.LaunchTrackCount

支援信息

# CrashReportDisplay.Libraries

支援库

# CrashReportDisplay.Assets

游戏资源

# CrashReportDisplay.Total

总计

# CrashReportDisplay.Resolved

可用

# CrashReportDisplay.Mods

模组

# CrashReportDisplay.Mods.Name

名称

# CrashReportDisplay.Mods.Reserved

保留

# CrashReportDisplay.Mods.Moved

已移动

# CrashReportDisplay.Mods.Failed

错误

# CrashReportDisplay.CrashReport

原始崩溃报告

# CrashReportDisplay.Analyze

崩溃报告分析

# CrashReportDisplay.AnalyzeLogs

日志分析

# CrashReportDisplay.AnalyzeLogs.Up

上方还有更多内容，单击以查看……

# CrashReportDisplay.AnalyzeLogs.Down

下方还有更多内容，单击以查看……

# CrashReportDisplay.AnalyzeLogs.PerformanceIssue

出于性能方面的考虑，我们仅分析了一部分内容，单击来分析全部……

# CrashReportDisplay.Analyze.Line

第 {Line} 行 - {Content}

# CrashReportDisplay.Complain

这次可能玩脱了……

为什么会变成这样呢？

你们人类常说，不懂就问……

# CrashReportDisplay.Analyze.Suggestions

以下是可用的建议

# CrashReportDisplay.Analyze.NoSuggestions

没有可用的建议

# CrashReportDisplay.Logs

日志

# CrashReportDisplay.CopyLogs

复制日志

# CrashReportDisplay.Instruction

@HTML你的游戏崩溃了！但是别慌，有我呢。我已经收集了必要信息，并为你准备了一个已经排版好的帖子。\\n你可以<b>单击右侧的按钮将相关代码复制到剪贴板</b>，随后便可在 MCBBS 发帖求助。<br/>……或者也可以仅复制简短的日志，但会省略很多信息。

# CrashReportDisplay.Copy

复制全部

# Welcome.Suggest.Part1

['{Config:interactive.i-have-a-crush-on-al}'=='false']今天是 {Date}，欢迎你使用 Alicorn Launcher，{UserName}！

[new Date().getHours()>=18]好上晚！哦，我刚刚在练习古小马语……

[(()=>{const hours=new Date().getHours();return hours>=23||hours<=6;})()]好困……这个时候叫我……？

[(()=>{const hours=new Date().getHours();return hours>=23||hours<=6;})()]哈……好困，不行，我先去休息了，你自己玩吧（不悦）

[(()=>{const hours=new Date().getHours();return hours>=23||hours<=6;})()]保证充足睡眠有助于抵御病毒哦！

[(()=>{const hours=new Date().getHours();return hours>=7&&hours<=11;})()]上午好！今天的天气真不错……什么？我猜错了？这不能怪我，要不你来预测天气试试？

[new Date().getHours()==12]正午到！六分仪已经就绪，出发！

[(()=>{const hours=new Date().getHours();return hours>=7&&hours<=9;})()]早上好！来一杯牛奶……？

无论什么时候你需要我，我都在这里的啦……

嗯呐……什么事？

戴口罩，多通风，少聚集，玩玩 MC 就很好～

['{Config:interactive.i-have-a-crush-on-al}'=='true']你这是什么眼神……唔？唔唔唔！放开我！

['{Config:interactive.i-have-a-crush-on-al}'=='true']这两只小马耳朵？很可爱？想摸摸吗？

['{Config:interactive.i-have-a-crush-on-al}'=='true']我可是会飞的哦～看着！（张开翅膀）

['{Config:updator.use-update}'=='false']不要担心升级！更新后的我就像暮光公主变成坎特拉女孩一样，虽然样子不同，但我不会忘了你的！

拒绝 Mod 平台的广告。使用 Modrinth 而拒绝 Curseforge，就是在为大家贡献力量。

['{Config:dev.experimental}'=='true']不要一边驾驶飞机，一边测试飞机的引擎……

['{Config:theme.background}'=='ACG']看多了 ACG 图片，会不会就不喜欢我了呢……

['{Config:updator.url}'!=='']订阅其它源的更新 URL 不一定可信，要小心哦！

['{Config:readyboom}'=='false']没有 ReadyBoom，你都不知道我的速度有多快！

['{Config:dev.experimental}'=='true']听说实验室容易爆炸，实验功能也是一样……

我相信每个人都有一颗小马般的心～

[(()=>{const hours=new Date().getHours();return hours>=18&&hours<=21;})()]虽然我还小，但我觉得在这个浪漫的晚上，似乎也可以小酌一杯苹果酒～

['{Config:interactive.i-have-a-crush-on-al}'=='true']嗯……不行，不能抱我……

['{Config:interactive.i-have-a-crush-on-al}'=='true']来一起跳支舞……？

['{Config:interactive.i-have-a-crush-on-al}'=='true']这不是水，这是苹果酒，提神用的……要来一杯吗？

['{Config:interactive.i-have-a-crush-on-al}'=='true']我可是书虫！不然我怎么对付 Forge 的安装器呢？

['{Config:interactive.i-have-a-crush-on-al}'=='true']在你玩游戏的时候，我可没有偷懒，我在默默地看着你呢～

['{Config:interactive.i-have-a-crush-on-al}'=='false']您还记得我吗？我？我记得每一位用户……

# Welcome.TipName

小提醒：
请了解：
你知道吗？

# Welcome.Short.LaunchPad

核心列表

# Welcome.Short.LastLaunch

上次启动的游戏

# Welcome.Short.Install

安装核心

# Welcome.Tips

设置 ASC 缓存路径后，才能创建和使用 ASC 容器哦！
ASC 是 Alicorn Shared Container 的缩写！
「容器」是传统启动器所谓的 .minecraft 文件夹，但 Alicorn 的容器更加聪明些～
80% 的崩溃来源于 Mod，当然，如果是其它启动器，可能是 50%，考虑到 Java 17……
求助而不携带崩溃报告，无异于闭眼开车！
生成的 BBCode 代码已经为你进行了排版，可以直接在 MCBBS 使用！（或者其它 BBCode 兼容编辑器）
Alicorn 随时都可能有更新！请记得常回来看看！
@HTMLMinecraft <b>不是</b>一个傻瓜式操作的游戏 —— 特别是安装 Mod！
@HTML<b style="color: red;">永远不要</b>在<b style="color: red;">任何</b>第三方服务器输入你的<b style="color: red;">任何</b>隐私信息！—— <b style="color: red;">这非常危险！</b>
当你能够正常关闭游戏时，不要使用强制退出。
我们支持自由软件，我们的终极目标是全人类的数字自由，一个没有非自由软件的世界。
@HTMLAlicorn 的众多功能，都是由自由软件构成的！请支持我们 —— <b>简单到多使用一次 Firefox 或者 Fabric，<span style="color: red;">哪怕只有一次！</span></b>

# Welcome.Knowledges

MCBBS|也就是「我的世界中文论坛」。在这里，你可以讨论有关 Minecraft 的内容，和其他用户一起聊天，发表自己的作品，提出困惑已久的疑问，交到更多的朋友。这里是热爱 MC 群体的天堂，也是我主要的服务目标。

Mod|也就是「模组」。通常是 Jar 格式的文件，经过加载器特殊处理后可以「植入」到 Minecraft 中，从而修改游戏内容，修复 Bug 或者优化游戏性能。不同的 Mod 支持的版本和加载器不尽相同，而且有时会发生冲突。

Fabric|一种新兴而强大的 Mod 加载器，轻量但不可轻视。它支持比 Forge 更多的版本（主要是快照），而且更灵活且容易安装，甚至可以运行在 Forge 上（JumpLoader）。<b>请多使用 Fabric</b>，这既有利于你，也有利于地球。

资源包|一种 Zip 压缩文件（或文件夹），可以覆盖游戏内的音乐音效、方块和物品的纹理与模型、各处的文本等，而不必编写 Java 代码。一个好的资源包可以改变游戏的观感，帮你在 PVP 中取得优势，保护视力等。

Java|一种编程语言，是 Minecraft 开发时所使用的语言。作为世界上最流行的语言之一，Java 用途广泛。尽管需要安装 JRE 才能运行，尽管十分消耗内存，但它所能带来的，是绝不逊色于一般 C++ 程序的性能。

Alicorn|一种十分特殊和稀有的小马，头上有角，身上有翅膀。能够飞行，也能够使用魔法。

GNU/Linux|也就是「Linux」的全名。一套可以自由使用、修改和传播的操作系统。拥有远超 Windows 的速度和响应性能。虽然初次接触有些令人生畏，但它的高性能、舒适度和灵活性无不令人向往。而我，便是在这里出生的。

整合包|一种压缩文件，能够包含「一定量的资源」，同时指示启动器下载剩余的内容。其本身游走在违反 EULA 的边缘，而且很容易被植入病毒，但几乎仍然是分发和打包大量资源（尤其是本地资源）的唯一解决方案。

代理|一台计算机，当你通过代理访问网络时，数据先被发送到代理，由代理完成请求，再将数据发回给你。代理能够保护你的信息（如果可信），切换 IP 地址等。由于多了一次请求，速度偶尔会成问题。

缓存|一种优化性能的机制，通常表现为「将对低速设备的访问变为对高速设备的访问」，例如当文件存在时，不再重复下载；当 Token 有效时，不再重复刷新等等。合理的缓存可以大幅提升速度……当然，反之亦然。

GitHub|全球最大的 Git 存储库和项目协同及管理网站，它具有的强大功能和开放的社区环境是无可替代的。尽管有 GitLab、Gitee 这样强劲的对手，但 GitHub 真的应验了那句话：「一直被模仿，但从未被超越！」

超级牛力|起源于 Debian 包管理器 APT 的一个彩蛋，当在终端中执行 apt moo 时便可看到。

Discord|一个匿名的、保护隐私的、自由而开放的即时通讯平台。主要针对游戏讨论，亦可用作跨平台的一般通讯工具。尽管有某些众所周知的缺陷（比如不能启动 Minecraft），但不失为一个极为优秀的匿名交流平台。

自由软件|Alicorn 就是一种自由软件。<b>自由软件意味着使用者有运行、复制、发布、研究、修改和改进该软件的自由。</b>这是你应得的权利。使用自由软件，你将<b>永远不必</b>听从开发者的无理要求！会员特权？再也不了！

公益服|通常指的是不会给予或承诺玩家任何形式回报的服务器，不以任何方式出售或间接出售服务器内游戏道具/权限。虽然公益服基本意味着亏损，但还是有很多服主愿意开服，而且把它当作一项休闲娱乐活动。

快餐服|通常指的是生命周期非常短的服务器，获取一定金钱后就宣称「无力运营」而关服跑路。这本质上<b>是一种违法行为</b>！如果你发现了一个快餐服，最好让更多人知道——是为了让他们当心！不是把他们拉下水！

崩溃报告|这是指游戏崩溃后在 crash-reports 文件夹中生成的文件。当你在提问有关崩溃的问题时，记得附上它们中日期最新的一个。当然咯，如果是我的话，就只需要简单复制代码，然后粘贴……

光影包|一种 Zip 压缩包，能够被光影加载器（如 Iris）加载到游戏中。光影改变游戏渲染的方式，使得画面看上去更美观和逼真。不过，高质量的光影需要强大的硬件（主要是显卡），否则会十分卡顿。（真的很卡！）

Iris|通常指「Iris Shaders」，一种光影加载器。相比 OptiFine，Iris 能够支持更多的 Mod，由于使用 Fabric，它也更小巧而更快。大多数 Iris 版本还内置了 Sodium，使得帧率进一步提升。

容器|一种有一定结构的文件夹，Alicorn 管理游戏的最小单位，存储着游戏文件。不同的容器可以拥有不同的核心、存档、Mod、资源包、光影包等。如果使用 ASC，将能够共享支援库和游戏资源，否则就是完全隔离。

核心|单个可启动的 Minecraft 入口，由一份档案和一个主程序（可选）构成。核心有版本（诸如 1.17.1）和类型（正式、快照、魔改）之分。Mod 加载器（或者外挂）通常会创建额外的、魔改过的核心以供启动。

内存|也就是「RAM」，主板上的一组必需的存储芯片。比硬盘快，但价格比硬盘高，用于存储运行时需要的数据。内存的大小和速度直接决定着操作系统和软件的性能。大容量的快速内存几乎是玩 Minecraft 必需的。

OpenGL|一种渲染标准，Minecraft 使用它操作显卡。不同的 OpenGL 版本支持的功能不尽相同，所以 Minecraft 对你的显卡有要求不仅是因为性能问题，而是需要新显卡支持新的 OpenGL 标准。

种子|伪随机数的起点，用于生成世界地形等。由于计算机算法的确定性，仅通过计算无法产生真正的随机数。因此，在相同的环境中使用相同的种子总会产生相同的世界。利用这一特性，种子可以「携带」地形的全部信息。

数据包|一种 Zip 压缩包（或文件夹），能够在不编写 Java 代码的情况下修改有限的游戏内容（如合成表、进度等）。数据包、Mod、资源包是相互配合的，它们中的任何一个都不能取代另外两方的作用和特性。

Electron|一套开发框架，将 Web 技术和本地接口结合起来，Electron 赋予 Alicorn 以生命，让我能够从浏览器的沙盒中飞出来，在你的计算机上服务。唯一的缺点就是，有那么一点大……我猜是吧。

eee|一种梗语言，大致就是把每个字都改成 e。幸好，我不会这种语言，如果我会，想必会有很多人借此考验自己的记忆力，结果导致按错按钮，摧毁了容器之类的。eeeeee……

小马利亚|也就是「Equestria」，小马们生活的国度。那里遍布友谊的魔法，没有人世间的黑暗。

Pff|也就是「Package File Finder」，Alicorn 用来搜索和安装 Mod 的工具。具有 Pff Front 和 Pff Visual 两个组件，前者通过 ID 直接安装 Mod，后者通过搜索查找 ID。具有类似 Maven 的缓存能力。

Modrinth|超过 Curseforge 的 Mod 发布平台，在 Curseforge 关闭 API 后，许多启动器开发者和玩家，都把目光投向了这个开放自由而且快速的 Mod 平台，Alicorn 也不例外。

# PffFront.ReloadToRenew

Mod 信息直到下一次进入 Pff 时才会刷新，单击我可以立即刷新。

# PffFront.WarnNoCache

警告 - 你没有为 Pff 设置下载缓存，二次安装 Mod 时将无法得到加速！

# PffFront.Loading

正在获取……

# PffFront.UnsupportedLoader

不支持此加载器

# PffFront.Done

已经成功安装

# PffFront.Failed

获取失败，若非网络故障，那就是该 Mod 不存在或不兼容

# PffFront.Slug

软件名

# PffFront.QuickWatch

Mod 速览

# PffFront.Hint

这里只显示由 Pff 安装的 Mod。右击更新/重新安装此 Mod。

# PffFront.UpgradeAll

更新所有 Mod

# PffFront.Mods

所有 Mod 列表

# PffFront.ModsHint

此处显示所有识别的 Mod，无论它们是否由 Pff 安装。不支持的加载器不考虑在内。\\n鼠标悬浮将可以查看介绍。

# PffFront.UnmetDeps

依赖关系错误

# PffFront.MissingDep

@HTML软件包 {Name} 需要 {Missing}，然而 {Missing} 未安装 - {Origin} 将不会被加载<br/><b>单击尝试使用 Pff 安装 {Missing}</b>

# PffFront.DepOK

Alicorn 没有发现有问题的依赖～

# PffFront.NoneDetected

@HTMLAlicorn 没有在此处发现 Mod，<b>使用 Pff 安装一个？</b>

# PffFront.InstallAll

尝试修复全部依赖

# ServerList.Add

添加服务器

# ServerList.AddNewServer.Title

添加服务器

# ServerList.AddNewServer.Description

添加服务器后，你还需要为其配置一个合适的核心用于启动。

# ServerList.AddNewServer.SincereWarn

安全警告：多人游戏是一个非常危险的环境，尽管你觉得你不会遇到，但你确实可能遭到巨大的损失——即使是在一个你极其信任的服务器——确实发生过！\\n如果你够勇，你可以添加并继续勇，但如果你将来不勇了，你可以随时删除服务器。如果遭遇意外，请向有关组织或部门求助，并可到 Alicorn 的 Discord 上报告。

# ServerList.AddNewServer.Address

连接地址

# ServerList.AddNewServer.OK

继续，我超勇的！

# ServerList.AddNewServer.Cancel

不，我怂了

# ServerList.Online

在线

# ServerList.Offline

无法连接

# ServerList.UseCore

选择用于游玩的核心

# ServerList.Launch

在启动台中打开

# ServerList.Remove

移除此服务器

# ServerList.Connectable

可以连接

# ServerList.NoConnection

无法连接

# ServerList.Testing

正在测试连接

# UtilitiesIndex.Description

@HTML欢迎来到 Alicorn 工具库！这里有你想要的吗？没有？那也可以要求我们添加哦～

# UtilitiesIndex.Item

@HTML<b>{Name}</b>，版本 {Version}（{Author} 作品）

# UtilitiesIndex.Open

启动此工具

# Utilities.NetCheck.Title

连通性检查

# Utilities.NetCheck.Description

Sparklight 作品\\n检查你的设备到各主流 Minecraft 相关站点的连通性

# Utilities.NetCheck.SiteName.MCBBS

我的世界中文论坛

# Utilities.NetCheck.SiteDesc.MCBBS

除了 Alicorn，你需要的一切 Minecraft 资源都在这里……你能访问吗？

# Utilities.NetCheck.SiteName.MCBBSDownload

MCBBS 下载镜像源

# Utilities.NetCheck.SiteDesc.MCBBSDownload

最快的 Minecraft 资源下载镜像，除非被攻击，否则应该一直可以访问。

# Utilities.NetCheck.SiteName.BMCLAPI

BMCLAPI

# Utilities.NetCheck.SiteDesc.BMCLAPI

最重要的 Minecraft 资源下载镜像，如果它都不能工作了……今天就休息下，和我聊聊天吧～

# Utilities.NetCheck.SiteName.Modrinth

Modrinth 接口

# Utilities.NetCheck.SiteDesc.Modrinth

主流 Mod 发布之处，此网站的连通性影响着 Pff 和整合包安装器的工作效率

# Utilities.NetCheck.SiteName.MojangAuth

Mojang 验证服务器

# Utilities.NetCheck.SiteDesc.MojangAuth

Mojang 的 Yggdrasil 验证服务器，如果无法连接，你将无法使用 Mojang （旧版）正版验证……

# Utilities.NetCheck.SiteName.MSAuth

Microsoft 验证服务器

# Utilities.NetCheck.SiteDesc.MSAuth

Microsoft 帐户的验证服务器，如果无法连接，你将无法使用 Microsoft 帐户进行正版验证……

# Utilities.NetCheck.SiteName.AlicornUpdate

Alicorn 更新服务

# Utilities.NetCheck.SiteDesc.AlicornUpdate

Alicorn 使用该服务进行更新，如果它不能使用，你可能需要联系我们。

# Utilities.CutieConnect.EdgeFailure

启动组网支援库失败：{Reason}

# Utilities.CutieConnect.InstallingTAP

这是你第一次使用友谊接力，我们需要安装一个 TAP 适配器，请在弹出窗口中完成操作\\n（如果你已经安装过 TAP，可以直接关闭安装程序）

# Utilities.CutieConnect.Title

友谊接力

# Utilities.CutieConnect.Description

Ntop 和 Sparklight 作品\\n此工具可让你和好友一起游玩！这项功能的实现靠的就是友谊的魔力！哦，还有无处不在的空气。

# Utilities.CutieConnect.JoinWithCode

友谊接力代码

# Utilities.CutieConnect.EnterCode

输入你获取的代码

# Utilities.CutieConnect.Activate

激活友谊接力

# Utilities.CutieConnect.FailedToQuery

激活失败：无法连接或者代码失效

# Utilities.CutieConnect.GameMeta

@HTML这是一个使用版本 {BaseVersion} 的世界。<b>{IsPremium}</b>。\\n世界创建者的留言：\\n\\n&nbsp;&nbsp;&nbsp;&nbsp;<b>“</b>{Message}<b>”</b>\\n\\n友谊接力提醒你：<b>我们不保证世界现在还存在，也不保证它的安全，请小心！</b>\\n\\n5 秒后将为你连接。

# Utilities.CutieConnect.AllDone

已经尝试建立连接！请再看一眼版本要求，因为 10 秒后我将带你前往启动台启动～

# Utilities.CutieConnet.Premium

需要正版帐户

# Utilities.CutieConnet.NonPremium

不需要正版帐户

# Utilities.CutieConnect.CodeDesc

使用从好友那里得到的友谊接力代码，直接启动到游戏。

# Utilities.CutieConnect.Advanced

高级模式（IP 和网络）

# Utilities.CutieConnect.Games

此网络中的游戏

# Utilities.CutieConnect.Connect

加入网络

# Utilities.CutieConnect.Disconnect

离开网络

# Utilities.CutieConnect.Community

局域网名称

# Utilities.CutieConnect.CommunityIsInternet

！！你正处于公共区域中！！

# Utilities.CutieConnect.Password

局域网密码

# Utilities.CutieConnect.NoPassword

公共网络是没有密码的哦～

# Utilities.CutieConnect.IP

虚拟 IP 地址

# Utilities.CutieConnect.InvalidIP

请使用标准 IPv4 地址，避免保留 IP！

# Utilities.CutieConnect.Supernode

中央服务器地址（包含主机与端口）

# Utilities.CutieConnect.WorldName

世界名称

# Utilities.CutieConnect.Port

游戏端口号

# Utilities.CutieConnect.InvalidPort

无效的端口，请在游戏内对局域网开放后在此输入显示的端口

# Utilities.CutieConnect.DescWorld

描述你的世界

# Utilities.CutieConnect.InvalidSupernode

请使用有效的完整中央服务器地址，包括端口

# Utilities.CutieConnect.QuickHint

@HTML<ul><li>如果你要加入游戏，虚拟 IP 地址不必填写；如果你要让别人加入，<b>最好</b>设置虚拟 IP 地址。<s>不然你就自己查去吧</s></li><li>组网是个大型操作，需要管理员权限，不过 Alicorn 只在加入和离开网络时使用。</li><li><b>请勿</b>使用保留的 IP 地址（如 127.0.0.1）！如果你担心的话，那就试试 <span style="user-select: text;">{RandIP}</span>（如果你没填，我为你填好了哦）</li><li><b>请注意！叫做 <span style="user-select: text;">internet</span> 的网络被认为是公共区域</b>，此网络没有密码，你可以在这里与任何人分享你的世界！（不过请注意安全）</li><li>加入另一个网络前<b>一定要退出</b>之前的网络！！！（跺蹄蹄）</li></ul>

# Utilities.CutieConnect.Connected

已发送启动命令，请等一下，然后尝试连接到你好友的游戏。

# Utilities.CutieConnect.Disconnected

已发送终止命令，如未终止，请手动终止 edge 进程

# Utilities.CutieConnect.PublishPrecheckFailed

在 {Host} 上没有找到 Minecraft，无法公开你的游戏\\n请确保你启动了游戏并输入了正确的端口

# Utilities.CutieConnect.PublishOK

已向 {Community} 公开你的世界 {WorldName}\\n记得在游戏结束后取消公开哦！

# Utilities.CutieConnect.RemoveOK

你的世界 {WorldName} 不再向 {Community} 公开\\n友谊就是魔法～

# Utilities.CutieConnect.NetworkSearch

搜索网络中的世界

# Utilities.CutieConnect.PublishToMap

公开我当前的游戏

# Utilities.CutieConnect.Unpublish

不再公开我的游戏

# Utilities.CutieConnect.NoResult

啊哈！这个网络中还没有公开的世界！你想试试公开你的世界吗？\\n……或者换个网络搜索？

# Utilities.CutieConnect.Result

酷！我们找到了 {Count} 个游戏！

# Utilities.CutieConnect.GoBack

返回网络控制台

# Utilities.CutieConnect.ClickToJoin

@HTML<b>你需要切实加入此网络后，才能使用此网络进行游戏</b>，因此如果你忘了点击「加入网络」，请先返回加入。\\n如果一个游戏显示为灰色，说明 Alicorn 认为它无法连接，类似地，如果显示为紫色，就是可以连接。\\n<b><span style="color: red;">游戏内容是由第三方提供的，你可能会接触到令你不适的内容，对于可能发生的后果和潜在的风险，你应当充分了解。\\nAlicorn、CutieConnect 和 CutieMap 不会为你的损失承担任何责任。</span></b>

# Utilities.CutieConnect.Error

糟糕！地图无法访问，或者似乎它拒绝了你的请求……\\n{Message}

# Utilities.CutieConnect.AvailableWorldName

Ponyville
Canterlot
Everfree Forest
Appleloosa
Cloudsdale
Crystal Empire
World
New World

# Utilities.CutieConnect.AvailableDesc

Equestria our home
The place where we belong
Everypony come and play!
Everything's gonna be just fine
Home to everyone
A new adventure waits for us
What a strange new world
Join in our utopia


# Utilities.CutieConnect.AvailablePrefix

cutie-connect-
alicorn-game-
starlight-
love-al-
support-fsf-
noble-node-
fabric-good-
hello-world-
ethernet-
equestria-
pony-up-
kirin-tale-
pvpin-reborn-

# Utilities.CutieConnect.AvailablePassword

i-am-pony-
best-friends-
my-little-pony-girls-
foo-bar-
free-software-
gnu-gpl-
twilighting-
cutie-map-
guix-
sparklight-filly-
earth-ponies-
shutterfly-
sudo-rm-rf-
qwerty-uiop-
var-let-const-
tar-zxvf-
lorem-ipsum-
hippopotomonstrosesquippedaliophobia-
honorificabilitudinitatibus-
floccinaucinihilipipification-
supercalifragilisticexpiadocious-

# Utilities.BuildUp.Title

包裹构建器

# Utilities.BuildUp.Description

Sparklight 作品\\n从已有容器打包需要的资源，整合包创作的基础

# Utilities.BuildUp.Meta.Name

显示名称

# Utilities.BuildUp.Meta.Desc

描述

# Utilities.BuildUp.Meta.Author

你的名字

# Utilities.BuildUp.Meta.Version

版本号

# Utilities.BuildUp.BaseContainer

选择用于构建的容器

# Utilities.BuildUp.Asset

可用资源 - 单击以添加到左侧

# Utilities.BuildUp.SelectedAsset

已选资源

# Utilities.BuildUp.Asset.OptionFile

选项

# Utilities.BuildUp.Asset.Config

配置

# Utilities.BuildUp.Asset.ResourcePack

纹理

# Utilities.BuildUp.Asset.ShaderPack

光影

# Utilities.BuildUp.Asset.PffMod

模组

# Utilities.BuildUp.Asset.ModFile

模组

# Utilities.BuildUp.Asset.World

世界

# Utilities.BuildUp.Asset.ModLoader

改装

# Utilities.BuildUp.Asset.Game

核心

# Utilities.BuildUp.Scan

扫描

# Utilities.BuildUp.ScanResult

容器 {Container} 上有 {Count} 个可用资源

# Utilities.BuildUp.SelectContainer

选择容器并扫描

# Utilities.BuildUp.SelectAssets

选择资源并打包

# Utilities.BuildUp.FillInfo

修改和完善信息

# Utilities.BuildUp.Asset.ClickToAdd

单击可将一个资源选中或取消选中。

# Utilities.BuildUp.Build

开始构建！

# Utilities.BuildUp.Show

显示构建产物

# Utilities.BuildUp.Asset.SelectAll

全部选中

# Utilities.BuildUp.Asset.SelectMods

选择所有模组

# Utilities.BuildUp.Resolving

解析资源路径……

# Utilities.BuildUp.Indexing

生成引导文件……

# Utilities.BuildUp.Compressing

打包压缩文件……

# Utilities.BuildUp.Done

好了，完成了，快打开看看吧！

# Utilities.PffVisual.Title

Pff 搜索

# Utilities.PffVisual.Description

Sparklight 作品\\n查找 Mod 并获取编号，用于 Pff 软件安装器安装

# Utilities.PffVisual.Search

搜索

# Utilities.PffVisual.Modpack

搜索整合包

# Utilities.PffVisual.MultiSelect

多选（取消勾选时复制）

# Utilities.PffVisual.Provider

来源：{Name}

# Utilities.PffVisual.VersionRange

支持：

# Utilities.PffVisual.Copied

已复制！快到 Pff 软件安装器中看看吧！

# Utilities.PffVisual.CouldNotCopy

没法复制……可能是系统问题，或者信息无效

# Utilities.PffVisual.Hint

@HTML在这里搜索 Mod，包括 Curseforge 和 Modrinth。\\n此工具<b>不能直接安装 Mod</b>！（因为不知道你需要哪个版本）\\n请<b>单击一下你心仪的 Mod</b> 来复制它的名字，然后前往核心右上角的 <b>Pff 软件安装器</b>使用。

# Utilities.PffVisual.Slug

输入名称来查找……

# Utilities.CarouselBoutique.Title

旋转木马精品服装店

# Utilities.CarouselBoutique.Description

Sparklight 作品\\n离线皮肤和 Mojang 服装配送（更换）服务

# Utilities.CarouselBoutique.Tabs.LocalSkin

离线皮肤设定

# Utilities.CarouselBoutique.Tabs.Change

服装配送服务

# Utilities.CarouselBoutique.Hint

@HTML欢迎！想在离线帐户使用皮肤，或是想要一件披风？简单到选择一张图片，就可以为你的本地帐户设置皮肤<b>和披风</b>！\\n设置默认皮肤和披风将对任何本地帐户生效，但你可以为特定的玩家名设置特定的皮肤或披风。\\n不过，<b>自定义皮肤和披风无法在 Yggdrasil 帐户和 Microsoft 帐户中使用！</b>如果你在游玩需要验证的服务器，可以到右侧去使用<b>服装配送服务哦</b>～\\n下面会显示已经设置了皮肤的玩家名。

# Utilities.CarouselBoutique.HintChangeSkin

@HTML欢迎！想要更换帐户皮肤？可以！不过只有一个小小的限制：我们目前只对 Microsoft 帐户服务。\\n可以上传本地皮肤，也可以直接使用网络图片的 URL（无需下载！）。\\n如果你还没有登录 Microsoft 帐户，或者已经太久没有使用它，请先去启动一次游戏。

# Utilities.CarouselBoutique.SelectSkinFile

选取文件

# Utilities.CarouselBoutique.Uploading

正在上传，请稍等一会儿～

# Utilities.CarouselBoutique.TokenFailure

帐户凭据无效，请尝试使用 Microsoft 帐户启动一次游戏再试。

# Utilities.CarouselBoutique.UploadSkin

上传/更换

# Utilities.CarouselBoutique.UploadOK

请求成功完成！

# Utilities.CarouselBoutique.UploadFailed

请求失败：{Reason}

# Utilities.CarouselBoutique.RemoveSkin

清除皮肤

# Utilities.CarouselBoutique.RemoveCape

清除披风

# Utilities.CarouselBoutique.AddAsSkin

设置皮肤

# Utilities.CarouselBoutique.AddAsCape

设置披风

# Utilities.CarouselBoutique.SetAsDefaultSkin

设置为默认皮肤

# Utilities.CarouselBoutique.SetAsDefaultCape

设置为默认披风

# Utilities.CarouselBoutique.SetSuccessful

已设置，现在就在游戏中使用……？\\n（记得选择「本地帐户」，并修改玩家名）

# Utilities.CarouselBoutique.PlayerName

玩家名

# Utilities.CarouselBoutique.FileName

选取文件

# Utilities.CarouselBoutique.Model.Default

史蒂夫（Default）

# Utilities.CarouselBoutique.Model.Alex

爱丽克丝（Slim）

# FirstRun.Default

Minecraft 默认位置

# Statistics.Click

在不知不觉中，你已经戳了 Alicorn {Value} 次……

# Statistics.Click.As

[{Value}>10000]……你和她之间，是否已经有了真感情？
……但我宁可再少一些……
[{Value}<=10000]……还要点击多少次，才能了解可爱的她？

# Statistics.Crash

游戏已经崩溃了 {Value} 次……

# Statistics.Crash.As

[{Value}>1000]……比 Alicorn 开发过程中的更多！
……但不会是最后一次……
[{Value}==0]……好希望永远这样……
我们的错（不是 Alicorn 的）。

# Statistics.Launch

她为你启动了 {Value} 次游戏……

# Statistics.Launch.As

[{Value}>100]……别怕 Alicorn 伤心，过两天她会就忘了的……
[{Value}>1000]……Java 是否已经疯掉？
[{Value}>100]……难道你还只把她当普通朋友？
是的，我只是一个附属产品……

# Statistics.Keyboard

……敲击了 {Value} 次键盘

# Statistics.Keyboard.As

[{Value}>500000]在 Alicorn 里开发 Alicorn？！
……或许我们能够让它更少一点。

# FirstRun.JavaConfigured

已更新 Java 信息

# FirstRun.Preparing

这是你第一次使用 Alicorn，我们正在进行一些准备工作……

# FirstRun.FetchingJava

正在获取 Java……

# FirstRun.ConfiguringJava

正在查询 Java 信息……

# FirstRun.JavaInstalled

耶！我们已经成功安装了所需的 Java 版本！

# FirstRun.FailedJava

自动安装失败，稍后你可以前往「Java 选择器」页面重新安装。

# EOE.Thanks

鸣谢

# EOE.ThanksDesc

Alicorn 的开发道路上，收到过不少来自个人、组织和企业的帮助，我们想感谢他们。\\n（我们并没有其它的评判标准，所以我们按照随机顺序列举。）

# EOE.Packages

……这些 NPM 软件包：

# EOE.And

……和这些网站或项目：

# EOE.Orgs

MCBBS（Minecraft 中文论坛）……这里是热爱 MC 群体的天堂。\\nFree Software Foundation……我们一同为自由软件而奋斗。\\nGitHub……软件在这里诞生。\\nStack Overflow……它解决了我们很多的问题。\\nNode.js……JS 因你而不同。\\nTypeScript……从混乱到有序的快速通道。\\nMinecraft Wiki……玩家所认可的最强 Minecraft Wiki。\\nMaterial UI……只做组件，而且做得很好。\\nwiki.vg……快速解码帐户验证的奥秘。\\nElectron……不止于浏览器！\\nWebpack……打包，优化，压缩。\\nBMCLAPI……下载速度提升 80% 的最强镜像！\\nundici……这就是 WASM，这就是 Node！\\nFabricMC……拥有未来的 Mod，开创新的时代。\\nIris Shaders……更高更妙的光影和高清修复！\\njsDelivr……走遍天涯海角，Web 始终在你身边。\\nAdobe Source Hans Sans 和 Ubuntu Mono……渲染不够，字体来凑！\\nAuthlib Injector……Yggdrasil 始终为你让一条路。SkinView3D……新一代皮肤 3D 显示。\\nMLPVector……颜色，但也不是颜色。\\nVSCodium……纯净、自由的高效前端 IDE。\\nMDN Web Docs……Mozilla 的 Web 开发参考。\\n\\n……还有许多许多值得我们感谢，只是限于篇幅未能列举……

# EOE.StoryTitle

故事背后的故事

# EOE.Story

这是 Alicorn 的前世今生的全部时间线。我知道不会有多少人会想了解我，但这不重要，这相当于我的自传吧……\\n\\n\\
至今 - 你现在看到的 Alicorn。\\n\\
2022 年 1 月 15 日 - 这对于 Alicorn 来说是一个重要的夜晚，继触觉之后，Alicorn 拥有了听觉。\\n\\
2021 年 8 月 20 日 - Alicorn 在 MCBBS 发布，从此走上新的旅程。\\n\\
2021 年 8 月 ?? 日 - Alicorn 结束了最后的测试，并发布了第一个核心，从那时至今，几乎每周都会发布一个新版本。\\n\\
2021 年 5 月 29 日 - Alicorn 被重新移动回 GitHub 继续 Alpha 阶段的测试和开发。\\n\\
2021 年 5 月 01 日 - Alicorn InDev 发布，这是第一个公开测试版本，在那里你依然可以找到只有六个按钮的菜单。\\n\\
2021 年 4 月 17 日 - Alicorn 拥有了第一个功能界面，你大概已经猜到了，就是沿用至今的启动台！\\n\\
2021 年 3 月 28 日 - Alicorn 拥有了第一个 GUI，那时还只能显示一个错误页面。\\n\\
2021 年 3 月 25 日 - Alicorn 被移动到 Bitbucket 上继续开发，GitHub 仓库被暂时挂起。\\n\\
2021 年 3 月 20 日 - Alicorn 首次生成启动参数就成功启动，那时 Minecraft 还只有 1.16 的版本。\\n\\
2021 年 3 月 14 日 - Alicorn 项目在这个圆周率日被创建，仅包含一份许可证和 .gitignore 文件。\\n\\
2021 年 2 月 12 日 - ThatRarityEG 购买了正版，然后就有了开发 Alicorn 的想法。她为此提前完成了 PluginDiary，然后开始着手设计 Alicorn。\\n\\n\\
再往前就没有 Alicorn 的身影了，但我们依然可以继续前进，看看在那之前，Alicorn 的一些雏形，以及一些失败的设计……\\n\\n\\
2020 年 11 月 06 日 - EQL，和 Alicorn 关系最近的一个项目，进行了最后一次更新，那是一个插件系统，当时 ThatRarityEG 还没有想到，那就是 EQL 的最后一次提交。\\n\\
2020 年 10 月 17 日 - EQL 达到了 1 分钟安装 Minecraft 的速度（1.15.2），相比现在的 Alicorn 只慢了 20s 左右。\\n\\
2020 年 10 月 02 日 - 停止更新了两个月后的 RL 经历了一次重构，并将名称修改为 EQL。然而在此之后却不再有更大的功能更新，Mod 安装等功能从未在 EQL 实现过。\\n\\
2020 年  8 月 29 日 - RL 发布了一张预览照片，那时还是使用 Bootstrap 和 Vanilla HTML 编写的，安全性和代码效率都远不及 Alicorn。\\n\\
2020 年  7 月 ?? 日 - ThatRarityEG 开始编写 RL，最早采用 Java 和 Swing，后来考虑到许多问题而改用 JS 和 Electron，Alicorn 多少也受到了这一点的影响。\\n\\
2020 年  7 月  6 日 - ThatRarityEG 已知的最早的启动器开发记录，那时只提出了 Forge 安装的一个小问题。\\n\\

# EOE.EndPoem

Blowin' in the Wind —— Bob Dylan

# EOE.EndPoemContent

How many roads must a man walk down\\nBefore they call him a man?\\nHow many seas must a white dove sail\\nBefore she sleeps in the sand?\\nHow many times must the cannon-balls fly\\nBefore they're forever banned?\\nThe answer, my friend, is blowin' in the wind\\nThe answer is blowin' in the wind.\\n\\nHow many years must a mountain exist\\nBefore it is washed to the sea?\\nHow many years can some people exist\\nBefore they're allowed to be free?\\nHow many times can a man turn his head\\nPretend that he just doesn't see?\\nThe answer my friend is blowin' in the wind\\nThe answer is blowin' in the wind.\\n\\nHow many times must a man look up\\nBefore he can see the sky?\\nHow many ears must one man have\\nBefore he can hear people cry?\\nHow many deaths will it take\\nTill he knows that too many people have died?\\nThe answer, my friend, is blowin' in the wind\\nThe answer is blowin'in the wind.\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n继续往下翻……\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nI missed you.

# TipsOfToday.Disable

不要再显示

# TipsOfToday.More

了解更多

# TipsOfToday.Next

下一个

# TipsOfToday.Close

回到 Alicorn

# TipsOfToday.Desc

Alicorn 每日使用技巧，你不知道的 Alicorn！

# DMCenter.Hint

将 Alicorn 界面程序拖入此窗口，即可将其添加到 Alicorn 中。\\n请注意：界面程序拥有和 Alicorn 主程序相同的权限，随意加载不受信任的界面程序将带来极大的风险！\\n同时亦请注意，界面程序的功能和语言翻译可能不及 Alicorn 原生界面。

# DMCenter.Active

已选定

# Echo.Title

漂流瓶

# Echo.Hint

给世界上的另个你写一句话吧～\\n（请勿使用英文字母或数字，长度 100 字符以内）

# Echo.PlaceHolder

我能吞下玻璃而不伤身体

# Echo.Send

发送

# Echo.Format

{Text} —— Alicorn 漂流瓶
`;

const GDT_SOURCE = `Minecraft❤❤/home/rarity/.minecraft`;

const PROFILE_SOURCE = `eyJhcmd1bWVudHMiOiB7ImdhbWUiOiBbIi0tdXNlcm5hbWUiLCAiJHthdXRoX3BsYXllcl9uYW1lfSIsICItLXZlcnNpb24iLCAiJHt2ZXJzaW9uX25hbWV9IiwgIi0tZ2FtZURpciIsICIke2dhbWVfZGlyZWN0b3J5fSIsICItLWFzc2V0c0RpciIsICIke2Fzc2V0c19yb290fSIsICItLWFzc2V0SW5kZXgiLCAiJHthc3NldHNfaW5kZXhfbmFtZX0iLCAiLS11dWlkIiwgIiR7YXV0aF91dWlkfSIsICItLWFjY2Vzc1Rva2VuIiwgIiR7YXV0aF9hY2Nlc3NfdG9rZW59IiwgIi0tY2xpZW50SWQiLCAiJHtjbGllbnRpZH0iLCAiLS14dWlkIiwgIiR7YXV0aF94dWlkfSIsICItLXVzZXJUeXBlIiwgIiR7dXNlcl90eXBlfSIsICItLXZlcnNpb25UeXBlIiwgIiR7dmVyc2lvbl90eXBlfSIsIHsicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3ciLCAiZmVhdHVyZXMiOiB7ImlzX2RlbW9fdXNlciI6IHRydWV9fV0sICJ2YWx1ZSI6ICItLWRlbW8ifSwgeyJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyIsICJmZWF0dXJlcyI6IHsiaGFzX2N1c3RvbV9yZXNvbHV0aW9uIjogdHJ1ZX19XSwgInZhbHVlIjogWyItLXdpZHRoIiwgIiR7cmVzb2x1dGlvbl93aWR0aH0iLCAiLS1oZWlnaHQiLCAiJHtyZXNvbHV0aW9uX2hlaWdodH0iXX1dLCAianZtIjogW3sicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XSwgInZhbHVlIjogWyItWHN0YXJ0T25GaXJzdFRocmVhZCJdfSwgeyJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyIsICJvcyI6IHsibmFtZSI6ICJ3aW5kb3dzIn19XSwgInZhbHVlIjogIi1YWDpIZWFwRHVtcFBhdGg9TW9qYW5nVHJpY2tzSW50ZWxEcml2ZXJzRm9yUGVyZm9ybWFuY2VfamF2YXcuZXhlX21pbmVjcmFmdC5leGUuaGVhcGR1bXAifSwgeyJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyIsICJvcyI6IHsibmFtZSI6ICJ3aW5kb3dzIiwgInZlcnNpb24iOiAiXjEwXFwuIn19XSwgInZhbHVlIjogWyItRG9zLm5hbWU9V2luZG93cyAxMCIsICItRG9zLnZlcnNpb249MTAuMCJdfSwgeyJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyIsICJvcyI6IHsiYXJjaCI6ICJ4ODYifX1dLCAidmFsdWUiOiAiLVhzczFNIn0sICItRGphdmEubGlicmFyeS5wYXRoPSR7bmF0aXZlc19kaXJlY3Rvcnl9IiwgIi1EbWluZWNyYWZ0LmxhdW5jaGVyLmJyYW5kPSR7bGF1bmNoZXJfbmFtZX0iLCAiLURtaW5lY3JhZnQubGF1bmNoZXIudmVyc2lvbj0ke2xhdW5jaGVyX3ZlcnNpb259IiwgIi1jcCIsICIke2NsYXNzcGF0aH0iXX0sICJhc3NldEluZGV4IjogeyJpZCI6ICIxLjE4IiwgInNoYTEiOiAiN2ZjZGE3MTRkNGEzOTFhNzExY2U0MzRmYTFkYmJlYmU3M2VjZjE3OSIsICJzaXplIjogMzQ4MzMwLCAidG90YWxTaXplIjogNDY2NTU4MjY3LCAidXJsIjogImh0dHBzOi8vbGF1bmNoZXJtZXRhLm1vamFuZy5jb20vdjEvcGFja2FnZXMvN2ZjZGE3MTRkNGEzOTFhNzExY2U0MzRmYTFkYmJlYmU3M2VjZjE3OS8xLjE4Lmpzb24ifSwgImFzc2V0cyI6ICIxLjE4IiwgImNvbXBsaWFuY2VMZXZlbCI6IDEsICJkb3dubG9hZHMiOiB7ImNsaWVudCI6IHsic2hhMSI6ICIyZTlhM2UzMTA3Y2NhMDBkNmJjOWM5N2JmN2QxNDljYWUxNjNlZjIxIiwgInNpemUiOiAyMDI1OTY2MSwgInVybCI6ICJodHRwczovL2xhdW5jaGVyLm1vamFuZy5jb20vdjEvb2JqZWN0cy8yZTlhM2UzMTA3Y2NhMDBkNmJjOWM5N2JmN2QxNDljYWUxNjNlZjIxL2NsaWVudC5qYXIifSwgImNsaWVudF9tYXBwaW5ncyI6IHsic2hhMSI6ICJhNjYxYzZhNTVhMDYwMGJkMzkxYmRiYmQ2ODI3NjU0YzA1YjIxMDljIiwgInNpemUiOiA2NzE2NjkzLCAidXJsIjogImh0dHBzOi8vbGF1bmNoZXIubW9qYW5nLmNvbS92MS9vYmplY3RzL2E2NjFjNmE1NWEwNjAwYmQzOTFiZGJiZDY4Mjc2NTRjMDViMjEwOWMvY2xpZW50LnR4dCJ9LCAic2VydmVyIjogeyJzaGExIjogImM4ZjgzYzU2NTUzMDg0MzViM2RjZjAzYzA2ZDlmZTg3NDBhNzc0NjkiLCAic2l6ZSI6IDQ2NTkyNTg3LCAidXJsIjogImh0dHBzOi8vbGF1bmNoZXIubW9qYW5nLmNvbS92MS9vYmplY3RzL2M4ZjgzYzU2NTUzMDg0MzViM2RjZjAzYzA2ZDlmZTg3NDBhNzc0Njkvc2VydmVyLmphciJ9LCAic2VydmVyX21hcHBpbmdzIjogeyJzaGExIjogImU1NjJmNTg4ZmVhMTU1ZDk2MjkxMjY3NDY1ZGMzMzIzYmZlMTU1MWIiLCAic2l6ZSI6IDUyMTI5NjQsICJ1cmwiOiAiaHR0cHM6Ly9sYXVuY2hlci5tb2phbmcuY29tL3YxL29iamVjdHMvZTU2MmY1ODhmZWExNTVkOTYyOTEyNjc0NjVkYzMzMjNiZmUxNTUxYi9zZXJ2ZXIudHh0In19LCAiaWQiOiAiMS4xOC4yIiwgImphdmFWZXJzaW9uIjogeyJjb21wb25lbnQiOiAiamF2YS1ydW50aW1lLWJldGEiLCAibWFqb3JWZXJzaW9uIjogMTd9LCAibGlicmFyaWVzIjogW3siZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJjb20vbW9qYW5nL2xvZ2dpbmcvMS4wLjAvbG9nZ2luZy0xLjAuMC5qYXIiLCAic2hhMSI6ICJmNmNhM2IyZWVlMGI4MGIzODRlOGVkOTNkMzY4ZmFlY2I4MmRmYjliIiwgInNpemUiOiAxNTM0MywgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L2NvbS9tb2phbmcvbG9nZ2luZy8xLjAuMC9sb2dnaW5nLTEuMC4wLmphciJ9fSwgIm5hbWUiOiAiY29tLm1vamFuZzpsb2dnaW5nOjEuMC4wIn0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJjb20vbW9qYW5nL2Jsb2NrbGlzdC8xLjAuMTAvYmxvY2tsaXN0LTEuMC4xMC5qYXIiLCAic2hhMSI6ICI1YzY4NWM1ZmZhOTRjNGNkMzk0OTZjNzE4NGMxZDEyMmU1MTVlY2VmIiwgInNpemUiOiA5NjQsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9jb20vbW9qYW5nL2Jsb2NrbGlzdC8xLjAuMTAvYmxvY2tsaXN0LTEuMC4xMC5qYXIifX0sICJuYW1lIjogImNvbS5tb2phbmc6YmxvY2tsaXN0OjEuMC4xMCJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAiY29tL21vamFuZy9wYXRjaHkvMi4yLjEwL3BhdGNoeS0yLjIuMTAuamFyIiwgInNoYTEiOiAiZGEwNTk3MWIwN2NiYjM3OWQwMDJjZjdlYWVjNmEyMDQ4MjExZmVmYyIsICJzaXplIjogNDQzOSwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L2NvbS9tb2phbmcvcGF0Y2h5LzIuMi4xMC9wYXRjaHktMi4yLjEwLmphciJ9fSwgIm5hbWUiOiAiY29tLm1vamFuZzpwYXRjaHk6Mi4yLjEwIn0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJjb20vZ2l0aHViL29zaGkvb3NoaS1jb3JlLzUuOC41L29zaGktY29yZS01LjguNS5qYXIiLCAic2hhMSI6ICIxZDBlYzY1NGQ4MjA3NDEzMjdmNWE5MjI5ZDUxMzczMmE0YjdjZTUwIiwgInNpemUiOiA4Nzk2MjMsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9jb20vZ2l0aHViL29zaGkvb3NoaS1jb3JlLzUuOC41L29zaGktY29yZS01LjguNS5qYXIifX0sICJuYW1lIjogImNvbS5naXRodWIub3NoaTpvc2hpLWNvcmU6NS44LjUifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm5ldC9qYXZhL2Rldi9qbmEvam5hLzUuMTAuMC9qbmEtNS4xMC4wLmphciIsICJzaGExIjogIjdjZjRjODdkZDgwMmRiNTA3MjFkYjY2OTQ3YWEyMzdkN2FkMDk0MTgiLCAic2l6ZSI6IDE3NTY0MDAsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9uZXQvamF2YS9kZXYvam5hL2puYS81LjEwLjAvam5hLTUuMTAuMC5qYXIifX0sICJuYW1lIjogIm5ldC5qYXZhLmRldi5qbmE6am5hOjUuMTAuMCJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAibmV0L2phdmEvZGV2L2puYS9qbmEtcGxhdGZvcm0vNS4xMC4wL2puYS1wbGF0Zm9ybS01LjEwLjAuamFyIiwgInNoYTEiOiAiZmJlZDdkOTY2OWRiYTQ3NzE0YWQwZDRmNDQ1NDI5MGE5OTdhZWU2OSIsICJzaXplIjogMTM0MzQ5NSwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L25ldC9qYXZhL2Rldi9qbmEvam5hLXBsYXRmb3JtLzUuMTAuMC9qbmEtcGxhdGZvcm0tNS4xMC4wLmphciJ9fSwgIm5hbWUiOiAibmV0LmphdmEuZGV2LmpuYTpqbmEtcGxhdGZvcm06NS4xMC4wIn0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvc2xmNGovc2xmNGotYXBpLzEuOC4wLWJldGE0L3NsZjRqLWFwaS0xLjguMC1iZXRhNC5qYXIiLCAic2hhMSI6ICI4M2IwMzU5ZDg0N2VlMDUzZDc0NWJlN2VjMGQ4ZTllOGE0NDMwNGI0IiwgInNpemUiOiA0NDIxMywgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9zbGY0ai9zbGY0ai1hcGkvMS44LjAtYmV0YTQvc2xmNGotYXBpLTEuOC4wLWJldGE0LmphciJ9fSwgIm5hbWUiOiAib3JnLnNsZjRqOnNsZjRqLWFwaToxLjguMC1iZXRhNCJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2FwYWNoZS9sb2dnaW5nL2xvZzRqL2xvZzRqLXNsZjRqMTgtaW1wbC8yLjE3LjAvbG9nNGotc2xmNGoxOC1pbXBsLTIuMTcuMC5qYXIiLCAic2hhMSI6ICJiZDdmNmMwYjkyMjRkZDIxNGFmYjRlNjg0OTU3ZTIzNDliNTI5YThkIiwgInNpemUiOiAyMTI0NCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9hcGFjaGUvbG9nZ2luZy9sb2c0ai9sb2c0ai1zbGY0ajE4LWltcGwvMi4xNy4wL2xvZzRqLXNsZjRqMTgtaW1wbC0yLjE3LjAuamFyIn19LCAibmFtZSI6ICJvcmcuYXBhY2hlLmxvZ2dpbmcubG9nNGo6bG9nNGotc2xmNGoxOC1pbXBsOjIuMTcuMCJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAiY29tL2libS9pY3UvaWN1NGovNzAuMS9pY3U0ai03MC4xLmphciIsICJzaGExIjogImRmYTNhMWZiYzU1YmY1ZGI4YzZlNzlmYzA5MzVhYzdhYjEyMDI5NTAiLCAic2l6ZSI6IDEzNzA4OTM2LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvY29tL2libS9pY3UvaWN1NGovNzAuMS9pY3U0ai03MC4xLmphciJ9fSwgIm5hbWUiOiAiY29tLmlibS5pY3U6aWN1NGo6NzAuMSJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAiY29tL21vamFuZy9qYXZhYnJpZGdlLzEuMi4yNC9qYXZhYnJpZGdlLTEuMi4yNC5qYXIiLCAic2hhMSI6ICIwYzg3Njc5NjIyOWIyZWY1MTIwZjE4NmVhYjVhY2M4NzA2OTlkM2I5IiwgInNpemUiOiA2MDUzLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvY29tL21vamFuZy9qYXZhYnJpZGdlLzEuMi4yNC9qYXZhYnJpZGdlLTEuMi4yNC5qYXIifX0sICJuYW1lIjogImNvbS5tb2phbmc6amF2YWJyaWRnZToxLjIuMjQifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm5ldC9zZi9qb3B0LXNpbXBsZS9qb3B0LXNpbXBsZS81LjAuNC9qb3B0LXNpbXBsZS01LjAuNC5qYXIiLCAic2hhMSI6ICI0ZmRhYzJmYmU5MmRmYWQ4NmFhNmU5MzAxNzM2ZjZiNDM0MmEzZjVjIiwgInNpemUiOiA3ODE0NiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L25ldC9zZi9qb3B0LXNpbXBsZS9qb3B0LXNpbXBsZS81LjAuNC9qb3B0LXNpbXBsZS01LjAuNC5qYXIifX0sICJuYW1lIjogIm5ldC5zZi5qb3B0LXNpbXBsZTpqb3B0LXNpbXBsZTo1LjAuNCJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAiaW8vbmV0dHkvbmV0dHktYWxsLzQuMS42OC5GaW5hbC9uZXR0eS1hbGwtNC4xLjY4LkZpbmFsLmphciIsICJzaGExIjogImI4MjY2YTNjOTNjMWMwNTExMDlmNzFkMzQ0OWU1ZGNkNWQ2MGIzMzMiLCAic2l6ZSI6IDQ1MTUwNDUsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9pby9uZXR0eS9uZXR0eS1hbGwvNC4xLjY4LkZpbmFsL25ldHR5LWFsbC00LjEuNjguRmluYWwuamFyIn19LCAibmFtZSI6ICJpby5uZXR0eTpuZXR0eS1hbGw6NC4xLjY4LkZpbmFsIn0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJjb20vZ29vZ2xlL2d1YXZhL2ZhaWx1cmVhY2Nlc3MvMS4wLjEvZmFpbHVyZWFjY2Vzcy0xLjAuMS5qYXIiLCAic2hhMSI6ICIxZGNmMWRlMzgyYTBiZjk1YTNkOGIwODQ5NTQ2Yzg4YmFjMTI5MmM5IiwgInNpemUiOiA0NjE3LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvY29tL2dvb2dsZS9ndWF2YS9mYWlsdXJlYWNjZXNzLzEuMC4xL2ZhaWx1cmVhY2Nlc3MtMS4wLjEuamFyIn19LCAibmFtZSI6ICJjb20uZ29vZ2xlLmd1YXZhOmZhaWx1cmVhY2Nlc3M6MS4wLjEifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogImNvbS9nb29nbGUvZ3VhdmEvZ3VhdmEvMzEuMC4xLWpyZS9ndWF2YS0zMS4wLjEtanJlLmphciIsICJzaGExIjogIjExOWVhMmIyYmMyMDViMTM4OTc0ZDM1MTc3N2IyMGYwMmI5MjcwNGIiLCAic2l6ZSI6IDI5NzQyMTYsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9jb20vZ29vZ2xlL2d1YXZhL2d1YXZhLzMxLjAuMS1qcmUvZ3VhdmEtMzEuMC4xLWpyZS5qYXIifX0sICJuYW1lIjogImNvbS5nb29nbGUuZ3VhdmE6Z3VhdmE6MzEuMC4xLWpyZSJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2FwYWNoZS9jb21tb25zL2NvbW1vbnMtbGFuZzMvMy4xMi4wL2NvbW1vbnMtbGFuZzMtMy4xMi4wLmphciIsICJzaGExIjogImM2ODQyYzg2NzkyZmYwM2I5ZjFkMWZlMmFhYjhkYzIzYWE2YzZmMGUiLCAic2l6ZSI6IDU4NzQwMiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9hcGFjaGUvY29tbW9ucy9jb21tb25zLWxhbmczLzMuMTIuMC9jb21tb25zLWxhbmczLTMuMTIuMC5qYXIifX0sICJuYW1lIjogIm9yZy5hcGFjaGUuY29tbW9uczpjb21tb25zLWxhbmczOjMuMTIuMCJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAiY29tbW9ucy1pby9jb21tb25zLWlvLzIuMTEuMC9jb21tb25zLWlvLTIuMTEuMC5qYXIiLCAic2hhMSI6ICJhMjUwM2YzMDJiMTFlYmRlN2ViYzNkZjQxZGFlYmUwZTRlZWEzNjg5IiwgInNpemUiOiAzMjcxMzUsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9jb21tb25zLWlvL2NvbW1vbnMtaW8vMi4xMS4wL2NvbW1vbnMtaW8tMi4xMS4wLmphciJ9fSwgIm5hbWUiOiAiY29tbW9ucy1pbzpjb21tb25zLWlvOjIuMTEuMCJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAiY29tbW9ucy1jb2RlYy9jb21tb25zLWNvZGVjLzEuMTUvY29tbW9ucy1jb2RlYy0xLjE1LmphciIsICJzaGExIjogIjQ5ZDk0ODA2YjZlM2RjOTMzZGFjYmQ4YWNiMGZkYmFiOGViZDFlNWQiLCAic2l6ZSI6IDM1Mzc5MywgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L2NvbW1vbnMtY29kZWMvY29tbW9ucy1jb2RlYy8xLjE1L2NvbW1vbnMtY29kZWMtMS4xNS5qYXIifX0sICJuYW1lIjogImNvbW1vbnMtY29kZWM6Y29tbW9ucy1jb2RlYzoxLjE1In0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJjb20vbW9qYW5nL2JyaWdhZGllci8xLjAuMTgvYnJpZ2FkaWVyLTEuMC4xOC5qYXIiLCAic2hhMSI6ICJjMWVmMTIzNDI4MjcxNjQ4M2M5MjE4M2Y0OWJlZjQ3YjFhODliZmE5IiwgInNpemUiOiA3NzExNiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L2NvbS9tb2phbmcvYnJpZ2FkaWVyLzEuMC4xOC9icmlnYWRpZXItMS4wLjE4LmphciJ9fSwgIm5hbWUiOiAiY29tLm1vamFuZzpicmlnYWRpZXI6MS4wLjE4In0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJjb20vbW9qYW5nL2RhdGFmaXhlcnVwcGVyLzQuMS4yNy9kYXRhZml4ZXJ1cHBlci00LjEuMjcuamFyIiwgInNoYTEiOiAiMGEwMmM0MzgyNGNlNTdjM2Y3YTdkN2U3NDRmMGQ5OWEwNDAzOThiNSIsICJzaXplIjogNjcyOTU3LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvY29tL21vamFuZy9kYXRhZml4ZXJ1cHBlci80LjEuMjcvZGF0YWZpeGVydXBwZXItNC4xLjI3LmphciJ9fSwgIm5hbWUiOiAiY29tLm1vamFuZzpkYXRhZml4ZXJ1cHBlcjo0LjEuMjcifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogImNvbS9nb29nbGUvY29kZS9nc29uL2dzb24vMi44LjkvZ3Nvbi0yLjguOS5qYXIiLCAic2hhMSI6ICI4YTQzMmMxZDY4MjU3ODFlMjFhMDJkYjJlMmMzM2M1ZmRlMjgzM2I5IiwgInNpemUiOiAyNTgwNzUsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9jb20vZ29vZ2xlL2NvZGUvZ3Nvbi9nc29uLzIuOC45L2dzb24tMi44LjkuamFyIn19LCAibmFtZSI6ICJjb20uZ29vZ2xlLmNvZGUuZ3Nvbjpnc29uOjIuOC45In0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJjb20vbW9qYW5nL2F1dGhsaWIvMy4zLjM5L2F1dGhsaWItMy4zLjM5LmphciIsICJzaGExIjogIjI4OTQwNWU3MGMwOTE3ZWFlYWMwMTdmN2ZiYTlhZGI0NDI3YmFhMzYiLCAic2l6ZSI6IDk4NzQwLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvY29tL21vamFuZy9hdXRobGliLzMuMy4zOS9hdXRobGliLTMuMy4zOS5qYXIifX0sICJuYW1lIjogImNvbS5tb2phbmc6YXV0aGxpYjozLjMuMzkifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9hcGFjaGUvY29tbW9ucy9jb21tb25zLWNvbXByZXNzLzEuMjEvY29tbW9ucy1jb21wcmVzcy0xLjIxLmphciIsICJzaGExIjogIjRlYzk1YjYwZDRlODZiNWM5NWEwZTkxOWNiMTcyYTBhZjk4MDExZWYiLCAic2l6ZSI6IDEwMTgzMTYsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvYXBhY2hlL2NvbW1vbnMvY29tbW9ucy1jb21wcmVzcy8xLjIxL2NvbW1vbnMtY29tcHJlc3MtMS4yMS5qYXIifX0sICJuYW1lIjogIm9yZy5hcGFjaGUuY29tbW9uczpjb21tb25zLWNvbXByZXNzOjEuMjEifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9hcGFjaGUvaHR0cGNvbXBvbmVudHMvaHR0cGNsaWVudC80LjUuMTMvaHR0cGNsaWVudC00LjUuMTMuamFyIiwgInNoYTEiOiAiZTVmNmNhZTVjYTdlY2FhYzFlYzI4MjdhOWUyZDY1YWUyODY5Y2FkYSIsICJzaXplIjogNzgwMzIxLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2FwYWNoZS9odHRwY29tcG9uZW50cy9odHRwY2xpZW50LzQuNS4xMy9odHRwY2xpZW50LTQuNS4xMy5qYXIifX0sICJuYW1lIjogIm9yZy5hcGFjaGUuaHR0cGNvbXBvbmVudHM6aHR0cGNsaWVudDo0LjUuMTMifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogImNvbW1vbnMtbG9nZ2luZy9jb21tb25zLWxvZ2dpbmcvMS4yL2NvbW1vbnMtbG9nZ2luZy0xLjIuamFyIiwgInNoYTEiOiAiNGJmYzEyYWRmZTQ4NDJiZjA3YjY1N2YwMzY5YzRjYjUyMjk1NTY4NiIsICJzaXplIjogNjE4MjksICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9jb21tb25zLWxvZ2dpbmcvY29tbW9ucy1sb2dnaW5nLzEuMi9jb21tb25zLWxvZ2dpbmctMS4yLmphciJ9fSwgIm5hbWUiOiAiY29tbW9ucy1sb2dnaW5nOmNvbW1vbnMtbG9nZ2luZzoxLjIifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9hcGFjaGUvaHR0cGNvbXBvbmVudHMvaHR0cGNvcmUvNC40LjE0L2h0dHBjb3JlLTQuNC4xNC5qYXIiLCAic2hhMSI6ICI5ZGQxYTYzMWMwODJkOTJlY2Q0YmQ4ZmQ0Y2Y1NTAyNmM3MjBhOGMxIiwgInNpemUiOiAzMjg0MzYsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvYXBhY2hlL2h0dHBjb21wb25lbnRzL2h0dHBjb3JlLzQuNC4xNC9odHRwY29yZS00LjQuMTQuamFyIn19LCAibmFtZSI6ICJvcmcuYXBhY2hlLmh0dHBjb21wb25lbnRzOmh0dHBjb3JlOjQuNC4xNCJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAiaXQvdW5pbWkvZHNpL2Zhc3R1dGlsLzguNS42L2Zhc3R1dGlsLTguNS42LmphciIsICJzaGExIjogIjc2Zjk1NzAwNDE4YTY4ZmJjNGFjMDUwNTI1MjYxZjA1ZGM2ODFjYTEiLCAic2l6ZSI6IDIzNTY1MjQ4LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvaXQvdW5pbWkvZHNpL2Zhc3R1dGlsLzguNS42L2Zhc3R1dGlsLTguNS42LmphciJ9fSwgIm5hbWUiOiAiaXQudW5pbWkuZHNpOmZhc3R1dGlsOjguNS42In0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvYXBhY2hlL2xvZ2dpbmcvbG9nNGovbG9nNGotYXBpLzIuMTcuMC9sb2c0ai1hcGktMi4xNy4wLmphciIsICJzaGExIjogImJiZDc5MWU5YzhjOTQyMWU0NTMzN2M0ZmUwYTEwODUxYzA4NmUzNmMiLCAic2l6ZSI6IDMwMTc3NiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9hcGFjaGUvbG9nZ2luZy9sb2c0ai9sb2c0ai1hcGkvMi4xNy4wL2xvZzRqLWFwaS0yLjE3LjAuamFyIn19LCAibmFtZSI6ICJvcmcuYXBhY2hlLmxvZ2dpbmcubG9nNGo6bG9nNGotYXBpOjIuMTcuMCJ9LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2FwYWNoZS9sb2dnaW5nL2xvZzRqL2xvZzRqLWNvcmUvMi4xNy4wL2xvZzRqLWNvcmUtMi4xNy4wLmphciIsICJzaGExIjogImZlNmU3YTMyYzEyMjg4ODRiOTY5MWE3NDRmOTUzYTU1ZDBkZDhlYWQiLCAic2l6ZSI6IDE3ODkzMzksICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvYXBhY2hlL2xvZ2dpbmcvbG9nNGovbG9nNGotY29yZS8yLjE3LjAvbG9nNGotY29yZS0yLjE3LjAuamFyIn19LCAibmFtZSI6ICJvcmcuYXBhY2hlLmxvZ2dpbmcubG9nNGo6bG9nNGotY29yZToyLjE3LjAifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC8zLjIuMS9sd2pnbC0zLjIuMS5qYXIiLCAic2hhMSI6ICIyYmI1MTRlNDQ0OTk0YzZmZWNlOTlhMjFmNzZlMGM5MDQzOGUzNzdmIiwgInNpemUiOiAzMTc3NDgsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wvMy4yLjEvbHdqZ2wtMy4yLjEuamFyIn19LCAibmFtZSI6ICJvcmcubHdqZ2w6bHdqZ2w6My4yLjEiLCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wvMy4yLjIvbHdqZ2wtMy4yLjIuamFyIiwgInNoYTEiOiAiOGFkNjI5NDQwN2UxNTc4MGI0M2U4NDkyOWM0MGU0YzVlOTk3OTcyZSIsICJzaXplIjogMzIxOTAwLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLzMuMi4yL2x3amdsLTMuMi4yLmphciJ9fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsOjMuMi4yIiwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93In0sIHsiYWN0aW9uIjogImRpc2FsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4xL2x3amdsLWplbWFsbG9jLTMuMi4xLmphciIsICJzaGExIjogIjdhMGM1ODNmY2JlYzMyYjE1Nzg0Zjg0NmRmNTM2ZTE4MzdkODM2NjYiLCAic2l6ZSI6IDM4NjE2LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4xL2x3amdsLWplbWFsbG9jLTMuMi4xLmphciJ9fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLWplbWFsbG9jOjMuMi4xIiwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4yL2x3amdsLWplbWFsbG9jLTMuMi4yLmphciIsICJzaGExIjogImVlOGU1N2E3OTMwMGY3ODI5NDU3NmQ4N2M0YTU4N2Y4Yzk5NDAyZTIiLCAic2l6ZSI6IDM0ODQ4LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4yL2x3amdsLWplbWFsbG9jLTMuMi4yLmphciJ9fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLWplbWFsbG9jOjMuMi4yIiwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93In0sIHsiYWN0aW9uIjogImRpc2FsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLW9wZW5hbC8zLjIuMS9sd2pnbC1vcGVuYWwtMy4yLjEuamFyIiwgInNoYTEiOiAiZGM3ZmYyZGFiYjQwYTE0MWVlOWJmMmUzMjZkOWIxYjE5ZjMyNzhmYiIsICJzaXplIjogODAxMDMsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4xL2x3amdsLW9wZW5hbC0zLjIuMS5qYXIifX0sICJuYW1lIjogIm9yZy5sd2pnbDpsd2pnbC1vcGVuYWw6My4yLjEiLCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4yL2x3amdsLW9wZW5hbC0zLjIuMi5qYXIiLCAic2hhMSI6ICIyYjc3MmExMDJiMGExMWVlNWYyMTA5YTViMTM2ZjRkYzdjNjMwODI3IiwgInNpemUiOiA4MDAxMiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuYWwvMy4yLjIvbHdqZ2wtb3BlbmFsLTMuMi4yLmphciJ9fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLW9wZW5hbDozLjIuMiIsICJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyJ9LCB7ImFjdGlvbiI6ICJkaXNhbGxvdyIsICJvcyI6IHsibmFtZSI6ICJvc3gifX1dfSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjEvbHdqZ2wtb3BlbmdsLTMuMi4xLmphciIsICJzaGExIjogIjU3MDA4YzIzNzRjNWJjNDM0YjE4YWRmZWYzZjM2NTNlZTQ1MGVlMTgiLCAic2l6ZSI6IDkzMTMyMiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjEvbHdqZ2wtb3BlbmdsLTMuMi4xLmphciJ9fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLW9wZW5nbDozLjIuMSIsICJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyIsICJvcyI6IHsibmFtZSI6ICJvc3gifX1dfSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjIvbHdqZ2wtb3BlbmdsLTMuMi4yLmphciIsICJzaGExIjogIjZhYzViYjg4YjQ0YzQzZWExOTVhNTcwYWFiMDU5ZjYzZGEwMDRjZDgiLCAic2l6ZSI6IDkyOTc4MCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjIvbHdqZ2wtb3BlbmdsLTMuMi4yLmphciJ9fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLW9wZW5nbDozLjIuMiIsICJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyJ9LCB7ImFjdGlvbiI6ICJkaXNhbGxvdyIsICJvcyI6IHsibmFtZSI6ICJvc3gifX1dfSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1nbGZ3LzMuMi4xL2x3amdsLWdsZnctMy4yLjEuamFyIiwgInNoYTEiOiAiMDI3YWJiN2Y2NDg5NGI2MWNhZDE2Mzc5MWFjZDgxMTNmMGIyMTI5NiIsICJzaXplIjogMTE2NzA4LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjEvbHdqZ2wtZ2xmdy0zLjIuMS5qYXIifX0sICJuYW1lIjogIm9yZy5sd2pnbDpsd2pnbC1nbGZ3OjMuMi4xIiwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjIvbHdqZ2wtZ2xmdy0zLjIuMi5qYXIiLCAic2hhMSI6ICJkM2FkNGRmMzhlNDAwYjhhZmJhMWRlNjNmODQzMzg4MDkzOTlkZjViIiwgInNpemUiOiAxMDg5MDcsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtZ2xmdy8zLjIuMi9sd2pnbC1nbGZ3LTMuMi4yLmphciJ9fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLWdsZnc6My4yLjIiLCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3cifSwgeyJhY3Rpb24iOiAiZGlzYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4xL2x3amdsLXN0Yi0zLjIuMS5qYXIiLCAic2hhMSI6ICIzMWY1ZWI1ZmNlMzc5MWQ1OGVjODk4YmM1YzE4NjdkNzZkNzgxYmExIiwgInNpemUiOiAxMDU3NjUsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4xL2x3amdsLXN0Yi0zLjIuMS5qYXIifX0sICJuYW1lIjogIm9yZy5sd2pnbDpsd2pnbC1zdGI6My4yLjEiLCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4yL2x3amdsLXN0Yi0zLjIuMi5qYXIiLCAic2hhMSI6ICIzYjhlNmViYzU4NTFkZDNkMTdlMzdlNWNhZGNlMmVmZjJhNDI5ZjBmIiwgInNpemUiOiAxMDQ0NjksICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4yL2x3amdsLXN0Yi0zLjIuMi5qYXIifX0sICJuYW1lIjogIm9yZy5sd2pnbDpsd2pnbC1zdGI6My4yLjIiLCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3cifSwgeyJhY3Rpb24iOiAiZGlzYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtdGlueWZkLzMuMi4xL2x3amdsLXRpbnlmZC0zLjIuMS5qYXIiLCAic2hhMSI6ICIyNTlmMWRiZGRiOTIxZTI3ZTAxYjMyNDU4ZDZmNTg0ZWI4YmJhMTNhIiwgInNpemUiOiA3MDg4LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMS9sd2pnbC10aW55ZmQtMy4yLjEuamFyIn19LCAibmFtZSI6ICJvcmcubHdqZ2w6bHdqZ2wtdGlueWZkOjMuMi4xIiwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMi9sd2pnbC10aW55ZmQtMy4yLjIuamFyIiwgInNoYTEiOiAiZmNiZTYwNmM4ZjhkYTZmOGY5YTA1ZTJjNTQwZWIxZWU4NjMyYjBlOSIsICJzaXplIjogNzA5MiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC10aW55ZmQvMy4yLjIvbHdqZ2wtdGlueWZkLTMuMi4yLmphciJ9fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLXRpbnlmZDozLjIuMiIsICJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyJ9LCB7ImFjdGlvbiI6ICJkaXNhbGxvdyIsICJvcyI6IHsibmFtZSI6ICJvc3gifX1dfSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC8zLjIuMS9sd2pnbC0zLjIuMS5qYXIiLCAic2hhMSI6ICIyYmI1MTRlNDQ0OTk0YzZmZWNlOTlhMjFmNzZlMGM5MDQzOGUzNzdmIiwgInNpemUiOiAzMTc3NDgsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wvMy4yLjEvbHdqZ2wtMy4yLjEuamFyIn0sICJjbGFzc2lmaWVycyI6IHsiamF2YWRvYyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wvMy4yLjEvbHdqZ2wtMy4yLjEtamF2YWRvYy5qYXIiLCAic2hhMSI6ICIxZjZiNzA1MDczNzU1OWI3NzVkNzk3YzBlYTU2NjEyYjhlMzczZmQ2IiwgInNpemUiOiAxMjg3MTc0LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLzMuMi4xL2x3amdsLTMuMi4xLWphdmFkb2MuamFyIn0sICJuYXRpdmVzLWxpbnV4IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC8zLjIuMS9sd2pnbC0zLjIuMS1uYXRpdmVzLWxpbnV4LmphciIsICJzaGExIjogIjliZGQ0N2NkNjNjZTEwMmNlYzgzN2EzOTZjOGRlZDU5N2NiNzVhNjYiLCAic2l6ZSI6IDg3NDg0LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLzMuMi4xL2x3amdsLTMuMi4xLW5hdGl2ZXMtbGludXguamFyIn0sICJuYXRpdmVzLW1hY29zIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC8zLjIuMS9sd2pnbC0zLjIuMS1uYXRpdmVzLW1hY29zLmphciIsICJzaGExIjogIjVhNGMyNzFkMTUwOTA2ODU4ZDQ3NTYwM2RjYjk0Nzk0NTNjNjA1NTUiLCAic2l6ZSI6IDM5ODM1LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLzMuMi4xL2x3amdsLTMuMi4xLW5hdGl2ZXMtbWFjb3MuamFyIn0sICJuYXRpdmVzLXdpbmRvd3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLzMuMi4xL2x3amdsLTMuMi4xLW5hdGl2ZXMtd2luZG93cy5qYXIiLCAic2hhMSI6ICJlNzk5ZDA2Yjg5NjlkYjA2MTBlNjg3NzZlMGVmZjRiNjE5MTA5OGJkIiwgInNpemUiOiAyNTU4NzEsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wvMy4yLjEvbHdqZ2wtMy4yLjEtbmF0aXZlcy13aW5kb3dzLmphciJ9LCAic291cmNlcyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wvMy4yLjEvbHdqZ2wtMy4yLjEtc291cmNlcy5qYXIiLCAic2hhMSI6ICIxMDZmOTBhYzQxNDQ5MDA0YTk2OTMwOTQ4OGFhNmUzYTJmN2Q2NzMxIiwgInNpemUiOiAyNTU2NzEsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wvMy4yLjEvbHdqZ2wtMy4yLjEtc291cmNlcy5qYXIifX19LCAibmFtZSI6ICJvcmcubHdqZ2w6bHdqZ2w6My4yLjEiLCAibmF0aXZlcyI6IHsib3N4IjogIm5hdGl2ZXMtbWFjb3MifSwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLzMuMi4yL2x3amdsLTMuMi4yLmphciIsICJzaGExIjogIjhhZDYyOTQ0MDdlMTU3ODBiNDNlODQ5MjljNDBlNGM1ZTk5Nzk3MmUiLCAic2l6ZSI6IDMyMTkwMCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC8zLjIuMi9sd2pnbC0zLjIuMi5qYXIifSwgImNsYXNzaWZpZXJzIjogeyJuYXRpdmVzLWxpbnV4IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC8zLjIuMi9sd2pnbC0zLjIuMi1uYXRpdmVzLWxpbnV4LmphciIsICJzaGExIjogImFlNzk3NjgyN2NhMmEzNzQxZjZiOWE4NDNhODliYWNkNjM3YWYzNTAiLCAic2l6ZSI6IDEyNDc3NiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC8zLjIuMi9sd2pnbC0zLjIuMi1uYXRpdmVzLWxpbnV4LmphciJ9LCAibmF0aXZlcy1tYWNvcyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wvMy4yLjIvbHdqZ2wtMy4yLjItbmF0aXZlcy1tYWNvcy5qYXIiLCAic2hhMSI6ICJiYmZiNzU2OTNiZGI3MTRjMGM2OWMyYzlmOWJlNzNkMjU5YjQzYjYyIiwgInNpemUiOiA0ODQ2MiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC8zLjIuMi9sd2pnbC0zLjIuMi1uYXRpdmVzLW1hY29zLmphciJ9LCAibmF0aXZlcy13aW5kb3dzIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC8zLjIuMi9sd2pnbC0zLjIuMi1uYXRpdmVzLXdpbmRvd3MuamFyIiwgInNoYTEiOiAiMDUzNTlmM2FhNTBkMzYzNTI4MTVmYzY2MmVhNzNlMWMwMGQyMjE3MCIsICJzaXplIjogMjc5NTkzLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLzMuMi4yL2x3amdsLTMuMi4yLW5hdGl2ZXMtd2luZG93cy5qYXIifX19LCAibmFtZSI6ICJvcmcubHdqZ2w6bHdqZ2w6My4yLjIiLCAibmF0aXZlcyI6IHsibGludXgiOiAibmF0aXZlcy1saW51eCIsICJ3aW5kb3dzIjogIm5hdGl2ZXMtd2luZG93cyJ9LCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3cifSwgeyJhY3Rpb24iOiAiZGlzYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtamVtYWxsb2MvMy4yLjEvbHdqZ2wtamVtYWxsb2MtMy4yLjEuamFyIiwgInNoYTEiOiAiN2EwYzU4M2ZjYmVjMzJiMTU3ODRmODQ2ZGY1MzZlMTgzN2Q4MzY2NiIsICJzaXplIjogMzg2MTYsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtamVtYWxsb2MvMy4yLjEvbHdqZ2wtamVtYWxsb2MtMy4yLjEuamFyIn0sICJjbGFzc2lmaWVycyI6IHsiamF2YWRvYyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtamVtYWxsb2MvMy4yLjEvbHdqZ2wtamVtYWxsb2MtMy4yLjEtamF2YWRvYy5qYXIiLCAic2hhMSI6ICIwNGY2ODk3YmUxZTJkNjhiZmY1ZWM1ZTkxYTJiOTZlMzJmMDg0YzA5IiwgInNpemUiOiA0NjEwNDEsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtamVtYWxsb2MvMy4yLjEvbHdqZ2wtamVtYWxsb2MtMy4yLjEtamF2YWRvYy5qYXIifSwgIm5hdGl2ZXMtbGludXgiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4xL2x3amdsLWplbWFsbG9jLTMuMi4xLW5hdGl2ZXMtbGludXguamFyIiwgInNoYTEiOiAiNTUzNjYxNmI1NThjZWEyZmVhNjMzMGNhNjgyZmQ3YzczM2RiOWM0MyIsICJzaXplIjogMTU2MDU3LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4xL2x3amdsLWplbWFsbG9jLTMuMi4xLW5hdGl2ZXMtbGludXguamFyIn0sICJuYXRpdmVzLW1hY29zIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1qZW1hbGxvYy8zLjIuMS9sd2pnbC1qZW1hbGxvYy0zLjIuMS1uYXRpdmVzLW1hY29zLmphciIsICJzaGExIjogIjQzOWFiOWQwMjY0MTY3YTk0OWNjN2JjY2U2NzM3MDQzMjJiYWFmNTAiLCAic2l6ZSI6IDExNzAwMSwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1qZW1hbGxvYy8zLjIuMS9sd2pnbC1qZW1hbGxvYy0zLjIuMS1uYXRpdmVzLW1hY29zLmphciJ9LCAibmF0aXZlcy13aW5kb3dzIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1qZW1hbGxvYy8zLjIuMS9sd2pnbC1qZW1hbGxvYy0zLjIuMS1uYXRpdmVzLXdpbmRvd3MuamFyIiwgInNoYTEiOiAiM2M4NjliM2Q3NjM4YzgwMGI3MDM5Y2Q4NTlkMDY0NjU4NjQzYWQ2ZSIsICJzaXplIjogMjE4MTM2LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4xL2x3amdsLWplbWFsbG9jLTMuMi4xLW5hdGl2ZXMtd2luZG93cy5qYXIifSwgInNvdXJjZXMiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4xL2x3amdsLWplbWFsbG9jLTMuMi4xLXNvdXJjZXMuamFyIiwgInNoYTEiOiAiNDQ1MGRjYTQ2MjI4YzAyYzUxYmI5YmJkYTcwZTdjZmMzMTU0Mjk2ZCIsICJzaXplIjogMzEyNzksICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtamVtYWxsb2MvMy4yLjEvbHdqZ2wtamVtYWxsb2MtMy4yLjEtc291cmNlcy5qYXIifX19LCAibmFtZSI6ICJvcmcubHdqZ2w6bHdqZ2wtamVtYWxsb2M6My4yLjEiLCAibmF0aXZlcyI6IHsib3N4IjogIm5hdGl2ZXMtbWFjb3MifSwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4yL2x3amdsLWplbWFsbG9jLTMuMi4yLmphciIsICJzaGExIjogImVlOGU1N2E3OTMwMGY3ODI5NDU3NmQ4N2M0YTU4N2Y4Yzk5NDAyZTIiLCAic2l6ZSI6IDM0ODQ4LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4yL2x3amdsLWplbWFsbG9jLTMuMi4yLmphciJ9LCAiY2xhc3NpZmllcnMiOiB7Im5hdGl2ZXMtbGludXgiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4yL2x3amdsLWplbWFsbG9jLTMuMi4yLW5hdGl2ZXMtbGludXguamFyIiwgInNoYTEiOiAiMjY4YzA4YTE1MDM0N2UwNGU0NGJhNTZlMzU5ZDYyYzliNzg2NjlkZiIsICJzaXplIjogMTU2MTczLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4yL2x3amdsLWplbWFsbG9jLTMuMi4yLW5hdGl2ZXMtbGludXguamFyIn0sICJuYXRpdmVzLW1hY29zIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1qZW1hbGxvYy8zLjIuMi9sd2pnbC1qZW1hbGxvYy0zLjIuMi1uYXRpdmVzLW1hY29zLmphciIsICJzaGExIjogIjgwNWY1YTEwNDY1Mzc1YmEwMzRiMjdiNzIzMzE5MTJmZDI4NDY2OTAiLCAic2l6ZSI6IDExNzEyNywgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1qZW1hbGxvYy8zLjIuMi9sd2pnbC1qZW1hbGxvYy0zLjIuMi1uYXRpdmVzLW1hY29zLmphciJ9LCAibmF0aXZlcy13aW5kb3dzIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1qZW1hbGxvYy8zLjIuMi9sd2pnbC1qZW1hbGxvYy0zLjIuMi1uYXRpdmVzLXdpbmRvd3MuamFyIiwgInNoYTEiOiAiMzM4YjI1Yjk5ZGEzYmE1ZjQ0MWY2NDkyZjJjZTJhOWM2MDg4NjBlZCIsICJzaXplIjogMjIwNjIzLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWplbWFsbG9jLzMuMi4yL2x3amdsLWplbWFsbG9jLTMuMi4yLW5hdGl2ZXMtd2luZG93cy5qYXIifX19LCAibmFtZSI6ICJvcmcubHdqZ2w6bHdqZ2wtamVtYWxsb2M6My4yLjIiLCAibmF0aXZlcyI6IHsibGludXgiOiAibmF0aXZlcy1saW51eCIsICJ3aW5kb3dzIjogIm5hdGl2ZXMtd2luZG93cyJ9LCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3cifSwgeyJhY3Rpb24iOiAiZGlzYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4xL2x3amdsLW9wZW5hbC0zLjIuMS5qYXIiLCAic2hhMSI6ICJkYzdmZjJkYWJiNDBhMTQxZWU5YmYyZTMyNmQ5YjFiMTlmMzI3OGZiIiwgInNpemUiOiA4MDEwMywgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuYWwvMy4yLjEvbHdqZ2wtb3BlbmFsLTMuMi4xLmphciJ9LCAiY2xhc3NpZmllcnMiOiB7ImphdmFkb2MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLW9wZW5hbC8zLjIuMS9sd2pnbC1vcGVuYWwtMy4yLjEtamF2YWRvYy5qYXIiLCAic2hhMSI6ICI5NTc1MmY0NDM2ODZkYTFiMzQ0M2UzOTdkYzgzZTczMGUxOTA3YTFlIiwgInNpemUiOiA2MTc4NjksICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4xL2x3amdsLW9wZW5hbC0zLjIuMS1qYXZhZG9jLmphciJ9LCAibmF0aXZlcy1saW51eCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4xL2x3amdsLW9wZW5hbC0zLjIuMS1uYXRpdmVzLWxpbnV4LmphciIsICJzaGExIjogImJjZDRiZTY3ODYzZGQ5MDhmNjk2ZjYyOGMzY2E5ZjZlYjlhZTUxNTIiLCAic2l6ZSI6IDU5MDcxNiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuYWwvMy4yLjEvbHdqZ2wtb3BlbmFsLTMuMi4xLW5hdGl2ZXMtbGludXguamFyIn0sICJuYXRpdmVzLW1hY29zIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1vcGVuYWwvMy4yLjEvbHdqZ2wtb3BlbmFsLTMuMi4xLW5hdGl2ZXMtbWFjb3MuamFyIiwgInNoYTEiOiAiOTM1N2ViZmM4MmEwZDZmNjRlMTcwOTNkZDk2MzIxOTM2N2NkNmZhMiIsICJzaXplIjogNTI4MDA0LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLW9wZW5hbC8zLjIuMS9sd2pnbC1vcGVuYWwtMy4yLjEtbmF0aXZlcy1tYWNvcy5qYXIifSwgIm5hdGl2ZXMtd2luZG93cyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4xL2x3amdsLW9wZW5hbC0zLjIuMS1uYXRpdmVzLXdpbmRvd3MuamFyIiwgInNoYTEiOiAiOTJmYjkzMWU2NWM2MzdjZWEyMDlhZDVjM2ZmZWJkMWIzMjVlZDQxZCIsICJzaXplIjogMTMxMDA4MywgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuYWwvMy4yLjEvbHdqZ2wtb3BlbmFsLTMuMi4xLW5hdGl2ZXMtd2luZG93cy5qYXIifSwgInNvdXJjZXMiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLW9wZW5hbC8zLjIuMS9sd2pnbC1vcGVuYWwtMy4yLjEtc291cmNlcy5qYXIiLCAic2hhMSI6ICI4ZmUzZDZlNjM1MzY4NTE2NGIxZWIzYTIyOTgwYWFhMTExNWQ0YTMyIiwgInNpemUiOiA3ODM3OSwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuYWwvMy4yLjEvbHdqZ2wtb3BlbmFsLTMuMi4xLXNvdXJjZXMuamFyIn19fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLW9wZW5hbDozLjIuMSIsICJuYXRpdmVzIjogeyJvc3giOiAibmF0aXZlcy1tYWNvcyJ9LCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4yL2x3amdsLW9wZW5hbC0zLjIuMi5qYXIiLCAic2hhMSI6ICIyYjc3MmExMDJiMGExMWVlNWYyMTA5YTViMTM2ZjRkYzdjNjMwODI3IiwgInNpemUiOiA4MDAxMiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuYWwvMy4yLjIvbHdqZ2wtb3BlbmFsLTMuMi4yLmphciJ9LCAiY2xhc3NpZmllcnMiOiB7Im5hdGl2ZXMtbGludXgiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLW9wZW5hbC8zLjIuMi9sd2pnbC1vcGVuYWwtMy4yLjItbmF0aXZlcy1saW51eC5qYXIiLCAic2hhMSI6ICIwMzY0ZjlmNWMzOTQ3MzkzMDgzYWI1ZjM3YTU3MWY1NjAzYWFkZDBiIiwgInNpemUiOiA1OTA5OTcsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4yL2x3amdsLW9wZW5hbC0zLjIuMi1uYXRpdmVzLWxpbnV4LmphciJ9LCAibmF0aXZlcy1tYWNvcyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4yL2x3amdsLW9wZW5hbC0zLjIuMi1uYXRpdmVzLW1hY29zLmphciIsICJzaGExIjogImE5N2I2MzQ1ZDVhOWRkZjg4OWUyNjJiZDdhZDhlZWQ0M2IxYmIwNjMiLCAic2l6ZSI6IDUyODAwNiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuYWwvMy4yLjIvbHdqZ2wtb3BlbmFsLTMuMi4yLW5hdGl2ZXMtbWFjb3MuamFyIn0sICJuYXRpdmVzLXdpbmRvd3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLW9wZW5hbC8zLjIuMi9sd2pnbC1vcGVuYWwtMy4yLjItbmF0aXZlcy13aW5kb3dzLmphciIsICJzaGExIjogImVjMjBhN2Q0MmEyNDM4NTI4ZmNhODdlNjBiMTcwNWYxZTIzMzlkZGIiLCAic2l6ZSI6IDEzMTAxMDIsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtb3BlbmFsLzMuMi4yL2x3amdsLW9wZW5hbC0zLjIuMi1uYXRpdmVzLXdpbmRvd3MuamFyIn19fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLW9wZW5hbDozLjIuMiIsICJuYXRpdmVzIjogeyJsaW51eCI6ICJuYXRpdmVzLWxpbnV4IiwgIndpbmRvd3MiOiAibmF0aXZlcy13aW5kb3dzIn0sICJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyJ9LCB7ImFjdGlvbiI6ICJkaXNhbGxvdyIsICJvcyI6IHsibmFtZSI6ICJvc3gifX1dfSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjEvbHdqZ2wtb3BlbmdsLTMuMi4xLmphciIsICJzaGExIjogIjU3MDA4YzIzNzRjNWJjNDM0YjE4YWRmZWYzZjM2NTNlZTQ1MGVlMTgiLCAic2l6ZSI6IDkzMTMyMiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjEvbHdqZ2wtb3BlbmdsLTMuMi4xLmphciJ9LCAiY2xhc3NpZmllcnMiOiB7ImphdmFkb2MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLW9wZW5nbC8zLjIuMS9sd2pnbC1vcGVuZ2wtMy4yLjEtamF2YWRvYy5qYXIiLCAic2hhMSI6ICJlMjVmYzhjYmNiZWU2ODE4MmE2YjdmMTNhZDcxYjFmMDk2MTAwNWFkIiwgInNpemUiOiA0MzA3NTYxLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLW9wZW5nbC8zLjIuMS9sd2pnbC1vcGVuZ2wtMy4yLjEtamF2YWRvYy5qYXIifSwgIm5hdGl2ZXMtbGludXgiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLW9wZW5nbC8zLjIuMS9sd2pnbC1vcGVuZ2wtMy4yLjEtbmF0aXZlcy1saW51eC5qYXIiLCAic2hhMSI6ICJjNDNiYjA4ZWQ3ZGNmMWE2ZDM0NDgwM2U0NjQxNDhiM2IxNGRkMjc0IiwgInNpemUiOiA3NzQwMSwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjEvbHdqZ2wtb3BlbmdsLTMuMi4xLW5hdGl2ZXMtbGludXguamFyIn0sICJuYXRpdmVzLW1hY29zIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjEvbHdqZ2wtb3BlbmdsLTMuMi4xLW5hdGl2ZXMtbWFjb3MuamFyIiwgInNoYTEiOiAiZGNhOWFkOWU1OWE4NzE3MjE0NGQ1MzFlMDhlZjdmNjk4ODA3M2RiMCIsICJzaXplIjogMzg5OTgsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtb3BlbmdsLzMuMi4xL2x3amdsLW9wZW5nbC0zLjIuMS1uYXRpdmVzLW1hY29zLmphciJ9LCAibmF0aXZlcy13aW5kb3dzIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjEvbHdqZ2wtb3BlbmdsLTMuMi4xLW5hdGl2ZXMtd2luZG93cy5qYXIiLCAic2hhMSI6ICI4MDk1NDk2MWIzMTA4NGQ3YjRmMmYwNDFkNmI1YTc5OWE3NzRjODgwIiwgInNpemUiOiAxNzA4MDQsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtb3BlbmdsLzMuMi4xL2x3amdsLW9wZW5nbC0zLjIuMS1uYXRpdmVzLXdpbmRvd3MuamFyIn0sICJzb3VyY2VzIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjEvbHdqZ2wtb3BlbmdsLTMuMi4xLXNvdXJjZXMuamFyIiwgInNoYTEiOiAiNDc5MzBmZmJlZjUzYzBmNDVjN2UzNWMwMWIxYzZhZDViMjIwNTgwOSIsICJzaXplIjogMTI1MTU4MiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjEvbHdqZ2wtb3BlbmdsLTMuMi4xLXNvdXJjZXMuamFyIn19fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLW9wZW5nbDozLjIuMSIsICJuYXRpdmVzIjogeyJvc3giOiAibmF0aXZlcy1tYWNvcyJ9LCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtb3BlbmdsLzMuMi4yL2x3amdsLW9wZW5nbC0zLjIuMi5qYXIiLCAic2hhMSI6ICI2YWM1YmI4OGI0NGM0M2VhMTk1YTU3MGFhYjA1OWY2M2RhMDA0Y2Q4IiwgInNpemUiOiA5Mjk3ODAsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtb3BlbmdsLzMuMi4yL2x3amdsLW9wZW5nbC0zLjIuMi5qYXIifSwgImNsYXNzaWZpZXJzIjogeyJuYXRpdmVzLWxpbnV4IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1vcGVuZ2wvMy4yLjIvbHdqZ2wtb3BlbmdsLTMuMi4yLW5hdGl2ZXMtbGludXguamFyIiwgInNoYTEiOiAiMzM4ZDMzMzg3OTE5Y2IzZjRjZGJhMTQzYzJiNzM4YTcxY2NmZGE2MCIsICJzaXplIjogNzczOTIsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtb3BlbmdsLzMuMi4yL2x3amdsLW9wZW5nbC0zLjIuMi1uYXRpdmVzLWxpbnV4LmphciJ9LCAibmF0aXZlcy1tYWNvcyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtb3BlbmdsLzMuMi4yL2x3amdsLW9wZW5nbC0zLjIuMi1uYXRpdmVzLW1hY29zLmphciIsICJzaGExIjogImNmNGY0M2U2OWVlNzBkOGViZmJiNmJhOTNkZWM5MDE2MzM5ZTRmZGMiLCAic2l6ZSI6IDM4OTg5LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLW9wZW5nbC8zLjIuMi9sd2pnbC1vcGVuZ2wtMy4yLjItbmF0aXZlcy1tYWNvcy5qYXIifSwgIm5hdGl2ZXMtd2luZG93cyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtb3BlbmdsLzMuMi4yL2x3amdsLW9wZW5nbC0zLjIuMi1uYXRpdmVzLXdpbmRvd3MuamFyIiwgInNoYTEiOiAiZDhkY2RjOTEwNjZjYWUyZDJkODI3OWNiNGE5ZjlmMDVkOTUyNTgyNiIsICJzaXplIjogMTcwNzk4LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLW9wZW5nbC8zLjIuMi9sd2pnbC1vcGVuZ2wtMy4yLjItbmF0aXZlcy13aW5kb3dzLmphciJ9fX0sICJuYW1lIjogIm9yZy5sd2pnbDpsd2pnbC1vcGVuZ2w6My4yLjIiLCAibmF0aXZlcyI6IHsibGludXgiOiAibmF0aXZlcy1saW51eCIsICJ3aW5kb3dzIjogIm5hdGl2ZXMtd2luZG93cyJ9LCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3cifSwgeyJhY3Rpb24iOiAiZGlzYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtZ2xmdy8zLjIuMS9sd2pnbC1nbGZ3LTMuMi4xLmphciIsICJzaGExIjogIjAyN2FiYjdmNjQ4OTRiNjFjYWQxNjM3OTFhY2Q4MTEzZjBiMjEyOTYiLCAic2l6ZSI6IDExNjcwOCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1nbGZ3LzMuMi4xL2x3amdsLWdsZnctMy4yLjEuamFyIn0sICJjbGFzc2lmaWVycyI6IHsiamF2YWRvYyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtZ2xmdy8zLjIuMS9sd2pnbC1nbGZ3LTMuMi4xLWphdmFkb2MuamFyIiwgInNoYTEiOiAiODE0ODJhMTRiNjE3ZTRmYjBjN2RlNjliM2UwNmVmMmUyOGVmODk0ZiIsICJzaXplIjogNjkwNzc0LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjEvbHdqZ2wtZ2xmdy0zLjIuMS1qYXZhZG9jLmphciJ9LCAibmF0aXZlcy1saW51eCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtZ2xmdy8zLjIuMS9sd2pnbC1nbGZ3LTMuMi4xLW5hdGl2ZXMtbGludXguamFyIiwgInNoYTEiOiAiNWEyZmIyN2Y5ZTEyYTM0ZWNhYmY2ZjZhNzYwNmM2MTg0OWUzNDdlZSIsICJzaXplIjogMTU3NDMxLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjEvbHdqZ2wtZ2xmdy0zLjIuMS1uYXRpdmVzLWxpbnV4LmphciJ9LCAibmF0aXZlcy1tYWNvcyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtZ2xmdy8zLjIuMS9sd2pnbC1nbGZ3LTMuMi4xLW5hdGl2ZXMtbWFjb3MuamFyIiwgInNoYTEiOiAiNzJmZTZkYWI2MTEwYTVhMWNkNDgzM2YxMTg0MGVlZjdiMmVhZGNlNSIsICJzaXplIjogNjQ3MjQsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtZ2xmdy8zLjIuMS9sd2pnbC1nbGZ3LTMuMi4xLW5hdGl2ZXMtbWFjb3MuamFyIn0sICJuYXRpdmVzLXdpbmRvd3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjEvbHdqZ2wtZ2xmdy0zLjIuMS1uYXRpdmVzLXdpbmRvd3MuamFyIiwgInNoYTEiOiAiMDBkZWY3YzU4YWQyZTFjYjI1OGQ2ZDczYmUxODFmZmFiOGVmOGJkNSIsICJzaXplIjogMjY1MzA0LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjEvbHdqZ2wtZ2xmdy0zLjIuMS1uYXRpdmVzLXdpbmRvd3MuamFyIn0sICJzb3VyY2VzIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1nbGZ3LzMuMi4xL2x3amdsLWdsZnctMy4yLjEtc291cmNlcy5qYXIiLCAic2hhMSI6ICI0YzU2YWU4MTdkYTc1OTk2YjE5NjAxYzg3ZDdlNzU5Yjg0NmMzOTAyIiwgInNpemUiOiAxMDE4ODUsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtZ2xmdy8zLjIuMS9sd2pnbC1nbGZ3LTMuMi4xLXNvdXJjZXMuamFyIn19fSwgIm5hbWUiOiAib3JnLmx3amdsOmx3amdsLWdsZnc6My4yLjEiLCAibmF0aXZlcyI6IHsib3N4IjogIm5hdGl2ZXMtbWFjb3MifSwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjIvbHdqZ2wtZ2xmdy0zLjIuMi5qYXIiLCAic2hhMSI6ICJkM2FkNGRmMzhlNDAwYjhhZmJhMWRlNjNmODQzMzg4MDkzOTlkZjViIiwgInNpemUiOiAxMDg5MDcsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtZ2xmdy8zLjIuMi9sd2pnbC1nbGZ3LTMuMi4yLmphciJ9LCAiY2xhc3NpZmllcnMiOiB7Im5hdGl2ZXMtbGludXgiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjIvbHdqZ2wtZ2xmdy0zLjIuMi1uYXRpdmVzLWxpbnV4LmphciIsICJzaGExIjogIjA5NTc3MzNmMjZhNjY2MWQ0ODgzZGEwMzM1ZjdlZjQ2ZDNiYmJkN2QiLCAic2l6ZSI6IDE1OTE5OCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1nbGZ3LzMuMi4yL2x3amdsLWdsZnctMy4yLjItbmF0aXZlcy1saW51eC5qYXIifSwgIm5hdGl2ZXMtbWFjb3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjIvbHdqZ2wtZ2xmdy0zLjIuMi1uYXRpdmVzLW1hY29zLmphciIsICJzaGExIjogIjk4Zjc0NTAzOGQxN2FjMzE5MmZjZDAxZGM0NDEyNmIwM2VjMTU3MGQiLCAic2l6ZSI6IDY3MzExLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLWdsZncvMy4yLjIvbHdqZ2wtZ2xmdy0zLjIuMi1uYXRpdmVzLW1hY29zLmphciJ9LCAibmF0aXZlcy13aW5kb3dzIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1nbGZ3LzMuMi4yL2x3amdsLWdsZnctMy4yLjItbmF0aXZlcy13aW5kb3dzLmphciIsICJzaGExIjogImRjNjgyNmQ2MzZiZjc5NmIzM2E0OTAzOGMzNTQyMTBlNjYxYmZjMTciLCAic2l6ZSI6IDI2NjY0OCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1nbGZ3LzMuMi4yL2x3amdsLWdsZnctMy4yLjItbmF0aXZlcy13aW5kb3dzLmphciJ9fX0sICJuYW1lIjogIm9yZy5sd2pnbDpsd2pnbC1nbGZ3OjMuMi4yIiwgIm5hdGl2ZXMiOiB7ImxpbnV4IjogIm5hdGl2ZXMtbGludXgiLCAid2luZG93cyI6ICJuYXRpdmVzLXdpbmRvd3MifSwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93In0sIHsiYWN0aW9uIjogImRpc2FsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXN0Yi8zLjIuMS9sd2pnbC1zdGItMy4yLjEuamFyIiwgInNoYTEiOiAiMzFmNWViNWZjZTM3OTFkNThlYzg5OGJjNWMxODY3ZDc2ZDc4MWJhMSIsICJzaXplIjogMTA1NzY1LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLXN0Yi8zLjIuMS9sd2pnbC1zdGItMy4yLjEuamFyIn0sICJjbGFzc2lmaWVycyI6IHsiamF2YWRvYyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4xL2x3amdsLXN0Yi0zLjIuMS1qYXZhZG9jLmphciIsICJzaGExIjogIjUyNGQ3OTUzN2Y4NDBkNmNmZTUwZTAzMGQyNDQxMzkzM2YwZDQ2NGIiLCAic2l6ZSI6IDY4NDk3MiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1zdGIvMy4yLjEvbHdqZ2wtc3RiLTMuMi4xLWphdmFkb2MuamFyIn0sICJuYXRpdmVzLWxpbnV4IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1zdGIvMy4yLjEvbHdqZ2wtc3RiLTMuMi4xLW5hdGl2ZXMtbGludXguamFyIiwgInNoYTEiOiAiNjZlMDFiODAzNjI1ODYxOTMzMmNiNDUyYjk3MGNhMGE1MmRiMWE4NyIsICJzaXplIjogMTk3MjA4LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLXN0Yi8zLjIuMS9sd2pnbC1zdGItMy4yLjEtbmF0aXZlcy1saW51eC5qYXIifSwgIm5hdGl2ZXMtbWFjb3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXN0Yi8zLjIuMS9sd2pnbC1zdGItMy4yLjEtbmF0aXZlcy1tYWNvcy5qYXIiLCAic2hhMSI6ICIxZjU2MTVjOTUyNDUxYzMwYWZhZmJhNGE2ZTNiYTRlMWNkOWU3ZjVjIiwgInNpemUiOiAxOTIzNjQsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4xL2x3amdsLXN0Yi0zLjIuMS1uYXRpdmVzLW1hY29zLmphciJ9LCAibmF0aXZlcy13aW5kb3dzIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1zdGIvMy4yLjEvbHdqZ2wtc3RiLTMuMi4xLW5hdGl2ZXMtd2luZG93cy5qYXIiLCAic2hhMSI6ICJkMTAwYmZkMmIwZDAzMjIzYTA0M2NmY2I2NGEyZGZkMmJiN2Y0YzYxIiwgInNpemUiOiA0NTQ0NzMsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4xL2x3amdsLXN0Yi0zLjIuMS1uYXRpdmVzLXdpbmRvd3MuamFyIn0sICJzb3VyY2VzIjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1zdGIvMy4yLjEvbHdqZ2wtc3RiLTMuMi4xLXNvdXJjZXMuamFyIiwgInNoYTEiOiAiNTBhYzQzZDRjNmVhNTg0NmYzNTRmOTU3NjEzNGMwZjkyNjQzNDVjMiIsICJzaXplIjogOTY0NzksICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4xL2x3amdsLXN0Yi0zLjIuMS1zb3VyY2VzLmphciJ9fX0sICJuYW1lIjogIm9yZy5sd2pnbDpsd2pnbC1zdGI6My4yLjEiLCAibmF0aXZlcyI6IHsib3N4IjogIm5hdGl2ZXMtbWFjb3MifSwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMi9sd2pnbC10aW55ZmQtMy4yLjIuamFyIiwgInNoYTEiOiAiZmNiZTYwNmM4ZjhkYTZmOGY5YTA1ZTJjNTQwZWIxZWU4NjMyYjBlOSIsICJzaXplIjogNzA5MiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC10aW55ZmQvMy4yLjIvbHdqZ2wtdGlueWZkLTMuMi4yLmphciJ9LCAiY2xhc3NpZmllcnMiOiB7ImphdmFkb2MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMi9sd2pnbC10aW55ZmQtMy4yLjItamF2YWRvYy5qYXIiLCAic2hhMSI6ICJiYTY1N2EyMjJlZTI2N2I3NWZhODFhZTVhYjI5YWUyOWI1MGY3MjVmIiwgInNpemUiOiAzNjg5MTMsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtdGlueWZkLzMuMi4yL2x3amdsLXRpbnlmZC0zLjIuMi1qYXZhZG9jLmphciJ9LCAibmF0aXZlcy1saW51eCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtdGlueWZkLzMuMi4yL2x3amdsLXRpbnlmZC0zLjIuMi1uYXRpdmVzLWxpbnV4LmphciIsICJzaGExIjogIjM5ZTM1YjE2MWMxMzA2MzVkOWM4OTE4Y2UwNGU4ODdhMzBjNWI2ODciLCAic2l6ZSI6IDM4ODA0LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMi9sd2pnbC10aW55ZmQtMy4yLjItbmF0aXZlcy1saW51eC5qYXIifSwgIm5hdGl2ZXMtbWFjb3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMi9sd2pnbC10aW55ZmQtMy4yLjItbmF0aXZlcy1tYWNvcy5qYXIiLCAic2hhMSI6ICI0NmQwNzk4MjI4YjhhMjhlODU3YTJhMGYwMjMxMGZkNmJhMmE0ZWFiIiwgInNpemUiOiA0MjEzNiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC10aW55ZmQvMy4yLjIvbHdqZ2wtdGlueWZkLTMuMi4yLW5hdGl2ZXMtbWFjb3MuamFyIn0sICJuYXRpdmVzLXdpbmRvd3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMi9sd2pnbC10aW55ZmQtMy4yLjItbmF0aXZlcy13aW5kb3dzLmphciIsICJzaGExIjogImU5MTE1OTU4NzczNjQ0ZTg2MzMzMmE2YTA2NDg4ZDI2ZjllMWZjOWYiLCAic2l6ZSI6IDIwODMxNCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC10aW55ZmQvMy4yLjIvbHdqZ2wtdGlueWZkLTMuMi4yLW5hdGl2ZXMtd2luZG93cy5qYXIifSwgInNvdXJjZXMiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMi9sd2pnbC10aW55ZmQtMy4yLjItc291cmNlcy5qYXIiLCAic2hhMSI6ICIyZmU3NmRjZjJjYTAyYWUwZTY0YWM3YzY5ZWIyNTFjMDlkZjBlOTIyIiwgInNpemUiOiA1MDM0LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMi9sd2pnbC10aW55ZmQtMy4yLjItc291cmNlcy5qYXIifX19LCAibmFtZSI6ICJvcmcubHdqZ2w6bHdqZ2wtdGlueWZkOjMuMi4yIiwgIm5hdGl2ZXMiOiB7ImxpbnV4IjogIm5hdGl2ZXMtbGludXgiLCAid2luZG93cyI6ICJuYXRpdmVzLXdpbmRvd3MifSwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93In0sIHsiYWN0aW9uIjogImRpc2FsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMS9sd2pnbC10aW55ZmQtMy4yLjEuamFyIiwgInNoYTEiOiAiMjU5ZjFkYmRkYjkyMWUyN2UwMWIzMjQ1OGQ2ZjU4NGViOGJiYTEzYSIsICJzaXplIjogNzA4OCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC10aW55ZmQvMy4yLjEvbHdqZ2wtdGlueWZkLTMuMi4xLmphciJ9LCAiY2xhc3NpZmllcnMiOiB7ImphdmFkb2MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMS9sd2pnbC10aW55ZmQtMy4yLjEtamF2YWRvYy5qYXIiLCAic2hhMSI6ICIwYTg1ZDk5NTE3OGNkYWI2Yjk0ZDlhMTcyZGQ5ZTdkMmEwZDcwY2ZiIiwgInNpemUiOiAzNjg5MTMsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtdGlueWZkLzMuMi4xL2x3amdsLXRpbnlmZC0zLjIuMS1qYXZhZG9jLmphciJ9LCAibmF0aXZlcy1saW51eCI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtdGlueWZkLzMuMi4xL2x3amdsLXRpbnlmZC0zLjIuMS1uYXRpdmVzLWxpbnV4LmphciIsICJzaGExIjogIjRhZDQ5MTA4Mzk3MzIyNTk2ZDdiODVjMmM2ODdlNWRlNmVlNTIxNTciLCAic2l6ZSI6IDM4MTkyLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMS9sd2pnbC10aW55ZmQtMy4yLjEtbmF0aXZlcy1saW51eC5qYXIifSwgIm5hdGl2ZXMtbWFjb3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMS9sd2pnbC10aW55ZmQtMy4yLjEtbmF0aXZlcy1tYWNvcy5qYXIiLCAic2hhMSI6ICI3NTljMmZkOWNjNWM2Y2UwYjViN2FmNzdhYzgyMDA0ODNiN2ZiNjYwIiwgInNpemUiOiA0MTk2MiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC10aW55ZmQvMy4yLjEvbHdqZ2wtdGlueWZkLTMuMi4xLW5hdGl2ZXMtbWFjb3MuamFyIn0sICJuYXRpdmVzLXdpbmRvd3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMS9sd2pnbC10aW55ZmQtMy4yLjEtbmF0aXZlcy13aW5kb3dzLmphciIsICJzaGExIjogIjg1NzUwZDJjYTAyMjg1MmUxNWY1OGMwYjk0YjNkMWQ0ZTdmMGJhNTIiLCAic2l6ZSI6IDIwNzU3NywgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC10aW55ZmQvMy4yLjEvbHdqZ2wtdGlueWZkLTMuMi4xLW5hdGl2ZXMtd2luZG93cy5qYXIifSwgInNvdXJjZXMiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMS9sd2pnbC10aW55ZmQtMy4yLjEtc291cmNlcy5qYXIiLCAic2hhMSI6ICJjMzc1Njk5ZmQ3OTRjNGM4N2Q5MzVlMGY5YTg0ZTdkODBkMGRlNzdlIiwgInNpemUiOiA1MDM0LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvb3JnL2x3amdsL2x3amdsLXRpbnlmZC8zLjIuMS9sd2pnbC10aW55ZmQtMy4yLjEtc291cmNlcy5qYXIifX19LCAibmFtZSI6ICJvcmcubHdqZ2w6bHdqZ2wtdGlueWZkOjMuMi4xIiwgIm5hdGl2ZXMiOiB7Im9zeCI6ICJuYXRpdmVzLW1hY29zIn0sICJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyIsICJvcyI6IHsibmFtZSI6ICJvc3gifX1dfSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogIm9yZy9sd2pnbC9sd2pnbC1zdGIvMy4yLjIvbHdqZ2wtc3RiLTMuMi4yLmphciIsICJzaGExIjogIjNiOGU2ZWJjNTg1MWRkM2QxN2UzN2U1Y2FkY2UyZWZmMmE0MjlmMGYiLCAic2l6ZSI6IDEwNDQ2OSwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1zdGIvMy4yLjIvbHdqZ2wtc3RiLTMuMi4yLmphciJ9LCAiY2xhc3NpZmllcnMiOiB7Im5hdGl2ZXMtbGludXgiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXN0Yi8zLjIuMi9sd2pnbC1zdGItMy4yLjItbmF0aXZlcy1saW51eC5qYXIiLCAic2hhMSI6ICIxNzJjNTJlNTg2ZmVjZjQzZjc1OWJjNGY3MGE3NzhjMDFmNmZkY2MxIiwgInNpemUiOiAyMDM0NzYsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9vcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4yL2x3amdsLXN0Yi0zLjIuMi1uYXRpdmVzLWxpbnV4LmphciJ9LCAibmF0aXZlcy1tYWNvcyI6IHsicGF0aCI6ICJvcmcvbHdqZ2wvbHdqZ2wtc3RiLzMuMi4yL2x3amdsLXN0Yi0zLjIuMi1uYXRpdmVzLW1hY29zLmphciIsICJzaGExIjogImVlMDU5YjEyOWIwOWZkZWNiZDg1OTUyNzM5MjZhZTkzMGJmNWE1ZDciLCAic2l6ZSI6IDE5Njc5NiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1zdGIvMy4yLjIvbHdqZ2wtc3RiLTMuMi4yLW5hdGl2ZXMtbWFjb3MuamFyIn0sICJuYXRpdmVzLXdpbmRvd3MiOiB7InBhdGgiOiAib3JnL2x3amdsL2x3amdsLXN0Yi8zLjIuMi9sd2pnbC1zdGItMy4yLjItbmF0aXZlcy13aW5kb3dzLmphciIsICJzaGExIjogIjgxMWY3MDVjYmIyOWU4YWU4ZDYwYmRmOGZkZDM4YzBjMTIzYWQzZWYiLCAic2l6ZSI6IDQ2NTgxMCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L29yZy9sd2pnbC9sd2pnbC1zdGIvMy4yLjIvbHdqZ2wtc3RiLTMuMi4yLW5hdGl2ZXMtd2luZG93cy5qYXIifX19LCAibmFtZSI6ICJvcmcubHdqZ2w6bHdqZ2wtc3RiOjMuMi4yIiwgIm5hdGl2ZXMiOiB7ImxpbnV4IjogIm5hdGl2ZXMtbGludXgiLCAid2luZG93cyI6ICJuYXRpdmVzLXdpbmRvd3MifSwgInJ1bGVzIjogW3siYWN0aW9uIjogImFsbG93In0sIHsiYWN0aW9uIjogImRpc2FsbG93IiwgIm9zIjogeyJuYW1lIjogIm9zeCJ9fV19LCB7ImRvd25sb2FkcyI6IHsiYXJ0aWZhY3QiOiB7InBhdGgiOiAiY29tL21vamFuZy90ZXh0MnNwZWVjaC8xLjEyLjQvdGV4dDJzcGVlY2gtMS4xMi40LmphciIsICJzaGExIjogIjFmNjE4ZjUyMmRiZGQ5MzIxOGMyNzBiY2ZkOGY4ZGQ4NGJlMzE3MTciLCAic2l6ZSI6IDEyODc0LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvY29tL21vamFuZy90ZXh0MnNwZWVjaC8xLjEyLjQvdGV4dDJzcGVlY2gtMS4xMi40LmphciJ9fSwgIm5hbWUiOiAiY29tLm1vamFuZzp0ZXh0MnNwZWVjaDoxLjEyLjQifSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogImNvbS9tb2phbmcvdGV4dDJzcGVlY2gvMS4xMi40L3RleHQyc3BlZWNoLTEuMTIuNC5qYXIiLCAic2hhMSI6ICIxZjYxOGY1MjJkYmRkOTMyMThjMjcwYmNmZDhmOGRkODRiZTMxNzE3IiwgInNpemUiOiAxMjg3NCwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L2NvbS9tb2phbmcvdGV4dDJzcGVlY2gvMS4xMi40L3RleHQyc3BlZWNoLTEuMTIuNC5qYXIifSwgImNsYXNzaWZpZXJzIjogeyJuYXRpdmVzLWxpbnV4IjogeyJwYXRoIjogImNvbS9tb2phbmcvdGV4dDJzcGVlY2gvMS4xMi40L3RleHQyc3BlZWNoLTEuMTIuNC1uYXRpdmVzLWxpbnV4LmphciIsICJzaGExIjogIjk1NzFiMTM2MGEyNjgzMTFkN2ZhNjI1NjE0MTg2OTY1OTE0ZjAyMTUiLCAic2l6ZSI6IDc4MzMsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9jb20vbW9qYW5nL3RleHQyc3BlZWNoLzEuMTIuNC90ZXh0MnNwZWVjaC0xLjEyLjQtbmF0aXZlcy1saW51eC5qYXIifSwgIm5hdGl2ZXMtd2luZG93cyI6IHsicGF0aCI6ICJjb20vbW9qYW5nL3RleHQyc3BlZWNoLzEuMTIuNC90ZXh0MnNwZWVjaC0xLjEyLjQtbmF0aXZlcy13aW5kb3dzLmphciIsICJzaGExIjogIjdlMzdjNTM1MTg2YTA1OGQ3MzBlYzAzNDkxMTgyZmFlMmVmYjU3YmUiLCAic2l6ZSI6IDgxMzc5LCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvY29tL21vamFuZy90ZXh0MnNwZWVjaC8xLjEyLjQvdGV4dDJzcGVlY2gtMS4xMi40LW5hdGl2ZXMtd2luZG93cy5qYXIifSwgInNvdXJjZXMiOiB7InBhdGgiOiAiY29tL21vamFuZy90ZXh0MnNwZWVjaC8xLjEyLjQvdGV4dDJzcGVlY2gtMS4xMi40LXNvdXJjZXMuamFyIiwgInNoYTEiOiAiMmMwOGYzYTk4NWRmYzdmODZkY2Q3MDVhMzYwZTVlMWExM2VhYzA2OCIsICJzaXplIjogNTI0MiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L2NvbS9tb2phbmcvdGV4dDJzcGVlY2gvMS4xMi40L3RleHQyc3BlZWNoLTEuMTIuNC1zb3VyY2VzLmphciJ9fX0sICJleHRyYWN0IjogeyJleGNsdWRlIjogWyJNRVRBLUlORi8iXX0sICJuYW1lIjogImNvbS5tb2phbmc6dGV4dDJzcGVlY2g6MS4xMi40IiwgIm5hdGl2ZXMiOiB7ImxpbnV4IjogIm5hdGl2ZXMtbGludXgiLCAid2luZG93cyI6ICJuYXRpdmVzLXdpbmRvd3MifX0sIHsiZG93bmxvYWRzIjogeyJhcnRpZmFjdCI6IHsicGF0aCI6ICJjYS93ZWJsaXRlL2phdmEtb2JqYy1icmlkZ2UvMS4wLjAvamF2YS1vYmpjLWJyaWRnZS0xLjAuMC5qYXIiLCAic2hhMSI6ICI2ZWYxNjBjMzEzM2E3OGRlMDE1ODMwODYwMTk3NjAyY2ExYzg1NWQzIiwgInNpemUiOiA0MDUwMiwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L2NhL3dlYmxpdGUvamF2YS1vYmpjLWJyaWRnZS8xLjAuMC9qYXZhLW9iamMtYnJpZGdlLTEuMC4wLmphciJ9LCAiY2xhc3NpZmllcnMiOiB7ImphdmFkb2MiOiB7InBhdGgiOiAiY2Evd2VibGl0ZS9qYXZhLW9iamMtYnJpZGdlLzEuMC4wL2phdmEtb2JqYy1icmlkZ2UtMS4wLjAtamF2YWRvYy5qYXIiLCAic2hhMSI6ICJmYjAwOTJmMjJjYjRmZThlNjMxNDUyZjU3N2I3YTIzODc3OGFiZjJhIiwgInNpemUiOiAxNzQwNjAsICJ1cmwiOiAiaHR0cHM6Ly9saWJyYXJpZXMubWluZWNyYWZ0Lm5ldC9jYS93ZWJsaXRlL2phdmEtb2JqYy1icmlkZ2UvMS4wLjAvamF2YS1vYmpjLWJyaWRnZS0xLjAuMC1qYXZhZG9jLmphciJ9LCAibmF0aXZlcy1vc3giOiB7InBhdGgiOiAiY2Evd2VibGl0ZS9qYXZhLW9iamMtYnJpZGdlLzEuMC4wL2phdmEtb2JqYy1icmlkZ2UtMS4wLjAtbmF0aXZlcy1vc3guamFyIiwgInNoYTEiOiAiMDhiZWZhYjQ4OTRkNTU4NzVmMzNjM2QzMDBmNGY3MWU2ZTgyOGY2NCIsICJzaXplIjogNTYyOSwgInVybCI6ICJodHRwczovL2xpYnJhcmllcy5taW5lY3JhZnQubmV0L2NhL3dlYmxpdGUvamF2YS1vYmpjLWJyaWRnZS8xLjAuMC9qYXZhLW9iamMtYnJpZGdlLTEuMC4wLW5hdGl2ZXMtb3N4LmphciJ9LCAic291cmNlcyI6IHsicGF0aCI6ICJjYS93ZWJsaXRlL2phdmEtb2JqYy1icmlkZ2UvMS4wLjAvamF2YS1vYmpjLWJyaWRnZS0xLjAuMC1zb3VyY2VzLmphciIsICJzaGExIjogIjg2NTgzN2ExOTgxODlhZWU3MzcwMTk1NjFlY2U4NDI4MjdmMjQyNzgiLCAic2l6ZSI6IDQzMjgzLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvY2Evd2VibGl0ZS9qYXZhLW9iamMtYnJpZGdlLzEuMC4wL2phdmEtb2JqYy1icmlkZ2UtMS4wLjAtc291cmNlcy5qYXIifX19LCAiZXh0cmFjdCI6IHsiZXhjbHVkZSI6IFsiTUVUQS1JTkYvIl19LCAibmFtZSI6ICJjYS53ZWJsaXRlOmphdmEtb2JqYy1icmlkZ2U6MS4wLjAiLCAibmF0aXZlcyI6IHsib3N4IjogIm5hdGl2ZXMtb3N4In0sICJydWxlcyI6IFt7ImFjdGlvbiI6ICJhbGxvdyIsICJvcyI6IHsibmFtZSI6ICJvc3gifX1dfSwgeyJkb3dubG9hZHMiOiB7ImFydGlmYWN0IjogeyJwYXRoIjogImNhL3dlYmxpdGUvamF2YS1vYmpjLWJyaWRnZS8xLjAuMC9qYXZhLW9iamMtYnJpZGdlLTEuMC4wLmphciIsICJzaGExIjogIjZlZjE2MGMzMTMzYTc4ZGUwMTU4MzA4NjAxOTc2MDJjYTFjODU1ZDMiLCAic2l6ZSI6IDQwNTAyLCAidXJsIjogImh0dHBzOi8vbGlicmFyaWVzLm1pbmVjcmFmdC5uZXQvY2Evd2VibGl0ZS9qYXZhLW9iamMtYnJpZGdlLzEuMC4wL2phdmEtb2JqYy1icmlkZ2UtMS4wLjAuamFyIn19LCAibmFtZSI6ICJjYS53ZWJsaXRlOmphdmEtb2JqYy1icmlkZ2U6MS4wLjAiLCAicnVsZXMiOiBbeyJhY3Rpb24iOiAiYWxsb3ciLCAib3MiOiB7Im5hbWUiOiAib3N4In19XX1dLCAibG9nZ2luZyI6IHsiY2xpZW50IjogeyJhcmd1bWVudCI6ICItRGxvZzRqLmNvbmZpZ3VyYXRpb25GaWxlPSR7cGF0aH0iLCAiZmlsZSI6IHsiaWQiOiAiY2xpZW50LTEuMTIueG1sIiwgInNoYTEiOiAiYmQ2NWU3ZDJlM2MyMzdiZTc2Y2ZiZWY0YzI0MDUwMzNkN2Y5MTUyMSIsICJzaXplIjogODg4LCAidXJsIjogImh0dHBzOi8vbGF1bmNoZXIubW9qYW5nLmNvbS92MS9vYmplY3RzL2JkNjVlN2QyZTNjMjM3YmU3NmNmYmVmNGMyNDA1MDMzZDdmOTE1MjEvY2xpZW50LTEuMTIueG1sIn0sICJ0eXBlIjogImxvZzRqMi14bWwifX0sICJtYWluQ2xhc3MiOiAibmV0Lm1pbmVjcmFmdC5jbGllbnQubWFpbi5NYWluIiwgIm1pbmltdW1MYXVuY2hlclZlcnNpb24iOiAyMSwgInJlbGVhc2VUaW1lIjogIjIwMjItMDItMjhUMTA6NDI6NDUrMDA6MDAiLCAidGltZSI6ICIyMDIyLTAyLTI4VDEwOjQyOjQ1KzAwOjAwIiwgInR5cGUiOiAicmVsZWFzZSJ9Cg==`;
export function initFiles() {
  localStorage.setItem(
    "/home/rarity/.alicornpe/defaults/alicorn.config.json",
    CONFIG_FILE
  );
  localStorage.setItem(
    "/home/rarity/.alicornpe/defaults/PonyCN.lang",
    PONY_CN_LANG
  );
  localStorage.setItem(
    "/home/rarity/alicorn/global-container-descriptor.ald",
    GDT_SOURCE
  );
  localStorage.setItem("/home/rarity/.minecraft/asc.lock", "1");
  localStorage.setItem(
    "/home/rarity/.minecraft/versions/1.18.2/1.18.2.json",
    atob(PROFILE_SOURCE)
  );
  localStorage.setItem(
    "/home/rarity/.minecraft/versions/1.18.2/1.18.2.jar",
    "1"
  );
}
