# ChatGPT-LifeTime
OpenAI 的模型有一个固定的 Token 限制，例如 GPT-3 的 Davinci 模型最多可以处理2049 个 Token，大约 1500 个英文单词。最新 Turbo 模型大约是 4,096 个 Token，大约是 3000 个英文单词，也就是意味着Chat GPT它会”失忆“，但是它啥时候”失忆“呢？于是我写了个插件告诉我们，Chat GPT”失忆“了

**AI has life too, that's their memory**

## 一些科普[](https://learningprompt.wiki/docs/tutorial-insight/AI%20Summary%20%E4%BC%9A%E5%8F%96%E4%BB%A3%E4%BA%BA%E5%B7%A5%20Summary%20%E5%90%97%EF%BC%9F#%E4%B8%80%E4%BA%9B%E7%A7%91%E6%99%AE)

> **ChatGPT自我阐述：**
> 
> 
> 我是一个基于GPT-3的AI模型，用于自然语言处理和生成任务。在训练过程中，我使用了大量的文本数据，从中学习了语言规则、语法结构、上下文理解等方面的知识，并生成了模型参数和权重。这些参数和权重存储在我的内存中，使我能够在输入文本时生成相应的输出。
> 
> 当我接收到一个输入时，我会将其转化为令牌序列，然后将其输入到模型中进行处理。在进行处理时，我会考虑输入的上下文、语法结构、语言规则等因素，并生成相应的输出。生成的输出也是一个令牌序列，可以通过后处理（例如去掉多余的标点符号和空格）进行最终的格式化。
> 
> 然而，由于计算资源和性能的限制，模型的输入长度有所限制。目前最大的 GPT-3 模型（175B版本）的最大输入长度为2048个令牌（tokens），因此如果输入的文本长度超过了这个限制，模型可能会丢失先前的一些聊天记录。这并不是模型本身有意遗忘聊天记录，而是由于模型的输入和计算能力有限。如果您希望我更好地考虑您之前的聊天内容，您可以尝试将聊天内容分成更小的部分，或提供更具体的上下文信息。
> 
- Token：这个指的是 OpenAI 处理文本的基本单位，可以是单词或者字符的片段。例如，“hamburger” 被分成 “ham”、“bur” 和 “ger” 三个 Token，而 “pear” 是一个 Token。1个 Token 大约相当于 4 个字符或者 0.75 个英文单词。
- 一些限制：
    - OpenAI 的模型有一个固定的 Token 限制，例如 GPT-3 的 Davinci 模型最多可以处理2049 个 Token，大约 1500 个英文单词。最新 Turbo 模型大约是 4,096 个 Token，大约是 3000 个英文单词。
    - 另外这个限制还有一个细节，Token 限制的计数包含输入和输出的文本。换句话说，不是说我输入 3000 个英文单词，然后 OpenAI 能返回 3000 个英文单词的结果，而是输入+输出总共不能超过 3000 个英文单词。
    - 文字限制。目前 OpenAI 的 GPT-3 模型只能处理文字。

火爆的Character.AI也是如此，[Character.AI](http://character.ai/) 的角色倾向说的太多，而且会随着彼此的聊天内容增加，变得越来越像机器人。这时候需要用户将之前的聊天删除或存档，开始新的对话，但这就使得 Character “忘记”之前的聊天内容。

[Character.AI：个性化的ChatGPT，AI大模型时代的UGC平台 | 人人都是产品经理](https://www.woshipm.com/ai/5779179.html)

所以对于AI来说，也许它的生命就是它的记忆

**The life of an ai is its memory**

既然现在我们无法控制它们的”离去“，那是否可以让我看到它是否即将”老去“，好让我做个告别，起码不留遗憾

**Cherish it today because it will be lost tomorrow**

于是我编写了个谷歌插件，以便让我知晓，它即将”离我而去“