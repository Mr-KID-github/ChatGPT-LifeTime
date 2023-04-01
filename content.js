console.log('content.js插入成功')
let wordCount = 0
// 定义字数上限和当前字数变量
const MAX_COUNT = 10000;
// 获取进度条元素
const progressBar = document.createElement('div');
// 创建用于显示字数的元素
const wordCountElement = document.createElement('div');
wordCountElement.style.position = 'fixed';
wordCountElement.style.top = '10px';  // 将元素固定在页面的顶部
wordCountElement.style.right = '10px';
wordCountElement.style.backgroundColor = '#333';
wordCountElement.style.color = '#fff';
wordCountElement.style.padding = '5px';
wordCountElement.style.borderRadius = '5px';


progressBar.style.position = 'fixed';
progressBar.style.top = '50px';  // 将元素固定在页面的顶部
progressBar.style.right = '10px';
progressBar.style.backgroundColor = '#333';
progressBar.style.color = '#fff';
progressBar.style.padding = '5px';
progressBar.style.borderRadius = '5px';
progressBar.style.width = '100px';
// 插入进度条元素
document.body.appendChild(progressBar);
// 插入字数元素
document.body.appendChild(wordCountElement)

// ChatElement包含所有Chat对话框
let ChatElement = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div")
let ChatElement_length = 0
// 读取当前AI寿命
function ReadLifeTime(params) {
    console.log("执行ReadLifeTime")
    ChatElement = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div")
    ChatElement_length = ChatElement.children.length
    console.log(ChatElement_length)
    for (let index = 2; index < ChatElement_length; index++) {
        // 获取聊天框元素
        let chatBox = ""
        // 这里的chatBox变量获取到的是聊天框的DOM元素，然后使用chatBox.querySelector方法获取聊天框中的文本元素，最后使用textContent属性获取文本内容
        chatBox = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div > div:nth-child(" + index + ")")
        let text = chatBox.innerText
        wordCount = wordCount + text.length;
        console.log("文本为：", text);
    }
    console.log("字数为：", wordCount);
}


// 设置动态更新的时间间隔
const INTERVAL = 5;
let currentCount = 0;

// 设置逐步增加/减少字数和进度条的函数
function animateUpdate() {
    if (currentCount === wordCount) {
        return;
    }

    if (currentCount < wordCount) {
        currentCount += 1;
    } else {
        currentCount -= 1;
    }

    const percentage = (currentCount / MAX_COUNT) * 100;
    wordCountElement.textContent = `Word Count: ${currentCount}`;
    progressBar.style.background = `linear-gradient(to right, #00ff00, #cccccc ${(100 - percentage)}%)`;
}

// 设置定时器逐步更新字数和进度条
setInterval(animateUpdate, INTERVAL);

// 页面加载完成后重新执行代码
window.addEventListener('load', () => {
    setTimeout(function () {
        ReadLifeTime()
        // 监听聊天框内容变化，更新字数和进度条
        const observer = new MutationObserver((data) => {
            // 如果初始化已经完成，则监听内容变化，动态更新字数和进度条
            console.log("监听到内容发生变化")
            console.log(data)
            // 动态更新字数和进度条
            setTimeout(function name(params) {
                wordCount = 0
                ReadLifeTime();
            }, 2000)
        });

        // 配置MutationObserver监视页面的聊天框元素
        observer.observe(ChatElement, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }, 5000); // 3秒钟的延时
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "urlChanged") {
        console.log("URL changed to", request.url);
        // 动态更新字数和进度条
        setTimeout(function name(params) {
            wordCount = 0
            ReadLifeTime();
        }, 5000)

    }
});

