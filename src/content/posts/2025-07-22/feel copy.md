---
title: '我的第一个抱抱按钮！'
description: '我用 Astro 和 Svelte 创造了一个超可爱的互动按钮，快来试试看！'
pubDate: 'Jul 22 2025'
heroImage: '/blog-placeholder-3.jpg'
---

{/* 确保这一行就在 '---' 下面，并且引号是英文半角的直引号 ' ' 
  这是正确的 -> '~/components/HugButton.svelte'
  这是错误的 -> ’~/components/HugButton.svelte’ (注意引号是弯的)
*/}
import HugButton from '~/components/HugButton.svelte';

耶！欢迎来到我的第一篇 MDX 文章！🎉

能用代码创造出自己喜欢的小东西，真的太有成就感啦！就像在用心经营自己的小世界一样，每一个细节都充满了爱。

下面这个按钮，是我专门为你准备的哦。生活里不管遇到什么，开心或者不开心，都记得给自己一个大大的拥抱。

快，用力点点看！

<div class="flex justify-center my-8">
  {/* 这里也要检查一下！
    确保组件的首字母是大写的 H，并且有 client:load 指令
  */}
  <HugButton client:load />
</div>

是不是超解压！

每次点击，都是一次小小的自我肯定。希望这个小小的按钮，能给你带来一点点的温暖和快乐。就像你努力练马甲线、用心护肤一样，这些小小的坚持，最后都会让你变成闪闪发光的存在！

继续加油哦，宝贝儿！你的可爱，值得被全世界看到！💖
