
describe('test',function(){
    let nowtime;
    afterEach(function(){
        console.log("hello nowtime is",nowtime )
    })

    it('a', function(done){
        setTimeout(function() {
            
            nowtime = new Date()
            console.log("a",new Date())
            done();
        }, 300);
    })
    it('b',function(){
        nowtime = new Date();
        console.log("b",new Date())
    })
})
require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();

describe('login',function(){
    this.timeout(600*1000)
    it.only('u',async function(){
        
        
        await driver.get('https://comm.86links.cn');//登录首页
        await driver.manage().window().maximize();
       
        
        await driver.findElement({ css: 'div:nth-child(1) > div.content > div > input' }).sendKeys('ts001');
        await driver.findElement({ css: 'div:nth-child(2) > div.content > div > input' }).sendKeys('A111111');
        await driver.findElement({ css: '.content.fill.primary.normal' }).click(); //点击登录按钮
        
        await driver.sleep(3000)
        await driver.findElement({css:'.icon.iconfont.icon-right'}).click();
        await driver.sleep(3000);
        await driver.get('https://comm.86links.cn/newMeeting');

        let date01 =  await driver.findElement({css: "form > div:nth-child(4) > div > div > div > div > div > div.ivu-date-picker-rel > div > input"});
        let nowdate = new Date().toLocaleString();
        let nowday = nowdate.split(' ');
        await driver.sleep(3000)
        await driver.executeScript(function(){
            let date01 =  document.querySelector('form > div:nth-child(4) > div > div > div > div > div > div.ivu-date-picker-rel > div > input')
            date01.value = "2017-09-30"

            let date02 = document.querySelector('form > div:nth-child(5) > div > div > div > div > div > div.ivu-date-picker-rel > div > input')
            date02.value = "12:00 - 13:00"
        })
        // await date01.click();
        // let clearicon = await driver.findElement({css:".ivu-icon.ivu-icon-ios-clock-outline.ivu-input-icon.ivu-input-icon-normal"});
        // await driver.actions().mouseMove(clearicon).click().perform();
        // await date01.clear();
        // console.log(nowday[0])
        // await date01.sendKeys(2017-09-30);

        // let date02 = await driver.findElement({css:"form > div:nth-child(5) > div > div > div > div > div > div.ivu-date-picker-rel > div > input"})
        // await date02.click();
        // await date02.clear();
        // await date02.sendKeys('12:00 - 13:00');
        
        // await driver.findElement({css:"#app > div > div > div > form > div:nth-child(6) > div > div > label:nth-child(2)"}).click();
    })
    
})