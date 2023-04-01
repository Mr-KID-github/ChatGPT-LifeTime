console.log('content.js插入成功')

function UpdateLifeTime(params) {
    let divElement = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div")

    let wordCount = 0
    for (let index = 1; index < divElement.children.length; index++) {
        // 获取聊天框元素
        let chatBox = ""
        // 这里的chatBox变量获取到的是聊天框的DOM元素，然后使用chatBox.querySelector方法获取聊天框中的文本元素，最后使用textContent属性获取文本内容
        chatBox = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div > div:nth-child(" + index + ")")
        let text = chatBox.innerText
        wordCount = wordCount + text.length;

        console.log("文本为：", text);
    }
    console.log("字数为：", wordCount);

    // 创建用于显示字数的元素
    const wordCountElement = document.createElement('div');
    wordCountElement.style.position = 'fixed';
    wordCountElement.style.top = '10px';  // 将元素固定在页面的顶部
    wordCountElement.style.right = '10px';
    wordCountElement.style.backgroundColor = '#333';
    wordCountElement.style.color = '#fff';
    wordCountElement.style.padding = '5px';
    wordCountElement.style.borderRadius = '5px';

    // 获取进度条元素
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '50px';  // 将元素固定在页面的顶部
    progressBar.style.right = '10px';
    progressBar.style.backgroundColor = '#333';
    progressBar.style.color = '#fff';
    progressBar.style.padding = '5px';
    progressBar.style.borderRadius = '5px';
    progressBar.style.width = '100px';
    document.body.appendChild(progressBar);

    // 插入字数元素
    document.body.appendChild(wordCountElement)
    // 定义字数上限和当前字数变量
    const MAX_COUNT = 10000;
    const percentage = (wordCount / MAX_COUNT) * 100;
    wordCountElement.textContent = `Word Count: ${wordCount}`;
    progressBar.style.background = `linear-gradient(to right, #00ff00, #cccccc ${(100 - percentage)}%)`;

    console.log(wordCountElement.textContent)
}
// 页面加载完成后重新执行代码
window.addEventListener('load', () => {
    setTimeout(function () {
        UpdateLifeTime()
    }, 3000); // 3秒钟的延时
});

// 监听来自 background.js 的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    UpdateLifeTime()
});

